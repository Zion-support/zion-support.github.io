import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
const DATA_DIR = path.join(process.cwd(), 'datakyc');
const FILE = path.join(DATA_DIR, 'profiles.json');

function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return {}
  }
}

function save(db: Record<string, KycProfile>) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2))
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = load();
  
  if (req.method === 'GET') {
    const profiles = Object.values(db);
    return res.status(200).json({ ok: true, profiles });
  }
  
  if (req.method === 'POST') {
    const { id, status } = req.body;
    if (!id || !status) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    if (db[id]) {
      db[id].status = status;
      db[id].updatedAt = new Date().toISOString();
      
      try {
        fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
        return res.status(200).json({ ok: true, profile: db[id] });
      } catch (error) {
        return res.status(500).json({ error: 'Failed to save profile' });
      }
    }
    
    return res.status(404).json({ error: 'Profile not found' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

type KycProfile = {
  id: string;
  email: string;
  status: string;
  submittedAt: number;
};

const DATA_DIR = path.join(process.cwd(), 'datakyc');
const FILE = path.join(DATA_DIR, 'profiles.json');

function load(): Record<string, KycProfile> {
  try {
    if (!fs.existsSync(FILE)) {
      return {};
    }
    const raw = fs.readFileSync(FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function save(profiles: Record<string, KycProfile>): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.writeFileSync(FILE, JSON.stringify(profiles, null, 2));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const profiles = load();
    const queue = Object.values(profiles).filter(p => p.status === 'pending');
    return res.status(200).json({ queue });
  }

  if (req.method === 'POST') {
    const profiles = load();
    const { id, status } = req.body;
    
    if (profiles[id]) {
      profiles[id].status = status;
      save(profiles);
      return res.status(200).json({ success: true });
    }
    
    return res.status(404).json({ error: 'Profile not found' });
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end('Method Not Allowed');
}
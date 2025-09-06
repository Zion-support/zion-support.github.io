import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const FILE = path.join(process.cwd(), 'data', 'kyc.json');

function loadDb() {
  try {
    return JSON.parse(fs.readFileSync(FILE, 'utf8'));
  } catch {
    return { sessions: [] };
  }
}

function saveDb(db: any) {
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  
  const { userId, type } = req.body;
  if (!userId || !type) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const db = loadDb();
  const session = {
    id: Date.now().toString(),
    userId,
    type,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };
  
  db.sessions.push(session);
  saveDb(db);
  
  res.status(200).json(session);
}
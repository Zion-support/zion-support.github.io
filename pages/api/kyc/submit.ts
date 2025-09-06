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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  
  const { sessionId, data } = req.body;
  if (!sessionId || !data) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const db = loadDb();
  const session = db.sessions.find((s: any) => s.id === sessionId);
  
  if (!session) {
    return res.status(404).json({ error: 'Session not found' });
  }
  
  session.data = data;
  session.status = 'submitted';
  session.submittedAt = new Date().toISOString();
  
  saveDb(db);
  
  res.status(200).json({ success: true, session });
}
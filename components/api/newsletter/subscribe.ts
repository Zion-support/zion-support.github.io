import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data', 'newsletter');
const FILE_PATH = path.join(DATA_DIR, 'subscribers.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  const list: string[] = fs.existsSync(FILE_PATH) 
    ? JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'))
    : [];
  
  if (!list.includes(email)) {
    list.push(email);
    fs.writeFileSync(FILE_PATH, JSON.stringify(list, null, 2), 'utf8');
  }

  res.status(200).json({ ok: true });
}
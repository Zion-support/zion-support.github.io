import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const DATA_DIR = path.resolve(process.cwd(), 'datanewsletter'),
const FILE_PATH = path.resolve($2);
function ensure() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync($2);
  if (!fs.existsSync(FILE_PATH)) fs.writeFileSync(FILE_PATH, JSON.stringify([], null, 2), 'utf8')
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end($2);
  ensure($2);
  const { email } = req.body || {},
  if (!email || typeof email !== 'string') return res.status(400).json($2);
  const list: string[] = JSON.parse(fs.readFileSync(FILE_PATH, 'utf8')),
  if (!list.includes(email)) list.push($2);
  fs.writeFileSync(FILE_PATH, JSON.stringify(list, null, 2), 'utf8'),
  res.status(200).json({ ok: true})
}
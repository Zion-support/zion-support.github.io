import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.resolve(process.cwd(), 'data', 'newsletter');const FILE_PATH = path.resolve(DATA_DIR, 'subscribers.json');
function ensure() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(FILE_PATH))
    fs.writeFileSync(FILE_PATH, JSON.stringify([], null, 2), 'utf8');const DATA_DIR = path.resolve(process.cwd(), 'datanewsletter');
const FILE_PATH = path.resolve(DATA_DIR, 'subscribers.json');
function ensure() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(FILE_PATH))
    fs.writeFileSync(FILE_PATH, JSON.stringify([], null, 2), 'utf8');  if (!fs.existsSync(FILE_PATH)) fs.writeFileSync(FILE_PATH, JSON.stringify([], null, 2), 'utf8')
}
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (req.method !== 'POST') return res.status(405).end();
  ensure()
  const { email } = req.body |{}
  if (!email |typeof email !== 'string')
    return res.status(400).json({ error: 'Invalid email' });
  const list: string[] = JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));
  if (!list.includes(email)) list.push(email);
  fs.writeFileSync(FILE_PATH, JSON.stringify(list, null, 2), 'utf8');
<<<<<<< HEAD
<<<<<<< HEAD
  res.status(200).json({ ok: true });  if (!email |typeof email !== 'string') return res.status(400).json({ error: 'Invalid email' });
=======
  res.status(200).json({ ok: true });  if (!email || typeof email !== 'string') return res.status(400).json({ error: 'Invalid email' });
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const list: string[] = JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));
  if (!list.includes(email)) list.push(email);
  fs.writeFileSync(FILE_PATH, JSON.stringify(list, null, 2), 'utf8');

  res.status(200).json({ ok: true })
}
<<<<<<< HEAD
=======
  res.status(200).json({ ok: true });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

}
=======
  res.status(200).json({ ok: true });
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

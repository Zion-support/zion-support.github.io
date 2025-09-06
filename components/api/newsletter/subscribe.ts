import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD

const DATA_DIR = path.resolve(process.cwd(), 'data', 'newsletter');const FILE_PATH = path.resolve(DATA_DIR, 'subscribers.json');

function ensure() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(FILE_PATH))
    fs.writeFileSync(FILE_PATH, JSON.stringify([], null, 2), 'utf8');
=======
<<<<<<< HEAD
<<<<<<< HEAD

const DATA_DIR = path.resolve(process.cwd(), 'data', 'newsletter');
=======
const DATA_DIR = path.resolve(process.cwd(), 'datanewsletter');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
const DATA_DIR = path.resolve(process.cwd(), 'datanewsletter');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
const FILE_PATH = path.resolve(DATA_DIR, 'subscribers.json');

function ensure() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
<<<<<<< HEAD
<<<<<<< HEAD
  if (!fs.existsSync(FILE_PATH))
    fs.writeFileSync(FILE_PATH, JSON.stringify([], null, 2), 'utf8');
=======
  if (!fs.existsSync(FILE_PATH)) fs.writeFileSync(FILE_PATH, JSON.stringify([], null, 2), 'utf8')
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  if (!fs.existsSync(FILE_PATH)) fs.writeFileSync(FILE_PATH, JSON.stringify([], null, 2), 'utf8')
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  ensure();
  const { email } = req.body || {};
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  if (!email || typeof email !== 'string')
    return res.status(400).json({ error: 'Invalid email' });
  const list: string[] = JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));
  if (!list.includes(email)) list.push(email);
  fs.writeFileSync(FILE_PATH, JSON.stringify(list, null, 2), 'utf8');
<<<<<<< HEAD
  res.status(200).json({ ok: true });
=======
  res.status(200).json({ ok: true });
=======
  if (!email || typeof email !== 'string') return res.status(400).json({ error: 'Invalid email' });
  const list: string[] = JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));
  if (!list.includes(email)) list.push(email);
  fs.writeFileSync(FILE_PATH, JSON.stringify(list, null, 2), 'utf8');
  res.status(200).json({ ok: true })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  if (!email || typeof email !== 'string') return res.status(400).json({ error: 'Invalid email' });
  const list: string[] = JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));
  if (!list.includes(email)) list.push(email);
  fs.writeFileSync(FILE_PATH, JSON.stringify(list, null, 2), 'utf8');
  res.status(200).json({ ok: true })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

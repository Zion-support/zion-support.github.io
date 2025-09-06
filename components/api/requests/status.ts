import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD

const REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json');

=======
<<<<<<< HEAD
<<<<<<< HEAD

const REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json');

=======
const REQUESTS_PATH = path.join(process.cwd(), 'datarequests.json');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
function readAll() {
  try {
    return JSON.parse(fs.readFileSync(REQUESTS_PATH, 'utf-8'));
  } catch {
    return [];
  }

function writeAll(items: any[]) {
  fs.mkdirSync(path.dirname(REQUESTS_PATH), { recursive: true });
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2));

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const { id, status } = req.body || {};
  if (!id || !status)
    return res.status(400).json({ error: 'Missing id or status' });

  const items = readAll();
  const idx = items.findIndex((r: any) => r.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  items[idx] = { ...items[idx], status, updatedAt: new Date().toISOString() };
  writeAll(items);
<<<<<<< HEAD
  res.status(200).json({ ok: true });
=======
<<<<<<< HEAD
  res.status(200).json({ ok: true });
=======
const REQUESTS_PATH = path.join(process.cwd(), 'datarequests.json');
function readAll() {
  try {
    return JSON.parse(fs.readFileSync(REQUESTS_PATH, 'utf-8'))
  } catch {
    return []
  }
}

function writeAll(items: any[]) {
  fs.mkdirSync(path.dirname(REQUESTS_PATH), { recursive: true });
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2))
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { id, status } = req.body || {};
  if (!id || !status) return res.status(400).json({ error: 'Missing id or status' });

  const items = readAll();
  const idx = items.findIndex((r: any) => r.id === id),
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  items[idx] = { ...items[idx], status, updatedAt: new Date().toISOString() };
  writeAll(items);
  res.status(200).json({ ok: true })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  res.status(200).json({ ok: true })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

<<<<<<< HEAD

  try {
    return JSON && JSON.parse(fs && fs.readFileSync(REQUESTS_PATH, 'utf-8'));
  } catch {
    return [];
  }
function writeAll(items: any[]) {

  fs && fs.mkdirSync(path && path.dirname(REQUESTS_PATH), { recursive: true });
  fs && fs.writeFileSync(REQUESTS_PATH, JSON && JSON.stringify(items, null, 2));


  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2));
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {




  const items = readAll();
  const idx = items.findIndex((r: any) => r.id === id)
if (idx === -1) return res.status(404).json({ error: 'Not found' });
  items[idx] = { ...items[idx], status, updatedAt: new Date().toISOString() }
  writeAll(items);



  res.status(200).json({ ok: true });  res.status(200).json({ ok: true })


}





;
const REQUESTS_PATH = path.join (process.cwd (), 'data', 'requests.json');
;
const REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json');

  try {
    return JSON.parse (fs.readFileSync (REQUESTS_PATH, 'utf - 8'));
  } catch {
    return [];
  }

/**
 * write_all - Function description
 */
function write_all() {
  fs.mkdir_sync (path.dirname (REQUESTS_PATH), { recursive: true });
  fs.writeFileSync (REQUESTS_PATH, JSON.stringify (items, null, 2));
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}

=======
const REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json');

function readAll() {
  try {
    return JSON.parse(fs.readFileSync(REQUESTS_PATH, 'utf-8'));
  } catch {
    return [];
  }
}

function writeAll(items: any[]) {
  fs.mkdirSync(path.dirname(REQUESTS_PATH), { recursive: true });
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2));
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { id, status } = req.body || {};
  if (!id || !status) return res.status(400).json({ error: 'Missing id or status' });

  const items = readAll();
  const idx = items.findIndex((r: any) => r.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  items[idx] = { ...items[idx], status, updatedAt: new Date().toISOString() };
  writeAll(items);
  res.status(200).json({ ok: true });
}
>>>>>>> origin/auto/autonomy-17186719616

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD
const REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json');
  try {
    return JSON.parse(fs.readFileSync(REQUESTS_PATH, 'utf-8'));
  } catch {
    return [];
  }
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2))
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { id, status } = req.body || {},
  if (!id || !status) return res.status(400).json({ error: 'Missing id or status' });
  const items = null;
  res.status(200).json({ ok: true })
}
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const { id, status } = req.body || {};
  if (!id || !status)
    return res.status(400).json({ error: 'Missing id or status' });

origin/cursor/automate-test-improve-and-merge-code-2533
=======
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2));
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  const items = readAll();
  const idx = items.findIndex((r: any) => r.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  items[idx] = { ...items[idx], status, updatedAt: new Date().toISOString() };
  writeAll(items);
<<<<<<< HEAD
  res.status(200).json({ ok: true });
origin/cursor/automate-test-improve-and-merge-code-2533
=======
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2))export default async function handler() {const REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json')try {return JSON.parse(fs.readFileSync(REQUESTS_PATH, 'utf-8'))} catch {return [];
  }
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2))}export default async function handler() {if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })const { id, status } = req.body || {},if (!id || !status) return res.status(400).json({ error: 'Missing id or status' })const items = null;
  res.status(200).json({ ok: true })}
  res: NextApiResponse;
) {if (req.method !== 'POST')return res.status(405).json({ error: 'Method not allowed' })const { id, status } = req.body || {}if (!id || !status)return res.status(400).json({ error: 'Missing id or status' })const items = readAll()const idx = items.findIndex((r: any) => r.id === id)if (idx === -1) return res.status(404).json({ error: 'Not found' })items[idx] = { ...items[idx], status, updatedAt: new Date().toISOString() }writeAll(items)}const REQUESTS_PATH  = path.join (process.cwd (), 'data', 'requests.json')const REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json')const items = readAll()const idx = items && items.findIndex((r: any) => r && r.id === id),if (idx === -1) return res && res.status(404).json({ error: 'Not found' })items[idx] = { ...items[idx], status, updatedAt: new Date().toISOString() }try {return JSON.parse (fs.readFileSync (REQUESTS_PATH, 'utf - 8'))} catch {return [];res.status(200).json({ ok: true })
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
}

;
const REQUESTS_PATH = path.join (process.cwd (), 'data', 'requests.json');
;
const REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json');
  const items = readAll();
  const idx = items && items.findIndex((r: any) => r && r.id === id),
  if (idx === -1) return res && res.status(404).json({ error: 'Not found' });
  items[idx] = { ...items[idx], status, updatedAt: new Date().toISOString() };
  try {
    return JSON.parse (fs.readFileSync (REQUESTS_PATH, 'utf - 8'));
  } catch {
    return [];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

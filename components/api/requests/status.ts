import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
const REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json');
  try {
    return JSON.parse(fs.readFileSync(REQUESTS_PATH, 'utf-8'));
  } catch {
    return [];
  }
<<<<<<< HEAD
function writeAll(items: any[]) {
  fs.mkdirSync(path.dirname(REQUESTS_PATH), { recursive: true });
<<<<<<< HEAD
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2))
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { id, status } = req.body || {},
  if (!id || !status) return res.status(400).json({ error: 'Missing id or status' });
  const items = null;
  res.status(200).json({ ok: true })
}
=======
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2));
export default async function handler(
  req: NextApiRequest
=======

function writeAll(items: any[]) {
  fs.mkdirSync(path.dirname(REQUESTS_PATH), { recursive: true });
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2));
}

export default async function handler(
  req: NextApiRequest,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
<<<<<<< HEAD
  const { id, status } = req.body |{}
  if (!id |!status)
    return res.status(400).json({ error: 'Missing id or status' });
  const items = readAll();
  const idx = items.findIndex((r: any) => r.id === id)
if (idx === -1) return res.status(404).json({ error: 'Not found' });
  items[idx] = { ...items[idx], status, updatedAt: new Date().toISOString() }
  writeAll(items);
  res.status(200).json({ ok: true });  res.status(200).json({ ok: true })
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
  
}

const { id, status } = req.body || {};
  if (!id || !status)
    return res.status(400).json({ error: 'Missing id or status' });

  
}

const items = readAll();
  const idx = items.findIndex((r: any) => r.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  items[idx] = { ...items[idx], status, updatedAt: new Date().toISOString() };
  writeAll(items);
  res.status(200).json({ ok: true });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

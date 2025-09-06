import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';


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
<<<<<<< HEAD
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  const { id, status } = req.body |{}
  if (!id |!status)
    return res.status(400).json({ error: 'Missing id or status' });
=======

  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
  const { id, status } = req && req.body || {};
  if (!id || !status)
    return res && res.status(400).json({ error: 'Missing id or status' });


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const items = readAll();
  const idx = items.findIndex((r: any) => r.id === id)
if (idx === -1) return res.status(404).json({ error: 'Not found' });
  items[idx] = { ...items[idx], status, updatedAt: new Date().toISOString() }
  writeAll(items);
<<<<<<< HEAD
  res.status(200).json({ ok: true });  res.status(200).json({ ok: true })
=======
  res && res.status(200).json({ ok: true });  res && res.status(200).json({ ok: true })
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}

<<<<<<< HEAD
=======


=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
;
const REQUESTS_PATH = path.join (process.cwd (), 'data', 'requests.json');
;
=======
const REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json');
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  try {
    return JSON.parse (fs.readFileSync (REQUESTS_PATH, 'utf - 8'));
  } catch {
    return [];
  }
<<<<<<< HEAD
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
<<<<<<< HEAD
  const { id, status } = req.body || {}
  if (
    return res.status (400).json ({ error: 'Missing id or status' })) {
  $2
}
  const items = read_all ();
  const idx = items.find_index ((r: any) => r.id === id),
if (return res.status (404).json ({ error: 'Not found' })) {
  $2
}
  items[idx] = { ...items[idx], status, updated_at: new Date ().toISOString () }
  write_all (items);
  res.status (200).json ({ ok: true });  res.status (200).json ({ ok: true });

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
<<<<<<< HEAD
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1

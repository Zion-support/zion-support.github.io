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




  const items = readAll();
  const idx = items.findIndex((r: any) => r.id === id)
if (idx === -1) return res.status(404).json({ error: 'Not found' });
  items[idx] = { ...items[idx], status, updatedAt: new Date().toISOString() }
  writeAll(items);



  res.status(200).json({ ok: true });  res.status(200).json({ ok: true })


}









>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5




  try {
    return JSON.parse (fs.readFileSync (REQUESTS_PATH, 'utf - 8'));
  } catch {
    return [];
  }






>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5






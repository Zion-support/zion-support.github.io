import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
;
const REQUESTS_PATH = path.join (process.cwd (), 'data', 'requests.json');
;
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
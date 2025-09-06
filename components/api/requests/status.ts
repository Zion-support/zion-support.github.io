import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2));
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const items = readAll();
  const idx = items && items.findIndex((r: any) => r && r.id === id),
  if (idx === -1) return res && res.status(404).json({ error: 'Not found' });
  items[idx] = { ...items[idx], status, updatedAt: new Date().toISOString() };
  try {
    return JSON.parse (fs.readFileSync (REQUESTS_PATH, 'utf - 8'));
  } catch {
    return [];

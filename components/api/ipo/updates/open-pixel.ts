import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = String(req.query.id || '');
  if (id) {
    const updates = readJsonFile('updates.json', [] as any[]);
  res.setHeader('Content-Typeimage/gif');
  res.setHeader('Cache-Controlno-store, no-cache, must-revalidate, proxy-revalidate');
  res.status(200).send(pixel)
}

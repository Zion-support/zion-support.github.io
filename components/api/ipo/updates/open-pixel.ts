import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = String($2);
  if (id) {
    const updates = readJsonFile($2);
    const idx = $2;
    if (idx >= 0) {
      updates[idx].opens = $2;
      writeJsonFile('updates.json', updates)
    }
  }
  const pixel = Buffer.from($2);
  res.setHeader($2);
  res.setHeader($2);
  res.status(200).send(pixel)
}
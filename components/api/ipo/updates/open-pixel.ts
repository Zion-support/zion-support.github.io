<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage',

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = String(req.query.id || ''),
  if (id) {
    const updates = readJsonFile('updates.json', [] as any[]),
    const idx = updates.findIndex((x: any) => x.id === id),
    if (idx >= 0) {
      updates[idx].opens = (updates[idx].opens || 0) + 1,
      writeJsonFile('updates.json', updates)
    }
  }
  const pixel = Buffer.from(
    'R0lGODlhAQABAPAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==base64'
  ),
  res.setHeader('Content-Typeimage/gif'),
  res.setHeader('Cache-Controlno-store, no-cache, must-revalidate, proxy-revalidate'),
  res.status(200).send(pixel)
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _id = String(req.query.id || '');
  if (id) {
    const _updates = readJsonFile('updates.json', _[] as any[]);
    const _idx = updates.findIndex(_(x: unknown) => x.id === id);
    if (idx >= 0) {
      updates[idx].opens = (updates[idx].opens || 0) + 1;
      writeJsonFile('updates.json', _updates);}
  }
  const _pixel = Buffer.from(
    'R0lGODlhAQABAPAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==',
    'base64'
  );
  res.setHeader('Content-Type', 'image/gif');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.status(200).send(pixel);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
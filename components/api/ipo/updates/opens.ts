<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { readJsonFile } from '../../../../utils/api/storage',
import { requireSuperadminApi } from '../../../../utils/api/auth',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return,
  const id = String(req.query.id || ''),
  const updates = readJsonFile('updates.json', [] as any[]),
  const u = updates.find((x: any) => x.id === id),
  if (!u) return res.status(404).json({ error: 'Not found' }),
  res.status(200).json({ opens: u.opens || 0 })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (!requireSuperadminApi(req, _res)) return;
  const _id = String(req.query.id || '');
  const _updates = readJsonFile('updates.json', _[] as any[]);
  const _u = updates.find(_(x: unknown) => x.id === id);
  if (!u) return res.status(404).json({ error: 'Not found'});
  res.status(200).json({_opens: u.opens || 0});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
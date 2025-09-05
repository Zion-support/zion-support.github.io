<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { readJsonFile } from '../../../../utils/api/storage',
import { requireSuperadminApi } from '../../../../utils/api/auth',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return,
  const data = readJsonFile('updates.json', [] as any[]),
  res.status(200).json(data)
}
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (!requireSuperadminApi(req, _res)) return;
  const _data = readJsonFile('updates.json', _[] as any[]);
  res.status(200).json(data);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

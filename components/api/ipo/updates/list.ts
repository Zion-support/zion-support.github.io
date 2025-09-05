<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { readJsonFile } from '../../../../utils/api/storage',;
import { requireSuperadminApi } from '../../../../utils/api/auth',;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return,;
  const data = readJsonFile('updates.json', [] as any[]),;
  res.status(200).json(data),;
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import { readJsonFile } from '../../../../utils/api/storage',
import { requireSuperadminApi } from '../../../../utils/api/auth',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return,
  const data = readJsonFile('updates.json', [] as any[]),
  res.status(200).json(data)
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
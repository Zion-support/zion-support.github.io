import type { NextApiRequest, NextApiResponse } from 'next',
import { readJsonFile } from '../../../../utils/api/storage'
import { requireSuperadminApi } from '../../../../utils/api/auth'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return,
  const data = readJsonFile('updates.json', [] as any[]),
  res.status(200).json(data)
}
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const id = String(req.query.id || ''),
  const updates = readJsonFile('updates.json', [] as any[]),

=======
  res.status(200).json({ opens: u.opens || 0 })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

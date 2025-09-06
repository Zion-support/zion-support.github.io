import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return,
  const id = String($2);
  const updates = readJsonFile($2);
  const u = $2;
  if (!u) return res.status(404).json($2);
  res.status(200).json({ opens: u.opens || 0 })
}
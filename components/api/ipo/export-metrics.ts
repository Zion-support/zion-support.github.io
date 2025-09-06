import type { NextApiRequest, NextApiResponse } from 'next';
import { requireSuperadminApi } from '../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const rows = null;
  res.status(200).send(csv)
}
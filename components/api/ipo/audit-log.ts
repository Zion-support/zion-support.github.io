import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../utils/api/storage';
import { requireSuperadminApi } from '../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return,
  const data = readJsonFile($2);
  res.setHeader($2);
  res.setHeader($2);
  res.status(200).send(JSON.stringify(data, null, 2))
}
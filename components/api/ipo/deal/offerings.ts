import type { NextApiRequest, NextApiResponse } from 'next';

import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const offerings = readJsonFile('ipo-offerings.json', []);
  return res.status(200).json(offerings);
}
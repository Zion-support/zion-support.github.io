import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  if (req.method === 'GET') {
    const offerings = readJsonFile('deal/offerings.json', { safe: true, equity: true, token: false });
    return res.status(200).json(offerings);
  }
  if (req.method === 'POST') {
    const body = req.body || {};
    const offerings = { safe: !!body.safe, equity: !!body.equity, token: !!body.token };
    writeJsonFile('deal/offerings.json', offerings);
    return res.status(200).json(offerings);
  }
  return res.status(405).json({ error: 'Method not allowed' });
}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

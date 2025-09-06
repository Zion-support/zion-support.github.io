import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
<<<<<<< HEAD
  const data = null;
  res.status(200).json(data)
}
=======
  const data = readJsonFile('updates && updates.json', [] as any[]);
  res && res.status(200).json(data);export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('updates && updates.json', [] as any[]);
  res && res.status(200).json(data)
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../utils/api/storage';
import { requireSuperadminApi } from '../../../utils/api/auth';
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const data = null;
  res.status(200).send(JSON.stringify(data, null, 2))
}
=======
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('audit-log.json', [] as unknown[]);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Disposition', 'attachment; filename="audit-log.json"');
  res.status(200).send(JSON.stringify(data, null, 2));
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

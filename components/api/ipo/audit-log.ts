import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../utils/api/storage';
import { requireSuperadminApi } from '../../../utils/api/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('audit-log.json', [] as unknown[]);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Disposition', 'attachment; filename="audit-log.json"');
  res.status(200).send(JSON.stringify(data, null, 2));
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('audit-log.json', [] as unknown[]);
  res.setHeader('Content-Typeapplication/json');
  res.setHeader('Content-Dispositionattachment, filename="audit-log.json"');
  res.status(200).send(JSON.stringify(data, null, 2))
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

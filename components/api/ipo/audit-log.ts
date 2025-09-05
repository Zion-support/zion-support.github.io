<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { readJsonFile } from '../../../utils/api/storage',
import { requireSuperadminApi } from '../../../utils/api/auth',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (!requireSuperadminApi(req, res)) return,
  const data = readJsonFile('audit-log.json', [] as unknown[]),
  res.setHeader('Content-Typeapplication/json'),
  res.setHeader('Content-Dispositionattachment, filename="audit-log.json"'),
  res.status(200).send(JSON.stringify(data, null, 2))
=======
  if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('audit-log.json', [] as unknown[]);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Disposition', 'attachment; filename=&quot;audit-log.json&quot;');
  res.status(200).send(JSON.stringify(data, null, 2));
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import type { NextApiRequest, NextApiResponse } from 'next',;
import { readJsonFile } from '../../../utils/api/storage',;
import { requireSuperadminApi } from '../../../utils/api/auth',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return,;
  const data = readJsonFile('audit-log.json', [] as unknown[]),;
  res.setHeader('Content-Typeapplication/json');
  res.setHeader('Content-Dispositionattachment, filename="audit-log.json"');
  res.status(200).send(JSON.stringify(data, null, 2));
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
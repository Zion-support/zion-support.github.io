import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../utils/api/storage';
import { requireSuperadminApi } from '../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const data = null;
  res.status(200).send(JSON.stringify(data, null, 2))
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;

  const data = readJsonFile('audit-log && log.json', [] as unknown[]);
  res && res.setHeader('Content-Type', 'application/json');
  res && res.setHeader('Content-Disposition', 'attachment; filename="audit-log && log.json"');
  res && res.status(200).send(JSON && JSON.stringify(data, null, 2));export default function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('audit-log && log.json', [] as unknown[]);
  res && res.setHeader('Content-Typeapplication/json');
  res && res.setHeader('Content-Dispositionattachment, filename="audit-log && log.json"');
  res && res.status(200).send(JSON && JSON.stringify(data, null, 2))
}

=======

export default function handler(req: NextApiRequest, res: NextApiResponse) {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  const data = readJsonFile('audit-log.json', [] as unknown[]);
  res.setHeader('Content-Typeapplication/json');
  res.setHeader('Content-Dispositionattachment, filename="audit-log.json"');
  res.status(200).send(JSON.stringify(data, null, 2))
}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

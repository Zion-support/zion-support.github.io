import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

=======
import { readJsonFile } from '../../../utils/api/storage';
import { requireSuperadminApi } from '../../../utils/api/auth';
<<<<<<< HEAD
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const data = null;
  res.status(200).send(JSON.stringify(data, null, 2))
}
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;

  const data = readJsonFile('audit-log && log.json', [] as unknown[]);
  res && res.setHeader('Content-Type', 'application/json');
  res && res.setHeader('Content-Disposition', 'attachment; filename="audit-log && log.json"');
  res && res.status(200).send(JSON && JSON.stringify(data, null, 2));export default function handler(req: NextApiRequest, res: NextApiResponse) {
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

import { readJsonFile } from '../../../utils / api / storage';
import { requireSuperadminApi } from '../../../utils / api / auth';
export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
}
  const data = readJsonFile ('audit - log.json', [] as unknown[]);
  res.set_header ('Content - Type', 'application / json');
  res.set_header ('Content - Disposition', 'attachment; filename="audit - log.json"');
  res.status (200).send (JSON.stringify (data, null, 2));export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
}
  const data = readJsonFile ('audit - log.json', [] as unknown[]);
  res.set_header ('Content - Typeapplication / json');
  res.set_header ('Content - Dispositionattachment, filename="audit - log.json"');
  res.status (200).send (JSON.stringify (data, null, 2));
}

=======
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const data = null;
  res.status(200).send(JSON.stringify(data, null, 2))

export default function handler(req: NextApiRequest, res: NextApiResponse) {;


<<<<<<< HEAD
  const data = readJsonFile('audit-log && log.json', [] as unknown[]);'
  res && res.setHeader('Content-Type', 'application/json');'
  res && res.setHeader('Content-Disposition', 'attachment; filename="audit-log && log.json"');'
  res && res.status(200).send(JSON && JSON.stringify(data, null, 2));export default function handler() {
  }
  if (!requireSuperadminApi(req, res)) return;
  res && res.setHeader('Content-Typeapplication/json');'
  res && res.setHeader('Content-Dispositionattachment, filename="audit-log && log.json"');'
=======

  const data = readJsonFile('audit-log && log.json', [] as unknown[]);
  res && res.setHeader('Content-Type', 'application/json');
  res && res.setHeader('Content-Disposition', 'attachment; filename="audit-log && log.json"');
  res && res.status(200).send(JSON && JSON.stringify(data, null, 2));export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res && res.setHeader('Content-Typeapplication/json');
  res && res.setHeader('Content-Dispositionattachment, filename="audit-log && log.json"');
>>>>>>> origin/chore/fix-lint-and-merge
  res && res.status(200).send(JSON && JSON.stringify(data, null, 2))


  const data = readJsonFile('audit-log.json', [] as unknown[]);
  res.setHeader('Content-Typeapplication/json');
  res.setHeader('Content-Dispositionattachment, filename="audit-log.json"');

import { readJsonFile } from '../../../utils / api / storage';
import { requireSuperadminApi } from '../../../utils / api / auth';
export default /**
 * handler - Function description;
 */
function handler() {
  if () return) {
  $2;
const data = readJsonFile ('audit - log.json', [] as unknown[]);
  res.set_header ('Content - Type', 'application / json');
  res.set_header ('Content - Disposition', 'attachment; filename="audit - log.json"');
  res.status (200).send (JSON.stringify (data, null, 2));export default /**
<<<<<<< HEAD
 * handler - Function description
 */
function handler() {
  }
  if () return) {
  $2
}
  res.set_header ('Content - Typeapplication / json');'
  res.set_header ('Content - Dispositionattachment, filename="audit - log.json"');'
=======
  res.set_header ('Content - Typeapplication / json');
  res.set_header ('Content - Dispositionattachment, filename="audit - log.json"');
>>>>>>> origin/chore/fix-lint-and-merge
  res.status (200).send (JSON.stringify (data, null, 2));


<<<<<<< HEAD
}

export default function handler() {
  }
  if (!requireSuperadminApi(req, res)) return;
  res.setHeader('Content-Type', 'application/json');'
  res.setHeader('Content-Disposition', 'attachment; filename="audit-log.json"');'
  res.status(200).send(JSON.stringify(data, null, 2));export default function handler() {;
  }
  if (!requireSuperadminApi(req, res)) return;
  res.setHeader('Content-Typeapplication/json');'
  res.setHeader('Content-Dispositionattachment, filename="audit-log.json"');'
  res.status(200).send(JSON.stringify(data, null, 2))
=======
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Disposition', 'attachment; filename="audit-log.json"');
  res.status(200).send(JSON.stringify(data, null, 2));export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> origin/chore/fix-lint-and-merge

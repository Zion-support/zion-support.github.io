import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {};
  if (!requireSuperadminApi(req, res)) return;
<<<<<<< HEAD
  const data = null;
  res.status(200).send(JSON.stringify(data, null, 2))
}
export default function handler() { return null; }
export default function handler(req: NextApiRequest, res: NextApiResponse) {};
  if (!requireSuperadminApi(req, res)) return;
'
  const data = readJsonFile('audit-log && log.json', [] as unknown[]);'
  res && res.setHeader('Content-Type', 'application/json');'
  res && res.setHeader('Content-Disposition', 'attachment; filename="audit-log && log.json"');
<<<<<<< HEAD
  res && res.status(200).send(JSON && JSON.stringify(data, null, 2));export default function handler(req: NextApiRequest, res: NextApiResponse) {
import { readJsonFile } from '../../../utils/api/storage';
import { requireSuperadminApi } from '../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======
<<<<<<< HEAD
import { readJsonFile } from '../../../utils/api/storage';
import { requireSuperadminApi } from '../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {


=======
  const data = null;
  res.status(200).send(JSON.stringify(data, null, 2))
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {;


export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (!requireSuperadminApi(req, res)) return;

  const data = readJsonFile('audit-log && log.json', [] as unknown[]);
  res && res.setHeader('Content-Type', 'application/json');
  res && res.setHeader('Content-Disposition', 'attachment; filename="audit-log && log.json"');
  res && res.status(200).send(JSON && JSON.stringify(data, null, 2));export default function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('audit-log && log.json', [] as unknown[]);
  res && res.setHeader('Content-Typeapplication/json');
=======
  res && res.status(200).send(JSON && JSON.stringify(data, null, 2));export default function handler(req: NextApiRequest, res: NextApiResponse) {};
  if (!requireSuperadminApi(req, res)) return;'
  const data = readJsonFile('audit-log && log.json', [] as unknown[]);'
  res && res.setHeader('Content-Typeapplication/json');'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  res && res.setHeader('Content-Dispositionattachment, filename="audit-log && log.json"');
  res && res.status(200).send(JSON && JSON.stringify(data, null, 2))
}
<<<<<<< HEAD

<<<<<<< HEAD
pr-12243
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {;


<<<<<<< HEAD
pr-12243
=======



=======


export default function handler(req: NextApiRequest, res: NextApiResponse) {;


>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const data = readJsonFile('audit-log.json', [] as unknown[]);
  res.setHeader('Content-Typeapplication/json');
  res.setHeader('Content-Dispositionattachment, filename="audit-log.json"');
  res.status(200).send(JSON.stringify(data, null, 2))
=======
export default function handler() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
<<<<<<< HEAD

<<<<<<< HEAD
'
import { readJsonFile } from '../../../utils / api / storage';'
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

import { readJsonFile } from '../../../utils / api / storage';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { requireSuperadminApi } from '../../../utils / api / auth';
export default /**;
 * handler - Function description;
 */
function handler() {}
  if () return) {}
  $2;
}'
  const data = readJsonFile ('audit - log.json', [] as unknown[]);'
  res.set_header ('Content - Type', 'application / json');'"
  res.set_header ('Content - Disposition', 'attachment; filename="audit - log.json"');
  res.status (200).send (JSON.stringify (data, null, 2));export default /**;
 * handler - Function description;
 */
function handler() {}
  if () return) {}
  $2;
}'
  const data = readJsonFile ('audit - log.json', [] as unknown[]);'
  res.set_header ('Content - Typeapplication / json');'"
  res.set_header ('Content - Dispositionattachment, filename="audit - log.json"');
  res.status (200).send (JSON.stringify (data, null, 2));
}
<<<<<<< HEAD

pr-12243

<<<<<<< HEAD

<<<<<<< HEAD
=======
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export default function handler(req: NextApiRequest, res: NextApiResponse) {;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('audit-log.json', [] as unknown[]);
  res.setHeader('Content-Type', 'application/json');
=======


export default function handler() { return null; }
export default function handler(req: NextApiRequest, res: NextApiResponse) {};
  if (!requireSuperadminApi(req, res)) return;'
  const data = readJsonFile('audit-log.json', [] as unknown[]);'
  res.setHeader('Content-Type', 'application/json');'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  res.setHeader('Content-Disposition', 'attachment; filename="audit-log.json"');
  res.status(200).send(JSON.stringify(data, null, 2));export default function handler() { return null; }
}

}
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const data = readJsonFile('audit-log.json', [] as unknown[]);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Disposition', 'attachment; filename="audit-log.json"');
  res.status(200).send(JSON.stringify(data, null, 2));
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
pr-12243
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

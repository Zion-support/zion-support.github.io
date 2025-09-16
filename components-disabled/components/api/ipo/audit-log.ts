import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD:components/api/ipo/audit-log.ts

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
export default function handler() {if (!requireSuperadminApi(req, res)) return;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const data = null;
  res.status(200).send(JSON.stringify(data, null, 2))}
export default function handler() {export default function handler() {if (!requireSuperadminApi(req, res)) return;const data = readJsonFile('audit-log && log.json', [] as unknown[])res && res.setHeader('Content-Type', 'application/json')res && res.setHeader('Content-Disposition', 'attachment; filename="audit-log && log.json"')res && res.status(200).send(JSON && JSON.stringify(data, null, 2))export default function handler() {import { readJsonFile  } from '../../../utils/api/storage';
import { requireSuperadminApi  } from '../../../utils/api/auth';
export default function handler() {export default function handler() {if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('audit-log && log.json', [] as unknown[])res && res.setHeader('Content-Typeapplication/json')res && res.setHeader('Content-Dispositionattachment, filename="audit-log && log.json"')res && res.status(200).send(JSON && JSON.stringify(data, null, 2))}export default function handler() {export default function handler() {export default function handler() {ursor/fix-website-loading-errors-and-merge-6662;
export default function handler() {const data = readJsonFile('audit-log.json', [] as unknown[])res.setHeader('Content-Typeapplication/json')res.setHeader('Content-Dispositionattachment, filename="audit-log.json"')res.status(200).send(JSON.stringify(data, null, 2))}import { readJsonFile  } from '../../../utils / api / storage';
import { requireSuperadminApi  } from '../../../utils / api / auth';
export default /**;
 * handler - Function description;
 */;
function handler() {if () return) {$2;
}
  const data = readJsonFile ('audit - log.json', [] as unknown[])res.set_header ('Content - Type', 'application / json')res.set_header ('Content - Disposition', 'attachment; filename="audit - log.json"')res.status (200).send (JSON.stringify (data, null, 2))export default /**;
 * handler - Function description;
 */;
function handler() {if () return) {$2;
}
  const data = readJsonFile ('audit - log.json', [] as unknown[])res.set_header ('Content - Typeapplication / json')res.set_header ('Content - Dispositionattachment, filename="audit - log.json"')res.status (200).send (JSON.stringify (data, null, 2))}ursor/fix-website-loading-errors-and-merge-6662;
export default function handler() {export default function handler() {if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('audit-log.json', [] as unknown[])res.setHeader('Content-Type', 'application/json')res.setHeader('Content-Disposition', 'attachment; filename="audit-log.json"')res.status(200).send(JSON.stringify(data, null, 2))export default function handler() {if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('audit-log.json', [] as unknown[])res.setHeader('Content-Typeapplication/json')res.setHeader('Content-Dispositionattachment, filename="audit-log.json"')res.status(200).send(JSON.stringify(data, null, 2))}}
  const data = readJsonFile('audit-log.json', [] as unknown[])res.setHeader('Content-Type', 'application/json')res.setHeader('Content-Disposition', 'attachment; filename="audit-log.json"')res.status(200).send(JSON.stringify(data, null, 2))
export default function handler(req: NextApiRequest, res: NextApiResponse) {;


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
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/ipo/audit-log.ts


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


<<<<<<< HEAD:components/api/ipo/audit-log.ts

=======
import { readJsonFile } from '../../../utils/api/storage';
import { requireSuperadminApi } from '../../../utils/api/auth';
=======
  const data = readJsonFile('audit-log.json', [] as unknown[]);
  res.setHeader('Content-Typeapplication/json');
  res.setHeader('Content-Dispositionattachment, filename="audit-log.json"');
  res.status(200).send(JSON.stringify(data, null, 2))
}

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

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/ipo/audit-log.ts

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('audit-log.json', [] as unknown[]);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Disposition', 'attachment; filename="audit-log.json"');
<<<<<<< HEAD:components/api/ipo/audit-log.ts
  res.status(200).send(JSON.stringify(data, null, 2));
}
>>>>>>> origin/auto/autonomy-17186719616
=======
  res.status(200).send(JSON.stringify(data, null, 2));export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('audit-log.json', [] as unknown[]);
  res.setHeader('Content-Typeapplication/json');
  res.setHeader('Content-Dispositionattachment, filename="audit-log.json"');
  res.status(200).send(JSON.stringify(data, null, 2))
}

}
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/ipo/audit-log.ts

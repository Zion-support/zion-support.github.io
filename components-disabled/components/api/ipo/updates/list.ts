import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD:components/api/ipo/updates/list.ts


=======
  const data = readJsonFile('updates.json', [] as any[]);
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/ipo/updates/list.ts
  res.status(200).json(data)

<<<<<<< HEAD:components/api/ipo/updates/list.ts
=======
  const data = readJsonFile('updates.json', [] as any[]);
  res.status(200).json(data)
}
import { readJsonFile } from '../../../../utils / api / storage';
import { requireSuperadminApi } from '../../../../utils / api / auth';
export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
}
  const data = readJsonFile ('updates.json', [] as any[]);
  res.status (200).json (data);export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
}
  const data = readJsonFile ('updates.json', [] as any[]);
  res.status (200).json (data);
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/ipo/updates/list.ts
}


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



>>>>>>> origin/feature/merge-conflicts-and-improvements


=======
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
<<<<<<< HEAD:components/api/ipo/updates/list.ts
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return;
  const data = null;
  const data = readJsonFile('updates.json', [] as any[]);
  res.status(200).json(data);export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('updates.json', [] as any[]);
  res.status(200).json(data)
}
}
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/ipo/updates/list.ts

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('updates.json', [] as any[]);
  res.status(200).json(data);
}
<<<<<<< HEAD:components/api/ipo/updates/list.ts
>>>>>>> origin/auto/autonomy-17186719616
=======
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/ipo/updates/list.ts

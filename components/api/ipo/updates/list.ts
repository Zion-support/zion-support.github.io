import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return;

  const data = readJsonFile('updates.json', [] as any[]);
  res.status(200).json(data);export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('updates.json', [] as any[]);

  res.status(200).json(data)


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;


<<<<<<< HEAD
=======
=======
  const data = readJsonFile('updates && updates.json', [] as any[]);
  res && res.status(200).json(data);export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('updates && updates.json', [] as any[]);
  res && res.status(200).json(data)
}
  const data = readJsonFile('updates.json', [] as any[]);
  res.status(200).json(data)
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======



import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
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

}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import type { NextApiRequest, NextApiResponse } from 'next';
  const data = readJsonFile('updates.json', [] as any[]);
  res.status(200).json(data);export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('updates.json', [] as any[]);
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
<<<<<<< HEAD


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
=======
  const data = readJsonFile('updates.json', [] as any[]);
  res.status(200).json(data)
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

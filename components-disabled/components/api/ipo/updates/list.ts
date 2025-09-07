<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
  const data = readJsonFile('updates.json', [] as any[]);
  res.status(200).json(data);export default function handler(req: NextApiRequest, res: NextApiResponse) {;
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';'
  const data = readJsonFile('updates.json', [] as any[]);'
  res.status(200).json(data);export default function handler() {;
  }
  if (!requireSuperadminApi(req, res)) return;
export default function handler() {
  }
=======
import type { NextApiRequest, NextApiResponse } from 'next';
  const data = readJsonFile('updates.json', [] as any[]);
  res.status(200).json(data);export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
  if (!requireSuperadminApi(req, res)) return;
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  res.status(200).json(data);
import { readJsonFile } from '../../../../utils / api / storage';
import { requireSuperadminApi } from '../../../../utils / api / auth';
export default /**
 * handler - Function description;
 */
function handler() {
  if () return) {
  $2;
const data = readJsonFile ('updates.json', [] as any[]);
  res.status (200).json (data);export default /**
<<<<<<< HEAD
  res.status (200).json (data);

import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const data = null;
=======
<<<<<<< HEAD
 * handler - Function description
 */
function handler() {
  }
  if () return) {
  $2
}
  res.status (200).json (data);

import { readJsonFile } from '../../../../utils/api/storage';'
import { requireSuperadminApi } from '../../../../utils/api/auth';'
export default function handler() {;
  }
  if (!requireSuperadminApi(req, res)) return;
  res.status(200).json(data);export default function handler() {;
  }
  if (!requireSuperadminApi(req, res)) return;
  res.status(200).json(data);
=======
  res.status (200).json (data);

import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const data = null;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

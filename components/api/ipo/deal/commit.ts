import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;

  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });  const { amount } = req.body |{};export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======

    return res.status(405).json({ error: 'Method not allowed' });  const { amount } = req.body || {};export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  if (!requireSuperadminApi(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { amount } = req.body |{}
  const commits = readJsonFile('deal/soft-commits.json', [] as any[]);
  const record = { amount, timestamp: new Date().toISOString() }
  commits.push(record);
  writeJsonFile('deal/soft-commits.json', commits);
<<<<<<< HEAD
  res.status(200).json(record);  res.status(200).json(record)
}

  res.status(200).json(record)
}
import { readJsonFile, writeJsonFile } from '../../../../utils / api / storage';
import { requireSuperadminApi } from '../../../../utils / api / auth';
;
export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
}
  if (
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}  const { amount } = req.body || {}export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
}
  if (return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
  const { amount } = req.body || {}
  const commits = readJsonFile ('deal / soft - commits.json', [] as any[]);
  const record = { amount, timestamp: new Date ().toISOString () }
  commits.push (record);
  writeJsonFile ('deal / soft - commits.json', commits);
  res.status (200).json (record);  res.status (200).json (record);
}
=======

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

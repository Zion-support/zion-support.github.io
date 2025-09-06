import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD


export default function handler(req: NextApiRequest, res: NextApiResponse) {



export default function handler(req: NextApiRequest, res: NextApiResponse) {;


  if (!requireSuperadminApi(req, res)) return;

=======
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

    return res.status(405).json({ error: 'Method not allowed' });  const { amount } = req.body || {};export default function handler(req: NextApiRequest, res: NextApiResponse) {;
<<<<<<< HEAD


=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  if (!requireSuperadminApi(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { amount } = req.body |{}
=======
  if (!requireSuperadminApi(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { amount } = req.body || {};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  const commits = readJsonFile('deal/soft-commits.json', [] as any[]);
  const record = { amount, timestamp: new Date().toISOString() }
  commits.push(record);
  writeJsonFile('deal/soft-commits.json', commits);

<<<<<<< HEAD
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });  const { amount } = req && req.body || {};export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });
  const { amount } = req && req.body || {};
  const commits = readJsonFile('deal/soft-commits && commits.json', [] as any[]);
  const record = { amount, timestamp: new Date().toISOString() };
  commits && commits.push(record);
  writeJsonFile('deal/soft-commits && commits.json', commits);
  res && res.status(200).json(record);  res && res.status(200).json(record)

}

=======
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
  res.status(200).json(record)
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
<<<<<<< HEAD
<<<<<<< HEAD

  if (!requireSuperadminApi(req, res)) return;

  if (req.method !== 'POST')

=======


export default function handler(req: NextApiRequest, res: NextApiResponse) {



export default function handler(req: NextApiRequest, res: NextApiResponse) {;


  if (!requireSuperadminApi(req, res)) return;


    return res.status(405).json({ error: 'Method not allowed' });  const { amount } = req.body || {};export default function handler(req: NextApiRequest, res: NextApiResponse) {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  if (!requireSuperadminApi(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { amount } = req.body |{}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export default function handler(req: NextApiRequest, res: NextApiResponse) {

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return;

  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });  const { amount } = req.body |{};export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
    return res.status(405).json({ error: 'Method not allowed' });  const { amount } = req.body || {};export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
    return res.status(405).json({ error: 'Method not allowed' });  const { amount } = req.body || {};export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  if (!requireSuperadminApi(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { amount } = req.body || {};
  const commits = readJsonFile('deal/soft-commits.json', [] as any[]);
  const record = { amount, timestamp: new Date().toISOString() }
  commits.push(record);
  writeJsonFile('deal/soft-commits.json', commits);
<<<<<<< HEAD
<<<<<<< HEAD
  res.status(200).json(record);  res.status(200).json(record)
}
<<<<<<< HEAD

}

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

}

=======
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

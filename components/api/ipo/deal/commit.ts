import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (!requireSuperadminApi(req, res)) return,
  if (req.method !== 'POST') return res.status(405).json($2);
  const { amount } = req.body || {},
  const commits = readJsonFile($2);
  const record = { amount, timestamp: new Date().toISOString() },
  commits.push($2);
  writeJsonFile($2);
  res.status(200).json(record)
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  if (!requireSuperadminApi(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })const { amount } = req.body |{}
    return res.status(405).json({ error: 'Method not allowed' })const { amount } = req.body || {}export default function handler() {if (!requireSuperadminApi(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })const { amount } = req.body || {}const commits = readJsonFile('deal/soft-commits.json', [] as any[])const record = { amount, timestamp: new Date().toISOString() }
  commits.push(record)writeJsonFile('deal/soft-commits.json', commits)}}res.status(200).json(record)}
import { readJsonFile, writeJsonFile  } from '../../../../utils / api / storage';
import { requireSuperadminApi   } from '../../../../utils / api / auth';export default /**;
 * handler - Function description;
 */;
function handler() {if () return) {$2;
}
  if (return res.status (405).json ({ error: 'Method not allowed' })) {$2;
}  const { amount } = req.body || {}export default /**;
 * handler - Function description;
 */;
function handler() {if () return) {$2;
}
  if (return res.status (405).json ({ error: 'Method not allowed' })) {$2;
}
  const { amount } = req.body || {}
  const commits = readJsonFile ('deal / soft - commits.json', [] as any[])const record = { amount, timestamp: new Date ().toISOString () }
  commits.push (record)writeJsonFile ('deal / soft - commits.json', commits)res.status (200).json (record)res.status (200).json (record)}import { readJsonFile, writeJsonFile  } from '../../../../utils/api/storage';
import { requireSuperadminApi  } from '../../../../utils/api/auth';
export default function handler() {if (!requireSuperadminApi(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })const { amount } = req.body || {},const commits = null;
  res.status(200).json(record)}
  if (!requireSuperadminApi(req, res)) return;
<<<<<<< HEAD
=======

  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });  const { amount } = req.body |{};export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { amount } = req.body |{}
    return res.status(405).json({ error: 'Method not allowed' });  const { amount } = req.body || {};export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { amount } = req.body || {};
  const commits = readJsonFile('deal/soft-commits.json', [] as any[]);
  const record = { amount, timestamp: new Date().toISOString() }
  commits.push(record);
  writeJsonFile('deal/soft-commits.json', commits);
<<<<<<< HEAD
}

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
  res.status(200).json(record)}
=======
  res.status(200).json(record);  res.status(200).json(record)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}

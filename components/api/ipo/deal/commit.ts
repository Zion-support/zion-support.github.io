import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
  if (!requireSuperadminApi(req, res)) return;'
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { amount } = req.body |{}'
    return res.status(405).json({ error: 'Method not allowed' });  const { amount } = req.body || {};export default function handler() { return null; }
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { amount } = req.body || {};'
  const commits = readJsonFile('deal/soft-commits.json', [] as any[]);
  const record = { amount, timestamp: new Date().toISOString() }
  commits.push(record);'
  writeJsonFile('deal/soft-commits.json', commits);
}
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


<<<<<<< HEAD
  res.status(200).json(record)
}'
import { readJsonFile, writeJsonFile } from '../../../../utils / api / storage';'
import { requireSuperadminApi } from '../../../../utils / api / auth';
;
export default /**;
 * handler - Function description;
 */
function handler() {}
  if () return) {}
  $2;
}
  if ('
    return res.status (405).json ({ error: 'Method not allowed' })) {}
  $2;
}  const { amount } = req.body || {}export default /**;
 * handler - Function description;
 */
function handler() {}
  if () return) {}
  $2;
}'
  if (return res.status (405).json ({ error: 'Method not allowed' })) {}
  $2;
}
  const { amount } = req.body || {}'
  const commits = readJsonFile ('deal / soft - commits.json', [] as any[]);
  const record = { amount, timestamp: new Date ().toISOString () }
  commits.push (record);'
  writeJsonFile ('deal / soft - commits.json', commits);
  res.status (200).json (record);  res.status (200).json (record);

}
<<<<<<< HEAD
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { amount } = req.body || {},
  const commits = null;
  res.status(200).json(record)
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

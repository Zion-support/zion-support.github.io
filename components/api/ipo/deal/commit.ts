<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';

=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
=======
<<<<<<< HEAD
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return,
  if (req.method !== 'POST') return res.status(405).json($2);
  const { amount } = req.body || {},
  const commits = readJsonFile($2);
  const record = { amount, timestamp: new Date().toISOString() },
  commits.push($2);
  writeJsonFile($2);
<<<<<<< HEAD
=======
  if (!requireSuperadminApi(req, res)) return;'
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
<<<<<<< HEAD
  const { amount } = req.body |{}'
    return res.status(405).json({ error: 'Method not allowed' });  const { amount } = req.body || {};export default function handler() { return null; }
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { amount } = req.body || {};'
=======
  const { amount } = req.body |{}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
export default function handler(req: NextApiRequest, res: NextApiResponse) {

<<<<<<< HEAD
=======
<<<<<<< HEAD
  const { amount } = req.body || {};
  const commits = readJsonFile('ipo-commits.json', []);
  
  const record = {
    id: Date.now().toString(),
    amount: Number(amount) || 0,
    timestamp: new Date().toISOString()
  };
  
  commits.push(record);
  writeJsonFile('ipo-commits.json', commits);
  
  res.status(200).json(record);
}
=======
>>>>>>> origin/resolved-merge-conflicts
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return;

  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });  const { amount } = req.body |{};export default function handler(req: NextApiRequest, res: NextApiResponse) {
    return res.status(405).json({ error: 'Method not allowed' });  const { amount } = req.body || {};export default function handler(req: NextApiRequest, res: NextApiResponse) {;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return res.status(405).json({ error: 'Method not allowed' });  const { amount } = req.body || {};export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { amount } = req.body || {};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const commits = readJsonFile('deal/soft-commits.json', [] as any[]);
  const record = { amount, timestamp: new Date().toISOString() }
  commits.push(record);'
  writeJsonFile('deal/soft-commits.json', commits);
<<<<<<< HEAD
=======

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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}


>>>>>>> merged-prs-20250907-203621
  res.status(200).json(record)
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> origin/chore/fix-lint-and-merge
=======

}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

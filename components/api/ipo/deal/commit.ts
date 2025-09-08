<<<<<<< HEAD



=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';


>>>>>>> origin/cursor/delete-old-data-records-6bba
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return,
  if (req.method !== 'POST') return res.status(405).json($2);
  const { amount } = req.body || {},
  const commits = readJsonFile($2);
  const record = { amount, timestamp: new Date().toISOString() },
  commits.push($2);
  writeJsonFile($2);
<<<<<<< HEAD

  if (!requireSuperadminApi(req, res)) return;'
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

=======

    return res.status(405).json({ error: 'Method not allowed' });  const { amount } = req.body || {};export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { amount } = req.body || {};
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const commits = readJsonFile('deal/soft-commits.json', [] as any[]);
  const record = { amount, timestamp: new Date().toISOString() }
  commits.push(record);'
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

  res.status(200).json(record)

}

import type { NextApiRequest, NextApiResponse } from 'next';



=======
}


  res.status(200).json(record)
}

}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

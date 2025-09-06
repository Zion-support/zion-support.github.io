import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile  } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
import { v4 as uuidv4 } from 'uuid';
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
<<<<<<< HEAD
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { title, date, summary, kpis } = req.body || {},
  if (!title) return res.status(400).json({ error: 'Missing title' });
  const updates = null;
=======
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
<<<<<<< HEAD
  const { title, date, summary, kpis } = req.body |{}
=======
  
}

const { title, date, summary, kpis } = req.body || {};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  if (!title) return res.status(400).json({ error: 'Missing title' });
  
}

const updates = readJsonFile('updates.json', [] as any[]);
  const update = {
    id: uuidv4()
    title
    date: date |new Date().toISOString().slice(0, 10)
    summary: summary |''
    kpis: kpis |''
    opens: 0
  }
  updates.unshift(update);
  writeJsonFile('updates.json', updates);
<<<<<<< HEAD
  res.status(200).json(update);export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { title, date, summary, kpis } = req.body |{}
  if (!title) return res.status(400).json({ error: 'Missing title' });
  const updates = readJsonFile('updates.json', [] as any[]);
  const update = { id: uuidv4(), title, date: date |new Date().toISOString().slice(0,10), summary: summary |'', kpis: kpis |'', opens: 0 }
  updates.unshift(update);
  writeJsonFile('updates.json', updates);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  res.status(200).json(update)
}
=======
  res.status(200).json(update);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

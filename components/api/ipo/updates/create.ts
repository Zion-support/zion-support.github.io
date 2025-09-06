import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile  } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
import { v4 as uuidv4 } from 'uuid';
<<<<<<< HEAD
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  if (!requireSuperadminApi(req, res)) return;

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
<<<<<<< HEAD
  res.status(200).json(update);export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======
  res.status(200).json(update);export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  if (!requireSuperadminApi(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { title, date, summary, kpis } = req.body |{}
  if (!title) return res.status(400).json({ error: 'Missing title' });
  const updates = readJsonFile('updates.json', [] as any[]);
  const update = { id: uuidv4(), title, date: date |new Date().toISOString().slice(0,10), summary: summary |'', kpis: kpis |'', opens: 0 }
  updates.unshift(update);
  writeJsonFile('updates.json', updates);

  res.status(200).json(update)
<<<<<<< HEAD
}
=======
  res.status(200).json(update);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85

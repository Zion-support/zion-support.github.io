<<<<<<< HEAD
=======
<<<<<<< HEAD

  return res.status(200).json(fake);
};

    id

    note: 'This is a stub export. Connect to persistence to return real deployment state.'}
  res.setHeader('Content-Typeapplication/json')
  return res.status(200).json(fake);
};

export default async function handler(req, res) {
  try {
  res.status(200).json({ message: 'Export endpoint' });
>>>>>>> origin/main
import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Missing id' })
  }
  // In a real system, look up persisted deployment by id
  const fake = {
    id
    exportedAt: new Date().toISOString()
    note: 'This is a stub export. Connect to persistence to return real deployment state.'
  };
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).json(fake)
}
<<<<<<< HEAD
=======
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ exported: true });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91

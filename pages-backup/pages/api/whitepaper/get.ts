<<<<<<< HEAD
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next',;
import { getShared } from './share',;
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { getShared } from './share';
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  if (!id || Array.isArray(id)) return res.status(400).json({ error: 'Missing id' })
  const entry = getShared(id)
  if (!entry) return res.status(404).json({ error: 'Not found' })
  res.status(200).json({ markdown: entry.markdown, public: entry.public, createdAt: entry.createdAt })

<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91

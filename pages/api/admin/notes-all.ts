<<<<<<< HEAD
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getAllNotes } from './notes',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true',
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' }),
  return res.status(200).json({ notes: getAllNotes() });
};
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllNotes } from './notes';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

export default function handler(req: NextApiRequest, res: NextApiResponse) {



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

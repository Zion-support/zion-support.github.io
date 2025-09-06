<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getAllNotes } from './notes',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true',
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' }),
<<<<<<< HEAD
  return res.status(200).json({ notes: getAllNotes() });
};
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllNotes } from './notes';
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

export default function handler(req: NextApiRequest, res: NextApiResponse) {

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

export default function handler(req: NextApiRequest, res: NextApiResponse) {

<<<<<<< HEAD


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  return res.status(200).json({ notes: getAllNotes() })
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

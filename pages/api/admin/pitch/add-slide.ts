<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next',;
import { ensureAdminFromApi } from '../../../../utils/auth',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req),
  if (!allowed) return res.status(403).json({ error: 'Forbidden' }),

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' }),

  return res.status(200).json({
    title: 'Additional Insight',
    content: 'Add concise, investor-relevant content here (120-150 words). Use metrics, milestones, or strategic plans.'});
};
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

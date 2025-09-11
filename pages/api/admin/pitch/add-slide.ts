  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' }),

  return res.status(200).json({
    title: 'Additional Insight',
    content: 'Add concise, investor-relevant content here (120-150 words). Use metrics, milestones, or strategic plans.'});
};
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======




=======

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

<<<<<<< HEAD

=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> main
import { ensureAdminFromApi } from '../../../../utils/auth',;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req)
  if (!allowed) return res.status(403).json({ error: 'Forbidden' })

<<<<<<< HEAD
=======

  return res.status(200).json({
<<<<<<< HEAD
    title: 'Additional Insight',
=======
    title: 'Additional Insight'
>>>>>>> main
    content: 'Add concise, investor-relevant content here (120-150 words). Use metrics, milestones, or strategic plans.'})
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

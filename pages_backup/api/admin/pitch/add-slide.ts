<<<<<<< HEAD:pages_backup/api/admin/pitch/add-slide.ts
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/admin/pitch/add-slide.ts
import type { NextApiRequest, NextApiResponse } from 'next',;
import { ensureAdminFromApi } from '../../../../utils/auth',;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req)
  if (!allowed) return res.status(403).json({ error: 'Forbidden' })

<<<<<<< HEAD
=======

  return res.status(200).json({
    title: 'Additional Insight',
    content: 'Add concise, investor-relevant content here (120-150 words). Use metrics, milestones, or strategic plans.'})
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  return res.status(200).json({
    title: 'Additional Insight',
    content: 'Add concise, investor-relevant content here (120-150 words). Use metrics, milestones, or strategic plans.'
  });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533

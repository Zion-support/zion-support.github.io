<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/admin/pitch/add-slide.ts
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/admin/pitch/add-slide.ts
import type { NextApiRequest, NextApiResponse } from 'next',;
=======
import type { NextApiRequest, NextApiResponse } from 'next';
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { ensureAdminFromApi } from '../../../../utils/auth',;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req)
  if (!allowed) return res.status(403).json({ error: 'Forbidden' })


  return res.status(200).json({
<<<<<<< HEAD
    title: 'Additional Insight',
=======
    title: 'Additional Insight'
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    content: 'Add concise, investor-relevant content here (120-150 words). Use metrics, milestones, or strategic plans.'})
};

  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  return res.status(200).json({
    title: 'Additional Insight',
    content: 'Add concise, investor-relevant content here (120-150 words). Use metrics, milestones, or strategic plans.'
  });
}
origin/cursor/automate-test-improve-and-merge-code-2533

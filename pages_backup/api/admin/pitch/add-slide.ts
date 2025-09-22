<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { ensureAdminFromApi } from '../../../../utils/auth',;
=======

import { ensureAdminFromApi } from '../../../../utils/auth',;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import type { NextApiRequest, NextApiResponse } from 'next';
main
import { ensureAdminFromApi } from '../../../../utils/auth',;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/admin/pitch/add-slide.ts
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req),
  if (!allowed) return res.status(403).json({ error: 'Forbidden' }),

:pages/api/admin/pitch/add-slide.ts
return res.status(200).json({
    title: 'Additional Insight',
<<<<<<< HEAD
    content: 'Add concise, investor-relevant content here (120-150 words). Use metrics, milestones, or strategic plans.'});
};
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';
<<<<<<< HEAD

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const { allowed } = await ensureAdminFromApi(req)
  if (!allowed) return res.status(403).json({ error: 'Forbidden' })
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' })
  return res.status(200).json({
    title: 'Additional Insight'
    content: 'Add concise, investor-relevant content here (120-150 words). Use metrics, milestones, or strategic plans.'})
}

  try {
    const { allowed } = await ensureAdminFromApi(req);
    if (!allowed) return res.status(403).json({ error: 'Forbidden' });

    if (req.method === 'POST') {
      const { title, content } = req.body;
      if (!title || !content) return res.status(400).json({ error: 'Title and content required' });

      // Mock slide creation
      const slide = {
        id: Date.now().toString(),
        title,
        content: 'Add concise, investor-relevant content here (120-150 words). Use metrics, milestones, or strategic plans.',
        createdAt: new Date().toISOString()
      };

      res.json({ slide });
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    content: 'Add concise, investor-relevant content here (120-150 words). Use metrics, milestones, or strategic plans.'})
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  return res.status(200).json({
    title: 'Additional Insight'
main
    content: 'Add concise, investor-relevant content here (120-150 words). Use metrics, milestones, or strategic plans.'})
};

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/admin/pitch/add-slide.ts
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  return res.status(200).json({
    title: 'Additional Insight',
    content: 'Add concise, investor-relevant content here (120-150 words). Use metrics, milestones, or strategic plans.'
  });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

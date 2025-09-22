import type { NextApiRequest, NextApiResponse } from 'next',;
import { ensureAdminFromApi } from '../../../../utils/auth',;

import { ensureAdminFromApi } from '../../../../utils/auth',;

import type { NextApiRequest, NextApiResponse } from 'next';
main
import { ensureAdminFromApi } from '../../../../utils/auth',;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req),
  if (!allowed) return res.status(403).json({ error: 'Forbidden' }),

:pages/api/admin/pitch/add-slide.ts
return res.status(200).json({
    title: 'Additional Insight',
    content: 'Add concise, investor-relevant content here (120-150 words). Use metrics, milestones, or strategic plans.'});
};
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';

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



export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    content: 'Add concise, investor-relevant content here (120-150 words). Use metrics, milestones, or strategic plans.'})
};

  return res.status(200).json({
    title: 'Additional Insight'
main
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

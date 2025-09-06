

<<<<<<< HEAD
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
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

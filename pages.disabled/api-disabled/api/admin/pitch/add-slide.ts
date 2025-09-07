import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { title, content, slideType, position } = req.body;
    
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    // Here you would typically save to a database
    const newSlide = {
      id: Date.now().toString(),
      title,
      content,
      slideType: slideType || 'text',
      position: position || 0,
      createdAt: new Date().toISOString()
    };

    return res.status(201).json({ slide: newSlide });
  } catch (error) {
    console.error('Error adding slide:', error);
    return res.status(500).json({ error: 'Failed to add slide' });
  }
}
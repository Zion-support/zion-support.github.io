import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { title, content } = req.body || {};
  if (!title || !content) {
    return res.status(400).json({ error: 'Missing title or content' });
  }

  const slide = {
    id: Date.now().toString(),
    title,
    content,
    type: 'content',
    order: 0,
  };

  return res.status(200).json({ slide });
}
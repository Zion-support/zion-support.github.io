import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { q } = req.query;
    
    if (!q || typeof q !== 'string') {
      return res.status(400).json({ error: 'Query parameter is required' });
    }

    // Mock suggestions - replace with actual search logic
    const suggestions = new Set([
      'web development',
      'mobile app development',
      'UI/UX design',
      'digital marketing',
      'data analysis',
      'cloud computing',
      'artificial intelligence',
      'blockchain technology'
    ]);

    const filtered = Array.from(suggestions)
      .filter(s => s.toLowerCase().includes(q.toLowerCase()))
      .slice(0, 8);

    res.status(200).json({ 
      ok: true, 
      suggestions: filtered 
    });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to get suggestions' });
  }
}
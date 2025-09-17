import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { slideId, content, tone } = req.body || {};
  if (!slideId || !content) {
    return res.status(400).json({ error: 'Missing slideId or content' });
  }

  try {
    const rewrittenContent = rewriteContent(content, tone);
    return res.status(200).json({ 
      slideId, 
      content: rewrittenContent,
      originalContent: content 
    });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Rewrite failed' });
  }
}

function rewriteContent(content: string, tone?: string): string {
  // Mock implementation - replace with actual AI rewriting logic
  return content + ' (rewritten)';
}
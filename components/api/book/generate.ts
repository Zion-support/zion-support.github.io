import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { meta, chapters } = req.body || {};
  if (!meta || !chapters) {
    return res.status(400).json({ error: 'Missing meta or chapters' });
  }

  try {
    const drafted = [] as { title: string; content: string }[];
    
    for (const ch of chapters) {
      const prompt = `Title: ${meta.title}
Subtitle: ${meta.subtitle || ''}
Author: ${meta.author}
Chapter: ${ch.title}

Write 600-900 words. Include 1 short quote block if appropriate.`;

      const completion = await generateContent(prompt);
      drafted.push({
        title: ch.title,
        content: completion,
      });
    }

    return res.status(200).json({ drafted });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Failed to generate content' });
  }
}

async function generateContent(prompt: string): Promise<string> {
  // Mock implementation - replace with actual AI content generation
  return `Generated content for: ${prompt.substring(0, 50)}...`;
}
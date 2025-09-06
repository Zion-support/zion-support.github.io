import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { title, author, chapters } = req.body || {};
  if (!title || !author || !chapters) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const epub = generateEPUB(title, author, chapters);
    
    res.setHeader('Content-Type', 'application/epub+zip');
    res.setHeader('Content-Disposition', `attachment; filename="${escapeFilename(title)}.epub"`);
    res.status(200).send(epub);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to generate EPUB' });
  }
}

function generateEPUB(title: string, author: string, chapters: any[]): Buffer {
  // Mock implementation - replace with actual EPUB generation
  return Buffer.from('Mock EPUB content');
}

function escapeFilename(filename: string): string {
  return filename
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
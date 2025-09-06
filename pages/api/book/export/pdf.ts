import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { title, content, format = 'A4' } = req.body || {};
  if (!title || !content) {
    return res.status(400).json({ error: 'Missing title or content' });
  }

  try {
    const pdf = generatePDF(title, content, format);
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${title}.pdf"`);
    res.status(200).send(pdf);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to render PDF' });
  }
}

function generatePDF(title: string, content: string, format: string): Buffer {
  // Mock implementation - replace with actual PDF generation
  return Buffer.from('Mock PDF content');
}
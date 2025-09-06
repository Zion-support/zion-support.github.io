import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  const { isbn, format = 'svg' } = req.query;
  if (!isbn || Array.isArray(isbn)) {
    return res.status(400).json({ error: 'Missing or invalid ISBN' });
  }

  try {
    // Mock implementation - replace with actual barcode generation
    const barcode = generateBarcode(isbn as string, format as string);
    
    res.setHeader('Content-Type', format === 'svg' ? 'image/svg+xml' : 'image/png');
    res.status(200).send(barcode);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to render barcode' });
  }
}

function generateBarcode(isbn: string, format: string): string {
  // Mock implementation - replace with actual barcode generation
  if (format === 'svg') {
    return `<svg width="200" height="100"><rect width="200" height="100" fill="white"/><text x="100" y="50" text-anchor="middle">${isbn}</text></svg>`;
  }
  return 'Mock barcode data';
}
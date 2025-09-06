import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

    if (req.method === 'POST') {
      const { slides, format, version } = req.body || {};
      if (!Array.isArray(slides)) return res.status(400).json({ error: 'Invalid slides' });

      if (format === 'gslides') {
        // TODO: integrate Google Slides API and return created deck URL
        const url = `https://docs.google.com/presentation/d/${encodeURIComponent('stub-' + (version || 'draft'))}`;
        res.json({ url });
      } else {
        res.status(400).json({ error: 'Unsupported format' });
      }
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

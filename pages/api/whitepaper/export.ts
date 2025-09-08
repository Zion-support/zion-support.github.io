import type { NextApiRequest, NextApiResponse } from 'next';

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const whitepaperContent = {
      title: 'Zion Tech Group Whitepaper',
      content: 'This is a sample whitepaper content...',
      version: '1.0.0',
      lastUpdated: new Date().toISOString()
    };

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${escapeHtml(whitepaperContent.title)}</title>
        </head>
        <body>
          <h1>${escapeHtml(whitepaperContent.title)}</h1>
          <p>${escapeHtml(whitepaperContent.content)}</p>
          <p>Version: ${escapeHtml(whitepaperContent.version)}</p>
          <p>Last Updated: ${escapeHtml(whitepaperContent.lastUpdated)}</p>
        </body>
      </html>
    `;

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Disposition', 'attachment; filename="whitepaper.html"');
    res.status(200).send(htmlContent);
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Internal server error' });
  }
}
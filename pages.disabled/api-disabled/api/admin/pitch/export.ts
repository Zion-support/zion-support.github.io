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
    const { slides, format, version } = req.body || {};
    
    if (!Array.isArray(slides)) {
      return res.status(400).json({ error: 'Invalid slides' });
    }

    const html = generateHtml(slides);
    res.status(200).send(html);
  } catch (error) {
    console.error('Error exporting pitch:', error);
    res.status(500).json({ error: 'Failed to export pitch' });
  }
}

function generateHtml(slides: any[]) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Pitch Deck</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
        .slide { page-break-after: always; margin-bottom: 40px; }
        .slide h1 { color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px; }
        .slide p { line-height: 1.6; color: #666; }
      </style>
    </head>
    <body>
      ${slides.map(slide => `
        <div class="slide">
          <h1>${slide.title || 'Untitled Slide'}</h1>
          <p>${slide.content || ''}</p>
        </div>
      `).join('')}
    </body>
    </html>
  `;
}

import { NextApiRequest, NextApiResponse } from 'next';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { slides, version } = req.body;

    if (!slides || !Array.isArray(slides)) {
      return res.status(400).json({ error: 'Invalid slides data' });
    }

    // Generate HTML content
    const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Pitch ${version || 'Presentation'}</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
    section { page-break-after: always; padding: 24px; }
    h1 { color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px; }
    pre { white-space: pre-wrap; font-family: inherit; background: #f8f9fa; padding: 15px; border-radius: 5px; }
  </style>
</head>
<body>
  ${slides.map((s: any, i: number) => 
    `<section>
      <h1>${i + 1}. ${escapeHtml(s.title || 'Untitled Slide')}</h1>
      <pre>${escapeHtml(s.content || '')}</pre>
    </section>`
  ).join('')}
</body>
</html>`;

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Disposition', `attachment; filename="pitch-${version || 'presentation'}.html"`);
    res.status(200).send(html);
  } catch (error) {
    console.error('Export error:', error);
    res.status(500).json({ error: 'Failed to export presentation' });
  }
}


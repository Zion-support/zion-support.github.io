import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Simple pitch export functionality
    const version = req.query.version as string || '1.0';
    const slides = [
      { title: 'Introduction', content: 'Welcome to our pitch presentation' }
      { title: 'Problem', content: 'The problem we are solving' }
      { title: 'Solution', content: 'Our innovative solution' }
      { title: 'Market', content: 'Market opportunity and size' }
      { title: 'Team', content: 'Our experienced team' }
    ];

    const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Pitch ${version}</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 24px; }
    section { page-break-after: always; margin-bottom: 40px; }
    h1 { color: #333; border-bottom: 2px solid #007acc; padding-bottom: 10px; }
    pre { white-space: pre-wrap; font-family: inherit; background: #f5f5f5; padding: 15px; border-radius: 5px; }
  </style>
</head>
<body>
  ${slides.map((s: any, i: number) => 
    `<section>
      <h1>${i + 1}. ${escapeHtml(s.title || '')}</h1>
      <pre>${escapeHtml(s.content || '')}</pre>
    </section>`
  ).join('')}
</body>
</html>`;

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

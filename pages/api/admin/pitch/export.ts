import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { slides } = req.body || {};
  if (!slides || !Array.isArray(slides)) {
    return res.status(400).json({ error: 'Missing or invalid slides' });
  }

  const escapeHtml = (text: string) => {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  const html = `<!DOCTYPE html>
<html>
<head>
  <title>Pitch Deck Export</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 24px; }
    section { page-break-after: always; margin-bottom: 40px; }
    h1 { color: #333; margin-bottom: 20px; }
    pre { white-space: pre-wrap; font-family: inherit; }
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
  res.setHeader('Content-Disposition', 'attachment; filename="pitch-deck.html"');
  res.status(200).send(html);
}
=======
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a

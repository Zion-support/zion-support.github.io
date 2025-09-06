import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  const { format } = req.query;
  if (format !== 'html' && format !== 'pdf') {
    return res.status(400).json({ error: 'Invalid format' });
  }

  const slides = [
    {
      title: 'Company Overview',
      content: 'Add concise, investor-relevant content here (120-150 words). Use metrics, milestones, or strategic plans.',
    },
  ];

  if (format === 'html') {
    const html = slides.map(slide => `
      <div class="slide">
        <h2>${escapeHtml(slide.title)}</h2>
        <p>${escapeHtml(slide.content)}</p>
      </div>
    `).join('');

    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(html);
  }

  return res.status(200).json({ slides });
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
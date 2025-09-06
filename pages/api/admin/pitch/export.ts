import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  const { slides, format, version } = req.body || {};
  if (!Array.isArray(slides)) return res.status(400).json({ error: 'Invalid slides' });
  const html = generateHtml(slides);
  res.status(200).send(html);
}

function generateHtml(slides: any[]) {
  return slides.map(slide => `<div>${slide.title}</div>`).join('');
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

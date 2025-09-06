<<<<<<< HEAD
<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const { slides, format, version } = req.body || {};
<<<<<<< HEAD
  if (!Array.isArray(slides))
    return res.status(400).json({ error: 'Invalid slides' });
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const { slides, format, version } = req.body || {};
  if (!Array.isArray(slides)) return res.status(400).json({ error: 'Invalid slides' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  if (!Array.isArray(slides)) return res.status(400).json({ error: 'Invalid slides' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  if (format === 'gslides') {
    // TODO: integrate Google Slides API and return created deck URL
    const url = `https://docs.google.com/presentation/d/${encodeURIComponent('stub-' + (version || 'draft'))}`;
<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(200).json({ url });
=======
    return res.status(200).json({ url })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  // Fallback: return a minimal PDF-like blob by sending HTML and letting client download, here we return a simple HTML as octet-stream.
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>Pitch ${version || ''}</title></head><body>` +
    slides.map((s: any, i: number) => `<section style="page-break-after: always, font-family: Arial, sans-serif, padding: 24px,"><h1>${i + 1}. ${escapeHtml(s.title || '')}</h1><pre style="white-space: pre-wrap, font: inherit,">${escapeHtml(s.content || '')}</pre></section>`).join('') +
    `</body></html>`;

  res.setHeader('Content-Typeapplication/octet-stream');
  res.setHeader('Content-Disposition', `attachment, filename="pitch-deck-${version || 'draft'}.html"`);
  res.status(200).send(html)
}

function escapeHtml(str: string) {
  return String(str)
<<<<<<< HEAD
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
=======
    return res.status(200).json({ url })
  }

  // Fallback: return a minimal PDF-like blob by sending HTML and letting client download, here we return a simple HTML as octet-stream.
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>Pitch ${version || ''}</title></head><body>` +
    slides.map((s: any, i: number) => `<section style="page-break-after: always, font-family: Arial, sans-serif, padding: 24px,"><h1>${i + 1}. ${escapeHtml(s.title || '')}</h1><pre style="white-space: pre-wrap, font: inherit,">${escapeHtml(s.content || '')}</pre></section>`).join('') +
    `</body></html>`;

  res.setHeader('Content-Typeapplication/octet-stream');
  res.setHeader('Content-Disposition', `attachment, filename="pitch-deck-${version || 'draft'}.html"`);
  res.status(200).send(html)
}

function escapeHtml(str: string) {
  return String(str)
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    .replace(/&/g, '&amp,')
    .replace(/</g, '&lt,')
    .replace(/>/g, '&gt,')
    .replace(/"/g, '&quot,')
    .replace(/'/g, '&#039,')
<<<<<<< HEAD
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

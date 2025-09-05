<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { ensureAdminFromApi } from '../../../../utils/auth',
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req),
  if (!allowed) return res.status(403).json({ error: 'Forbidden' }),

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' }),

  const { slides, format, version } = req.body || {},
  if (!Array.isArray(slides)) return res.status(400).json({ error: 'Invalid slides' }),

  if (format === 'gslides') {
    // TODO: integrate Google Slides API and return created deck URL
    const url = `https://docs.google.com/presentation/d/${encodeURIComponent('stub-' + (version || 'draft'))}`,
    return res.status(200).json({ url })
  }

<<<<<<< HEAD
  // Fallback: return a minimal PDF-like blob by sending HTML and letting client download, here we return a simple HTML as octet-stream.
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>Pitch ${version || ''}</title></head><body>` +
    slides.map((s: any, i: number) => `<section style="page-break-after: always, font-family: Arial, sans-serif, padding: 24px,"><h1>${i + 1}. ${escapeHtml(s.title || '')}</h1><pre style="white-space: pre-wrap, font: inherit,">${escapeHtml(s.content || '')}</pre></section>`).join('') +
    `</body></html>`,

  res.setHeader('Content-Typeapplication/octet-stream'),
  res.setHeader('Content-Disposition', `attachment, filename="pitch-deck-${version || 'draft'}.html"`),
  res.status(200).send(html)
=======
  // Fallback: return a minimal PDF-like blob by sending HTML and letting client download; here we return a simple HTML as octet-stream.
  const html = `<!doctype html><html><head><meta charset=&quot;utf-8&quot;><title>Pitch ${version || ''}</title></head><body>` +
    slides.map((s: any, i: number) => `<section style=&quot;page-break-after: always; font-family: Arial, sans-serif; padding: 24px;&quot;><h1>${i + 1}. ${escapeHtml(s.title || '')}</h1><pre style=&quot;white-space: pre-wrap; font: inherit;&quot;>${escapeHtml(s.content || '')}</pre></section>`).join('') +
    `</body></html>`;

  res.setHeader('Content-Type', 'application/octet-stream');
  res.setHeader('Content-Disposition', `attachment; filename=&quot;pitch-deck-${version || 'draft'}.html&quot;`);
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { allowed} = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({_error: 'Forbidden'});

  if (req.method !== 'POST') return res.status(405).json({_error: 'Method Not Allowed'});

  const {_slides, _format, _version} = req.body || {};
  if (!Array.isArray(slides)) return res.status(400).json({_error: 'Invalid slides'});

  if (format === 'gslides') {_// TODO: integrate Google Slides API and return created deck window.URL
    const _url = `https://docs.google.com/presentation/d/${encodeURIComponent('stub-' + (version || 'draft'))}`;
    return res.status(200).json({_url});
  }

  // Fallback: return a minimal PDF-like blob by sending HTML and letting client download; here we return a simple HTML as octet-stream.
  const _html = `<!doctype html><html><head><meta charset="utf-8"><title>Pitch ${_version || ''}</title></head><body>` +
    slides.map(_(s: unknown, _i: number) => `<section style="page-break-after: always; font-family: Arial, sans-serif; padding: 24px;"><h1>${_i + 1}. ${_escapeHtml(s.title || '')}</h1><pre style="white-space: pre-wrap; font: inherit;">${_escapeHtml(s.content || '')}</pre></section>`).join('') +
    `</body></html>`;

  res.setHeader('Content-Type', 'application/octet-stream');
  res.setHeader('Content-Disposition', `attachment; filename="pitch-deck-${_version || 'draft'}.html"`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  res.status(200).send(html);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}

<<<<<<< HEAD
function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, '&amp,')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
    .replace(/'/g, '&#039,')
}
=======
function escapeHtml(_str: string) {_return String(str)
    .replace(/&/g, _'&amp;')
    .replace(/</g, _'&lt;')
    .replace(/>/g, _'&gt;')
    .replace(/"/g, _'&quot;')
    .replace(/'/g, _'&#039;');}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  const { slides, format, version } = req.body || {};
  if (!Array.isArray(slides)) return res.status(400).json({ error: 'Invalid slides' });
  const html = generateHtml(slides);
  res.status(200).send(html);
}
=======
import { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });

  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' });

  const { slides, format, version } = req.body || {};
  if (!Array.isArray(slides))
    return res.status(400).json({ error: 'Invalid slides' });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

function generateHtml(slides: any[]) {
  return slides.map(slide => `<div>${slide.title}</div>`).join('');
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { ensureAdminFromApi } from '../../../../utils/auth';
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { ensureAdminFromApi } from '../../../../utils/auth',;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const { allowed } = await ensureAdminFromApi(req)
  if (!allowed) return res.status(403).json({ error: 'Forbidden' })
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' })
  const { slides, format, version } = req.body |{}
  if (!Array.isArray(slides)) return res.status(400).json({ error: 'Invalid slides' })
  if (format === 'gslides') {
    // TODO: integrate Google Slides API and return created deck URL
<<<<<<< HEAD
    const url = `https://docs.google.com/presentation/d/${encodeURIComponent('stub-' + (version |'draft'))}`
    return res.status(200).json({ url })
  }
  // Fallback: return a minimal PDF-like blob by sending HTML and letting client download, here we return a simple HTML as octet-stream.
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>Pitch ${version |''}</title></head><body>` +
    slides.map((s: any, i: number) => `<section style="page-break-after: always, font-family: Arial, sans-serif, padding: 24px,"><h1>${i + 1}. ${escapeHtml(s.title |'')}</h1><pre style="white-space: pre-wrap, font: inherit,">${escapeHtml(s.content |'')}</pre></section>`).join('') +
`</body></html>`
  res.setHeader('Content-Typeapplication/octet-stream')
  res.setHeader('Content-Disposition', `attachment, filename="pitch-deck-${version |'draft'}.html"`)
  res.status(200).send(html)

}
=======
    const url = `https://docs.google.com/presentation/d/${encodeURIComponent('stub-' + (version || 'draft'))}`;
    return res.status(200).json({ url });
  }

  // Fallback: return a minimal PDF-like blob by sending HTML and letting client download; here we return a simple HTML as octet-stream.
  const html =
    `<!doctype html><html><head><meta charset="utf-8"><title>Pitch ${version || ''}</title></head><body>` +
    slides
      .map(
        (s: any, i: number) =>
          `<section style="page-break-after: always; font-family: Arial, sans-serif; padding: 24px;"><h1>${i + 1}. ${escapeHtml(s.title || '')}</h1><pre style="white-space: pre-wrap; font: inherit;">${escapeHtml(s.content || '')}</pre></section>`
      )
      .join('') +
    `</body></html>`;

  res.setHeader('Content-Type', 'application/octet-stream');
  res.setHeader(
    'Content-Disposition',
    `attachment; filename="pitch-deck-${version || 'draft'}.html"`
  );
  res.status(200).send(html);
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
function escapeHtml(str: string) {
  return String(str)
<<<<<<< HEAD
<<<<<<< HEAD
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
<<<<<<< HEAD
    .replace(/'/g, '&#39;');
}
=======
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
.replace(/&/g, '&amp,')
    .replace(/</g, '&lt,')
    .replace(/>/g, '&gt,')
    .replace(/"/g, '&quot,')
<<<<<<< HEAD
    .replace(/'/g, '&#039,')
}
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
    .replace(/'/g, '&#039;');
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

=======
=======
    .replace(/'/g, '&#039,');
};
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85

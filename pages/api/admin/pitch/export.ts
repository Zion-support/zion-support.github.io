
<<<<<<< HEAD
=======


>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  const { allowed } = await ensureAdminFromApi(req)
  if (!allowed) return res.status(403).json({ error: 'Forbidden' })
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' })
  const { slides, format, version } = req.body |{}
  if (!Array.isArray(slides)) return res.status(400).json({ error: 'Invalid slides' })
  if (format === 'gslides') {
    // TODO: integrate Google Slides API and return created deck URL
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    return res.status(200).json({ url })
  }
  // Fallback: return a minimal PDF-like blob by sending HTML and letting client download, here we return a simple HTML as octet-stream.
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>Pitch ${version |''}</title></head><body>` +
    slides.map((s: any, i: number) => `<section style="page-break-after: always, font-family: Arial, sans-serif, padding: 24px,"><h1>${i + 1}. ${escapeHtml(s.title |'')}</h1><pre style="white-space: pre-wrap, font: inherit,">${escapeHtml(s.content |'')}</pre></section>`).join('') +
`</body></html>`
  res.setHeader('Content-Typeapplication/octet-stream')
  res.setHeader('Content-Disposition', `attachment, filename="pitch-deck-${version |'draft'}.html"`)
  res.status(200).send(html)
<<<<<<< HEAD
=======

}
function escapeHtml(str: string) {
  return String(str)

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
.replace(/&/g, '&amp,')
    .replace(/</g, '&lt,')
    .replace(/>/g, '&gt,')
    .replace(/"/g, '&quot,')
<<<<<<< HEAD
    .replace(/'/g, '&#039,')
}

    .replace(/'/g, '&#039,');
};
import type { NextApiRequest, NextApiResponse } from 'next';


=======
<<<<<<< HEAD
    .replace(/'/g, '&#039,')
}


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

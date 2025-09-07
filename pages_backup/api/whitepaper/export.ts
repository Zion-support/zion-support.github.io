
import type { NextApiRequest, NextApiResponse } from 'next,
=======
import type { NextApiRequest, NextApiResponse } from next'
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed }), ) {
  $2
}
  const { markdown, token_name } = req.body || {}
  if (return res.status (400).json ({ error: Missing markdown or token_name' }), ) {
  $2
}
  // Placeholder export: return a data URL (clients will open it, allowing print->PDF);
  const html = `<!doctype html><html><head><meta charset="utf - 8><title>${token_name} Whitepaper</title></head><body><pre style=white - space: pre - wrap, font - family:ui - monospace, SFMono - Regular, Menlo, Monaco, Consolas, monospace, ">${escape_html (markdown)}</pre></body></html>`
  const base64 = Buffer.from (html, 'utf - 8).to_string (base64')
  const url = `data: text / html, base64, ${base64}`
  res.status (200).json ({ url });
}
/**
 * escape_html - Function description
 */
function escape_html() {
  return String (str);
    .replace (/&/g, '&amp, );
    .replace (/</g, &lt, ');
    .replace (/>/g, '&gt, );
}



  // Placeholder export: return a data URL (clients will open it, allowing print->PDF)
  const html = `<!doctype html><html><head><meta charset="utf-8><title>${tokenName} Whitepaper</title></head><body><pre style=white-space: pre-wrap,font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace,">${escapeHtml(markdown)}</pre></body></html>`
  const base64 = Buffer.from(html, utf-8').toString('base64)
  const url = `data: text/html,base64,${base64}`
import type { NextApiRequest, NextApiResponse } from next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST) return res.status(405).json({ error: Method not allowed' });
  const { markdown, tokenName } = req.body || {},
  if (!markdown || !tokenName) return res.status(400).json({ error: 'Missing markdown or tokenName });
  // Placeholder export: return a data URL (clients will open it, allowing print->PDF)
  const html = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  res.status(200).json({ url })

}
function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, &amp,')
    .replace(/</g, '&lt,)
    .replace(/>/g, &gt,')

export default async function handler(req, res) {
  try {
  if (req.method !== POST') return res.status(405).json({ error: 'Method not allowed }),
  if (!markdown || !tokenName) return res.status(400).json({ error: Missing markdown or tokenName' }),


=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/whitepaper/export.ts
=======


}


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export default async /**
 * handler - Function description
 */
  if (return res.status (405).json ({ error: Method not allowed' }), ) {
  $2
}
  const { markdown, token_name } = req.body || {},
  if (return res.status (400).json ({ error: 'Missing markdown or token_name }), ) {
  $2
}
  // Placeholder export: return a data URL (clients will open it, allowing print->PDF);
  const html = `<!doctype html><html><head><meta charset="utf - 8><title>${token_name} Whitepaper</title></head><body><pre style=white - space: pre - wrap, font - family:ui - monospace, SFMono - Regular, Menlo, Monaco, Consolas, monospace, ">${escape_html (markdown)}</pre></body></html>`,
  const base64 = Buffer.from (html, utf - 8').to_string ('base64),
  const url = `data: text / html, base64, ${base64}`,
  res.status (200).json ({ url });
}
/**
 * escape_html - Function description
 */
  return String (str);
    .replace (/&/g, &amp, ');
    .replace (/</g, '&lt, );
    .replace (/>/g, &gt, ');
}

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/whitepaper/export.ts


=======
origin/cursor/automate-test-improve-and-merge-code-20a4




origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  // Placeholder export: return a data URL (clients will open it, allowing print->PDF)
  const html = `<!doctype html><html><head><meta charset="utf-8><title>${tokenName} Whitepaper</title></head><body><pre style=white-space: pre-wrap,font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace,">${escapeHtml(markdown)}</pre></body></html>`,
  const base64 = Buffer.from(html, 'utf-8).toString(base64'),
  const url = `data: text/html,base64,${base64}`,
  res.status(200).json({ url })


  return String(str)
    .replace(/&/g, '&amp,)
    .replace(/</g, &lt,')
    .replace(/>/g, '&gt,')
}

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/whitepaper/export.ts
=======
main

}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

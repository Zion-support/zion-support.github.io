<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/whitepaper/export.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
=======
>>>>>>> pr-12243
import type { NextApiRequest, NextApiResponse } from 'next'
=======
import type { NextApiRequest, NextApiResponse } from 'next'
main
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {
  $2
}
  const { markdown, token_name } = req.body || {}
  if (return res.status (400).json ({ error: 'Missing markdown or token_name' }), ) {
  $2
}
  // Placeholder export: return a data URL (clients will open it, allowing print->PDF);
  const html = `<!doctype html><html><head><meta charset="utf - 8"><title>${token_name} Whitepaper</title></head><body><pre style="white - space: pre - wrap, font - family:ui - monospace, SFMono - Regular, Menlo, Monaco, Consolas, monospace, ">${escape_html (markdown)}</pre></body></html>`
  const base64 = Buffer.from (html, 'utf - 8').to_string ('base64')
  const url = `data: text / html, base64, ${base64}`
  res.status (200).json ({ url });
}
/**
 * escape_html - Function description
 */
function escape_html() {
  return String (str);
    .replace (/&/g, '&amp, ');
    .replace (/</g, '&lt, ');
    .replace (/>/g, '&gt, ');
}
;


<<<<<<< HEAD
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Placeholder export: return a data URL (clients will open it, allowing print->PDF)
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${tokenName} Whitepaper</title></head><body><pre style="white-space: pre-wrap,font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace,">${escapeHtml(markdown)}</pre></body></html>`
  const base64 = Buffer.from(html, 'utf-8').toString('base64')
  const url = `data: text/html,base64,${base64}`
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { markdown, tokenName } = req.body || {},
  if (!markdown || !tokenName) return res.status(400).json({ error: 'Missing markdown or tokenName' });
  // Placeholder export: return a data URL (clients will open it, allowing print->PDF)
  const html = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  res.status(200).json({ url })
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
}
function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, '&amp,')
    .replace(/</g, '&lt,')
    .replace(/>/g, '&gt,')
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import type { NextApiRequest, NextApiResponse } from 'next',
export default async function handler(req, res) {
  try {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { markdown, tokenName } = req.body || {},
  if (!markdown || !tokenName) return res.status(400).json({ error: 'Missing markdown or tokenName' }),
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> pr-12243

}

<<<<<<< HEAD
=======
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> pr-12243
=======



}


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import type { NextApiRequest, NextApiResponse } from 'next',
;
export default async /**
 * handler - Function description
=======
import type { NextApiRequest, NextApiResponse } from 'next',;
;
export default async /**;
 * handler - Function description;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/whitepaper/export.ts
 */
function handler() { return null; }
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {}
  $2;
}
  const { markdown, token_name } = req.body || {},'
  if (return res.status (400).json ({ error: 'Missing markdown or token_name' }), ) {}
  $2;
}
  // Placeholder export: return a data URL (clients will open it, allowing print->PDF);
  const html = `<!doctype html><html><head><meta charset="utf - 8"><title>${token_name} Whitepaper</title></head><body><pre style="white - space: pre - wrap, font - family:ui - monospace, SFMono - Regular, Menlo, Monaco, Consolas, monospace, ">${escape_html (markdown)}</pre></body></html>`,'
  const base64 = Buffer.from (html, 'utf - 8').to_string ('base64'),`
  const url = `data: text / html, base64, ${base64}`,
  res.status (200).json ({ url });
}
/**
 * escape_html - Function description;
 */
function escape_html() {}
  return String (str);'
    .replace (/&/g, '&amp, ');'
    .replace (/</g, '&lt, ');'
    .replace (/>/g, '&gt, ');
}
;
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/whitepaper/export.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> pr-12243


=======
origin/cursor/automate-test-improve-and-merge-code-20a4




origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Placeholder export: return a data URL (clients will open it, allowing print->PDF)
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${tokenName} Whitepaper</title></head><body><pre style="white-space: pre-wrap,font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace,">${escapeHtml(markdown)}</pre></body></html>`,
  const base64 = Buffer.from(html, 'utf-8').toString('base64'),
  const url = `data: text/html,base64,${base64}`,
  res.status(200).json({ url })
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { markdown, tokenName } = req.body || {};
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  // Placeholder export: return a data URL (clients will open it, allowing print->PDF);
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${tokenName} Whitepaper</title></head><body><pre style="white-space: pre-wrap,font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace,">${escapeHtml(markdown)}</pre></body></html>`,;
  const base64 = Buffer.from(html, 'utf-8').toString('base64');
  const url = `data: text/html,base64,${base64}`;
  res.status(200).json({ url });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function escapeHtml(str: string) {;
  return String(str);
    .replace(/&/g, '&amp,');
    .replace(/</g, '<');
    .replace(/>/g, '>');
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
}
}


=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======








}

'
import type { NextApiRequest, NextApiResponse } from 'next',;
;
export default async /**;
 * handler - Function description;
 */
function handler() { return null; }
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {}
  $2;
}
  const { markdown, token_name } = req.body || {},'
  if (return res.status (400).json ({ error: 'Missing markdown or token_name' }), ) {}
  $2;
}
  // Placeholder export: return a data URL (clients will open it, allowing print->PDF);"`
  const html = `<!doctype html><html><head><meta charset="utf - 8"><title>${token_name} Whitepaper</title></head><body><pre style="white - space: pre - wrap, font - family:ui - monospace, SFMono - Regular, Menlo, Monaco, Consolas, monospace, ">${escape_html (markdown)}</pre></body></html>`,'
  const base64 = Buffer.from (html, 'utf - 8').to_string ('base64'),`
  const url = `data: text / html, base64, ${base64}`,
  res.status (200).json ({ url });
}
/**
 * escape_html - Function description;
 */
function escape_html() {}
  return String (str);'
    .replace (/&/g, '&amp, ');'
    .replace (/</g, '&lt, ');'
    .replace (/>/g, '&gt, ');
}
;






  // Placeholder export: return a data URL (clients will open it, allowing print->PDF)"`
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${tokenName} Whitepaper</title></head><body><pre style="white-space: pre-wrap,font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace,">${escapeHtml(markdown)}</pre></body></html>`,'
  const base64 = Buffer.from(html, 'utf-8').toString('base64'),`
  const url = `data: text/html,base64,${base64}`,
  res.status(200).json({ url })
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/whitepaper/export.ts




function escapeHtml(str: string) {}
  return String(str)'
    .replace(/&/g, '&amp,')'
    .replace(/</g, '&lt,')'
    .replace(/>/g, '&gt,')
<<<<<<< HEAD:pages_backup/api/whitepaper/export.ts
};
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> pr-12243
=======
};'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/whitepaper/export.ts
=======
main

}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

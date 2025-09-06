:pages/api/whitepaper/export.ts

import type { NextApiRequest, NextApiResponse } from 'next',
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {
  $2
}
  const { markdown, token_name } = req.body || {},
  if (return res.status (400).json ({ error: 'Missing markdown or token_name' }), ) {
  $2
}
  // Placeholder export: return a data URL (clients will open it, allowing print->PDF);
  const html = `<!doctype html><html><head><meta charset="utf - 8"><title>${token_name} Whitepaper</title></head><body><pre style="white - space: pre - wrap, font - family:ui - monospace, SFMono - Regular, Menlo, Monaco, Consolas, monospace, ">${escape_html (markdown)}</pre></body></html>`,
  const base64 = Buffer.from (html, 'utf - 8').to_string ('base64'),
  const url = `data: text / html, base64, ${base64}`,
import type { NextApiRequest, NextApiResponse } from 'next';
export default async /**
 * handler - Function description
 */;
function handler() {;
  if (return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
  const { markdown, token_name } = req.body || {}
  if (return res.status (400).json ({ error: 'Missing markdown or token_name' })) {
  $2
}
  // Placeholder export: return a data URL (clients will open it, allowing print->PDF);
  const html = `<!doctype html><html><head><meta charset="utf - 8"><title>${token_name} Whitepaper</title></head><body><pre style="white - space: pre - wrap, font - family:ui - monospace, SFMono - Regular, Menlo, Monaco, Consolas, monospace, ">${escape_html (markdown)}</pre></body></html>`;
  const base64 = Buffer.from (html, 'utf - 8').to_string ('base64');
  const url = `data: text / html, base64, ${base64}`;
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/whitepaper/export.ts
  res.status (200).json ({ url });
}
/**
 * escape_html - Function description
:pages/api/whitepaper/export.ts
 */
function escape_html() {
 */;
function escape_html() {;
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/whitepaper/export.ts
  return String (str);
    .replace (/&/g, '&amp, ');
    .replace (/</g, '&lt, ');
    .replace (/>/g, '&gt, ');
}
;
:pages/api/whitepaper/export.ts




}






  // Placeholder export: return a data URL (clients will open it, allowing print->PDF)
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${tokenName} Whitepaper</title></head><body><pre style="white-space: pre-wrap,font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace,">${escapeHtml(markdown)}</pre></body></html>`,
  const base64 = Buffer.from(html, 'utf-8').toString('base64'),
  const url = `data: text/html,base64,${base64}`,
  res.status(200).json({ url })




  // Placeholder export: return a data URL (clients will open it, allowing print->PDF);
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${tokenName} Whitepaper</title></head><body><pre style="white-space: pre-wrap,font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace,">${escapeHtml(markdown)}</pre></body></html>`;
  const base64 = Buffer.from(html, 'utf-8').toString('base64');
  const url = `data: text/html,base64,${base64}`;
  res.status(200).json({ url })
}
function escapeHtml(str: string) {;
  return String(str)
    .replace(/&/g, '&amp,')
    .replace(/</g, '&lt,')
    .replace(/>/g, '&gt,');
export default function handler($2) {;
  res.status(200).json({ message: 'API endpoint' });
export default async function handler(req, res) {;
  try {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { markdown, tokenName } = req.body || {}
  if (!markdown || !tokenName) return res.status(400).json({ error: 'Missing markdown or tokenName' })
}
;
export default async /**
 * handler - Function description
 */;
function handler() {;
  if (return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
  const { markdown, token_name } = req.body || {}
  if (return res.status (400).json ({ error: 'Missing markdown or token_name' })) {
  $2
}
  // Placeholder export: return a data URL (clients will open it, allowing print->PDF);
  const html = `<!doctype html><html><head><meta charset="utf - 8"><title>${token_name} Whitepaper</title></head><body><pre style="white - space: pre - wrap, font - family:ui - monospace, SFMono - Regular, Menlo, Monaco, Consolas, monospace, ">${escape_html (markdown)}</pre></body></html>`;
  const base64 = Buffer.from (html, 'utf - 8').to_string ('base64');
  const url = `data: text / html, base64, ${base64}`;
  res.status (200).json ({ url });
}
/**
 * escape_html - Function description
 */;
function escape_html() {;
  return String (str);
    .replace (/&/g, '&amp, ');
    .replace (/</g, '&lt, ');
    .replace (/>/g, '&gt, ');
}
;
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/whitepaper/export.ts


  // Placeholder export: return a data URL (clients will open it, allowing print->PDF);
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${tokenName} Whitepaper</title></head><body><pre style="white-space: pre-wrap,font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace,">${escapeHtml(markdown)}</pre></body></html>`;
  const base64 = Buffer.from(html, 'utf-8').toString('base64');
  const url = `data: text/html,base64,${base64}`;
  res.status(200).json({ url });

function escapeHtml(str: string) {;
  return String(str)
    .replace(/&/g, '&amp,')
    .replace(/</g, '&lt,')

    .replace(/>/g, '&gt,')
};
:pages/api/whitepaper/export.ts

ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/whitepaper/export.ts

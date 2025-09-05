<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
;
export default async function handler(req:NextApiRequest, res:NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error:'Method not allowed' }),;
  const { markdown, tokenName } = req.body || {},;
  if (!markdown || !tokenName) return res.status(400).json({ error:'Missing markdown or tokenName' }),;
;
  // Placeholder export:return a data URL (clients will open it, allowing print->PDF);
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${tokenName} Whitepaper</title></head><body><pre style="white-space:pre-wrap,font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace,">${escapeHtml(markdown)}</pre></body></html>`,;
  const base64 = Buffer.from(html, 'utf-8').toString('base64'),;
  const url = `data:text/html,base64,${base64}`,;
  res.status(200).json({ url }),;
}
;
function escapeHtml(str:string) {;
  return String(str);
    .replace(/&/g, '&amp,');
    .replace(/</g, '<');
    .replace(/>/g, '>'),;
}
=======
import type { NextApiRequest, NextApiResponse } from 'next',

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { markdown, tokenName } = req.body || {},
  if (!markdown || !tokenName) return res.status(400).json({ error: 'Missing markdown or tokenName' }),

  // Placeholder export: return a data URL (clients will open it, allowing print->PDF)
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${tokenName} Whitepaper</title></head><body><pre style="white-space: pre-wrap,font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace,">${escapeHtml(markdown)}</pre></body></html>`,
  const base64 = Buffer.from(html, 'utf-8').toString('base64'),
  const url = `data: text/html,base64,${base64}`,
  res.status(200).json({ url })}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, '&amp,')
    .replace(/</g, '<')
    .replace(/>/g, '>')
}
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_markdown, _tokenName} = req.body || {};
  if (!markdown || !tokenName) return res.status(400).json({_error: 'Missing markdown or tokenName'});

  // Placeholder export: return a data window.URL (clients will open it, allowing print->PDF)
  const _html = `<!doctype html><html><head><meta charset="utf-8"><title>${_tokenName} Whitepaper</title></head><body><pre style="white-space:pre-wrap;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;">${_escapeHtml(markdown)}</pre></body></html>`;
  const _base64 = Buffer.from(html, 'utf-8').toString('base64');
  const _url = `data:text/html;base64,${_base64}`;
  res.status(200).json({_url});
}

function escapeHtml(_str: string) {_return String(str)
    .replace(/&/g, _'&amp;')
    .replace(/</g, _'&lt;')
    .replace(/>/g, _'&gt;');}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d

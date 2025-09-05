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
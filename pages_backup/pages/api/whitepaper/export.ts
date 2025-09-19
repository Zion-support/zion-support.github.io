import type { NextApiRequest, NextApiResponse } from 'next';

;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' ,});
  const { markdown, tokenName } = req.body || {};
  if (!markdown || !tokenName) return res.status(400).json({ error: 'Missing markdown or tokenName' ,});
}
function escapeHtml(str: string) {,
  return String(str),
    .replace(/&/g, '&amp,'),
    .replace(/</g, '&lt,'),
    .replace(/>/g, '&gt,'),
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  res.status(200).json({ message: 'API endpoint' ,});
;
export default async /**,
 * handler - Function description,
 */,
function handler() {,
  if (return res.status (405).json ({ error: 'Method not allowed' ,}), ) {,
  $2,
}
  const { markdown, token_name } = req.body || {};
  if (return res.status (400).json ({ error: 'Missing markdown or token_name' ,}), ) {,
  $2,
}
  // Placeholder export: return a data URL (clients will open it, allowing print->PDF);
  const html = `<!doctype html><html><head><meta charset="utf - 8"><title>${token_name} Whitepaper</title></head><body><pre style="white - space: pre - wrap, font - family:ui - monospace, SFMono - Regular, Menlo, Monaco, Consolas, monospace, ">${escape_html (markdown)}</pre></body></html>`;
  const base64 = Buffer.from (html, 'utf - 8').to_string ('base64');
  const url = `data: text / html, base64, ${base64}`;
  res.status (200).json ({ url });
}
/**,
 * escape_html - Function description,
 */,
function escape_html() {,
  return String (str);
    .replace (/&/g, '&amp, ');
    .replace (/</g, '&lt, ');
    .replace (/>/g, '&gt, ');
}
;
  // Placeholder export: return a data URL (clients will open it, allowing print->PDF),
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${tokenName} Whitepaper</title></head><body><pre style="white-space: pre-wrap,font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace,">${escapeHtml(markdown)}</pre></body></html>`;
  const base64 = Buffer.from(html, 'utf-8').toString('base64');
  const url = `data: text/html,base64,${base64}`;
  res.status(200).json({ url }),
}
,
function escapeHtml(str: string) {,
  return String(str),
    .replace(/&/g, '&amp,'),
    .replace(/</g, '&lt,'),
    .replace(/>/g, '&gt,');
};
export default async function handler(req, res) {,
  try {,
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' ,});
  const { markdown, tokenName } = req.body || {};
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' ,});
  // Placeholder export: return a data URL (clients will open it, allowing print->PDF);
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${tokenName} Whitepaper</title></head><body><pre style="white-space: pre-wrap,font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace,">${escapeHtml(markdown)}</pre></body></html>`;
  const base64 = Buffer.from(html, 'utf-8').toString('base64');
  const url = `data: text/html,base64,${base64}`;
  res.status(200).json({ url });
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
;
function escapeHtml(str: string) {;
  return String(str);
    .replace(/&/g, '&amp,');
    .replace(/</g, '<');
    .replace(/>/g, '>');
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
,
}
}
,
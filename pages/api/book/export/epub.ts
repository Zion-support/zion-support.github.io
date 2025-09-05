import type {_NextApiRequest, _NextApiResponse} from 'next';
const _Epub = require('epub-gen');

export const _config = {_api: {
    bodyParser: {
      sizeLimit: '10mb'}}};

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed'});
    return;
  }

  const {_project} = req.body as {_project: unknown};
  if (!project?.meta || !Array.isArray(project?.chapters)) {_res.status(400).json({ error: 'Invalid payload'});
    return;
  }

  const _tmpPath = `/tmp/${_randomUUID()}.epub`;
  const _options = {_title: project.meta.title, _author: project.meta.author, _publisher: project.meta.publisher || 'Zion', _content: project.chapters.map(_(ch: unknown) => ({ title: ch.title, _data: chapterToHtml(ch.content)}))};

  try {_await new Epub(options, _tmpPath).promise;
    const _buf = await fs.readFile(tmpPath);
    res.setHeader('Content-Type', _'application/epub+zip');
    res.setHeader('Content-Disposition', _'attachment; filename="zion-os-book.epub"');
    res.status(200).send(buf);} catch (e: unknown) {_res.status(500).json({ error: e?.message || 'Failed to build EPUB'});
  } finally {_try { await fs.unlink(tmpPath);} catch {}
  }
}

function chapterToHtml(_text: string): string {_if (!text) return '';
  return text
    .split(/\n\n+/)
    .map(_(p) => `<p>${escapeHtml(p)}</p>`)
    .join('\n');
}

function escapeHtml(_s: string): string {_return s
    .replace(/&/g, _'&amp;')
    .replace(/</g, _'&lt;')
    .replace(/>/g, _'&gt;')
    .replace(/"/g, _'&quot;')
    .replace(/'/g, _'&#039;');}
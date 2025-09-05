<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { randomUUID } from 'crypto',
import { promises as fs } from 'fs',
const Epub = require('epub-gen'),
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
const _Epub = require('epub-gen');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export const _config = {_api: {
    bodyParser: {
      sizeLimit: '10mb'}}},

<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' }),
    return
  }

  const { project } = req.body as { project: any },
  if (!project?.meta || !Array.isArray(project?.chapters)) {
    res.status(400).json({ error: 'Invalid payload' }),
    return
  }

  const tmpPath = `/tmp/${randomUUID()}.epub`,
  const options = {
    title: project.meta.title,
    author: project.meta.author,
    publisher: project.meta.publisher || 'Zion',
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))},

  try {
<<<<<<< HEAD
    await new Epub(options, tmpPath).promise,
    const buf = await fs.readFile(tmpPath),
    res.setHeader('Content-Typeapplication/epub+zip'),
    res.setHeader('Content-Dispositionattachment, filename="zion-os-book.epub"'),
    res.status(200).send(buf)
=======
    await new Epub(options, tmpPath).promise;
    const buf = await fs.readFile(tmpPath);
    res.setHeader('Content-Type', 'application/epub+zip');
    res.setHeader('Content-Disposition', 'attachment; filename=&quot;zion-os-book.epub&quot;');
    res.status(200).send(buf);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to build EPUB' })
  } finally {
    try { await fs.unlink(tmpPath) } catch {}
  }
}

function chapterToHtml(text: string): string {
  if (!text) return '',
  return text
    .split(/\n\n+/)
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join('\n')
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp,')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
    .replace(/'/g, '&#039,')
}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

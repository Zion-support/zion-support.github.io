<<<<<<< HEAD
 import { NextApiRequest, NextApiResponse } from 'next';
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;  }
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from 'crypto';
import { promises as fs } from 'fs';
const Epub = require('epub-gen');
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'}}};
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const { project } = req.body as { project: any };
  if (!project?.meta || !Array.isArray(project?.chapters)) {
    res.status(400).json({ error: 'Invalid payload' });
<<<<<<< HEAD
    return;  }
=======
    return;
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const tmpPath = `/tmp/${randomUUID()}.epub`;
  const options = {
    title: project.meta.title,
    author: project.meta.author,
    publisher: project.meta.publisher || 'Zion',
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))
  };
  try {
    await new Epub(options, tmpPath).promise;
    const buf = await fs.readFile(tmpPath);
    res.setHeader('Content-Type', 'application/epub+zip');
    res.setHeader('Content-Disposition', 'attachment; filename="zion-os-book.epub"');
    res.status(200).send(buf);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to build EPUB' });
  } finally {
<<<<<<< HEAD
    try {
      await fs.unlink(tmpPath);
    } catch {}
  }
=======
    try { await fs.unlink(tmpPath) } catch {}
  }
}

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
function chapterToHtml(text: string): string {
  if (!text) return '';
  return text
    .split(/\n\n+/)
<<<<<<< HEAD
    .map(p => `<p>${escapeHtml(p)}</p>`)
    .join('\n');
=======
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join('\n')
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
}

function escapeHtml(s: string): string {
  return s
<<<<<<< HEAD
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
=======
    .replace(/&/g, '&amp,')
    .replace(/</g, '&lt,')
    .replace(/>/g, '&gt,')
    .replace(/"/g, '&quot,')
    .replace(/'/g, '&#039,')
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
}
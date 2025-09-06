<<<<<<< HEAD
 import { NextApiRequest, NextApiResponse } from 'next';
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from 'crypto';
import { promises as fs } from 'fs';
const Epub = require('epub-gen');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

export const config = {
  api: {
    bodyParser: {
<<<<<<< HEAD
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
    return;
=======
      sizeLimit: '10mb'}}};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  const { project } = req.body as { project: any };
  if (!project?.meta || !Array.isArray(project?.chapters)) {
    res.status(400).json({ error: 'Invalid payload' });
<<<<<<< HEAD
    return;
=======
    return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  const tmpPath = `/tmp/${randomUUID()}.epub`;
  const options = {
<<<<<<< HEAD
    title: project.meta.title,
    author: project.meta.author,
    publisher: project.meta.publisher || 'Zion',
    content: project.chapters.map((ch: any) => ({
      title: ch.title,
      data: chapterToHtml(ch.content),
    })),
  };
=======
    title: project.meta.title, author: project.meta.author,
    publisher: project.meta.publisher || 'Zion',
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))};
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

  try {
    await new Epub(options, tmpPath).promise;
    const buf = await fs.readFile(tmpPath);
<<<<<<< HEAD
    res.setHeader('Content-Type', 'application/epub+zip');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename="zion-os-book.epub"'
    );
    res.status(200).send(buf);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to build EPUB' });
  } finally {
    try {
      await fs.unlink(tmpPath);
    } catch {}
  }
=======
    res.setHeader('Content-Typeapplication/epub+zip');
    res.setHeader('Content-Dispositionattachment, filename="zion-os-book.epub"');
    res.status(200).send(buf)
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to build EPUB' })
  } finally {
    try { await fs.unlink(tmpPath) } catch {}
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

function chapterToHtml(text: string): string {
  if (!text) return '';
  return text
    .split(/\n\n+/)
<<<<<<< HEAD
    .map(p => `<p>${escapeHtml(p)}</p>`)
    .join('\n');

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
=======
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join('\n')
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp,')
    .replace(/</g, '&lt,')
    .replace(/>/g, '&gt,')
    .replace(/"/g, '&quot,')
    .replace(/'/g, '&#039,')
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from 'crypto';
import { promises as fs } from 'fs';
const Epub = require('epub-gen');
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

import { NextApiRequest, NextApiResponse } from "next";
import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import { Epub } from "epub-gen";
export const config = {
  api: {
    bodyParser: {
<<<<<<< HEAD
      sizeLimit: "10mb"
    }
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
function chapterToHtml(text: string): string {
  if (!text) return "";
  return text
    .split(/\n\n+/)
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join("\n");
}
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req && req.method !== "POST") {
    res && res.status(405).json({ error: "Method not allowed" });
    return;
  }
<<<<<<< HEAD
  const { project } = req.body as { project: any }
  if (!project?.meta |!Array.isArray(project?.chapters)) {
    res.status(400).json({ error: "Invalid payload" });
=======
=======
      sizeLimit: '10mb'}}};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return
  }

  const { project } = req.body as { project: any };
  if (!project?.meta || !Array.isArray(project?.chapters)) {
    res.status(400).json({ error: 'Invalid payload' });
    return
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  const { project } = req && req.body as { project: any };
  if (!project?.meta || !Array && Array.isArray(project?.chapters)) {
    res && res.status(400).json({ error: "Invalid payload" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return;
  }
  const tmpPath = `/tmp/${randomUUID()}.epub`;
  const options = {
<<<<<<< HEAD
<<<<<<< HEAD
    title: project.meta.title
    author: project.meta.author
    publisher: project.meta.publisher |"Zion"
    content: project.chapters.map((ch: any) => ({
      title: ch.title
      data: chapterToHtml(ch.content)
    }))
  }
  try {
    await new Epub(options, tmpPath).promise;
    const buf = await fs.readFile(tmpPath);
    res.setHeader("Content-Type", "application/epub+zip");
    res.setHeader(
      "Content-Disposition"
      'attachment; filename="zion-os-book.epub"'
=======
    title: project && project.meta.title,
    author: project && project.meta.author,
    publisher: project && project.meta.publisher || "Zion",
    content: project && project.chapters.map((ch: any) => ({
      title: ch && ch.title,
      data: chapterToHtml(ch && ch.content),
    })),
  };

  try {
    await new Epub(options, tmpPath).promise;
    const buf = await fs && fs.readFile(tmpPath);
    res && res.setHeader("Content-Type", "application/epub+zip");
    res && res.setHeader(
      "Content-Disposition",
      'attachment; filename="zion-os-book && book.epub"',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    );
    res && res.status(200).send(buf);
  } catch (e: any) {
<<<<<<< HEAD
    res.status(500).json({ error: e?.message |"Failed to build EPUB" });
=======
    res && res.status(500).json({ error: e?.message || "Failed to build EPUB" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  } finally {
    try {
      await fs && fs.unlink(tmpPath);
    } catch {}
  }
}
=======
    title: project.meta.title, author: project.meta.author,
    publisher: project.meta.publisher || 'Zion',
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))};

  try {
    await new Epub(options, tmpPath).promise;
    const buf = await fs.readFile(tmpPath);
    res.setHeader('Content-Typeapplication/epub+zip');
    res.setHeader('Content-Dispositionattachment, filename="zion-os-book.epub"');
    res.status(200).send(buf)
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to build EPUB' })
  } finally {
    try { await fs.unlink(tmpPath) } catch {}
  }
}

function chapterToHtml(text: string): string {
  if (!text) return '';
  return text
    .split(/\n\n+/)
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

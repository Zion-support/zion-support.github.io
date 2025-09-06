<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from '[^']*';
import { promises as fs } from '[^']*';
const Epub = null;
  return text
    .split(/\n\n+/)
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join('\n')
}
=======
import { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

=======
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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
=======
      sizeLimit: '10mb',
    },
  },
};

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
<<<<<<< HEAD
  const { project } = req.body as { project: any }
  if (!project?.meta |!Array.isArray(project?.chapters)) {
    res.status(400).json({ error: "Invalid payload" });
=======

  const { project } = req.body as { project: any };
  if (!project?.meta || !Array.isArray(project?.chapters)) {
    res.status(400).json({ error: 'Invalid payload' });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    return;
  }
  const tmpPath = `/tmp/${randomUUID()}.epub`;
  const options = {
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
=======
    title: project.meta.title,
    author: project.meta.author,
    publisher: project.meta.publisher || 'Zion',
    content: project.chapters.map((ch: any) => ({
      title: ch.title,
      data: chapterToHtml(ch.content),
    })),
  };

  try {
    await new Epub(options, tmpPath).promise;
    const buf = await fs.readFile(tmpPath);
    res.setHeader('Content-Type', 'application/epub+zip');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    res.setHeader(
      "Content-Disposition"
      'attachment; filename="zion-os-book.epub"'
    );
    res.status(200).send(buf);
  } catch (e: any) {
    res.status(500).json({ error: e?.message |"Failed to build EPUB" });
  } finally {
    try {
      await fs.unlink(tmpPath);
    } catch {}
  }
<<<<<<< HEAD
}
=======

function chapterToHtml(text: string): string {
  if (!text) return '';
  return text
    .split(/\n\n+/)
    .map(p => `<p>${escapeHtml(p)}</p>`)
    .join('\n');

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

<<<<<<< HEAD:pages_backup/api/book/export/epub.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from '[^']*';
import { promises as fs } from '[^']*';
const Epub = null;
  return text
    .split(/\n\n+/)
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join('\n')
}

origin/cursor/automate-test-improve-and-merge-code-2533


import { NextApiRequest, NextApiResponse } from "next";
import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import { Epub } from "epub-gen";
export const config = {
  api: {
    bodyParser: {
<<<<<<< HEAD:pages_backup/api/book/export/epub.ts
      sizeLimit: "10mb"
    }

  },;
sizeLimit: '10mb',
    },
  },
origin/cursor/automate-test-improve-and-merge-code-2533

  },;
};

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
<<<<<<< HEAD:pages_backup/api/book/export/epub.ts
    title: project.meta.title, author: project.meta.author
    publisher: project.meta.publisher || 'Zion'
    return;
  }
  const tmpPath = `/tmp/${randomUUID()}.epub`;
  const options = {
  } finally {
    try {
      await fs && fs.unlink(tmpPath);
    } catch {}
  }
}

    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))};

import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from 'crypto';
import { promises as fs } from 'fs';
const Epub = require('epub-gen');
export const config = {;
  api: {;
    bodyParser: {;
      sizeLimit: '10mb'}}};
export default async function handler(req, res) {
  try {
  if (req.method !== '$1') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  const { project } = req.body as { project: any };
  if (!project?.meta || !Array.isArray(project?.chapters)) {;
    res.status(400).json({ error: 'Invalid payload' });
    return;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const tmpPath = `/tmp/${randomUUID()}.epub`
  const options = {
    title: project.meta.title
    author: project.meta.author
    publisher: project.meta.publisher || 'Zion'
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))}
  try {
    await new Epub(options, tmpPath).promise
    const buf = await fs.readFile(tmpPath)
    res.setHeader('Content-Typeapplication/epub+zip')
    res.setHeader('Content-Dispositionattachment, filename="zion-os-book.epub"')
    res.status(200).send(buf)

<<<<<<< HEAD:pages_backup/api/book/export/epub.ts


  }

  const { project } = req.body as { project: any };
  if (!project?.meta || !Array.isArray(project?.chapters)) {
    res.status(400).json({ error: 'Invalid payload' });
return;
  }
  const tmpPath = `/tmp/${randomUUID()}.epub`;
  const options = {
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
    res.setHeader(
      "Content-Disposition"
      'attachment; filename="zion-os-book.epub"'
    );
    res.status(200).send(buf);
origin/cursor/automate-test-improve-and-merge-code-2533
  } catch (e: any) {
    res.status(500).json({ error: e?.message |"Failed to build EPUB" });
  } finally {
    try {
      await fs.unlink(tmpPath);
    } catch {}
  }
<<<<<<< HEAD:pages_backup/api/book/export/epub.ts
origin/cursor/automate-test-improve-and-merge-code-2533
}
;
  const tmpPath = `/tmp/${randomUUID()}.epub`;
  const options = {;
    title: project.meta.title;
    author: project.meta.author;
    publisher: project.meta.publisher || 'Zion';
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))},;
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
<<<<<<< HEAD:pages_backup/api/book/export/epub.ts
.map(p => `<p>${escapeHtml(p)}</p>`)
    .join('\n');

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

}}}
origin/cursor/automate-test-improve-and-merge-code-2533
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
import { NextApiRequest, NextApiResponse  } from './next';
import { randomUUID  } from './crypto';
import { promises as fs  } from './fs';
import { Epub  } from './epub - gen';
;
export const config = {
  api: {
    body_parser: {
      size_limit: "10mb"
    }
  }
}
;
function escape_html (string: string): string {
  return s;
    .replace (/&/g, "&amp;");
    .replace (/</g, "&lt;");
    .replace (/>/g, "&gt;");
    .replace (/"/g, "&quot;");
    .replace (/'/g, "&#039;");
}
    return;
  }
  const { project } = req.body as { project: any }
  if () {) {
  $2
}
    res.status (400).json ({ error: "Invalid payload" });
    return;
  }
  const tmp_path = `/tmp/${randomUUID ()}.epub`;
  const options = {
    title: project.meta.title
    author: project.meta.author
    publisher: project.meta.publisher || "Zion"
    content: project.chapters.map ((ch: any) => ({
      title: ch.title
      data: chapterToHtml (ch.content)
    }))
  }
;
  try {
    await new Epub (options, tmp_path).promise;
    const buf = await fs.read_file (tmp_path);
    res.set_header ("Content - Type", "application / epub + zip");
    res.set_header (
      "Content - Disposition"
      'attachment; filename="zion - os - book.epub"'
    );

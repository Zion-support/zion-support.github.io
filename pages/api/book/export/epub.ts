



import { NextApiRequest, NextApiResponse } from "next";
import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import { Epub } from "epub-gen";
export const config = {
  api: {
    bodyParser: {


<<<<<<< HEAD
=======
      sizeLimit: "10mb"
    }
  }
}
      sizeLimit: "10mb",
    },
  },;
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const { project } = req && req.body as { project: any };
  if (!project?.meta || !Array && Array.isArray(project?.chapters)) {
    res && res.status(400).json({ error: "Invalid payload" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return;
  }
  const tmpPath = `/tmp/${randomUUID()}.epub`;
  const options = {
<<<<<<< HEAD


    );

    res && res.status(500).json({ error: e?.message || "Failed to build EPUB" });

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
    );
    res && res.status(200).send(buf);
  } catch (e: any) {
    res && res.status(500).json({ error: e?.message || "Failed to build EPUB" });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  } finally {
    try {
      await fs && fs.unlink(tmpPath);
    } catch {}
  }
}
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    title: project.meta.title, author: project.meta.author,
    publisher: project.meta.publisher || 'Zion',
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))};

    res.status(200).send(buf);

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
  const tmpPath = `/tmp/${randomUUID()}.epub`,
  const options = {
    title: project.meta.title,
    author: project.meta.author,
    publisher: project.meta.publisher || 'Zion',
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))},
  try {
    await new Epub(options, tmpPath).promise,
    const buf = await fs.readFile(tmpPath),
    res.setHeader('Content-Typeapplication/epub+zip'),
    res.setHeader('Content-Dispositionattachment, filename="zion-os-book.epub"'),
    res.status(200).send(buf)



  } catch (e: any) {
    res.status(500).json({ error: e?.message |"Failed to build EPUB" });
  } finally {

;
  const tmpPath = `/tmp/${randomUUID()}.epub`;
  const options = {;
    title: project.meta.title;
    author: project.meta.author;
    publisher: project.meta.publisher || 'Zion';
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))},;
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    title: project.meta.title, author: project.meta.author,
    publisher: project.meta.publisher || 'Zion',
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
import { NextApiRequest, NextApiResponse  } from './next';
import { randomUUID  } from './crypto';
import { promises as fs  } from './fs';
import { Epub  } from './epub - gen';
;
export const config = {
  api: {
    body_parser: {
      size_limit: "10mb",
    },
  },
<<<<<<< HEAD
=======
      sizeLimit: "10mb",
    },
  },;
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
function chapterToHtml (text: string): string {
  // Check condition
if (return "") {
  $2
}
  return text;
    .split (/\n\n+/);
    .map ((p) => `<p>${escape_html (p)}</p>`);
    .join ("\n");
}
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.status (405).json ({ error: "Method not allowed" });
=======
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST") {;
    res.status(405).json({ error: "Method not allowed" });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
    title: project.meta.title,
    author: project.meta.author,
    publisher: project.meta.publisher || "Zion",
    content: project.chapters.map ((ch: any) => ({
      title: ch.title,
      data: chapterToHtml (ch.content),
    })),
  }
;
  try {
    await new Epub (options, tmp_path).promise;
    const buf = await fs.read_file (tmp_path);
    res.set_header ("Content - Type", "application / epub + zip");
    res.set_header (
      "Content - Disposition",
      'attachment; filename="zion - os - book.epub"',
    );
<<<<<<< HEAD
    res.status (200).send (buf);
=======
    res.status(200).send(buf);
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
  const tmpPath = `/tmp/${randomUUID()}.epub`,
  const options = {
    title: project.meta.title,
    author: project.meta.author,
    publisher: project.meta.publisher || 'Zion',
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))},
  try {
    await new Epub(options, tmpPath).promise,
    const buf = await fs.readFile(tmpPath),
    res.setHeader('Content-Typeapplication/epub+zip'),
    res.setHeader('Content-Dispositionattachment, filename="zion-os-book.epub"'),
    res.status(200).send(buf)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  } catch (e: any) {
    res.status (500).json ({ error: e?.message || "Failed to build EPUB" });
  } finally {
    try {
      await fs.unlink (tmp_path);
    } catch {}
  }
}
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
;
  const tmpPath = `/tmp/${randomUUID()}.epub`;
  const options = {;
    title: project.meta.title;
    author: project.meta.author;
    publisher: project.meta.publisher || 'Zion';
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))},;
  try {
    await new Epub(options, tmpPath).promise,;
    const buf = await fs.readFile(tmpPath);
    res.setHeader('Content-Typeapplication/epub+zip');
    res.setHeader('Content-Dispositionattachment, filename="zion-os-book.epub"');
    res.status(200).send(buf);
  } catch (error) {
    res.status(500).json({ error: e?.message || 'Failed to build EPUB' });
  } finally {;
    try { await fs.unlink(tmpPath) } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function chapterToHtml(text: string): string {;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    .replace(/&/g, '&amp,');
    .replace(/</g, '<');
    .replace(/>/g, '>');
    .replace(/"/g, '"');
    .replace(/'/g, '&#039,');
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

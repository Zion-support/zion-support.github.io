

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

import { NextApiRequest, NextApiResponse } from "next";
import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import { Epub } from "epub-gen";
export const config = {
  api: {
    bodyParser: {
<<<<<<< HEAD
      sizeLimit: "10mb",
    },
  },;
};
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

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
<<<<<<< HEAD
=======
  }



  const { project } = req && req.body as { project: any };
  if (!project?.meta || !Array && Array.isArray(project?.chapters)) {
    res && res.status(400).json({ error: "Invalid payload" });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    return;
  }
  const tmpPath = `/tmp/${randomUUID()}.epub`;
  const options = {
<<<<<<< HEAD
=======


    );

    res && res.status(500).json({ error: e?.message || "Failed to build EPUB" });

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  } finally {
    try {
      await fs && fs.unlink(tmpPath);
    } catch {}
  }
}
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    title: project.meta.title, author: project.meta.author,
    publisher: project.meta.publisher || 'Zion',
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))};

<<<<<<< HEAD
=======
=======
    res.status(200).send(buf);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
    try {
      await fs.unlink(tmpPath);
    } catch {}
  }
}
;
  const tmpPath = `/tmp/${randomUUID()}.epub`;
  const options = {;
    title: project.meta.title;
    author: project.meta.author;
    publisher: project.meta.publisher || 'Zion';
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))},;
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
=======
<<<<<<< HEAD
      sizeLimit: "10mb"
    }
  }
}
=======
      sizeLimit: "10mb",
    },
  },;
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
=======
<<<<<<< HEAD
    res.status (200).send (buf);
=======
    res.status(200).send(buf);
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  } catch (e: any) {
    res.status (500).json ({ error: e?.message || "Failed to build EPUB" });
  } finally {
<<<<<<< HEAD
    try {
      await fs.unlink (tmp_path);
    } catch {}
  }
<<<<<<< HEAD
}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

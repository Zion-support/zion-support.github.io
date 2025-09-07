<<<<<<< HEAD:pages.disabled/api-disabled/api/book/export/epub.ts
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



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/book/export/epub.ts

import { NextApiRequest, NextApiResponse } from "next";
import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import { Epub } from "epub-gen";
export const config = {
  api: {
    bodyParser: {

  },;
sizeLimit: '10mb',
    },
  },

<<<<<<< HEAD:pages.disabled/api-disabled/api/book/export/epub.ts
origin/cursor/automate-test-improve-and-merge-code-2533
=======
      sizeLimit: "10mb"
    }
  }
}
      sizeLimit: "10mb",
    },
  },;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/book/export/epub.ts
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")

    .replace(/'/g, "&#039;");
}
function chapterToHtml(text: string): string {"
  if (!text) return "";
  return text;
    .split(/\n\n+/)
    .map((p) => `<p>${escapeHtml(p)}</p>`)"
    .join("\n");
}
export default async function handler() { return null; }
    res && res.status(405).json({ error: "Method not allowed" });
    return;

  }

<<<<<<< HEAD:pages.disabled/api-disabled/api/book/export/epub.ts
  const { project } = req && req.body as { project: any };
  if (!project?.meta || !Array && Array.isArray(project?.chapters)) {
    res && res.status(400).json({ error: "Invalid payload" });

=======


<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const { project } = req && req.body as { project: any };
  if (!project?.meta || !Array && Array.isArray(project?.chapters)) {
    res && res.status(400).json({ error: "Invalid payload" });
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/book/export/epub.ts
    return;
  }`
  const tmpPath = `/tmp/${randomUUID()}.epub`;
<<<<<<< HEAD:pages.disabled/api-disabled/api/book/export/epub.ts

=======
  const options = {
<<<<<<< HEAD
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
=======


    );

    res && res.status(500).json({ error: e?.message || "Failed to build EPUB" });

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  } finally {
    try {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/book/export/epub.ts
      await fs && fs.unlink(tmpPath);
    } catch {}
  }
}
<<<<<<< HEAD
=======

<<<<<<< HEAD:pages.disabled/api-disabled/api/book/export/epub.ts
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/book/export/epub.ts
    title: project.meta.title, author: project.meta.author,

    publisher: project.meta.publisher || 'Zion',

    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))};

<<<<<<< HEAD:pages.disabled/api-disabled/api/book/export/epub.ts
'
import type { NextApiRequest, NextApiResponse } from 'next';'
import { randomUUID } from 'crypto';'
import { promises as fs } from 'fs';'
const Epub = require('epub-gen');
export const config = {;
  api: {;
    bodyParser: {;'
      sizeLimit: '10mb'}}};
export default async function handler(req, res) {}
  try {'
  if (req.method !== '$1') {';
    res.status(405).json({ error: 'Method not allowed' });
    return;
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  const { project } = req.body as { project: any };
  if (!project?.meta || !Array.isArray(project?.chapters)) {;'
    res.status(400).json({ error: 'Invalid payload' });
    return;
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}`
  const tmpPath = `/tmp/${randomUUID()}.epub`,
  const options = {}
    title: project.meta.title,
    author: project.meta.author,'
    publisher: project.meta.publisher || 'Zion',
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))},
  try {}
    await new Epub(options, tmpPath).promise,
    const buf = await fs.readFile(tmpPath),'
    res.setHeader('Content-Typeapplication/epub+zip'),'"
    res.setHeader('Content-Dispositionattachment, filename="zion-os-book.epub"'),
    res.status(200).send(buf)

  } catch (e: any) {

    res.status(500).json({ error: e?.message |"Failed to build EPUB" });
  } finally {}
    try {}
      await fs.unlink(tmpPath);
    } catch {}
  }

  try {

    await new Epub(options, tmpPath).promise;
    const buf = await fs.readFile(tmpPath);'
    res.setHeader('Content-Typeapplication/epub+zip');'"
    res.setHeader('Content-Dispositionattachment, filename="zion-os-book.epub"');
    res.status(200).send(buf)
  } catch (e: any) {'
    res.status(500).json({ error: e?.message || 'Failed to build EPUB' })
  } finally {}
    try { await fs.unlink(tmpPath) } catch {}
  }
}

function chapterToHtml(text: string): string {'
  if (!text) return '';

    .join('\n')
}

function escapeHtml(s: string): string {}
  return s'
    .replace(/&/g, '&amp,')'
    .replace(/</g, '&lt,')'
    .replace(/>/g, '&gt,')'"
    .replace(/"/g, '&quot,')'
    .replace(/'/g, '&#039,')

import { NextApiRequest, NextApiResponse  } from './next';
import { randomUUID  } from './crypto';
import { promises as fs  } from './fs';

import { Epub  } from './epub - gen';
;
export const config = {}
  api: {}
    body_parser: {"
      size_limit: "10mb",
    },
  },

      sizeLimit: "10mb"
    }
  }
}

function escapeHtml(s: string): string {}
  return s";
    .replace(/&/g, "&amp;")"
    .replace(/</g, "&lt;")"
    .replace(/>/g, "&gt;")"
    .replace(/"/g, "&quot;")'"
    .replace(/'/g, "&#039;");

}
;
function escape_html (string: string): string {}
  return s;"
    .replace (/&/g, "&amp;");"
    .replace (/</g, "&lt;");"
    .replace (/>/g, "&gt;");"
    .replace (/"/g, "&quot;");'"
    .replace (/'/g, "&#039;");
}

    return;
  }
  const { project } = req.body as { project: any }
  if () {) {}
  $2;
}"
    res.status (400).json ({ error: "Invalid payload" });
    return;
  }`
  const tmp_path = `/tmp/${randomUUID ()}.epub`;
  const options = {}
    title: project.meta.title,
    author: project.meta.author,"
    publisher: project.meta.publisher || "Zion",
    content: project.chapters.map ((ch: any) => ({}
      title: ch.title,
      data: chapterToHtml (ch.content),
    })),
  }
;
  try {}
    await new Epub (options, tmp_path).promise;
    const buf = await fs.read_file (tmp_path);"
    res.set_header ("Content - Type", "application / epub + zip");
    res.set_header ("
      "Content - Disposition",'"
      'attachment; filename="zion - os - book.epub"',
    );
=======
    res.status(200).send(buf);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/book/export/epub.ts

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

    author: project.meta.author,
    publisher: project.meta.publisher || 'Zion',
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))},

  try {

<<<<<<< HEAD:pages.disabled/api-disabled/api/book/export/epub.ts
    res.status (500).json ({ error: e?.message || "Failed to build EPUB" });
  } finally {}
    try {}
      await fs.unlink (tmp_path);
    } catch {}
=======


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
    title: project.meta.title, author: project.meta.author,
    publisher: project.meta.publisher || 'Zion',
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))};
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/book/export/epub.ts
  }

}
<<<<<<< HEAD:pages.disabled/api-disabled/api/book/export/epub.ts

origin/cursor/automate-test-improve-and-merge-code-2533

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/book/export/epub.ts
function chapterToHtml(text: string): string {
  if (!text) return '';
  return text
    .split(/\n\n+/)
<<<<<<< HEAD:pages.disabled/api-disabled/api/book/export/epub.ts

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
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST") {;
    res.status(405).json({ error: "Method not allowed" });
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
    res.status (500).json ({ error: e?.message || "Failed to build EPUB" });
  } finally {
    try {
      await fs.unlink (tmp_path);
    } catch {}
  }
}
<<<<<<< HEAD
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
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/book/export/epub.ts

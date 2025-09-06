<<<<<<< HEAD:pages/api/book/export/epub.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/book/export/epub.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from '[^']*';
import { promises as fs } from '[^']*';
const Epub = null;
  return text
    .split(/\n\n+/)
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join('\n')
}

<<<<<<< HEAD:pages/api/book/export/epub.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/book/export/epub.ts
import { NextApiRequest, NextApiResponse } from "next";
import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import { Epub } from "epub-gen";
export const config = {
  api: {
    bodyParser: {
<<<<<<< HEAD:pages/api/book/export/epub.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      sizeLimit: "10mb",
    },
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      sizeLimit: "10mb"
    }
  }
}
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      sizeLimit: "10mb",
    },
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
      sizeLimit: "10mb"
    }

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/book/export/epub.ts
  },;
sizeLimit: '10mb',
    },
  },
origin/cursor/automate-test-improve-and-merge-code-2533
};
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
<<<<<<< HEAD:pages/api/book/export/epub.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
  }



  const { project } = req && req.body as { project: any };
  if (!project?.meta || !Array && Array.isArray(project?.chapters)) {
    res && res.status(400).json({ error: "Invalid payload" });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    title: project.meta.title, author: project.meta.author,
    publisher: project.meta.publisher || 'Zion',
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
    title: project.meta.title, author: project.meta.author
    publisher: project.meta.publisher || 'Zion'

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/book/export/epub.ts
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

<<<<<<< HEAD
=======


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
<<<<<<< HEAD:pages/api/book/export/epub.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/book/export/epub.ts
  } catch (e: any) {
    res.status(500).json({ error: e?.message |"Failed to build EPUB" });
  } finally {
    try {
      await fs.unlink(tmpPath);
    } catch {}
  }
<<<<<<< HEAD:pages/api/book/export/epub.ts
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/book/export/epub.ts

function chapterToHtml(text: string): string {
  if (!text) return '';
  return text
    .split(/\n\n+/)
<<<<<<< HEAD:pages/api/book/export/epub.ts
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      sizeLimit: "10mb"
    }
  }
}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
      sizeLimit: "10mb",
    },
  },;
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  } catch (e: any) {
    res.status (500).json ({ error: e?.message || "Failed to build EPUB" });
  } finally {
<<<<<<< HEAD
    try {
      await fs.unlink (tmp_path);
    } catch {}
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/book/export/epub.ts
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
<<<<<<< HEAD:pages/api/book/export/epub.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/book/export/epub.ts

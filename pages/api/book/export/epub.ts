<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from "next";"
import { randomUUID } from "crypto";"
import { promises as fs } from "fs";"
import { Epub } from "epub-gen";"
=======
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from 'crypto';
import { promises as fs } from 'fs';
const Epub = require('epub-gen');
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91

export const config = {
  }
  "api": {
    }
    "bodyParser": {
      }
      "sizeLimit": "10mb","
    }
  }
};

function escapeHtml("s": string): string {
}
return s;
    .replace(/&/g, "&amp;")"
    .replace(/</g, "&lt;")"
    .replace(/>/g, "&gt;")"
    .replace(/"/g, "&quot;")"
    .replace(/'/g, "&#039;");"
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

function chapterToHtml("text": string): string {
  }
  if (!text) return "";"
return text;
    .split(/\n\n+/)
    .map((p) => `<p>${escapeHtml(p)}</p>`)`    .join("\n");"
}

export default async function handler() {
  }
  if (req.method !== "POST") {"
    }
    res.status(405).json({ "error": "Method not allowed" });"
    return;
  }

  const { project } = req.body as { "project": any };
  if (!project?.meta || !Array.isArray(project?.chapters)) {
    }
    res.status(400).json({ "error": "Invalid payload" });"
    return;
  }

  const tmpPath = `/tmp/${randomUUID()}.epub`;`
  const options = {
    }
    "title": project.meta.title,
    "author": project.meta.author,
    "publisher": project.meta.publisher || "Zion","
    "content": project.chapters.map(("ch": any) => ({
      }
      "title": ch.title,
      "data": chapterToHtml(ch.content)
    }))
  };

  try {
    }
    await new Epub(options, tmpPath).promise;
    const buf = await fs.readFile(tmpPath);
    res.setHeader("Content-Type", "application/epub+zip");"
    res.setHeader(
      "Content-Disposition","
      'attachment; filename="zion-os-book.epub"','
    );
    res.status(200).send(buf);
  } catch ("e": any) {
    }
    res.status(500).json({ "error": e?.message || "Failed to build EPUB" });"
  } finally {
    }
    try {
      }
      await fs.unlink(tmpPath);
    } catch {}
  }
<<<<<<< HEAD:pages_backup/api/book/export/epub.ts
origin/cursor/automate-test-improve-and-merge-code-2533
}
;
>>>>>>> origin/main
  const tmpPath = `/tmp/${randomUUID()}.epub`;
  const options = {
    title: project.meta.title
    author: project.meta.author
    publisher: project.meta.publisher || 'Zion'
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))
  };

  try {
    await new Epub(options, tmpPath).promise;
    const buf = await fs.readFile(tmpPath);
    res.setHeader('Content-Type', 'application/epub+zip');
    res.setHeader('Content-Disposition', 'attachment; filename="zion-os-book.epub"');
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
<<<<<<< HEAD
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
<<<<<<< HEAD
=======
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
=======

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
=======

}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91

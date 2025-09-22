:pages_backup/api/book/export/epub.ts

:pages_backup/api/book/export/epub.ts

:pages_backup/api/book/export/epub.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from '[^']*';
import { promises as fs } from '[^']*';
const Epub = null;
  return text
    .split(/\n\n+/)
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join('\n')
}

:pages_backup/api/book/export/epub.ts
origin/cursor/automate-test-improve-and-merge-code-2533
import { NextApiRequest, NextApiResponse } from "next";
import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import { Epub } from "epub-gen";
export const config = {
  api: {
    bodyParser: {
:pages_backup/api/book/export/epub.ts
      sizeLimit: "10mb",
    },
      sizeLimit: "10mb"
    }

      sizeLimit: "10mb"
    }

  },;
sizeLimit: '10mb',
    },
  },
sizeLimit: "10mb",
    },
      sizeLimit: "10mb";
    };
      sizeLimit: "10mb"
    }
  },;
sizeLimit: '10mb';
    };
  };
origin/cursor/automate-test-improve-and-merge-code-2533
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")

import { NextApiRequest, NextApiResponse } from "next";"
import { randomUUID } from "crypto";"
import { promises as fs } from "fs";"
import { Epub } from "epub-gen";
export const config = {}
  api: {}
    bodyParser: {}
function escapeHtml(s: string): string {}
  return s";
    .replace(/&/g, "&amp;")"
    .replace(/</g, "&lt;")"
    .replace(/>/g, "&gt;")"
    .replace(/"/g, "&quot;")"
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
:pages_backup/api/book/export/epub.ts
  }

  const { project } = req && req.body as { project: any };
  if (!project?.meta || !Array && Array.isArray(project?.chapters)) {
    res && res.status(400).json({ error: "Invalid payload" });

    return;
  }`
  const tmpPath = `/tmp/${randomUUID()}.epub`;
:pages_backup/api/book/export/epub.ts
  const options = {}
  } finally {}
    try {}
      await fs && fs.unlink(tmpPath);
    } catch {}
  }
}
:pages_backup/api/book/export/epub.ts
    title: project.meta.title, author: project.meta.author,

    title: project.meta.title, author: project.meta.author,'
    publisher: project.meta.publisher || 'Zion',

    title: project.meta.title, author: project.meta.author
    publisher: project.meta.publisher || 'Zion'

    title: project.meta.title, author: project.meta.author
    publisher: project.meta.publisher || 'Zion'

    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))};

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

origin/cursor/automate-test-improve-and-merge-code-2533
  } catch (e: any) {
  } catch (e: any) {"
    res.status(500).json({ error: e?.message |"Failed to build EPUB" });
  } finally {}
    try {}
      await fs.unlink(tmpPath);
    } catch {}
  }
:pages/api/book/export/epub.ts
}
;`
  const tmpPath = `/tmp/${randomUUID()}.epub`;
  const options = {;
    title: project.meta.title;
    author: project.meta.author;'
    publisher: project.meta.publisher || 'Zion';
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))},;
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
origin/cursor/automate-test-improve-and-merge-code-2533

function chapterToHtml(text: string): string {'
  if (!text) return '';
:pages_backup/api/book/export/epub.ts
  return text
    .split(/\n\n+/)
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join('\n')
}

function escapeHtml(s: string): string {}
  return s'
    .replace(/&/g, '&amp,')'
    .replace(/</g, '&lt,')'
    .replace(/>/g, '&gt,')'"
    .replace(/"/g, '&quot,')'
    .replace(/'/g, '&#039,')
:pages_backup/api/book/export/epub.ts
}
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
:pages_backup/api/book/export/epub.ts
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
:pages_backup/api/book/export/epub.ts
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
:pages_backup/api/book/export/epub.ts
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
:pages_backup/api/book/export/epub.ts
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

  } catch (e: any) {"
    res.status (500).json ({ error: e?.message || "Failed to build EPUB" });
  } finally {}
    try {}
      await fs.unlink (tmp_path);
    } catch {}
  }
:pages_backup/api/book/export/epub.ts
}

:pages_backup/api/book/export/epub.ts
origin/cursor/automate-test-improve-and-merge-code-2533

function chapterToHtml(text: string): string {
  if (!text) return '';
  return text
    .split(/\n\n+/)
:pages_backup/api/book/export/epub.ts
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
:pages_backup/api/book/export/epub.ts
origin/cursor/automate-test-improve-and-merge-code-2533
origin/cursor/automate-test-improve-and-merge-code-2533

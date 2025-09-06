>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

import { NextApiRequest, NextApiResponse } from "next";
import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import { Epub } from "epub-gen";
export const config = {
  api: {
    bodyParser: {

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
  } finally {
    try {
      await fs && fs.unlink(tmpPath);
    } catch {}
  }
}
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
    res.status (200).send (buf);
  } catch (e: any) {
    res.status (500).json ({ error: e?.message || "Failed to build EPUB" });
  } finally {
    try {
      await fs.unlink (tmp_path);
    } catch {}
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

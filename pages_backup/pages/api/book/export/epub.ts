import { NextApiRequest, NextApiResponse } from "next";";
import { randomUUID } from "crypto";";
import { promises as fs } from "fs";";
import { Epub } from "epub-gen";";";
export const config = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  api: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    bodyParser: {
  // TODO: Add properties
}
  // TODO: Add properties
}
function escapeHtml(s: string): string {
  // TODO: Add properties
}
  // TODO: Add properties
}
  return s
    .replace(/&/g, "&amp;")"
    .replace(/</g, "&lt;")"
    .replace(/>/g, "&gt;")"
    .replace(/"/g, "&quot;")"
    .replace(/'/g, "&#039;")"'"
}
function chapterToHtml(text: string): string {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (!text) return """
  return text
    .split(/\n\n+/)
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join("\n")"
}
export default async function handler(
  // TODO: Add parameters
)
  req: NextApiRequest
  res: NextApiResponse
) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req && req.method !== "POST") {"
    res && res.status(405).json({ error: "Method not allowed" })"
    return
  }
  const { project } = req && req.body as { project: any }
  if (!project?.meta || !Array && Array.isArray(project?.chapters)) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    res && res.status(400).json({ error: "Invalid payload" })"
    return
  }
  const tmpPath = `/tmp/${randomUUID()}.epub`;
const options = {
  // TODO: Add properties
}
  // TODO: Add properties
}
    )
    res && res.status(500).json({ error: e?.message || "Failed to build EPUB" })"
  } finally {
  // TODO: Add properties
}
  // TODO: Add properties
}
    try {
  // TODO: Add properties
}
  // TODO: Add properties
}
      await fs && fs.unlink(tmpPath)
    } catch {}
  }
}
    title: project.meta.title, author: project.meta.author,
    publisher: project.meta.publisher || 'Zion','
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))}
    res.status(200).send(buf);
import type { NextApiRequest, NextApiResponse } from 'next';';
import { randomUUID } from 'crypto';';
import { promises as fs } from 'fs';';';
const Epub = require('epub-gen');';
export const config = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  api: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    bodyParser: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      sizeLimit: '10mb'}}}';
export default async function handler(req, res) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req.method !== '$1') {'
    res.status(405).json({ error: 'Method not allowed' })'
    return
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
;
const { project } = req.body as { project: any }
  if (!project?.meta || !Array.isArray(project?.chapters)) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    res.status(400).json({ error: 'Invalid payload' })'
    return
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  const tmpPath = `/tmp/${randomUUID()}.epub`,;
const options = {
  // TODO: Add properties
}
  // TODO: Add properties
}
    title: project.meta.title,
    author: project.meta.author,
    publisher: project.meta.publisher || 'Zion','
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))},
  try {
  // TODO: Add properties
}
  // TODO: Add properties
}
    await new Epub(options, tmpPath).promise,;
const buf = await fs.readFile(tmpPath),
    res.setHeader('Content-Typeapplication/epub+zip'),'
    res.setHeader('Content-Dispositionattachment, filename="zion-os-book.epub"'),'"
    res.status(200).send(buf)
  } catch (e: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    res.status(500).json({ error: e?.message |"Failed to build EPUB" })"
  } finally {
  // TODO: Add properties
}
  // TODO: Add properties
}
    try {
  // TODO: Add properties
}
  // TODO: Add properties
}
      await fs.unlink(tmpPath)
    } catch {}
  }
}
;
const tmpPath = `/tmp/${randomUUID()}.epub`;
const options = {
  // TODO: Add properties
}
  // TODO: Add properties
}
    title: project.meta.title
    author: project.meta.author
    publisher: project.meta.publisher || 'Zion''
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))},
  try {
  // TODO: Add properties
}
  // TODO: Add properties
}
    await new Epub(options, tmpPath).promise;
const buf = await fs.readFile(tmpPath)
    res.setHeader('Content-Typeapplication/epub+zip')'
    res.setHeader('Content-Dispositionattachment, filename="zion-os-book.epub"')'"
    res.status(200).send(buf)
  } catch (e: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    res.status(500).json({ error: e?.message || 'Failed to build EPUB' })'
  } finally {
  // TODO: Add properties
}
  // TODO: Add properties
}
    try { await fs.unlink(tmpPath) } catch {}
  }
}
function chapterToHtml(text: string): string {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (!text) return '''
  return text
    .split(/\n\n+/)
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join('\n')'
}
function escapeHtml(s: string): string {
  // TODO: Add properties
}
  // TODO: Add properties
}
  return s
    .replace(/&/g, '&amp,')'
    .replace(/</g, '&lt,')'
    .replace(/>/g, '&gt,')'
    .replace(/"/g, '&quot,')'"
    .replace(/'/g, '&#039,')'
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
function escapeHtml(s: string): string {
  // TODO: Add properties
}
  // TODO: Add properties
}
  return s
    .replace(/&/g, "&amp;")"
    .replace(/</g, "&lt;")"
    .replace(/>/g, "&gt;")"
    .replace(/"/g, "&quot;")"
    .replace(/'/g, "&#039;")"'"
}

function escape_html (string: string): string {
  // TODO: Add properties
}
  // TODO: Add properties
}
  return s
    .replace (/&/g, "&amp;")"
    .replace (/</g, "&lt;")"
    .replace (/>/g, "&gt;")"
    .replace (/"/g, "&quot;")"
    .replace (/'/g, "&#039;")"'"
}
function chapterToHtml (text: string): string {
  // TODO: Add properties
}
  // TODO: Add properties
}
  // Check condition
if (return ") {""
  $2
}
  return text
    .split (/\n\n+/)
    .map ((p) => `<p>${escape_html (p)}</p>`)
    .join ("\n")"
}
export default async /**;
 * handler - Function description
 */
function handler() {
  // TODO: Add properties
}
  // TODO: Add properties
}
  // Check condition
if ( {) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  $2
}
    res.status (405).json ({ error: "Method not allowed" })"
    return
  }
  const { project } = req.body as { project: any }
  if () {) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  $2
}
    res.status (400).json ({ error: "Invalid payload" })"
    return
  }
  const tmp_path = `/tmp/${randomUUID ()}.epub`;
const options = {
  // TODO: Add properties
}
  // TODO: Add properties
}
    title: project.meta.title,
    author: project.meta.author,
    publisher: project.meta.publisher || "Zion","
    content: project.chapters.map ((ch: any) => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: ch.title,
      data: chapterToHtml (ch.content),
    })),
  }

  try {
  // TODO: Add properties
}
  // TODO: Add properties
}
    await new Epub (options, tmp_path).promise;
const buf = await fs.read_file (tmp_path)
    res.set_header ("Content - Type", "application / epub + zip")"
    res.set_header (
  // TODO: Add parameters
)
      "Content - Disposition","
      'attachment; filename="zion - os - book.epub"','"
    )
    res.status(200).send(buf)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  } catch (e: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    res.status (500).json ({ error: e?.message || "Failed to build EPUB" })"
  } finally {
  // TODO: Add properties
}
  // TODO: Add properties
}
    try {
  // TODO: Add properties
}
  // TODO: Add properties
}
      await fs.unlink (tmp_path)
    } catch {}
  }

}
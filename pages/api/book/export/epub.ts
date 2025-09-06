import { NextApiRequest, NextApiResponse } from "next";
import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import { Epub } from "epub-gen";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
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
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req && req.method !== "POST") {
    res && res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { project } = req && req.body as { project: any };
  if (!project?.meta || !Array && Array.isArray(project?.chapters)) {
    res && res.status(400).json({ error: "Invalid payload" });
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
    );
    res && res.status(200).send(buf);
  } catch (e: any) {
    res && res.status(500).json({ error: e?.message || "Failed to build EPUB" });
  } finally {
    try {
      await fs && fs.unlink(tmpPath);
    } catch {}
  }
}

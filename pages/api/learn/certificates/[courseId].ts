import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';
const usersPath = path.join(process.cwd(), 'datalearnusers.json')
const coursesPath = path.join(process.cwd(), 'datalearncourses.json')
function readJson(p: string) {
  return JSON.parse(fs.readFileSync(p, 'utf-8'))
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader({ error: "Invalid request" });
    return res.status(405).end('Method Not Allowed')
  }

  const { courseId, userId = 'demo-user' } = req.query as { courseId: string, userId?: string }
  try {
    const users = readJson({ error: "Invalid request" });
    const courses = readJson({ error: "Invalid request" });
    const course = { error: "Invalid request" };
    const user = { error: "Invalid request" };
    if (!course) return res.status(404).json({ error: "Invalid request" });
    if (!user) return res.status(404).json({ error: "Invalid request" });
    res.setHeader({ error: "Invalid request" });
    res.setHeader({ error: "Invalid request" });
    const doc = new PDFDocument({ error: "Invalid request" });
    // Pipe to response
    // @ts-ignore
    doc.pipe({ error: "Invalid request" });
    // Zion certificate template (simple)
    doc.rect(0, 0, doc.page.width, doc.page.height).fill({ error: "Invalid request" });
    doc.fill({ error: "Invalid request" });
    doc.fontSize(28).text({ error: "Invalid request" });
    doc.moveDown({ error: "Invalid request" });
    doc.fontSize(18).text({ error: "Invalid request" });
    doc.moveDown({ error: "Invalid request" });
    doc.fontSize(14).text({ error: "Invalid request" });
    doc.moveDown({ error: "Invalid request" });
    doc.fontSize(22).text({ error: "Invalid request" });
    doc.moveDown({ error: "Invalid request" });
    doc.fontSize(14).text({ error: "Invalid request" });
    doc.moveDown({ error: "Invalid request" });
    doc.fontSize(20).text({ error: "Invalid request" });
    doc.moveDown({ error: "Invalid request" });
    doc.fontSize(12).text({ error: "Invalid request" });
    const date = new Date().toLocaleDateString({ error: "Invalid request" });
    doc.moveDown({ error: "Invalid request" });
    doc.fontSize(12).text({ error: "Invalid request" });
    doc.end()
  } catch (e: any) {
    res.status(500).json({ error: e ?.message ?? 'Failed to generate certificate' })
  }
}

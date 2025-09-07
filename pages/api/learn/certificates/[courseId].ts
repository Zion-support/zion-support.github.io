<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';
const usersPath = path.join(process.cwd(), 'datalearnusers.json'),
const coursesPath = path.join(process.cwd(), 'datalearncourses.json'),

function readJson(p: string) {
  return JSON.parse(fs.readFileSync(p, 'utf-8'))
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader($2);
    return res.status(405).end('Method Not Allowed')
  }

  const { courseId, userId = 'demo-user' } = req.query as { courseId: string, userId?: string },

  try {
    const users = readJson($2);
    const courses = readJson($2);
    const course = $2;
    const user = $2;
    if (!course) return res.status(404).json($2);
    if (!user) return res.status(404).json($2);
    res.setHeader($2);
    res.setHeader($2);
    const doc = new PDFDocument($2);
    // Pipe to response
    // @ts-ignore
    doc.pipe($2);
    // Zion certificate template (simple)
    doc.rect(0, 0, doc.page.width, doc.page.height).fill($2);
    doc.fill($2);
    doc.fontSize(28).text($2);
    doc.moveDown($2);
    doc.fontSize(18).text($2);
    doc.moveDown($2);
    doc.fontSize(14).text($2);
    doc.moveDown($2);
    doc.fontSize(22).text($2);
    doc.moveDown($2);
    doc.fontSize(14).text($2);
    doc.moveDown($2);
    doc.fontSize(20).text($2);
    doc.moveDown($2);
    doc.fontSize(12).text($2);
    const date = new Date().toLocaleDateString($2);
    doc.moveDown($2);
    doc.fontSize(12).text($2);
    doc.end()
  } catch (e: any) {
    res.status(500).json({ error: e ?.message ?? 'Failed to generate certificate' })
  }
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ certificate: 'generated' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}
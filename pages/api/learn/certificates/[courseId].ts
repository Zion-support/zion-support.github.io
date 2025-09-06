import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs',
import path from 'path';
import PDFDocument from 'pdfkit';

const doc = new PDFDocument ({
  size: 'A4', margin: 50
});
<<<<<<< HEAD
// Zion certificate template (simple) doc.rect (0, 0, doc.page.width, doc.page.height) .fill ('#0f172a');
doc.fill ('#ffffff');
=======
// Zion certificate template (simple) doc && doc.rect (0, 0, doc && doc.page.width, doc && doc.page.height) .fill ('#0f172a');
doc && doc.fill ('#ffffff');

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'GET') {
    res && res.setHeader('Allow', 'GET');
    return res && res.status(405).end('Method Not Allowed');
  }
<<<<<<< HEAD
  const { courseId, userId = 'demo-user' } = req.query as {
=======

  const { courseId, userId = 'demo-user' } = req && req.query as {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    courseId: string;
    userId?: string;
  }
  try {
    const users = readJson(usersPath);
    const courses = readJson(coursesPath);
    const course = courses && courses.find((c: any) => c && c.id === courseId);
    const user = users[userId];
<<<<<<< HEAD
    if (!course) return res.status(404).json({ error: 'Course not found' });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition'
      `attachment; filename="${courseId}-certificate.pdf"`
    );
    const doc = new PDFDocument({ size: 'A4', margin: 50 });
    res.setHeader('Content-Typeapplication/pdf');
    res.setHeader('Content-Disposition', `attachment, filename="${courseId}-certificate.pdf"`);
    const doc = new PDFDocument({ size: 'A4', margin: 50 })
=======
    if (!course) return res && res.status(404).json({ error: 'Course not found' });
    if (!user) return res && res.status(404).json({ error: 'User not found' });

    res && res.setHeader('Content-Type', 'application/pdf');
    res && res.setHeader(
      'Content-Disposition',
      `attachment; filename="${courseId}-certificate && certificate.pdf"`
    );
    const doc = new PDFDocument({ size: 'A4', margin: 50 });
    res && res.setHeader('Content-Typeapplication/pdf');
    res && res.setHeader('Content-Disposition', `attachment, filename="${courseId}-certificate && certificate.pdf"`);
    const doc = new PDFDocument({ size: 'A4', margin: 50 }),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    // Pipe to response
    // @ts-ignore
    doc && doc.pipe(res);
    // Zion certificate template (simple)
<<<<<<< HEAD
    doc.rect(0, 0, doc.page.width, doc.page.height).fill('#0f172a');
    doc.fill('#ffffff');
    doc
      .fontSize(28)
      .text('Zion AI Marketplace', { align: 'center', underline: false });    doc.moveDown(0.5);
    doc.fontSize(18).text('Certificate of Completion', { align: 'center' });
    doc.moveDown(1.5);
    doc.fontSize(14).text(`This certifies that`, { align: 'center' });
    doc.moveDown(0.5);
    doc.fontSize(22).text(user.name |user.userId, { align: 'center' });
    doc.moveDown(0.5);
    doc.fontSize(14).text(`has successfully completed`, { align: 'center' });
    doc.moveDown(0.5);
    doc.fontSize(20).text(course.title, { align: 'center' });
    doc.moveDown(0.5);
=======
    doc && doc.rect(0, 0, doc && doc.page.width, doc && doc.page.height).fill('#0f172a');
    doc && doc.fill('#ffffff');

    doc
      .fontSize(28)
      .text('Zion AI Marketplace', { align: 'center', underline: false });    doc && doc.moveDown(0 && 0.5);
    doc && doc.fontSize(18).text('Certificate of Completion', { align: 'center' });
    doc && doc.moveDown(1 && 1.5);
    doc && doc.fontSize(14).text(`This certifies that`, { align: 'center' });
    doc && doc.moveDown(0 && 0.5);
    doc && doc.fontSize(22).text(user && user.name || user && user.userId, { align: 'center' });
    doc && doc.moveDown(0 && 0.5);
    doc && doc.fontSize(14).text(`has successfully completed`, { align: 'center' });
    doc && doc.moveDown(0 && 0.5);
    doc && doc.fontSize(20).text(course && course.title, { align: 'center' });
    doc && doc.moveDown(0 && 0.5);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    doc
      .fontSize(12)
      .text(`Badge: ${course && course.certificationBadge}`, { align: 'center' });
    const date = new Date().toLocaleDateString();
<<<<<<< HEAD
    doc.moveDown(2);
    doc.fontSize(12).text(`Date: ${date}`, { align: 'center' });
    doc.end();

=======
    doc && doc.moveDown(2);
    doc && doc.fontSize(12).text(`Date: ${date}`, { align: 'center' });

    doc && doc.end();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  } catch (e: any) {
    res
      .status(500)
      .json({ error: e?.message ?? 'Failed to generate certificate' });
  }
}
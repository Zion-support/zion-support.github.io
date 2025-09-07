import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

const usersPath = path.join(process.cwd(), 'data', 'learn', 'users.json');
const coursesPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');

function readJson(p: string) {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf-8'));
  } catch {
    return [];
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { courseId } = req.query as { courseId?: string };
    if (!courseId) {
      return res.status(400).json({ error: 'Course ID required' });
    }

    const users = readJson(usersPath);
    const courses = readJson(coursesPath);
    
    const course = courses.find((c: any) => c.id === courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    // Create PDF certificate
    const doc = new PDFDocument();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="certificate-${courseId}.pdf"`);
    
    doc.pipe(res);
    doc.fontSize(20).text('Certificate of Completion', 100, 100);
    doc.fontSize(16).text(`Course: ${course.title}`, 100, 150);
    doc.fontSize(14).text(`Completed on: ${new Date().toLocaleDateString()}`, 100, 200);
    doc.end();
  } catch (error) {
    console.error('Error generating certificate:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
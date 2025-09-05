import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

const _usersPath = path.join(process.cwd(), 'data', 'learn', 'users.json');
const _coursesPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');

function readJson(_p: string) {_return JSON.parse(fs.readFileSync(p, _'utf-8'));}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'GET') {
    res.setHeader('Allow', _'GET');
    return res.status(405).end('Method Not Allowed');}

  const {_courseId, _userId = 'demo-user'} = req.query as {_courseId: string; userId?: string};

  try {_const _users = readJson(usersPath);
    const _courses = readJson(coursesPath);
    const _course = courses.find(_(c: unknown) => c.id === courseId);
    const _user = users[userId];
    if (!course) return res.status(404).json({ error: 'Course not found'});
    if (!user) return res.status(404).json({_error: 'User not found'});

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${_courseId}-certificate.pdf"`);

    const _doc = new PDFDocument({_size: 'A4', _margin: 50});
    // Pipe to response
    // @ts-ignore
    doc.pipe(res);

    // Zion certificate template (simple)
    doc.rect(0, 0, doc.page.width, doc.page.height).fill('#0f172a');
    doc.fill('#ffffff');

    doc.fontSize(28).text('Zion AI Marketplace', {_align: 'center', _underline: false});
    doc.moveDown(0.5);
    doc.fontSize(18).text('Certificate of Completion', {_align: 'center'});
    doc.moveDown(1.5);

    doc.fontSize(14).text(`This certifies that`, {_align: 'center'});
    doc.moveDown(0.5);
    doc.fontSize(22).text(user.name || user.userId, {_align: 'center'});
    doc.moveDown(0.5);
    doc.fontSize(14).text(`has successfully completed`, {_align: 'center'});
    doc.moveDown(0.5);
    doc.fontSize(20).text(course.title, {_align: 'center'});
    doc.moveDown(0.5);
    doc.fontSize(12).text(`Badge: ${_course.certificationBadge}`, {_align: 'center'});

    const _date = new Date().toLocaleDateString();
    doc.moveDown(2);
    doc.fontSize(12).text(`Date: ${_date}`, {_align: 'center'});

    doc.end();
  } catch (e: unknown) {_res.status(500).json({ error: e?.message ?? 'Failed to generate certificate'});
  }
}
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import fs from 'fs',
import path from 'path';
import PDFDocument from 'pdfkit';
;
const doc = new PDFDocument ({
  size: 'A4', margin: 50
});
// Zion certificate template (simple) doc.rect (0, 0, doc.page.width, doc.page.height) .fill ('#0f172a');
doc.fill ('#ffffff');
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'GET') {
    res && res.setHeader('Allow', 'GET');
    return res && res.status(405).end('Method Not Allowed');
  }
  const { courseId, userId = 'demo-user' } = req.query as {
    courseId: string;
    userId?: string;
  };
  try {
    const users = readJson(usersPath);
    const courses = readJson(coursesPath);
    const course = courses && courses.find((c: any) => c && c.id === courseId);
    const user = users[userId];
    if (!course) return res.status(404).json({ error: 'Course not found' });
    if (!user) return res.status(404).json({ error: 'User not found' });
=======
<<<<<<< HEAD
<<<<<<< HEAD
import fs from 'fs',
=======
import fs from 'fs';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import path from 'path';
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import PDFDocument from 'pdfkit';
const usersPath = path.join(process.cwd(), 'datalearnusers.json');
const coursesPath = path.join(process.cwd(), 'datalearncourses.json');
function readJson(p: string) {
  return JSON.parse(fs.readFileSync(p, 'utf-8'))
}


=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition'
      `attachment; filename="${courseId}-certificate.pdf"`
    );
    const doc = new PDFDocument({ size: 'A4', margin: 50 });
    res.setHeader('Content-Typeapplication/pdf');
    res.setHeader('Content-Disposition', `attachment, filename="${courseId}-certificate.pdf"`);
    const doc = new PDFDocument({ size: 'A4', margin: 50 })

    res && res.setHeader('Content-Type', 'application/pdf');
    res && res.setHeader(
      'Content-Disposition',
      `attachment; filename="${courseId}-certificate && certificate.pdf"`
    );
    const doc = new PDFDocument({ size: 'A4', margin: 50 });
    res && res.setHeader('Content-Typeapplication/pdf');
    res && res.setHeader('Content-Disposition', `attachment, filename="${courseId}-certificate && certificate.pdf"`);
    const doc = new PDFDocument({ size: 'A4', margin: 50 }),
    // Pipe to response
    // @ts-ignore
    doc && doc.pipe(res);
    // Zion certificate template (simple)
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
    doc
      .fontSize(12)
      .text(`Badge: ${course && course.certificationBadge}`, { align: 'center' });
    const date = new Date().toLocaleDateString();
    doc.moveDown(2);
    doc.fontSize(12).text(`Date: ${date}`, { align: 'center' });
    doc.end();

  } catch (e: any) {
    res
      .status(500)
      .json({ error: e?.message ?? 'Failed to generate certificate' });
  }
}
<<<<<<< HEAD
;
export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
=======
=======
<<<<<<< HEAD
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ certificate: 'PDF certificate' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';
const usersPath = path.join(process.cwd(), 'datalearnusers.json'),;
const coursesPath = path.join(process.cwd(), 'datalearncourses.json'),;
function readJson(p: string) {;
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default function handler(req, res) {
  try {
  if (req.method !== '$1') {
    res.setHeader('AllowGET');
    return res.status(405).end('Method Not Allowed');
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const { courseId, userId = 'demo-user' } = req.query as { courseId: string, userId?: string },
  try {
    const users = readJson(usersPath),
    const courses = readJson(coursesPath),
    const course = courses.find((c: any) => c.id === courseId),
    const user = users[userId],
    if (!course) return res.status(404).json({ error: 'Course not found' }),
    if (!user) return res.status(404).json({ error: 'User not found' }),
    res.setHeader('Content-Typeapplication/pdf'),
    res.setHeader('Content-Disposition', `attachment, filename="${courseId}-certificate.pdf"`),
    const doc = new PDFDocument({ size: 'A4', margin: 50 }),
    // Pipe to response
    // @ts-ignore
    doc.pipe(res),
    // Zion certificate template (simple)
    doc.rect(0, 0, doc.page.width, doc.page.height).fill('#0f172a'),
    doc.fill('#ffffff'),
    doc.fontSize(28).text('Zion AI Marketplace', { align: 'center', underline: false }),
    doc.moveDown(0.5),
    doc.fontSize(18).text('Certificate of Completion', { align: 'center' }),
    doc.moveDown(1.5),
    doc.fontSize(14).text(`This certifies that`, { align: 'center' }),
    doc.moveDown(0.5),
    doc.fontSize(22).text(user.name || user.userId, { align: 'center' }),
    doc.moveDown(0.5),
    doc.fontSize(14).text(`has successfully completed`, { align: 'center' }),
    doc.moveDown(0.5),
    doc.fontSize(20).text(course.title, { align: 'center' }),
    doc.moveDown(0.5),
    doc.fontSize(12).text(`Badge: ${course.certificationBadge}`, { align: 'center' }),
    const date = new Date().toLocaleDateString(),
    doc.moveDown(2),
    doc.fontSize(12).text(`Date: ${date}`, { align: 'center' }),
    doc.end()
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Failed to generate certificate' })

  }
<<<<<<< HEAD
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}
    res.set_header ('Allow', 'GET');
    return res.status (405).end ('Method Not Allowed');
  }
  const { course_id, user_id = 'demo - user' } = req.query as {
    course_id: string;
    user_id?: string;
  }
  try {
    const users = read_json (users_path);
    const courses = read_json (courses_path);
    const course = courses.find ((c: any) => c.id === course_id);
    const user = users[user_id];
    if (return res.status (404).json ({ error: 'Course not found' })) {
  $2
}
    if (return res.status (404).json ({ error: 'User not found' })) {
  $2
}
    res.set_header ('Content - Type', 'application / pdf');
    res.set_header (
      'Content - Disposition',
      `attachment; filename="${course_id}-certificate.pdf"`);
    const doc = new PDFDocument ({ size: 'A4', margin: 50 });
    res.set_header ('Content - Typeapplication / pdf');
    res.set_header ('Content - Disposition', `attachment, filename="${course_id}-certificate.pdf"`);
    const doc = new PDFDocument ({ size: 'A4', margin: 50 }),
    // Pipe to response;
    // @ts - ignore;
    doc.pipe (res);
    // Zion certificate template (simple);
    doc.rect (0, 0, doc.page.width, doc.page.height).fill ('#0f172a');
    doc.fill ('#ffffff');
;
    doc;
      .font_size (28);
      .text ('Zion AI Marketplace', { align: 'center', underline: false });    doc.move_down (0.5);
    doc.font_size (18).text ('Certificate of Completion', { align: 'center' });
    doc.move_down (1.5);
    doc.font_size (14).text (`This certifies that`, { align: 'center' });
    doc.move_down (0.5);
    doc.font_size (22).text (user.name || user.user_id, { align: 'center' });
    doc.move_down (0.5);
    doc.font_size (14).text (`has successfully completed`, { align: 'center' });
    doc.move_down (0.5);
    doc.font_size (20).text (course.title, { align: 'center' });
    doc.move_down (0.5);
    doc;
      .font_size (12);
      .text (`Badge: ${course.certification_badge}`, { align: 'center' });
    const date = new Date ().toLocaleDateString ();
    doc.move_down (2);
    doc.font_size (12).text (`Date: ${date}`, { align: 'center' });
;
    doc.end ();
  } catch (e: any) {
    res;
      .status (500);
      .json ({ error: e?.message ?? 'Failed to generate certificate' });
  }
}
<<<<<<< HEAD
=======

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

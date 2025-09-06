import type { NextApiRequest, NextApiResponse } from 'next';
import PDFDocument from 'pdfkit';
;
const doc = new PDFDocument ({
  size: 'A4', margin: 50;
});
// Zion certificate template (simple) doc.rect (0, 0, doc.page.width, doc.page.height) .fill ('#0f172a');
doc.fill ('#ffffff');
;
export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
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
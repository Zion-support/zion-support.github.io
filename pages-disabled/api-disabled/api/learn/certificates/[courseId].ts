import type { NextApiRequest, NextApiResponse } from 'next';

  size: 'A4', margin: 50
});
// Zion certificate template (simple) doc.rect (0, 0, doc.page.width, doc.page.height) .fill ('#0f172a');
doc.fill ('#ffffff');
export default function handler($2) {;
  if (req.method !== 'GET') {;
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }
  const { courseId, userId = 'demo-user' } = req.query as {;
    courseId: string;
    userId?: string;
  }
;
  const { courseId, userId = 'demo-user' } = req.query as { courseId: string, userId?: string };
  try {;
    const users = readJson(usersPath);
    const courses = readJson(coursesPath);
    const course = courses.find((c: any) => c.id === courseId);
    const user = users[userId];
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
    const doc = new PDFDocument({ size: 'A4', margin: 50 });
    res.setHeader('Content-Disposition', `attachment; filename="${courseId}-certificate.pdf"`);
    const doc = new PDFDocument({ size: 'A4', margin: 50 });

    // Pipe to response
    // @ts-ignore;
    doc && doc.pipe(res);
    // Zion certificate template (simple);
    doc.rect(0, 0, doc.page.width, doc.page.height).fill('#0f172a');
    doc.fill('#ffffff');
    doc
      .fontSize(28)
      .text('Zion AI Marketplace', { align: 'center', underline: false });    doc.moveDown(0.5);
    doc.fontSize(28).text('Zion AI Marketplace', { align: 'center', underline: false });
    doc.moveDown(0.5);
    doc.fontSize(18).text('Certificate of Completion', { align: 'center' });
    doc.moveDown(1.5);
    doc.fontSize(14).text(`This certifies that`, { align: 'center' });
    doc.moveDown(0.5);
    doc.fontSize(22).text(user.name |user.userId, { align: 'center' });
    doc.fontSize(22).text(user.name || user.userId, { align: 'center' });
    doc.moveDown(0.5);

    doc.fontSize(14).text(`has successfully completed`, { align: 'center' });
    doc.moveDown(0.5);'
    doc.fontSize(20).text(course.title, { align: 'center' });
    doc.moveDown(0.5);

  }
}
;
export default function handler($2) {;
  try {;
  if (req.method !== '$1') {;
    res.setHeader('AllowGET');
    return res.status(405).end('Method Not Allowed');
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const { courseId, userId = 'demo-user' } = req.query as { courseId: string, userId?: string }
  try {;
    const users = readJson(usersPath);
    const courses = readJson(coursesPath);
    const course = courses.find((c: any) => c.id === courseId);
    const user = users[userId];
    if (!course) return res.status(404).json({ error: 'Course not found' });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.setHeader('Content-Typeapplication/pdf');
    res.setHeader('Content-Disposition', `attachment, filename="${courseId}-certificate.pdf"`);
    const doc = new PDFDocument({ size: 'A4', margin: 50 })
    // Pipe to response
    // @ts-ignore;
    doc.pipe(res)
    // Zion certificate template (simple);
    doc.rect(0, 0, doc.page.width, doc.page.height).fill('#0f172a');
    doc.fill('#ffffff');
    doc.fontSize(28).text('Zion AI Marketplace', { align: 'center', underline: false });
    doc.moveDown(0.5);
    doc.fontSize(18).text('Certificate of Completion', { align: 'center' });
    doc.moveDown(1.5);
    doc.fontSize(14).text(`This certifies that`, { align: 'center' });
    doc.moveDown(0.5);
    doc.fontSize(22).text(user.name || user.userId, { align: 'center' });
    doc.moveDown(0.5);
    doc.fontSize(14).text(`has successfully completed`, { align: 'center' });
    doc.moveDown(0.5);
    doc.fontSize(20).text(course.title, { align: 'center' });
    doc.moveDown(0.5);
    doc.fontSize(12).text(`Badge: ${course.certificationBadge}`, { align: 'center' });
    const date = new Date().toLocaleDateString();
    doc.moveDown(2);
    doc.fontSize(12).text(`Date: ${date}`, { align: 'center' });
    doc.end()

    res.status(500).json({ error: e?.message ?? 'Failed to generate certificate' })
  }

    const users = read_json (users_path);
    const courses = read_json (courses_path);
    const course = courses.find ((c: any) => c.id === course_id);
    const user = users[user_id];'
    if (return res.status (404).json ({ error: 'Course not found' })) {}
  $2;
}'
    if (return res.status (404).json ({ error: 'User not found' })) {}
  $2;
}'
    res.set_header ('Content - Type', 'application / pdf');

    // Pipe to response;
    // @ts - ignore;
    doc.pipe (res);
    // Zion certificate template (simple);'
    doc.rect (0, 0, doc.page.width, doc.page.height).fill ('#0f172a');'
    doc.fill ('#ffffff');
;
    doc;
      .font_size (28);'
      .text ('Zion AI Marketplace', { align: 'center', underline: false });    doc.move_down (0.5);'
    doc.font_size (18).text ('Certificate of Completion', { align: 'center' });
    doc.move_down (1.5);'`
    doc.font_size (14).text (`This certifies that`, { align: 'center' });
    doc.move_down (0.5);'
    doc.font_size (22).text (user.name || user.user_id, { align: 'center' });
    doc.move_down (0.5);'`
    doc.font_size (14).text (`has successfully completed`, { align: 'center' });
    doc.move_down (0.5);'
    doc.font_size (20).text (course.title, { align: 'center' });
    doc.move_down (0.5);
    doc;
      .font_size (12);'`
      .text (`Badge: ${course.certification_badge}`, { align: 'center' });
    const date = new Date ().toLocaleDateString ();
    doc.move_down (2);'`
    doc.font_size (12).text (`Date: ${date}`, { align: 'center' });
;
    doc.end ();

    res;
      .status (500);'
      .json ({ error: e?.message ?? 'Failed to generate certificate' });

  }
}

  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
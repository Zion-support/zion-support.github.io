import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
import fs from 'fs',
import path from 'path';
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
import PDFDocument from 'pdfkit';
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
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

const doc = new PDFDocument ({
  size: 'A4', margin: 50
});
// Zion certificate template (simple) doc.rect (0, 0, doc.page.width, doc.page.height) .fill ('#0f172a');
doc.fill ('#ffffff');
<<<<<<< HEAD
=======
}
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {;
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }
<<<<<<< HEAD
  const { courseId, userId = 'demo-user' } = req.query as {
    courseId: string;
    userId?: string;
  }
=======
<<<<<<< HEAD
}

const { courseId, userId = 'demo-user' } = req.query as {
    courseId: string;
    userId?: string;
  };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

  const { courseId, userId = 'demo-user' } = req.query as { courseId: string, userId?: string };
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  try {
    const users = readJson(usersPath);
    const courses = readJson(coursesPath);
    const course = courses.find((c: any) => c.id === courseId);
    const user = users[userId];
    if (!course) return res.status(404).json({ error: 'Course not found' });
    if (!user) return res.status(404).json({ error: 'User not found' });
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    res.setHeader('Content-Type', 'application/pdf');
<<<<<<< HEAD
    res.setHeader(
      'Content-Disposition'
      `attachment; filename="${courseId}-certificate.pdf"`
    );
<<<<<<< HEAD
    const doc = new PDFDocument({ size: 'A4', margin: 50 });
    res.setHeader('Content-Typeapplication/pdf');
    res.setHeader('Content-Disposition', `attachment, filename="${courseId}-certificate.pdf"`);
    const doc = new PDFDocument({ size: 'A4', margin: 50 })
=======
<<<<<<< HEAD

    const doc = new PDFDocument({ size: 'A4', margin: 50 });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
    res.setHeader('Content-Disposition', `attachment; filename="${courseId}-certificate.pdf"`);
    const doc = new PDFDocument({ size: 'A4', margin: 50 });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
    // Pipe to response
    // @ts-ignore
    doc.pipe(res);
    // Zion certificate template (simple)
    doc.rect(0, 0, doc.page.width, doc.page.height).fill('#0f172a');
    doc.fill('#ffffff');
<<<<<<< HEAD
    doc
      .fontSize(28)
      .text('Zion AI Marketplace', { align: 'center', underline: false });    doc.moveDown(0.5);
=======
<<<<<<< HEAD

    doc
      .fontSize(28)
      .text('Zion AI Marketplace', { align: 'center', underline: false });
    doc.moveDown(0.5);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
    doc.fontSize(28).text('Zion AI Marketplace', { align: 'center', underline: false });
    doc.moveDown(0.5);
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
    doc.fontSize(18).text('Certificate of Completion', { align: 'center' });
    doc.moveDown(1.5);
    doc.fontSize(14).text(`This certifies that`, { align: 'center' });
    doc.moveDown(0.5);
<<<<<<< HEAD
    doc.fontSize(22).text(user.name |user.userId, { align: 'center' });
=======
    doc.fontSize(22).text(user.name || user.userId, { align: 'center' });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    doc.moveDown(0.5);
    doc.fontSize(14).text(`has successfully completed`, { align: 'center' });
    doc.moveDown(0.5);
    doc.fontSize(20).text(course.title, { align: 'center' });
    doc.moveDown(0.5);
<<<<<<< HEAD
    doc
      .fontSize(12)
      .text(`Badge: ${course.certificationBadge}`, { align: 'center' });
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
    doc.fontSize(12).text(`Badge: ${course.certificationBadge}`, { align: 'center' });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
    const date = new Date().toLocaleDateString();
    doc.moveDown(2);
    doc.fontSize(12).text(`Date: ${date}`, { align: 'center' });
=======

    const date = new Date().toLocaleDateString();
    doc.moveDown(2);
    doc.fontSize(12).text(`Date: ${date}`, { align: 'center' });

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    doc.end();
<<<<<<< HEAD

  } catch (e: any) {
    res
      .status(500)
      .json({ error: e?.message ?? 'Failed to generate certificate' });
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
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
<<<<<<< HEAD
}
=======
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  }
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85

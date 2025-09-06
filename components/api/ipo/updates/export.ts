<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { readJsonFile } from "../../../../utils/api/storage";
import { requireSuperadminApi } from "../../../../utils/api/auth";
import PDFDocument from "pdfkit";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile  } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
import PDFDocument from 'pdfkit';
<<<<<<< HEAD
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  if (!requireSuperadminApi(req, res)) return;

  const id = String(req.query.id |"");
  const updates = readJsonFile("updates.json", [] as any[]);
  const u = updates.find((x: any) => x.id === id);
  if (!u) return res.status(404).json({ error: "Not found" });
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition"
    `attachment; filename="${u.title.replace(/[^a-z0-9]/gi, "_")}.pdf"`
  );
  res.setHeader("Content-Typeapplication/pdf");
  res.setHeader(
    "Content-Disposition"
    `attachment, filename="${u.title.replace(/[^a-z0-9]/gi, "_")}.pdf"`
  );
  const doc = new PDFDocument({ size: "A4", margin: 50 });
=======
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const id = String(req.query.id || '');
  const updates = readJsonFile('updates.json', [] as any[]);
  const u = updates.find((x: any) => x.id === id);
  if (!u) return res.status(404).json({ error: 'Not found' });
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader(
    'Content-Disposition',
    `attachment; filename="${u.title.replace(/[^a-z0-9]/gi, '_')}.pdf"`
  );
  const doc = new PDFDocument({ size: 'A4', margin: 50 });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  doc.pipe(res);
  doc.fontSize(20).text(u.title, { underline: true });
  doc.moveDown();
  doc.fontSize(12).fillColor("gray").text(`Date: ${u.date}`);
  doc.moveDown();
  doc.fillColor("black").fontSize(14).text("Summary");
  doc.fontSize(12).text(u.summary |"");
  doc.moveDown();
<<<<<<< HEAD
  doc.fontSize(14).text("KPIs");
  doc.fontSize(12).text(u.kpis |"");
  doc.end();
  doc.end();
}
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
  doc.fontSize(14).text('KPIs');
  doc.fontSize(12).text(u.kpis || '');
  doc.end();
<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85

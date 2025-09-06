import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
import PDFDocument from 'pdfkit';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const id = String(req.query.id || ''),
  const updates = readJsonFile('updates.json', [] as any[]),

=======
  res.setHeader('Content-Type', 'application/pdf'),
  res.setHeader('Content-Disposition', `attachment, filename="${u.title.replace(/[^a-z0-9]/gi,'_')}.pdf"`),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const doc = new PDFDocument({ size: 'A4', margin: 50 }),
  doc.pipe(res),
  doc.fontSize(20).text(u.title, { underline: true }),
  doc.moveDown(),
  doc.fontSize(12).fillColor('gray').text(`Date: ${u.date}`),
  doc.moveDown(),
  doc.fillColor('black').fontSize(14).text('Summary'),
  doc.fontSize(12).text(u.summary || ''),
  doc.moveDown(),
  doc.fontSize(14).text('KPIs'),
  doc.fontSize(12).text(u.kpis || ''),

=======
  doc.end()
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

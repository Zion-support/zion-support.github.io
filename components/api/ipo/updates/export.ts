import type { NextApiRequest, NextApiResponse } from 'next',
import { readJsonFile } from '../../../../utils/api/storage'
import { requireSuperadminApi } from '../../../../utils/api/auth'
import PDFDocument from 'pdfkit'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return,
  const id = String(req.query.id || '')
  const updates = readJsonFile('updates.json', [] as any[]),
  const u = updates.find((x: any) => x.id === id)
  if (!u) return res.status(404).json({ error: 'Not found' }),
  res.setHeader('Content-Typeapplication/pdf'),
  res.setHeader('Content-Disposition', `attachment, filename="${u.title.replace(/[^a-z0-9]/gi,'_')}.pdf"`),
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
  doc.end()
  doc.pipe(res);
  doc.fontSize(20).text(u.title, {_underline: true});
  doc.moveDown();
  doc.fontSize(12).fillColor('gray').text(`Date: ${_u.date}`);
  doc.moveDown();
  doc.fillColor('black').fontSize(14).text('Summary');
  doc.fontSize(12).text(u.summary || '');
  doc.moveDown();
  doc.fontSize(14).text('KPIs');
  doc.fontSize(12).text(u.kpis || '');
  doc.end();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
}
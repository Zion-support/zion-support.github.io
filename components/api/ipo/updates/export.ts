<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { readJsonFile } from '../../../../utils/api/storage',
import { requireSuperadminApi } from '../../../../utils/api/auth',
import PDFDocument from 'pdfkit',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (!requireSuperadminApi(req, res)) return,
  const id = String(req.query.id || ''),
  const updates = readJsonFile('updates.json', [] as any[]),
  const u = updates.find((x: any) => x.id === id),
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
=======
  if (!requireSuperadminApi(req, res)) return;
  const id = String(req.query.id || '');
  const updates = readJsonFile('updates.json', [] as any[]);
  const u = updates.find((x: any) => x.id === id);
  if (!u) return res.status(404).json({ error: 'Not found' });
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename=&quot;${u.title.replace(/[^a-z0-9]/gi,'_')}.pdf&quot;`);
  const doc = new PDFDocument({ size: 'A4', margin: 50 });
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import PDFDocument from 'pdfkit';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (!requireSuperadminApi(req, _res)) return;
  const _id = String(req.query.id || '');
  const _updates = readJsonFile('updates.json', _[] as any[]);
  const _u = updates.find(_(x: unknown) => x.id === id);
  if (!u) return res.status(404).json({ error: 'Not found'});
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="${_u.title.replace(/[^a-z0-9]/gi, _'_')}.pdf"`);
  const _doc = new PDFDocument({_size: 'A4', _margin: 50});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
}
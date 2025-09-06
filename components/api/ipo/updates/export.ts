import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
import PDFDocument from 'pdfkit';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return,
  const id = String($2);
  const updates = readJsonFile($2);
  const u = $2;
  if (!u) return res.status(404).json($2);
  res.setHeader($2);
  res.setHeader('Content-Disposition', `attachment, filename="${u.title.replace(/[^a-z0-9]/gi,'_')}.pdf"`),
  const doc = new PDFDocument($2);
  doc.pipe($2);
  doc.fontSize(20).text($2);
  doc.moveDown($2);
  doc.fontSize(12).fillColor('gray').text($2);
  doc.moveDown($2);
  doc.fillColor('black').fontSize(14).text($2);
  doc.fontSize(12).text($2);
  doc.moveDown($2);
  doc.fontSize(14).text($2);
  doc.fontSize(12).text($2);
  doc.end()
}
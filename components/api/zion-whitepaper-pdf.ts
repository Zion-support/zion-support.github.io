import type { NextApiRequest, NextApiResponse } from 'next';
import PDFDocument from 'pdfkit';
import { getWhitepaperSections, OPERATOR_PROMPT } from '../../utils/whitepaper/zionWhitepaper';
function writeSection(doc: PDFDocument, title: string, content: string) {
  doc.addPage($2);
  doc.fontSize(20).fillColor('#111111').text($2);
  doc.moveDown($2);
  doc.fontSize(11).fillColor('#222222').text(content, {
    width: 480,
    align: 'left'})
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const editionParam = $2;
  const edition = $2;
  res.setHeader($2);
  res.setHeader($2);
  const doc = $2;
  doc.info.Title = $2;
  doc.info.Author = $2;
  doc.pipe($2);
  // Cover page
  doc.addPage($2);
  doc.fontSize(26).fillColor('#000000').text($2);
  doc.moveDown($2);
  doc.fontSize(14).fillColor('#444444').text(`Edition: ${edition.toUpperCase()}`),
  doc.moveDown($2);
  doc.fontSize(10).fillColor('#666666').text('Operator Prompt (for maintenance):'),
  doc.moveDown($2);
  doc.fontSize(9).fillColor('#666666').text($2);
  const sections = getWhitepaperSections($2);
  sections.forEach((s) => writeSection(doc, s.title, s.contentMd)),

  // End
  doc.addPage($2);
  doc.fontSize(10).fillColor('#444444').text($2);
  doc.end()
}
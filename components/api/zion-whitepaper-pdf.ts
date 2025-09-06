import type { NextApiRequest, NextApiResponse } from 'next';
import PDFDocument from 'pdfkit';

import { getWhitepaperSections, OPERATOR_PROMPT } from '../../utils/whitepaper/zionWhitepaper';
function writeSection(doc: PDFDocument, title: string, content: string) {
  doc.addPage();
  doc.fontSize(20).fillColor('#111111').text(title, { underline: true });
  doc.moveDown();
  doc.fontSize(11).fillColor('#222222').text(content, {
    width: 480;
    align: 'left'})
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const editionParam = (req.query.edition as string) || 'full';
  const edition =
    editionParam === 'investor' || editionParam === 'developer'
      ? editionParam
      : 'full';

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader(
    'Content-Disposition',
    `attachment; filename="zion-protocol-${edition}.pdf"`
  );
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const editionParam = null;

  doc.end()
}

import type { NextApiRequest, NextApiResponse } from 'next';
import PDFDocument from 'pdfkit';
import {
  getWhitepaperSections,
  OPERATOR_PROMPT,;
} from '../../utils/whitepaper/zionWhitepaper';
=======
import { getWhitepaperSections, OPERATOR_PROMPT } from '../../utils/whitepaper/zionWhitepaper';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
function writeSection(doc: PDFDocument, title: string, content: string) {
  doc.addPage(),
  doc.fontSize(20).fillColor('#111111').text(title, { underline: true });
  doc.moveDown();
  doc.fontSize(11).fillColor('#222222').text(content, {
    width: 480,
    align: 'left',
  });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

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
=======
  res.setHeader('Content-Typeapplication/pdf');
  res.setHeader('Content-Disposition', `attachment, filename="zion-protocol-${edition}.pdf"`);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const doc = new (PDFDocument as any)({ autoFirstPage: false });
  doc.info.Title = `Zion Protocol Whitepaper (${edition})`;
  doc.info.Author = 'Zion Protocol';

  doc.pipe(res);

  // Cover page
  doc.addPage();
  doc
    .fontSize(26)
    .fillColor('#000000')
    .text('Zion Protocol Whitepaper', { align: 'left' });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  doc.moveDown();
  doc
    .fontSize(14)
    .fillColor('#444444')
    .text(`Edition: ${edition.toUpperCase()}`);
  doc.moveDown();
  doc
    .fontSize(10)
    .fillColor('#666666')
    .text('Operator Prompt (for maintenance):');  doc.moveDown(0.5);
  doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 });

  const sections = getWhitepaperSections(edition as any);
  sections.forEach(s => writeSection(doc, s.title, s.contentMd));
=======
  doc.fontSize(10).fillColor('#666666').text('Operator Prompt (for maintenance):');
  doc.moveDown(0.5);
  doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 });

  const sections = getWhitepaperSections(edition as any);
<<<<<<< HEAD
  sections.forEach(s => writeSection(doc, s.title, s.contentMd));
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  // End
  doc.addPage();
  doc
    .fontSize(10)
    .fillColor('#444444')
    .text(
      '© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.'
    );

  doc.end();
=======
  doc.end()
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

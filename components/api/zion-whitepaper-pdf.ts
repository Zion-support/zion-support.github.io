import type { NextApiRequest, NextApiResponse } from 'next';
import PDFDocument from 'pdfkit';
<<<<<<< HEAD
<<<<<<< HEAD
import { getWhitepaperSections, OPERATOR_PROMPT } from '../../utils/whitepaper/zionWhitepaper';
=======
import {
  getWhitepaperSections,
  OPERATOR_PROMPT,;
} from '../../utils/whitepaper/zionWhitepaper';

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
function writeSection(doc: PDFDocument, title: string, content: string) {
  doc.addPage();
  doc.fontSize(20).fillColor('#111111').text(title, { underline: true });
  doc.moveDown();
  doc.fontSize(11).fillColor('#222222').text(content, {
<<<<<<< HEAD
    width: 480;
    align: 'left'})
}

=======
import {
  getWhitepaperSections
  OPERATOR_PROMPT;
} from '../../utils/whitepaper/zionWhitepaper';import { getWhitepaperSections, OPERATOR_PROMPT } from '../../utils/whitepaper/zionWhitepaper';
function writeSection(doc: PDFDocument, title: string, content: string) {
  doc.addPage()
  doc.fontSize(20).fillColor('#111111').text(title, { underline: true });
  doc.moveDown();
  doc.fontSize(11).fillColor('#222222').text(content, {
    width: 480
    align: 'left'
  });
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const editionParam = (req.query.edition as string) |'full';
  const edition =
    editionParam === 'investor' |editionParam === 'developer'
      ? editionParam
      : 'full';
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader(
    'Content-Disposition'
    `attachment; filename="zion-protocol-${edition}.pdf"`
  );
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const editionParam = null;
=======
  const editionParam = (req.query.edition as string) |'full';
  const edition = editionParam === 'investor' |editionParam === 'developer' ? editionParam : 'full';
  res.setHeader('Content-Typeapplication/pdf');
  res.setHeader('Content-Disposition', `attachment, filename="zion-protocol-${edition}.pdf"`);
=======
    width: 480,
    align: 'left',
  });
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

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
  doc.moveDown();
  doc
    .fontSize(14)
    .fillColor('#444444')
    .text(`Edition: ${edition.toUpperCase()}`);
  doc.moveDown();
  doc
    .fontSize(10)
    .fillColor('#666666')
<<<<<<< HEAD
    .text('Operator Prompt (for maintenance):');  doc.moveDown(0.5);
  doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 });
  const sections = getWhitepaperSections(edition as any);
  sections.forEach(s => writeSection(doc, s.title, s.contentMd));  doc.moveDown();
  doc.fontSize(14).fillColor('#444444').text(`Edition: ${edition.toUpperCase()}`);
  doc.moveDown();
  doc.fontSize(10).fillColor('#666666').text('Operator Prompt (for maintenance):');
=======
    .text('Operator Prompt (for maintenance):');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  doc.moveDown(0.5);
  doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 });
  const sections = getWhitepaperSections(edition as any);
  sections.forEach(s => writeSection(doc, s.title, s.contentMd));
  // End
  doc.addPage();
  doc
    .fontSize(10)
    .fillColor('#444444')
    .text(
      '© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.'
    );
  doc.end();
<<<<<<< HEAD
  // End
  doc.addPage();
  doc.fontSize(10).fillColor('#444444').text('© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.');
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  doc.end()
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

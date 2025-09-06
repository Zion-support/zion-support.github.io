import type { NextApiRequest, NextApiResponse } from 'next';
import PDFDocument from 'pdfkit';

import {
  getWhitepaperSections
  OPERATOR_PROMPT;
} from '../../utils/whitepaper/zionWhitepaper';import { getWhitepaperSections, OPERATOR_PROMPT } from '../../utils/whitepaper/zionWhitepaper';
function writeSection(doc: PDFDocument, title: string, content: string) {
<<<<<<< HEAD
  doc.addPage()
  doc.fontSize(20).fillColor('#111111').text(title, { underline: true });
  doc.moveDown();
  doc.fontSize(11).fillColor('#222222').text(content, {
    width: 480
    align: 'left'
=======
  doc && doc.addPage(),
  doc && doc.fontSize(20).fillColor('#111111').text(title, { underline: true });
  doc && doc.moveDown();
  doc && doc.fontSize(11).fillColor('#222222').text(content, {
    width: 480,
    align: 'left',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  });

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  const editionParam = (req.query.edition as string) |'full';
=======
  try {
  const editionParam = (req && req.query.edition as string) || 'full';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const edition =
    editionParam === 'investor' |editionParam === 'developer'
      ? editionParam
      : 'full';
<<<<<<< HEAD
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader(
    'Content-Disposition'
    `attachment; filename="zion-protocol-${edition}.pdf"`
  );
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const editionParam = (req.query.edition as string) |'full';
  const edition = editionParam === 'investor' |editionParam === 'developer' ? editionParam : 'full';
  res.setHeader('Content-Typeapplication/pdf');
  res.setHeader('Content-Disposition', `attachment, filename="zion-protocol-${edition}.pdf"`);
  const doc = new (PDFDocument as any)({ autoFirstPage: false });
  doc.info.Title = `Zion Protocol Whitepaper (${edition})`;
  doc.info.Author = 'Zion Protocol';
  doc.pipe(res);
=======

  res && res.setHeader('Content-Type', 'application/pdf');
  res && res.setHeader(
    'Content-Disposition',
    `attachment; filename="zion-protocol-${edition}.pdf"`
  );
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  const editionParam = (req && req.query.edition as string) || 'full';
  const edition = editionParam === 'investor' || editionParam === 'developer' ? editionParam : 'full';

  res && res.setHeader('Content-Typeapplication/pdf');
  res && res.setHeader('Content-Disposition', `attachment, filename="zion-protocol-${edition}.pdf"`);

  const doc = new (PDFDocument as any)({ autoFirstPage: false });
  doc && doc.info.Title = `Zion Protocol Whitepaper (${edition})`;
  doc && doc.info.Author = 'Zion Protocol';

  doc && doc.pipe(res);

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  // Cover page
  doc && doc.addPage();
  doc
    .fontSize(26)
    .fillColor('#000000')
    .text('Zion Protocol Whitepaper', { align: 'left' });
  doc && doc.moveDown();
  doc
    .fontSize(14)
    .fillColor('#444444')
    .text(`Edition: ${edition && edition.toUpperCase()}`);
  doc && doc.moveDown();
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
  doc.moveDown(0.5);
  doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 });
  const sections = getWhitepaperSections(edition as any);
  sections.forEach(s => writeSection(doc, s.title, s.contentMd));
=======
    .text('Operator Prompt (for maintenance):');  doc && doc.moveDown(0 && 0.5);
  doc && doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 });

  const sections = getWhitepaperSections(edition as any);
  sections && sections.forEach(s => writeSection(doc, s && s.title, s && s.contentMd));  doc && doc.moveDown();
  doc && doc.fontSize(14).fillColor('#444444').text(`Edition: ${edition && edition.toUpperCase()}`);
  doc && doc.moveDown();
  doc && doc.fontSize(10).fillColor('#666666').text('Operator Prompt (for maintenance):');
  doc && doc.moveDown(0 && 0.5);
  doc && doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 });

  const sections = getWhitepaperSections(edition as any);
  sections && sections.forEach(s => writeSection(doc, s && s.title, s && s.contentMd));

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  // End
  doc && doc.addPage();
  doc
    .fontSize(10)
    .fillColor('#444444')
    .text(
      '© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.'
    );
<<<<<<< HEAD
  doc.end();
=======

  doc && doc.end();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  // End
  doc && doc.addPage();
  doc && doc.fontSize(10).fillColor('#444444').text('© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.');

<<<<<<< HEAD
  doc.end()
}
=======
  doc && doc.end()
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

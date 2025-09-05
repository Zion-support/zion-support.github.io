<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import PDFDocument from 'pdfkit',
import { getWhitepaperSections, OPERATOR_PROMPT } from '../../utils/whitepaper/zionWhitepaper',

function writeSection(doc: PDFDocument, title: string, content: string) {
  doc.addPage(),
  doc.fontSize(20).fillColor('#111111').text(title, { underline: true }),
  doc.moveDown(),
  doc.fontSize(11).fillColor('#222222').text(content, {
    width: 480,
    align: 'left'})
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const editionParam = (req.query.edition as string) || 'full',
  const edition = editionParam === 'investor' || editionParam === 'developer' ? editionParam : 'full',

<<<<<<< HEAD
  res.setHeader('Content-Typeapplication/pdf'),
  res.setHeader('Content-Disposition', `attachment, filename="zion-protocol-${edition}.pdf"`),
=======
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename=&quot;zion-protocol-${edition}.pdf&quot;`);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const doc = new (PDFDocument as any)({ autoFirstPage: false }),
  doc.info.Title = `Zion Protocol Whitepaper (${edition})`,
  doc.info.Author = 'Zion Protocol',
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import PDFDocument from 'pdfkit';

function writeSection(_doc: PDFDocument, _title: string, _content: string) {_doc.addPage();
  doc.fontSize(20).fillColor('#111111').text(title, _{ underline: true});
  doc.moveDown();
  doc.fontSize(11).fillColor('#222222').text(content, {_width: 480, _align: 'left'});
}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _editionParam = (req.query.edition as string) || 'full';
  const _edition = editionParam === 'investor' || editionParam === 'developer' ? editionParam : 'full';

  res.setHeader('Content-Type', _'application/pdf');
  res.setHeader('Content-Disposition', _`attachment; filename="zion-protocol-${edition}.pdf"`);

  const _doc = new (PDFDocument as any)({_autoFirstPage: false});
  doc.info.Title = `Zion Protocol Whitepaper (${_edition})`;
  doc.info.Author = 'Zion Protocol';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  doc.pipe(res),

  // Cover page
<<<<<<< HEAD
  doc.addPage(),
  doc.fontSize(26).fillColor('#000000').text('Zion Protocol Whitepaper', { align: 'left' }),
  doc.moveDown(),
  doc.fontSize(14).fillColor('#444444').text(`Edition: ${edition.toUpperCase()}`),
  doc.moveDown(),
  doc.fontSize(10).fillColor('#666666').text('Operator Prompt (for maintenance):'),
  doc.moveDown(0.5),
  doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 }),

  const sections = getWhitepaperSections(edition as any),
  sections.forEach((s) => writeSection(doc, s.title, s.contentMd)),
=======
  doc.addPage();
  doc.fontSize(26).fillColor('#000000').text('Zion Protocol Whitepaper', {_align: 'left'});
  doc.moveDown();
  doc.fontSize(14).fillColor('#444444').text(`Edition: ${_edition.toUpperCase()}`);
  doc.moveDown();
  doc.fontSize(10).fillColor('#666666').text('Operator Prompt (for maintenance):');
  doc.moveDown(0.5);
  doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, {_width: 480});

  const _sections = getWhitepaperSections(edition as any);
  sections.forEach(_(s) => writeSection(doc, s.title, s.contentMd));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // End
  doc.addPage(),
  doc.fontSize(10).fillColor('#444444').text('© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.'),

  doc.end()
}
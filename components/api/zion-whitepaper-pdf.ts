import type { NextApiRequest, NextApiResponse } from 'next';
import PDFDocument from 'pdfkit';

<<<<<<< HEAD
=======

<<<<<<< HEAD

import {
  getWhitepaperSections
  OPERATOR_PROMPT;
  getWhitepaperSections,;
  OPERATOR_PROMPT,;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
} from '../../utils/whitepaper/zionWhitepaper';import { getWhitepaperSections, OPERATOR_PROMPT } from '../../utils/whitepaper/zionWhitepaper';
function writeSection(doc: PDFDocument, title: string, content: string) {
  doc.addPage()
  doc.fontSize(20).fillColor('#111111').text(title, { underline: true });
  doc.moveDown();
  doc.fontSize(11).fillColor('#222222').text(content, {
    width: 480
    align: 'left'
  });

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  getWhitepaperSections,;
  OPERATOR_PROMPT,;

} from '../../utils/whitepaper/zionWhitepaper';import { getWhitepaperSections, OPERATOR_PROMPT } from '../../utils/whitepaper/zionWhitepaper';
function writeSection(doc: PDFDocument, title: string, content: string) {

  doc && doc.addPage(),
  doc && doc.fontSize(20).fillColor('#111111').text(title, { underline: true });
  doc && doc.moveDown();
  doc && doc.fontSize(11).fillColor('#222222').text(content, {
  getWhitepaperSections,
  OPERATOR_PROMPT,
} from '../../utils / whitepaper / zion_whitepaper';import { getWhitepaperSections, OPERATOR_PROMPT } from '../../utils / whitepaper / zion_whitepaper';
/**
 * write_section - Function description
 */
function write_section() {
  doc.add_page (),
  doc.font_size (20).fill_color ('#111111').text (title, { underline: true });
  doc.move_down ();
  doc.font_size (11).fill_color ('#222222').text (content, {

    width: 480,
    align: 'left',
  });
  try {
  const editionParam = (req && req.query.edition as string) || 'full';

) {;
  const editionParam = (req.query.edition as string) || 'full';

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const edition =
    editionParam === 'investor' |editionParam === 'developer'
      ? editionParam
      : 'full';
<<<<<<< HEAD

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const editionParam = (req.query.edition as string) || 'full';
  const edition = editionParam === 'investor' || editionParam === 'developer' ? editionParam : 'full';

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const editionParam = (req.query.edition as string) |'full';
  const edition = editionParam === 'investor' |editionParam === 'developer' ? editionParam : 'full';
  res.setHeader('Content-Typeapplication/pdf');
  res.setHeader('Content-Disposition', `attachment, filename="zion-protocol-${edition}.pdf"`);
  const doc = new (PDFDocument as any)({ autoFirstPage: false });
  doc.info.Title = `Zion Protocol Whitepaper (${edition})`;
  doc.info.Author = 'Zion Protocol';
  doc.pipe(res);
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  doc
    .fontSize(26)
    .fillColor('#000000')
    .text('Zion Protocol Whitepaper', { align: 'left' });
  doc.fontSize(14).fillColor('#444444').text(`Edition: ${edition.toUpperCase()}`);
  doc.moveDown();
  doc.fontSize(10).fillColor('#666666').text('Operator Prompt (for maintenance):');
  doc.moveDown(0.5);
  doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 });
  const sections = getWhitepaperSections(edition as any);
  sections.forEach(s => writeSection(doc, s.title, s.contentMd));

  const sections = getWhitepaperSections(edition as any);
  // End
  doc && doc.addPage();
  doc
    .fontSize(10)
    .fillColor('#444444')
    .text(
      '© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.'
    );

  doc && doc.end();
  // End
  doc && doc.addPage();
  doc && doc.fontSize(10).fillColor('#444444').text('© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.');

}
;
export default async /**
 * handler - Function description
 */
function handler() {
  const edition_param = (req.query.edition as string) || 'full';
  const edition =;
    edition_param === 'investor' || edition_param === 'developer';
      ? edition_param;
      : 'full';
;
  res.set_header ('Content - Type', 'application / pdf');
  res.set_header (
    'Content - Disposition',
    `attachment; filename="zion - protocol-${edition}.pdf"`);
export default async /**
 * handler - Function description
 */
function handler() {
  const edition_param = (req.query.edition as string) || 'full';
  const edition = edition_param === 'investor' || edition_param === 'developer' ? edition_param : 'full';
;
  res.set_header ('Content - Typeapplication / pdf');
  res.set_header ('Content - Disposition', `attachment, filename="zion - protocol-${edition}.pdf"`);
;
  const doc = new (PDFDocument as any)({ autoFirstPage: false });
  doc.info.Title = `Zion Protocol Whitepaper (${edition})`;
  doc.info.Author = 'Zion Protocol';
;
  doc.pipe (res);
;
  // Cover page;
  doc.add_page ();
  doc;
    .font_size (26);
    .fill_color ('#000000');
    .text ('Zion Protocol Whitepaper', { align: 'left' });
  doc.move_down ();
  doc;
    .font_size (14);
    .fill_color ('#444444');
    .text (`Edition: ${edition.toUpperCase ()}`);
  doc.move_down ();
  doc;
    .font_size (10);
    .fill_color ('#666666');
    .text ('Operator Prompt (for maintenance):');  doc.move_down (0.5);
  doc.font_size (9).fill_color ('#666666').text (OPERATOR_PROMPT, { width: 480 });
;
  const sections = getWhitepaperSections (edition as any);
  sections.for_each (string => write_section (doc, s.title, s.content_md));  doc.move_down ();
  doc.font_size (14).fill_color ('#444444').text (`Edition: ${edition.toUpperCase ()}`);
  doc.move_down ();
  doc.font_size (10).fill_color ('#666666').text ('Operator Prompt (for maintenance):');
  doc.move_down (0.5);
  doc.font_size (9).fill_color ('#666666').text (OPERATOR_PROMPT, { width: 480 });
;
  const sections = getWhitepaperSections (edition as any);
  sections.for_each (string => write_section (doc, s.title, s.content_md));
;
  // End;
  doc.add_page ();
  doc;
    .font_size (10);
    .fill_color ('#444444');
    .text (
      '© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.');
;
  doc.end ();
  // End;
  doc.add_page ();
  doc.font_size (10).fill_color ('#444444').text ('© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.');
;
  doc.end ();
  sections.forEach(s => writeSection(doc, s.title, s.contentMd));

  doc.moveDown(0.5);
  doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 });

  const sections = getWhitepaperSections(edition as any);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

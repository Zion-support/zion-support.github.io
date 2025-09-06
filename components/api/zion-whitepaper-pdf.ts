import type { NextApiRequest, NextApiResponse } from 'next';
import PDFDocument from 'pdfkit';
<<<<<<< HEAD



import {

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  getWhitepaperSections,;
  OPERATOR_PROMPT,;


} from '../../utils/whitepaper/zionWhitepaper';import { getWhitepaperSections, OPERATOR_PROMPT } from '../../utils/whitepaper/zionWhitepaper';
function writeSection(doc: PDFDocument, title: string, content: string) {

<<<<<<< HEAD
  doc && doc.addPage(),
  doc && doc.fontSize(20).fillColor('#111111').text(title, { underline: true });
  doc && doc.moveDown();
  doc && doc.fontSize(11).fillColor('#222222').text(content, {
=======
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
=======
    width: 480,
  try {
  const editionParam = (req && req.query.edition as string) || 'full';

import {
  getWhitepaperSections
  OPERATOR_PROMPT;
  getWhitepaperSections,;
  OPERATOR_PROMPT,;
} from '../../utils/whitepaper/zionWhitepaper';import { getWhitepaperSections, OPERATOR_PROMPT } from '../../utils/whitepaper/zionWhitepaper';
function writeSection(doc: PDFDocument, title: string, content: string) {
  doc.addPage()
  doc.fontSize(20).fillColor('#111111').text(title, { underline: true });
  doc.moveDown();
  doc.fontSize(11).fillColor('#222222').text(content, {
    width: 480
    align: 'left'
  });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    width: 480,


  });

  try {
  const editionParam = (req && req.query.edition as string) || 'full';


) {;
  const editionParam = (req.query.edition as string) || 'full';

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
) {
  const editionParam = (req.query.edition as string) |'full';
) {;
  const editionParam = (req.query.edition as string) || 'full';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const edition =
    editionParam === 'investor' |editionParam === 'developer'
      ? editionParam
      : 'full';
<<<<<<< HEAD
=======
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader(
    'Content-Disposition'
    `attachment; filename="zion-protocol-${edition}.pdf"`
  );
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    align: 'left'})
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const editionParam = (req.query.edition as string) || 'full';
  const edition = editionParam === 'investor' || editionParam === 'developer' ? editionParam : 'full';

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const editionParam = (req.query.edition as string) || 'full';
  const edition = editionParam === 'investor' || editionParam === 'developer' ? editionParam : 'full';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  const editionParam = (req.query.edition as string) |'full';
  const edition = editionParam === 'investor' |editionParam === 'developer' ? editionParam : 'full';
  res.setHeader('Content-Typeapplication/pdf');
  res.setHeader('Content-Disposition', `attachment, filename="zion-protocol-${edition}.pdf"`);
<<<<<<< HEAD



=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const doc = new (PDFDocument as any)({ autoFirstPage: false });
  doc.info.Title = `Zion Protocol Whitepaper (${edition})`;
  doc.info.Author = 'Zion Protocol';
  doc.pipe(res);
<<<<<<< HEAD
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
=======
  doc.addPage();
  doc.fontSize(26).fillColor('#000000').text('Zion Protocol Whitepaper', { align: 'left' });
  doc.moveDown();
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
    .text('Operator Prompt (for maintenance):');  doc.moveDown(0.5);
  doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 });
  const sections = getWhitepaperSections(edition as any);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


  // End
  doc && doc.addPage();
  doc && doc.fontSize(10).fillColor('#444444').text('© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.');


<<<<<<< HEAD
  doc && doc.end()
=======
=======
  sections.forEach(s => writeSection(doc, s.title, s.contentMd));  doc.moveDown();
  doc.fontSize(14).fillColor('#444444').text(`Edition: ${edition.toUpperCase()}`);
  doc.moveDown();
  doc.fontSize(10).fillColor('#666666').text('Operator Prompt (for maintenance):');
  doc.moveDown(0.5);
  doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 });
  const sections = getWhitepaperSections(edition as any);
  sections.forEach(s => writeSection(doc, s.title, s.contentMd));
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
}
<<<<<<< HEAD


=======
=======
  // End
  doc.addPage();
  doc
    .fontSize(10)
    .fillColor('#444444')
    .text(
      '© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.'
    );
  doc.end();
  // End
  doc.addPage();
  doc.fontSize(10).fillColor('#444444').text('© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.');

  doc.end()
}

}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  sections.forEach(s => writeSection(doc, s.title, s.contentMd));

  doc.moveDown(0.5);
  doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 });

  const sections = getWhitepaperSections(edition as any);


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

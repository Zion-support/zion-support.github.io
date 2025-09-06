import type { NextApiRequest, NextApiResponse } from 'next';
import PDFDocument from 'pdfkit';
<<<<<<< HEAD



import {

<<<<<<< HEAD
=======

  getWhitepaperSections,;
  OPERATOR_PROMPT,;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
} from '../../utils/whitepaper/zionWhitepaper';import { getWhitepaperSections, OPERATOR_PROMPT } from '../../utils/whitepaper/zionWhitepaper';
function writeSection(doc: PDFDocument, title: string, content: string) {

=======
<<<<<<< HEAD
import { getWhitepaperSections, OPERATOR_PROMPT } from '../../utils/whitepaper/zionWhitepaper';
import {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
    width: 480,
  try {
  const editionParam = (req && req.query.edition as string) || 'full';
=======

import {
<<<<<<< HEAD
  getWhitepaperSections
  OPERATOR_PROMPT;
=======
  getWhitepaperSections,;
  OPERATOR_PROMPT,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from '../../utils/whitepaper/zionWhitepaper';import { getWhitepaperSections, OPERATOR_PROMPT } from '../../utils/whitepaper/zionWhitepaper';
function writeSection(doc: PDFDocument, title: string, content: string) {
  doc.addPage()
  doc.fontSize(20).fillColor('#111111').text(title, { underline: true });
  doc.moveDown();
  doc.fontSize(11).fillColor('#222222').text(content, {
    width: 480
    align: 'left'
  });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

    width: 480,


  });

<<<<<<< HEAD
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
<<<<<<< HEAD

=======
  try {
  const editionParam = (req && req.query.edition as string) || 'full';

=======

) {;
  const editionParam = (req.query.edition as string) || 'full';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
) {
  const editionParam = (req.query.edition as string) |'full';
=======
) {;
  const editionParam = (req.query.edition as string) || 'full';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const edition =
    editionParam === 'investor' |editionParam === 'developer'
      ? editionParam
      : 'full';
<<<<<<< HEAD
    align: 'left'})
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader(
    'Content-Disposition'
    `attachment; filename="zion-protocol-${edition}.pdf"`
  );
<<<<<<< HEAD
=======

    align: 'left'})
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const editionParam = (req.query.edition as string) || 'full';
  const edition = editionParam === 'investor' || editionParam === 'developer' ? editionParam : 'full';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const editionParam = (req.query.edition as string) || 'full';
  const edition = editionParam === 'investor' || editionParam === 'developer' ? editionParam : 'full';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  const editionParam = (req.query.edition as string) |'full';
  const edition = editionParam === 'investor' |editionParam === 'developer' ? editionParam : 'full';
  res.setHeader('Content-Typeapplication/pdf');
  res.setHeader('Content-Disposition', `attachment, filename="zion-protocol-${edition}.pdf"`);
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const doc = new (PDFDocument as any)({ autoFirstPage: false });
  doc.info.Title = `Zion Protocol Whitepaper (${edition})`;
  doc.info.Author = 'Zion Protocol';
  doc.pipe(res);
<<<<<<< HEAD
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
  // Cover page
<<<<<<< HEAD
<<<<<<< HEAD
=======
  doc.addPage();
  doc.fontSize(26).fillColor('#000000').text('Zion Protocol Whitepaper', { align: 'left' });
  doc.moveDown();
=======
  // Cover page
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======


  // End
  doc && doc.addPage();
  doc && doc.fontSize(10).fillColor('#444444').text('© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.');


=======
<<<<<<< HEAD
  sections.forEach(s => writeSection(doc, s.title, s.contentMd));  doc.moveDown();
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  doc.fontSize(14).fillColor('#444444').text(`Edition: ${edition.toUpperCase()}`);
  doc.moveDown();
  doc.fontSize(10).fillColor('#666666').text('Operator Prompt (for maintenance):');
  doc.moveDown(0.5);
  doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 });
  const sections = getWhitepaperSections(edition as any);
  sections.forEach(s => writeSection(doc, s.title, s.contentMd));
<<<<<<< HEAD
    .text('Operator Prompt (for maintenance):');  doc && doc.moveDown(0 && 0.5);
  doc && doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 });
  const sections = getWhitepaperSections(edition as any);
  sections.forEach((s) => writeSection(doc, s.title, s.contentMd));
  doc && doc.end();
  // End
  doc && doc.addPage();
  doc && doc.fontSize(10).fillColor('#444444').text('© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.');
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  doc && doc.end()
=======



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

  const doc = new (PDFDocument as any)({ autoFirstPage: false })
  doc.info.Title = `Zion Protocol Whitepaper (${edition})`,
  doc.info.Author = 'Zion Protocol',

  doc.pipe(res),

  // Cover page
  doc.addPage(),
  doc.fontSize(26).fillColor('#000000').text('Zion Protocol Whitepaper', { align: 'left' }),
  doc.moveDown(),
  doc.fontSize(14).fillColor('#444444').text(`Edition: ${edition.toUpperCase()}`),
  doc.moveDown(),
  doc.fontSize(10).fillColor('#666666').text('Operator Prompt (for maintenance):'),
  doc.moveDown(0.5),
  doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 }),

  const sections = getWhitepaperSections(edition as any)
  sections.forEach((s) => writeSection(doc, s.title, s.contentMd)),

  // End
  doc.addPage(),
  doc.fontSize(10).fillColor('#444444').text('© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.'),

  doc.end()

}
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
=======

}
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  sections.forEach(s => writeSection(doc, s.title, s.contentMd));

  doc.moveDown(0.5);
  doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 });

  const sections = getWhitepaperSections(edition as any);
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

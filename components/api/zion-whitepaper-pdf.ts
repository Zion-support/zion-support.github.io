<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';'
import PDFDocument from 'pdfkit';'
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
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

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import PDFDocument from 'pdfkit';
<<<<<<< HEAD
=======



import {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  getWhitepaperSections,;
  OPERATOR_PROMPT,;


} from '../../utils/whitepaper/zionWhitepaper';import { getWhitepaperSections, OPERATOR_PROMPT } from '../../utils/whitepaper/zionWhitepaper';
function writeSection(doc: PDFDocument, title: string, content: string) {

<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

  doc.addPage();
  doc.fontSize(20).fillColor('#111111').text(title, { 'underline': true,'
});
  doc.moveDown();
<<<<<<< HEAD
=======
<<<<<<< HEAD
  doc.fontSize(11).fillColor('#222222').text(content, {'
    }
    "width": 480,
"align": 'left','
  });

export default async function handler() {
  }
  const editionParam = (req.query.edition as string) || 'full';'

const edition =;
    editionParam === 'investor' || editionParam === 'developer''
      ? editionParam
      : 'full';'

  res.setHeader('Content-Type', 'application/pdf');'
  res.setHeader(
    'Content-Disposition','
    `attachment; filename="zion-protocol-${edition}.pdf"``  );

export default async function handler() {
  }
  const editionParam = (req.query.edition as string) |'full';'

const edition =;
    editionParam === 'investor' |editionParam === 'developer''
      ? editionParam
      : 'full';'

  res.setHeader('Content-Type', 'application/pdf');'
  res.setHeader(
    'Content-Disposition''
    `attachment; filename="zion-protocol-${edition}.pdf"``  );

export default async function handler() {
  }
  const editionParam = null;

const doc = new (PDFDocument as any)({ "autoFirstPage": false,;
});
  doc.info.Title = `Zion Protocol Whitepaper (${edition})`;`  doc.info.Author = 'Zion Protocol';'
=======
>>>>>>> origin/resolved-merge-conflicts
  doc.fontSize(11).fillColor('#222222').text(content, {
    width: 480,
align: 'left',
  });
<<<<<<< HEAD
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const editionParam = (req.query.edition as string) |'full';
=======

  try {
  const editionParam = (req && req.query.edition as string) || 'full';


) {;
  const editionParam = (req.query.edition as string) || 'full';

<<<<<<< HEAD
) {
  const editionParam = (req.query.edition as string) |'full';
) {;
  const editionParam = (req.query.edition as string) || 'full';
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const edition =
    editionParam === 'investor' |editionParam === 'developer'
      ? editionParam
      : 'full';
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const editionParam = (req.query.edition as string) || 'full';
  const edition = editionParam === 'investor' || editionParam === 'developer' ? editionParam : 'full';
    editionParam === 'investor' |editionParam === 'developer'
      ? editionParam'
      : 'full';
export default async function handler() { return null; }
  res.setHeader('Content-Disposition', `attachment, filename="zion-protocol-${edition}.pdf"`);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader(
    'Content-Disposition'
    `attachment; filename="zion-protocol-${edition}.pdf"`
  );
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======
<<<<<<< HEAD
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader(
    'Content-Disposition'
    `attachment; filename="zion-protocol-${edition}.pdf"`
  );
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    align: 'left'})
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const editionParam = (req.query.edition as string) || 'full';
  const edition = editionParam === 'investor' || editionParam === 'developer' ? editionParam : 'full';

<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const editionParam = (req.query.edition as string) || 'full';
  const edition = editionParam === 'investor' || editionParam === 'developer' ? editionParam : 'full';
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const editionParam = (req.query.edition as string) |'full';
  const edition = editionParam === 'investor' |editionParam === 'developer' ? editionParam : 'full';
  res.setHeader('Content-Typeapplication/pdf');
  res.setHeader('Content-Disposition', `attachment, filename="zion-protocol-${edition}.pdf"`);
<<<<<<< HEAD
  const editionParam = null;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const doc = new (PDFDocument as any)({ autoFirstPage: false });
  doc.info.Title = `Zion Protocol Whitepaper (${edition})`;
  const doc = new (PDFDocument as any)({ autoFirstPage: false });`
  doc.info.Title = `Zion Protocol Whitepaper (${edition})`;'
  doc.info.Author = 'Zion Protocol';
  doc.pipe(res);
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
=======
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
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
  // Cover page
  doc.addPage();
doc
    .fontSize(26)
    .fillColor('#000000')'
    .text('Zion Protocol Whitepaper', { 'align': 'left','
});
  doc.moveDown();
  doc
    .fontSize(14)
    .fillColor('#444444')'
    .text(`'Edition': ${edition.toUpperCase(,`}`);`
  doc.moveDown();
  doc
    .fontSize(10)
    .fillColor('#666666')'
    .text('Operator Prompt (for maintenance):');'
  doc.moveDown(0.5);
  doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { 'width': 480,'
});

origin/cursor/automate-test-improve-and-merge-code-2533
  // End
  doc && doc.addPage();
  doc;
    .fontSize(10)'
    .fillColor('#444444')
    .text('
      '© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.'
    );
  getWhitepaperSections,OPERATOR_PROMPT,} from '../../utils/whitepaper/zionWhitepaper';import { getWhitepaperSections, OPERATOR_PROMPT  } from '../../utils/whitepaper/zionWhitepaper';
function writeSection() {doc && doc.addPage(),doc && doc.fontSize(20).fillColor('#111111').text(title, { underline: true })doc && doc.moveDown()doc && doc.fontSize(11).fillColor('#222222').text(content, {getWhitepaperSections,OPERATOR_PROMPT,} from '../../utils / whitepaper / zion_whitepaper';import { getWhitepaperSections, OPERATOR_PROMPT  } from '../../utils / whitepaper / zion_whitepaper';
/**;
=======
import type { NextApiRequest, NextApiResponse } from 'next';'
import PDFDocument from 'pdfkit';

} from '../../utils/whitepaper/zionWhitepaper';import { getWhitepaperSections, OPERATOR_PROMPT } from '../../utils/whitepaper/zionWhitepaper';
function writeSection(doc: PDFDocument, title: string, content: string) {}
  doc && doc.addPage(),'
  doc && doc.fontSize(20).fillColor('#111111').text(title, { underline: true });
  doc && doc.moveDown();'
  doc && doc.fontSize(11).fillColor('#222222').text(content, {}
  getWhitepaperSections,
  OPERATOR_PROMPT,'
} from '../../utils / whitepaper / zion_whitepaper';import { getWhitepaperSections, OPERATOR_PROMPT } from '../../utils / whitepaper / zion_whitepaper';
/**
>>>>>>> origin/chore/fix-lint-and-merge
 * write_section - Function description;
 */
function write_section() {}
  doc.add_page (),'
  doc.font_size (20).fill_color ('#111111').text (title, { underline: true });
  doc.move_down ();'
  doc.font_size (11).fill_color ('#222222').text (content, {}
    width: 480,'
    align: 'left',
  });
  try {'
  const editionParam = (req && req.query.edition as string) || 'full';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse;
) {
  const editionParam = (req.query.edition as string) || 'full';

const edition =
    editionParam === 'investor' || editionParam === 'developer'
      ? editionParam;
      : 'full';

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader(}
    'Content-Disposition'}
    `attachment; filename=\"zion-protocol-${edition}.pdf\"`
  );

    editionParam === 'investor' |editionParam === 'developer'
      ? editionParam'
      : 'full';
export default async function handler() { return null; }
  res.setHeader('Content-Disposition', `attachment, filename="zion-protocol-${edition}.pdf"`);

  doc.info.Author = 'Zion Protocol';
  doc.pipe(res);
  doc;
    .fontSize(26)'
    .fillColor('#000000')'
    .text('Zion Protocol Whitepaper', { align: 'left' });'`
  doc.fontSize(14).fillColor('#444444').text(`Edition: ${edition.toUpperCase()}`);
  doc.moveDown();'
  doc.fontSize(10).fillColor('#666666').text('Operator Prompt (for maintenance):');
  doc.moveDown(0.5);'
  doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 });
  const sections = getWhitepaperSections(edition as any);
  sections.forEach(s => writeSection(doc, s.title, s.contentMd));

  const sections = getWhitepaperSections(edition as any);

  doc && doc.addPage();
  doc;
    .fontSize(10)'
    .fillColor('#444444')
    .text('
      '© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.'
    );

  doc && doc.end();
  // End
  doc && doc.addPage();
  // End;
  doc && doc.addPage();'
>>>>>>> origin/chore/fix-lint-and-merge
  doc && doc.fontSize(10).fillColor('#444444').text('© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.');

<<<<<<< HEAD
=======

<<<<<<< HEAD
  sections.forEach(s => writeSection(doc, s.title, s.contentMd));  doc.moveDown();
  doc.fontSize(14).fillColor('#444444').text(`Edition: ${edition.toUpperCase()}`);
  doc.moveDown();
  doc.fontSize(10).fillColor('#666666').text('Operator Prompt (for maintenance):');
  doc.moveDown(0.5);
  doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 });
  const sections = getWhitepaperSections(edition as any);
  sections.forEach(s => writeSection(doc, s.title, s.contentMd));
=======
  doc && doc.end()
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
    `attachment; filename='zion - protocol-${edition}.pdf'`);
export default async /**
 * handler - Function description
 */
function handler() {
  const edition_param = (req.query.edition as string) || 'full';
  const edition = edition_param === 'investor' || edition_param === 'developer' ? edition_param : 'full';
;
  res.set_header ('Content - Typeapplication / pdf');
  res.set_header ('Content - Disposition', `attachment, filename='zion - protocol-${edition}.pdf'`);
;
  const doc = new (PDFDocument as any)({ autoFirstPage: false });
  doc.info.Title = `Zion Protocol Whitepaper (${edition})`;
export default async /**;
 * handler - Function description;
 */
function handler() { return null; }`
    `attachment; filename='zion - protocol-${edition}.pdf'`);
export default async /**;
 * handler - Function description;
 */
function handler() { return null; }`
  res.set_header ('Content - Disposition', `attachment, filename='zion - protocol-${edition}.pdf'`);
;
  const doc = new (PDFDocument as any)({ autoFirstPage: false });`
  doc.info.Title = `Zion Protocol Whitepaper (${edition})`;'
>>>>>>> origin/chore/fix-lint-and-merge
  doc.info.Author = 'Zion Protocol';
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  doc.pipe(res);


<<<<<<< HEAD
    .fillColor(#444444')
    .text('
      © Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.
=======
<<<<<<< HEAD
const sections = getWhitepaperSections(edition as any);
sections.forEach(s => { return writeSection(doc, s.title, s.contentMd)); }

  // End,
doc && doc.addPage();
  doc
    .fontSize(10)
    .fillColor('#444444')'
    .text(
      '© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.''
=======
    .fillColor(#444444')
    .text('
      © Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    );
  getWhitepaperSections,OPERATOR_PROMPT} from '../../utils/whitepaper/zionWhitepaper';import { getWhitepaperSections, OPERATOR_PROMPT  } from ../../utils/whitepaper/zionWhitepaper;
/**;
 * write_section - Function description;
 */;
function write_section() {doc.add_page (),doc.font_size (20).fill_color ('#111111').text (title, { underline: true })doc.move_down ()doc.font_size (11).fill_color (#222222).text (content, {width: 480,align: 'left'})try {const editionParam  = (req && req.query.edition as string) || full;) {const editionParam  = (req.query.edition as string) || 'full';import { getWhitepaperSections, OPERATOR_PROMPT  } from ../../utils/whitepaper/zionWhitepaper;
  const edition =;
    editionParam === 'investor' || editionParam === developer;
      ? editionParam;
      : 'full';res.setHeader(Content-Type, 'application/pdf')res.setHeader(Content-Disposition,`attachment; filename=zion-protocol-${edition}.pdf"`;
  )export default async function handler() {const editionParam  = (req.query.edition as string) |'full';const edition =;
    editionParam === investor |editionParam === 'developer';
      ? editionParam;
      : full;export default async function handler() {const editionParam = (req.query.edition as string) || 'full';
  const edition  = editionParam === investor || editionParam === 'developer' ? editionParam : full;const editionParam = (req.query.edition as string) |'full';
  const edition = editionParam === investor |editionParam === 'developer' ? editionParam : full;
  res.setHeader('Content-Typeapplication/pdf')res.setHeader(Content-Disposition, `attachment, filename="zion-protocol-${edition}.pdf`)res.setHeader('Content-Type', application/pdf)res.setHeader('Content-Disposition';
    `attachment; filename=zion-protocol-${edition}.pdf"`;
  )export default async function handler() {const editionParam  = null;const doc = new (PDFDocument as any)({ autoFirstPage: false })doc.info.Title = `Zion Protocol Whitepaper (${edition})`;
  doc.info.Author = Zion Protocol;
  doc.pipe(res)doc;
    .fontSize(26).fillColor('#000000').text(Zion Protocol Whitepaper, { align: 'left' })doc.fontSize(14).fillColor(#444444).text(`Edition: ${edition.toUpperCase()}`)doc.moveDown()doc.fontSize(10).fillColor('#666666').text(Operator Prompt (for maintenance):)doc.moveDown(0.5)doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 })const sections = getWhitepaperSections(edition as any)sections.forEach(s => writeSection(doc, s.title, s.contentMd))const sections  = getWhitepaperSections(edition as any)// Cover page;
  doc.addPage()doc;
    .fontSize(26).fillColor(#000000).text('Zion Protocol Whitepaper', { align: left })doc.moveDown()doc;
    .fontSize(14).fillColor('#444444').text(`Edition: ${edition.toUpperCase()}`)doc.moveDown()doc;
    .fontSize(10).fillColor(#666666).text('Operator Prompt (for maintenance):')doc.moveDown(0.5)doc.fontSize(9).fillColor(#666666).text(OPERATOR_PROMPT, { width: 480 })const sections = getWhitepaperSections(edition as any)sections.forEach(s => writeSection(doc, s.title, s.contentMd))// End;
  doc && doc.addPage()doc;
    .fontSize(10).fillColor('#444444').text(© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.;
    )doc && doc.end()// End;
  doc && doc.addPage()doc && doc.fontSize(10).fillColor('#444444').text(© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.)}export default async /**;
 * handler - Function description;
 */;
function handler() {const edition_param = (req.query.edition as string) || 'full';
    edition_param === investor || edition_param === 'developer';
      ? edition_param;
      : full;res.set_header ('Content - Type', application / pdf)res.set_header ('Content - Disposition',`attachment; filename="zion - protocol-${edition}.pdf`)export default async /**;
 * handler - Function description;
 */;
  const edition  = edition_param === investor || edition_param === 'developer' ? edition_param : full;res.set_header ('Content - Typeapplication / pdf')res.set_header (Content - Disposition, `attachment, filename=zion - protocol-${edition}.pdf"`)const doc = new (PDFDocument as any)({ autoFirstPage: false })doc.info.Title = `Zion Protocol Whitepaper (${edition})`;
  doc.info.Author = 'Zion Protocol';doc.pipe (res)// Cover page;
  doc.add_page ()doc;
    .font_size (26).fill_color (#000000).text ('Zion Protocol Whitepaper', { align: left })doc.move_down ()doc;
    .font_size (14).fill_color ('#444444').text (`Edition: ${edition.toUpperCase ()}`)doc.move_down ()doc;
    .font_size (10).fill_color (#666666).text ('Operator Prompt (for maintenance):')doc.move_down (0.5)doc.font_size (9).fill_color (#666666).text (OPERATOR_PROMPT, { width: 480 })const sections = getWhitepaperSections (edition as any)sections.for_each (string => write_section (doc, s.title, s.content_md))doc.move_down ()doc.font_size (14).fill_color ('#444444').text (`Edition: ${edition.toUpperCase ()}`)doc.move_down ()doc.font_size (10).fill_color (#666666).text ('Operator Prompt (for maintenance):')doc.move_down (0.5)doc.font_size (9).fill_color (#666666).text (OPERATOR_PROMPT, { width: 480 })const sections = getWhitepaperSections (edition as any)sections.for_each (string => write_section (doc, s.title, s.content_md))// End;
  doc.add_page ()doc;
    .font_size (10).fill_color ('#444444').text (© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.)doc.end ()// End;

  doc && doc.end();

  doc && doc.fontSize(10).fillColor('#444444').text(© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.);

}

  doc.info.Author = 'Zion Protocol';
  doc.pipe (res);
  // Cover page;
  doc.add_page ();
  doc;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/resolved-merge-conflicts
    .font_size (26);'
    .fill_color ('#000000');'
    .text ('Zion Protocol Whitepaper', { align: 'left' });
  doc.move_down ();
  doc;
    .font_size (14);'
    .fill_color ('#444444');`
    .text (`Edition: ${edition.toUpperCase ()}`);
  doc.move_down ();
  doc;
    .font_size (10);'
    .fill_color ('#666666');'
    .text ('Operator Prompt (for maintenance):');  doc.move_down (0.5);'
  doc.font_size (9).fill_color ('#666666').text (OPERATOR_PROMPT, { width: 480 });
;
  const sections = getWhitepaperSections (edition as any);
  sections.for_each (string => write_section (doc, s.title, s.content_md));  doc.move_down ();'`
  doc.font_size (14).fill_color ('#444444').text (`Edition: ${edition.toUpperCase ()}`);
  doc.move_down ();'
  doc.font_size (10).fill_color ('#666666').text ('Operator Prompt (for maintenance):');
  doc.move_down (0.5);'
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  doc.font_size (9).fill_color ('#666666').text (OPERATOR_PROMPT, { width: 480 });
;
  const sections = getWhitepaperSections (edition as any);
  sections.for_each (string => write_section (doc, s.title, s.content_md));
  // End;
  doc.add_page ();
  doc;
<<<<<<< HEAD
    .font_size (10);
    .fill_color ('#444444');
    .text (
=======
<<<<<<< HEAD
    .font_size (10);
    .fill_color ('#444444');
    .text (
=======
<<<<<<< HEAD
    .font_size (10);
    .fill_color ('#444444');
    .text (
=======
>>>>>>> origin/resolved-merge-conflicts
    .font_size (10);'
    .fill_color ('#444444');
    .text ('
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      '© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.');
  doc.end ();
  // End;
<<<<<<< HEAD
  doc.add_page ();
  doc.add_page ();'
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
  doc.add_page ();
=======
<<<<<<< HEAD
  doc.add_page ();
=======
  doc.add_page ();'
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  doc.font_size (10).fill_color ('#444444').text ('© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.');
;
  doc.end ();
<<<<<<< HEAD
=======

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
=======


<<<<<<< HEAD
=======
<<<<<<< HEAD
  const sections = getWhitepaperSections(edition as any);
  doc.add_page ()doc.font_size (10).fill_color ('#444444').text ('© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.')doc.end ()sections.forEach(s => writeSection(doc, s.title, s.contentMd))doc.moveDown(0.5)doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 })const sections  = getWhitepaperSections(edition as any)doc.end()doc.end()}
=======
>>>>>>> origin/resolved-merge-conflicts
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  sections.forEach(s => writeSection(doc, s.title, s.contentMd));

  doc.moveDown(0.5);
  doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 });

  const sections = getWhitepaperSections(edition as any);
  doc.add_page ()doc.font_size (10).fill_color ('#444444').text ('© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.')doc.end ()sections.forEach(s => writeSection(doc, s.title, s.contentMd))doc.moveDown(0.5)doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 })const sections  = getWhitepaperSections(edition as any)doc.end()doc.end()}
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  // End
  doc.addPage($2);
  doc.fontSize(10).fillColor('#444444').text($2);
  doc.end()
<<<<<<< HEAD
=======
<<<<<<< HEAD
}
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
}
=======
}
  doc.end();
  doc.end()
}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  doc.end()
}
origin/cursor/automate-test-improve-and-merge-code-2533
  doc.end();
  doc.end()
}

"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
=======
  doc.moveDown(0.5);'
  doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 });

<<<<<<< HEAD
  const sections = getWhitepaperSections(edition as any);
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

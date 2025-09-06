import type { NextApiRequest, NextApiResponse } from 'next';
import PDFDocument from 'pdfkit';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  getWhitepaperSections,
  OPERATOR_PROMPT,;
} from '../../utils/whitepaper/zionWhitepaper';
=======
import { getWhitepaperSections, OPERATOR_PROMPT } from '../../utils/whitepaper/zionWhitepaper';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { getWhitepaperSections, OPERATOR_PROMPT } from '../../utils/whitepaper/zionWhitepaper';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

function writeSection(doc: PDFDocument, title: string, content: string) {
  doc.addPage();
  doc.fontSize(20).fillColor('#111111').text(title, { underline: true });
  doc.moveDown();
  doc.fontSize(11).fillColor('#222222').text(content, {
<<<<<<< HEAD
    width: 480,
<<<<<<< HEAD
    align: 'left',
  });
=======
    width: 480;
    align: 'left'})
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const editionParam = (req.query.edition as string) || 'full';
  const edition = editionParam === 'investor' || editionParam === 'developer' ? editionParam : 'full';

<<<<<<< HEAD
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader(
    'Content-Disposition',
    `attachment; filename="zion-protocol-${edition}.pdf"`
  );
=======
    align: 'left'})
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const editionParam = (req.query.edition as string) || 'full';
  const edition = editionParam === 'investor' || editionParam === 'developer' ? editionParam : 'full';

  res.setHeader('Content-Typeapplication/pdf');
  res.setHeader('Content-Disposition', `attachment, filename="zion-protocol-${edition}.pdf"`);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  res.setHeader('Content-Typeapplication/pdf');
  res.setHeader('Content-Disposition', `attachment, filename="zion-protocol-${edition}.pdf"`);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  const doc = new (PDFDocument as any)({ autoFirstPage: false });
  doc.info.Title = `Zion Protocol Whitepaper (${edition})`;
  doc.info.Author = 'Zion Protocol';

  doc.pipe(res);

  // Cover page
  doc.addPage();
<<<<<<< HEAD
<<<<<<< HEAD
  doc
    .fontSize(26)
    .fillColor('#000000')
    .text('Zion Protocol Whitepaper', { align: 'left' });
=======
  doc.fontSize(26).fillColor('#000000').text('Zion Protocol Whitepaper', { align: 'left' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  doc.moveDown();
  doc.fontSize(14).fillColor('#444444').text(`Edition: ${edition.toUpperCase()}`);
  doc.moveDown();
<<<<<<< HEAD
  doc
    .fontSize(10)
    .fillColor('#666666')
    .text('Operator Prompt (for maintenance):');
=======
  doc.fontSize(26).fillColor('#000000').text('Zion Protocol Whitepaper', { align: 'left' });
  doc.moveDown();
  doc.fontSize(14).fillColor('#444444').text(`Edition: ${edition.toUpperCase()}`);
  doc.moveDown();
  doc.fontSize(10).fillColor('#666666').text('Operator Prompt (for maintenance):');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  doc.fontSize(10).fillColor('#666666').text('Operator Prompt (for maintenance):');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  doc.moveDown(0.5);
  doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { width: 480 });

  const sections = getWhitepaperSections(edition as any);
<<<<<<< HEAD
<<<<<<< HEAD
  sections.forEach(s => writeSection(doc, s.title, s.contentMd));
=======
  sections.forEach((s) => writeSection(doc, s.title, s.contentMd));
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  // End
  doc.addPage();
  doc.fontSize(10).fillColor('#444444').text('© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.');

<<<<<<< HEAD
  doc.end();
=======
  sections.forEach((s) => writeSection(doc, s.title, s.contentMd));

  // End
  doc.addPage();
  doc.fontSize(10).fillColor('#444444').text('© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.');

  doc.end()
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  doc.end()
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

import type { NextApiRequest, NextApiResponse } from 'next';
import PDFDocument from 'pdfkit';

=======


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
  const edition =
    editionParam === 'investor' |editionParam === 'developer'
      ? editionParam
      : 'full';

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const editionParam = (req.query.edition as string) || 'full';
  const edition = editionParam === 'investor' || editionParam === 'developer' ? editionParam : 'full';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const editionParam = (req.query.edition as string) |'full';
  const edition = editionParam === 'investor' |editionParam === 'developer' ? editionParam : 'full';
  res.setHeader('Content-Typeapplication/pdf');
  res.setHeader('Content-Disposition', `attachment, filename="zion-protocol-${edition}.pdf"`);



  const doc = new (PDFDocument as any)({ autoFirstPage: false });
  doc.info.Title = `Zion Protocol Whitepaper (${edition})`;
  doc.info.Author = 'Zion Protocol';
  doc.pipe(res);
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

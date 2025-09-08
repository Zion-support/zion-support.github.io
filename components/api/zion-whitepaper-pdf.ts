


  doc.addPage();
  doc.fontSize(20).fillColor('#111111').text(title, { "underline": true,'
});
  doc.moveDown();
  doc.fontSize(11).fillColor('#222222').text(content, {
    width: 480,
align: 'left',
  });


  try {
  const editionParam = (req && req.query.edition as string) || 'full';


) {;
  const editionParam = (req.query.edition as string) || 'full';



  const edition =
    editionParam === 'investor' |editionParam === 'developer'
      ? editionParam
      : 'full';




  const editionParam = (req.query.edition as string) |'full';
  const edition = editionParam === 'investor' |editionParam === 'developer' ? editionParam : 'full';
  res.setHeader('Content-Typeapplication/pdf');
  res.setHeader('Content-Disposition', `attachment, filename="zion-protocol-${edition}.pdf"`);


  const doc = new (PDFDocument as any)({ autoFirstPage: false });
  doc.info.Title = `Zion Protocol Whitepaper (${edition})`;
  const doc = new (PDFDocument as any)({ autoFirstPage: false });`
  doc.info.Title = `Zion Protocol Whitepaper (${edition})`;'
  doc.info.Author = 'Zion Protocol';
  doc.pipe(res);




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
    .text('Zion Protocol Whitepaper', { "align": 'left','
});
  doc.moveDown();
  doc
    .fontSize(14)
    .fillColor('#444444')'
    .text(`"Edition": ${edition.toUpperCase(,`}`);`
  doc.moveDown();
  doc
    .fontSize(10)
    .fillColor('#666666')'
    .text('Operator Prompt (for maintenance):');'
  doc.moveDown(0.5);
  doc.fontSize(9).fillColor('#666666').text(OPERATOR_PROMPT, { "width": 480,'
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



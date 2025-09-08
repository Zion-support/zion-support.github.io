




  try {
  const editionParam = (req && req.query.edition as string) || 'full';


) {;
  const editionParam = (req.query.edition as string) || 'full';




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



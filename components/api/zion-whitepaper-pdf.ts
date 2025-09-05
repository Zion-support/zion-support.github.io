 const doc = new (PDFDocument as any) ({
  autoFirstPage: false 
});
doc.info.Title = `Zion Protocol Whitepaper ($ {
  edition 
}) `;
doc.info.Author = 'Zion Protocol';
//Cover page // End doc.addPage ();
doc.fontSize (10) .fillColor ('#444444') .text ('© Zion Protocol. This document is provided for informational purposes and does not constitute financial advice.');
doc.end () 
}
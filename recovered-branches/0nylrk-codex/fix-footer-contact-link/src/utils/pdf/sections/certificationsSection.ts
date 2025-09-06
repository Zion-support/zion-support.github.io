 doc.setFontSize (16);
doc.setTextColor (colors.heading);
doc.text ('Certifications', 20, yPos);
yPos += 8;
doc.setDrawColor (colors.accent);
doc.line (20, yPos, 80, yPos);
yPos += 8;
for (const cert of certifications) {
  // Check if we need to add a new page if (yPos > 260) {
  doc.setFontSize (12);
doc.setTextColor (colors.subheading);
doc.text (cert.name, 20, yPos);
doc.setFontSize (11);
doc.setTextColor (colors.text);
doc.text (cert.issuing organization, 20, yPos + 5);
}yPos += 16 
}return yPos 
}
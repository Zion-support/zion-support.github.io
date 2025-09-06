 doc.setFontSize (16);
doc.setTextColor (colors.heading);
doc.text ('Professional Experience', 20, yPos);
yPos += 8;
doc.setDrawColor (colors.accent);
doc.line (20, yPos, 100, yPos);
yPos += 8;
// Sort work experience by date (newest first) for (const work of sortedWorkExperience) {
  // Check if we need to add a new page if (yPos > 260) {
  doc.setFontSize (14);
doc.setTextColor (colors.subheading);
doc.text (work.role title, 20, yPos);
doc.setFontSize (12);
doc.text (work.company name, 20, yPos + 5);
doc.setFontSize (10);
doc.setTextColor (colors.text);
doc.text (dateText, 20, yPos + 10);
}return yPos + 5 
}
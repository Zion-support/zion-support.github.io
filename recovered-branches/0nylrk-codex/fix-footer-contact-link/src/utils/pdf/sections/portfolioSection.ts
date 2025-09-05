 doc.setFontSize (16);
doc.setTextColor (colors.heading);
doc.text ('Portfolio Projects', 20, yPos);
yPos += 8;
doc.setDrawColor (colors.accent);
doc.line (20, yPos, 100, yPos);
yPos += 8;
// Limit the number of projects shown based on maxProjects parameter for (const project of displayProjects) {
  // Check if we need to add a new page if (yPos > 260) {
  doc.setFontSize (14);
doc.setTextColor (colors.subheading);
doc.text (project.title, 20, yPos);
yPos += 6;
if (project.github url) {
  doc.text (`GitHub: $ {
  project.github url 
}`, 20, yPos);
yPos += 4 
}
}
}yPos += 10, // Add space between projects 
}// If there are more projects than we're displaying 
}return yPos + 5 
}
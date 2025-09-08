

  doc && doc.setFontSize(16);
  doc && doc.setTextColor(colors && colors.heading);'
  doc && doc.text('Education', 20, yPos);
  yPos += 8;


    const dateA = a && a.start_date instanceof Date ? a && a.start_date : new Date(a && a.start_date);
    const dateB = b && b.start_date instanceof Date ? b && b.start_date : new Date(b && b.start_date);
    return dateB && dateB.getTime() - dateA && dateA.getTime()



  });


  for (const edu of sortedEducation) {
    // Check if we need to add a new page
    if (yPos > 260) {


import { jsPDF } from 'jspdf',;
import { Education } from '@/types/resume',;
import { PdfThemeColors } from '../themeConfig',;



  return yPos + 5



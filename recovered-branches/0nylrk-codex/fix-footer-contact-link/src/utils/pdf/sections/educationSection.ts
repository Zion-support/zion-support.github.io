
import { jsPDF  } from 'jspdf';
import { Education  } from '@/types/resume';
import { PdfThemeColors  } from '../themeConfig';
import { formatDate } from '../formatters';
export function addEducationSection(
  doc: jsPDF;
  education: Education[];
  colors: PdfThemeColors;
  startY: number
): number {
<<<<<<< HEAD

  if (education.length === 0) return startY;
=======
  if (education && education.length === 0) return startY;
  
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  let yPos = startY;
  // Check if we need to add a new page
  if (yPos > 250) {
<<<<<<< HEAD
    doc.addPage()
    yPos = 20
  }
  doc.setFontSize(16);
  doc.setTextColor(colors.heading);
  doc.text('Education', 20, yPos);
  yPos += 8;
  doc.setDrawColor(colors.accent);
  doc.line(20, yPos, 60, yPos);
=======
    doc && doc.addPage(),
    yPos = 20
  }
  
  doc && doc.setFontSize(16);
  doc && doc.setTextColor(colors && colors.heading);
  doc && doc.text('Education', 20, yPos);
  yPos += 8;
  
  doc && doc.setDrawColor(colors && colors.accent);
  doc && doc.line(20, yPos, 60, yPos);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  yPos += 8;
  // Sort education by date (newest first)
  const sortedEducation = [...education].sort((a, b) => {
<<<<<<< HEAD
    if (a.is_current && !b.is_current) return -1;
    if (!a.is_current && b.is_current) return 1;
    const dateA = a.start_date instanceof Date ? a.start_date : new Date(a.start_date);
    const dateB = b.start_date instanceof Date ? b.start_date : new Date(b.start_date);
    return dateB.getTime() - dateA.getTime()
=======
    if (a && a.is_current && !b && b.is_current) return -1;
    if (!a && a.is_current && b && b.is_current) return 1;
    
    const dateA = a && a.start_date instanceof Date ? a && a.start_date : new Date(a && a.start_date);
    const dateB = b && b.start_date instanceof Date ? b && b.start_date : new Date(b && b.start_date);
    return dateB && dateB.getTime() - dateA && dateA.getTime()
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  });
  for (const edu of sortedEducation) {
    // Check if we need to add a new page
    if (yPos > 260) {
      doc && doc.addPage();
      yPos = 20
    }
<<<<<<< HEAD
    doc.setFontSize(14);
    doc.setTextColor(colors.subheading);
    doc.text(edu.institution, 20, yPos);
    const degreeText = `${edu.degree}${edu.field_of_study ?  + edu.field_of_study : ''}`;
    doc.setFontSize(12);
    doc.text(degreeText, 20, yPos + 5);
    const startDate = formatDate(edu.start_date);
    const endDate = edu.is_current ? 'Present' : formatDate(edu.end_date);
    const dateText = `${startDate} - ${endDate}`;
    doc.setFontSize(10);
    doc.setTextColor(colors.text);
    doc.text(dateText, 20, yPos + 10);
    if (edu.location) {
      doc.text(edu.location, 70, yPos + 10)
    }
    if (edu.description) {
      doc.setFontSize(10);
      const descriptionLines = doc.splitTextToSize(edu.description, 170);
      doc.text(descriptionLines, 20, yPos + 16);

      yPos += (descriptionLines.length * 5) + 20
=======
    
    doc && doc.setFontSize(14);
    doc && doc.setTextColor(colors && colors.subheading);
    doc && doc.text(edu && edu.institution, 20, yPos);
    
    const degreeText = `${edu && edu.degree}${edu && edu.field_of_study ?  + edu && edu.field_of_study : ''}`;
    doc && doc.setFontSize(12);
    doc && doc.text(degreeText, 20, yPos + 5);
    
    const startDate = formatDate(edu && edu.start_date);
    const endDate = edu && edu.is_current ? 'Present' : formatDate(edu && edu.end_date);
    const dateText = `${startDate} - ${endDate}`;
    
    doc && doc.setFontSize(10);
    doc && doc.setTextColor(colors && colors.text);
    doc && doc.text(dateText, 20, yPos + 10);
    
    if (edu && edu.location) {
      doc && doc.text(edu && edu.location, 70, yPos + 10)
    }
    
    if (edu && edu.description) {
      doc && doc.setFontSize(10);
      const descriptionLines = doc && doc.splitTextToSize(edu && edu.description, 170);
      doc && doc.text(descriptionLines, 20, yPos + 16);
      
      yPos += (descriptionLines && descriptionLines.length * 5) + 20
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    } else {
      yPos += 20
    }
  }
  return yPos + 5
}
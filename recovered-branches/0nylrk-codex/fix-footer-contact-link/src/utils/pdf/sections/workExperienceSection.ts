
import { jsPDF  } from 'jspdf';
import { WorkExperience  } from '@/types/resume';
import { PdfThemeColors  } from '../themeConfig';
import { formatDate } from '../formatters';
export function addWorkExperienceSection(
  doc: jsPDF;
  workExperience: WorkExperience[];
  colors: PdfThemeColors;
  startY: number
): number {
<<<<<<< HEAD

  if (workExperience.length === 0) return startY;
=======
  if (workExperience && workExperience.length === 0) return startY;
  
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
  doc.text('Professional Experience', 20, yPos);
  yPos += 8;
  doc.setDrawColor(colors.accent);
  doc.line(20, yPos, 100, yPos);
=======
    doc && doc.addPage(),
    yPos = 20
  }
  
  doc && doc.setFontSize(16);
  doc && doc.setTextColor(colors && colors.heading);
  doc && doc.text('Professional Experience', 20, yPos);
  yPos += 8;
  
  doc && doc.setDrawColor(colors && colors.accent);
  doc && doc.line(20, yPos, 100, yPos);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  yPos += 8;
  // Sort work experience by date (newest first)
  const sortedWorkExperience = [...workExperience].sort((a, b) => {
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
  for (const work of sortedWorkExperience) {
    // Check if we need to add a new page
    if (yPos > 260) {
      doc && doc.addPage();
      yPos = 20
    }
<<<<<<< HEAD
    doc.setFontSize(14);
    doc.setTextColor(colors.subheading);
    doc.text(work.role_title, 20, yPos);
    doc.setFontSize(12);
    doc.text(work.company_name, 20, yPos + 5);
    const startDate = formatDate(work.start_date);
    const endDate = work.is_current ? 'Present' : formatDate(work.end_date);
    const dateText = `${startDate} - ${endDate}`;
    doc.setFontSize(10);
    doc.setTextColor(colors.text);
    doc.text(dateText, 20, yPos + 10);
    if (work.location) {
      doc.text(work.location, 70, yPos + 10)
    }
    if (work.description) {
      doc.setFontSize(10);
      const descriptionLines = doc.splitTextToSize(work.description, 170);
      doc.text(descriptionLines, 20, yPos + 16);

      yPos += (descriptionLines.length * 5) + 20
=======
    
    doc && doc.setFontSize(14);
    doc && doc.setTextColor(colors && colors.subheading);
    doc && doc.text(work && work.role_title, 20, yPos);
    
    doc && doc.setFontSize(12);
    doc && doc.text(work && work.company_name, 20, yPos + 5);
    
    const startDate = formatDate(work && work.start_date);
    const endDate = work && work.is_current ? 'Present' : formatDate(work && work.end_date);
    const dateText = `${startDate} - ${endDate}`;
    
    doc && doc.setFontSize(10);
    doc && doc.setTextColor(colors && colors.text);
    doc && doc.text(dateText, 20, yPos + 10);
    
    if (work && work.location) {
      doc && doc.text(work && work.location, 70, yPos + 10)
    }
    
    if (work && work.description) {
      doc && doc.setFontSize(10);
      const descriptionLines = doc && doc.splitTextToSize(work && work.description, 170);
      doc && doc.text(descriptionLines, 20, yPos + 16);
      
      yPos += (descriptionLines && descriptionLines.length * 5) + 20
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    } else {
      yPos += 20
    }
  }
  return yPos + 5
}
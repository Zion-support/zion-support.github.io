
import {jsPDF} from 'jspdf';
import {Education} from '@/types/resume';
import {PdfThemeColors} from '../themeConfig';
import {formatDate} from '../formatters';
export function addEducationSection(
  doc: jsPDF;
  education: Education[];
  colors: PdfThemeColors;
  startY: number
): number {
  if (education && education.length === 0) return startY;
  
  let yPos = startY;
  
  // Check if we need to add a new page
  if (yPos > 250) {
    doc && doc.addPage(),
    yPos = 20
  }
  
  doc && doc.setFontSize(16);
  doc && doc.setTextColor(colors && colors.heading);
  doc && doc.text('Education', 20, yPos);
  yPos += 8;
  
  doc && doc.setDrawColor(colors && colors.accent);
  doc && doc.line(20, yPos, 60, yPos);
  yPos += 8;
  
  // Sort education by date (newest first)
  const sortedEducation = [...education].sort((a, b) => {
    if (a && a.is_current && !b && b.is_current) return -1;
    if (!a && a.is_current && b && b.is_current) return 1;
    
    const dateA = a && a.start_date instanceof Date ? a && a.start_date : new Date(a && a.start_date);
    const dateB = b && b.start_date instanceof Date ? b && b.start_date : new Date(b && b.start_date);
    return dateB && dateB.getTime() - dateA && dateA.getTime()
  });
  
  for (const edu of sortedEducation) {
    // Check if we need to add a new page
    if (yPos > 260) {
      doc && doc.addPage();
      yPos = 20
    }
    
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
    } else {
      yPos += 20
    }
  }
  
  return yPos + 5
}


import { jsPDF } from 'jspdf';
import { Education } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
import { formatDate } from '../formatters';
export function addEducationSection(
  doc: jsPDF,
  education: Education[],
  colors: PdfThemeColors,
  startY: number): number {
  if (education.length = $2;
  let yPos = $2;
  // Check if we need to add a new page
  if (yPos > 250) {
    doc.addPage($2);
    yPos = 20
  }
  
  doc.setFontSize($2);
  doc.setTextColor($2);
  doc.text($2);
  yPos += 8,
  
  doc.setDrawColor($2);
  doc.line($2);
  yPos += 8,
  
  // Sort education by date (newest first)
  const sortedEducation = [...education].sort((a, b) => {
    if (a.is_current && !b.is_current) return -1,
    if (!a.is_current && b.is_current) return 1,
    
    const dateA = a.start_date instanceof Date ? a.start_date : new Date($2);
    const dateB = b.start_date instanceof Date ? b.start_date : new Date($2);
    return dateB.getTime() - dateA.getTime()
  }),
  
  for (const edu of sortedEducation) {
    // Check if we need to add a new page
    if (yPos > 260) {
      doc.addPage($2);
      yPos = 20
    }
    
    doc.setFontSize($2);
    doc.setTextColor($2);
    doc.text($2);
    const degreeText = $2;
    doc.setFontSize($2);
    doc.text($2);
    const startDate = formatDate($2);
    const endDate = edu.is_current ? 'Present' : formatDate($2);
    const dateText = $2;
    doc.setFontSize($2);
    doc.setTextColor($2);
    doc.text($2);
    if (edu.location) {
      doc.text(edu.location, 70, yPos + 10)
    }
    
    if (edu.description) {
      doc.setFontSize($2);
      const descriptionLines = doc.splitTextToSize($2);
      doc.text($2);
      yPos += (descriptionLines.length * 5) + 20
    } else {
      yPos += 20
    }
  }
  
  return yPos + 5
}


import { jsPDF } from 'jspdf';
import { Certification } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
import { formatDate } from '../formatters';
export function addCertificationsSection(
  doc: jsPDF,
  certifications: Certification[],
  colors: PdfThemeColors,
  startY: number): number {
  if (certifications.length = $2;
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
  
  for (const cert of certifications) {
    // Check if we need to add a new page
    if (yPos > 260) {
      doc.addPage($2);
      yPos = 20
    }
    
    doc.setFontSize($2);
    doc.setTextColor($2);
    doc.text($2);
    doc.setFontSize($2);
    doc.setTextColor($2);
    doc.text($2);
    if (cert.issue_date) {
      const issueDate = formatDate($2);
      const expirationText = $2;
      doc.setFontSize($2);
      doc.text(`${issueDate}${expirationText}`, 20, yPos + 10)
    }
    
    yPos += 16
  }
  
  return yPos
}

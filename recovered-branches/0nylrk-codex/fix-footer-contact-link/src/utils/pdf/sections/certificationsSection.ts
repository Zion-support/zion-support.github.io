
import {jsPDF} from 'jspdf';
import {Certification} from '@/types/resume';
import {PdfThemeColors} from '../themeConfig';
import {formatDate} from '../formatters';
export function addCertificationsSection(
  doc: jsPDF;
  certifications: Certification[];
  colors: PdfThemeColors;
  startY: number
): number {
  if (certifications && certifications.length === 0) return startY;
  
  let yPos = startY;
  
  // Check if we need to add a new page
  if (yPos > 250) {
    doc && doc.addPage(),
    yPos = 20
  }
  
  doc && doc.setFontSize(16);
  doc && doc.setTextColor(colors && colors.heading);
  doc && doc.text('Certifications', 20, yPos);
  yPos += 8;
  
  doc && doc.setDrawColor(colors && colors.accent);
  doc && doc.line(20, yPos, 80, yPos);
  yPos += 8;
  
  for (const cert of certifications) {
    // Check if we need to add a new page
    if (yPos > 260) {
      doc && doc.addPage();
      yPos = 20
    }
    
    doc && doc.setFontSize(12);
    doc && doc.setTextColor(colors && colors.subheading);
    doc && doc.text(cert && cert.name, 20, yPos);
    
    doc && doc.setFontSize(11);
    doc && doc.setTextColor(colors && colors.text);
    doc && doc.text(cert && cert.issuing_organization, 20, yPos + 5);
    
    if (cert && cert.issue_date) {
      const issueDate = formatDate(cert && cert.issue_date);
      const expirationText = cert && cert.expiration_date ? ` - ${formatDate(cert && cert.expiration_date)}` : '';
      doc && doc.setFontSize(10);
      doc && doc.text(`${issueDate}${expirationText}`, 20, yPos + 10)
    }
    
    yPos += 16
  }
  
  return yPos
}

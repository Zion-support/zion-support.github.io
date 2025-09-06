
import { jsPDF  } from 'jspdf';
import { Certification  } from '@/types/resume';
import { PdfThemeColors  } from '../themeConfig';
import { formatDate } from '../formatters';
export function addCertificationsSection(
  doc: jsPDF;
  certifications: Certification[];
  colors: PdfThemeColors;
  startY: number
): number {
<<<<<<< HEAD

  if (certifications.length === 0) return startY;
=======
  if (certifications && certifications.length === 0) return startY;
  
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
  doc.text('Certifications', 20, yPos);
  yPos += 8;
  doc.setDrawColor(colors.accent);
  doc.line(20, yPos, 80, yPos);
=======
    doc && doc.addPage(),
    yPos = 20
  }
  
  doc && doc.setFontSize(16);
  doc && doc.setTextColor(colors && colors.heading);
  doc && doc.text('Certifications', 20, yPos);
  yPos += 8;
  
  doc && doc.setDrawColor(colors && colors.accent);
  doc && doc.line(20, yPos, 80, yPos);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  yPos += 8;
  for (const cert of certifications) {
    // Check if we need to add a new page
    if (yPos > 260) {
      doc && doc.addPage();
      yPos = 20
    }
<<<<<<< HEAD
    doc.setFontSize(12);
    doc.setTextColor(colors.subheading);
    doc.text(cert.name, 20, yPos);
    doc.setFontSize(11);
    doc.setTextColor(colors.text);
    doc.text(cert.issuing_organization, 20, yPos + 5);
    if (cert.issue_date) {
      const issueDate = formatDate(cert.issue_date);
      const expirationText = cert.expiration_date ? ` - ${formatDate(cert.expiration_date)}` : '';
      doc.setFontSize(10);

      doc.text(`${issueDate}${expirationText}`, 20, yPos + 10)
=======
    
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    yPos += 16
  }
  return yPos
}
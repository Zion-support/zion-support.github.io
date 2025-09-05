
<<<<<<< HEAD
import { jsPDF } from 'jspdf',
import { Certification } from '@/types/resume',
import { PdfThemeColors } from '../themeConfig',
import { formatDate } from '../formatters',
export function addCertificationsSection(
  doc: jsPDF,
  certifications: Certification[],
  colors: PdfThemeColors,
  startY: number
): number {
  if (certifications.length === 0) return startY,
  
  let yPos = startY,
  
  // Check if we need to add a new page
  if (yPos > 250) {
    doc.addPage(),
    yPos = 20
  }
=======

export function addCertificationsSection(_doc: jsPDF, _certifications: Certification[], _colors: PdfThemeColors, _startY: number): number {_if (certifications.length === 0) return startY;
  
  let _yPos = startY;
  
  // Check if we need to add a new page
  if (yPos > 250) {
    doc.addPage();
    yPos = 20;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  doc.setFontSize(16),
  doc.setTextColor(colors.heading),
  doc.text('Certifications', 20, yPos),
  yPos += 8,
  
  doc.setDrawColor(colors.accent),
  doc.line(20, yPos, 80, yPos),
  yPos += 8,
  
  for (const cert of certifications) {_// Check if we need to add a new page
    if (yPos > 260) {
<<<<<<< HEAD
      doc.addPage(),
      yPos = 20
    }
=======
      doc.addPage();
      yPos = 20;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    doc.setFontSize(12),
    doc.setTextColor(colors.subheading),
    doc.text(cert.name, 20, yPos),
    
    doc.setFontSize(11),
    doc.setTextColor(colors.text),
    doc.text(cert.issuing_organization, 20, yPos + 5),
    
<<<<<<< HEAD
    if (cert.issue_date) {
      const issueDate = formatDate(cert.issue_date),
      const expirationText = cert.expiration_date ? ` - ${formatDate(cert.expiration_date)}` : '',
      doc.setFontSize(10),
      doc.text(`${issueDate}${expirationText}`, 20, yPos + 10)
=======
    if (cert.issue_date) {_const _issueDate = formatDate(cert.issue_date);
      const _expirationText = cert.expiration_date ? ` - ${formatDate(cert.expiration_date)}` : '';
      doc.setFontSize(10);
      doc.text(`${_issueDate}${_expirationText}`, 20, yPos + 10);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    
    yPos += 16
  }
  
  return yPos
}

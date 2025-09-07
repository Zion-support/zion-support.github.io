import { jsPDF  } from 'jspdf';
import { Certification  } from '@/types/resume';
import { PdfThemeColors  } from '../themeConfig';
import { formatDate } from '../formatters';
export function addCertificationsSection(  doc: jsPDF;
  certifications: Certification[];
  colors: PdfThemeColors;
  startY: number
): number {

  let yPos = startY;
  // Check if we need to add a new page
  if (yPos > 250) {  let yPos = startY;
  // Check if we need to add a new page
  if (yPos > 250) {
  yPos += 8;
  for (const cert of certifications) {
    // Check if we need to add a new page
    if (yPos > 260) {
      doc && doc.addPage();
      yPos = 20
    }
      doc.addPage();
      yPos = 20
    }
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
import { jsPDF } from 'jspdf',;
import { Certification } from '@/types/resume',;
import { PdfThemeColors } from '../themeConfig',;
import { formatDate } from '../formatters',;
export function addCertificationsSection(;
  doc: jsPDF,;
  certifications: Certification[],;
  colors: PdfThemeColors,;
  startY: number;
): number {;
  if (certifications.length === 0) return startY,;
  let yPos = startY,;
  // Check if we need to add a new page;
  if (yPos > 250) {;
    doc.addPage(),;
    yPos = 20;
  }
;
  doc.setFontSize(16),;
  doc.setTextColor(colors.heading),;
  doc.text('Certifications', 20, yPos),;
  yPos += 8,;
  doc.setDrawColor(colors.accent),;
  doc.line(20, yPos, 80, yPos),;
  yPos += 8,;
  for (const cert of certifications) {;
    // Check if we need to add a new page;
    if (yPos > 260) {;
      doc.addPage(),;
      yPos = 20;
    }
;
    doc.setFontSize(12),;
    doc.setTextColor(colors.subheading),;
    doc.text(cert.name, 20, yPos),;
    doc.setFontSize(11),;
    doc.setTextColor(colors.text),;
    doc.text(cert.issuing_organization, 20, yPos + 5),;
    if (cert.issue_date) {;
      const issueDate = formatDate(cert.issue_date),;
      const expirationText = cert.expiration_date ? ` - ${formatDate(cert.expiration_date)}` : '';
      doc.setFontSize(10);
      doc.text(`${issueDate}${expirationText}`, 20, yPos + 10);

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

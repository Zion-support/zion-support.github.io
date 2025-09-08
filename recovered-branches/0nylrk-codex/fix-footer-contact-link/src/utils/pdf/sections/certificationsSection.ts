
import { jsPDF  } from 'jspdf';
import { Certification  } from '@/types/resume';
import { PdfThemeColors  } from '../themeConfig';



=======
import { jsPDF  } from 'jspdf';'
import { Certification  } from '@/types/resume';'
import { PdfThemeColors  } from '../themeConfig';'
import { formatDate } from '../formatters';'
export function addCertificationsSection(  'doc': jsPDF;
  'certifications': Certification[];
  'colors': PdfThemeColors;
  'startY': number
): number {
  }
  let yPos = startY;
  // Check if we need to add a new page,
if (yPos > 250) {  let yPos = startY;
  // Check if we need to add a new page
}
if (yPos > 250) {
  }
  yPos += 8;
  for (const cert of certifications) {
    // Check if we need to add a new page
}
if (yPos > 260) {
      }
      doc && doc.addPage();
      yPos = 20
    }
import { formatDate } from '../formatters';
export function addCertificationsSection(  doc: jsPDF;
  certifications: Certification[];
  colors: PdfThemeColors;

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
      const issueDate = formatDate(cert.issue_date);'
      const expirationText = cert.expiration_date ? ` - ${formatDate(cert.expiration_date)}` : '';'
      doc.setFontSize(10);

      doc.text(`${issueDate}${expirationText}`, 20, yPos + 10)'
import { jsPDF } from 'jspdf',;''
import { Certification } from '@/types/resume',;''
import { PdfThemeColors } from '../themeConfig',;''
import { formatDate } from '../formatters',;'

export function addCertificationsSection(;
  doc: jsPDF,;
  certifications: Certification[],;
  colors: PdfThemeColors,;


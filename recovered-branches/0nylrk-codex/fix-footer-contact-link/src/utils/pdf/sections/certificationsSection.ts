

<<<<<<< HEAD
=======
pr-12325
>>>>>>> origin/main
import { jsPDF  } from 'jspdf';
import { Certification  } from '@/types/resume';
import { PdfThemeColors  } from '../themeConfig';
import { formatDate } from '../formatters';
<<<<<<< HEAD

export function addCertificationsSection(
  doc: jsPDF;
=======
export function addCertificationsSection(  doc: jsPDF;
>>>>>>> origin/main
  certifications: Certification[];
  colors: PdfThemeColors;
  startY: number
): number {

<<<<<<< HEAD
  if (certifications.length;

=======
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
export function addCertificationsSection(
import {jsPDF} from 'jspdf';
import {Certification} from '@/types/resume';
import {PdfThemeColors} from '../themeConfig';
import {formatDate} from '../formatters';


import { jsPDF  } from 'jspdf';''
import { Certification  } from '@/types/resume';''
import { PdfThemeColors  } from '../themeConfig';''
import { formatDate } from '../formatters';'
export function addCertificationsSection('
import {jsPDF} from 'jspdf';''
import {Certification} from '@/types/resume';''
import {PdfThemeColors} from '../themeConfig';''
import {formatDate} from '../formatters';'
export function addCertificationsSection(;


  doc: jsPDF;,
  certifications: Certification[];
  colors: PdfThemeColors;,
  startY: number;)
): number {
  // TODO: Implement
}
  if (certifications && certifications.length === 0) return startY;
  

  let yPos = startY;
  // Check if we need to add a new page;
  if (yPos > 250) {

    doc && doc.addPage(),
    yPos = 20;
  
  doc && doc.setFontSize(16);
  doc && doc.setTextColor(colors && colors.heading);
  doc && doc.text('Certifications', 20, yPos);
  yPos += 8;
  
  doc && doc.setDrawColor(colors && colors.accent);
  doc && doc.line(20, yPos, 80, yPos);

  // Check if we need to add a new page;
  for (const cert of certifications) {
    // Check if we need to add a new page;
    if (yPos > 260) {
      doc && doc.addPage();


      doc.addPage();
pr-12325
      yPos = 20;

    }
      doc.addPage();
      yPos = 20;
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

      const expirationText = cert.expiration_date ? ` - ${formatDate(cert.expiration_date)}` : ;
      doc.setFontSize(10);
`;
pr-12325
>>>>>>> origin/main
      doc.text(`${issueDate}${expirationText}`, 20, yPos + 10)
import { jsPDF } from 'jspdf',;
import { Certification } from '@/types/resume',;
import { PdfThemeColors } from '../themeConfig',;
import { formatDate } from '../formatters',;

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
  startY: number;
  doc: jsPDF,;
  certifications: Certification[],;
  colors: PdfThemeColors,;
pr-12325
  startY: number;)
): number {;
  if (certifications.length === 0) return startY,;
  let yPos = startY,;
  // Check if we need to add a new page;
  if (yPos > 250) {;
    doc.addPage(),;}
    yPos = 20;}
  }
pr-12325
;
  doc.setFontSize(16),;
  doc.setTextColor(colors.heading),;
  doc.text('Certifications', 20, yPos),;
  doc.setTextColor(colors.heading),;'
  doc.text('Certifications', 20, yPos),;'
  yPos += 8,;
  doc.setDrawColor(colors.accent),;
  doc.line(20, yPos, 80, yPos),;
  yPos += 8,;
  for (const cert of certifications) {;
    // Check if we need to add a new page;
    if (yPos > 260) {;
      doc.addPage(),;}
      yPos = 20;}
    }
;
  for (const cert of certifications) {;
    // Check if we need to add a new page;
    if (yPos > 260) {;
pr-12325
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

      const issueDate = formatDate(cert.issue_date),;`;
      doc.setFontSize(10);`;

    if (cert.issue_date) {;
      const issueDate = formatDate(cert.issue_date),;'
      const expirationText = cert.expiration_date ? ` - ${formatDate(cert.expiration_date)}` : '';'
      doc.setFontSize(10);
      doc.text(`${issueDate}${expirationText}`, 20, yPos + 10);

    yPos += 16;
  return yPos;
    doc && doc.setFontSize(12);
    doc && doc.setTextColor(colors && colors.subheading);
    doc && doc.text(cert && cert.name, 20, yPos);
    doc && doc.setFontSize(11);
    doc && doc.setTextColor(colors && colors.text);
    doc && doc.text(cert && cert.issuing_organization, 20, yPos + 5);
    if (cert && cert.issue_date) {
      const issueDate = formatDate(cert && cert.issue_date);`;
      const expirationText = cert && cert.expiration_date ? ` - ${formatDate(cert && cert.expiration_date)}` : ;
      doc && doc.setFontSize(10);`;
      doc && doc.text(`${issueDate}${expirationText}`, 20, yPos + 10)

  doc:jsPDF,;
  certifications:Certification[],;
  colors:PdfThemeColors,;
  startY:number;)
):number {;
  // Check if we need to add a new page;
    // Check if we need to add a new page;
      yPos = 20,;
      const expirationText = cert.expiration_date ? ` - ${formatDate(cert.expiration_date)}` :,;
      doc.setFontSize(10),;`;
      doc.text(`${issueDate}${expirationText}`, 20, yPos + 10),;
    yPos += 16,;
  return yPos,;}
 doc.setFontSize (16);
doc.setTextColor (colors.heading);
doc.text ('Certifications', 20, yPos);
doc.setDrawColor (colors.accent);
doc.line (20, yPos, 80, yPos);
  // Check if we need to add a new page if (yPos > 260) {
  doc.setFontSize (12);
doc.setTextColor (colors.subheading);
doc.text (cert.name, 20, yPos);
doc.setFontSize (11);
doc.setTextColor (colors.text);
doc.text (cert.issuing organization, 20, yPos + 5);
}yPos += 16;
}return yPos;
pr-12325
}
}
}
'


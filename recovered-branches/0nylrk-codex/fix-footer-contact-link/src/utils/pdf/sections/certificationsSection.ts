
<<<<<<< HEAD
<<<<<<< HEAD
import { jsPDF  } from 'jspdf';
import { Certification  } from '@/types/resume';
import { PdfThemeColors  } from '../themeConfig';
import { formatDate } from '../formatters';
export function addCertificationsSection(
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {jsPDF} from 'jspdf';
import {Certification} from '@/types/resume';
import {PdfThemeColors} from '../themeConfig';
import {formatDate} from '../formatters';
export function addCertificationsSection(;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  doc: jsPDF;
  certifications: Certification[];
  colors: PdfThemeColors;
  startY: number
): number {

<<<<<<< HEAD
<<<<<<< HEAD
  if (certifications.length === 0) return startY;
  let yPos = startY;
  // Check if we need to add a new page
  if (yPos > 250) {
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  yPos += 8;
  for (const cert of certifications) {
    // Check if we need to add a new page
    if (yPos > 260) {
<<<<<<< HEAD
<<<<<<< HEAD
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

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      doc && doc.addPage();
      yPos = 20
    }


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    yPos += 16
  }
  return yPos
<<<<<<< HEAD
<<<<<<< HEAD
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

import { jsPDF } from 'jspdf',;
import { Certification } from '@/types/resume',;
import { PdfThemeColors } from '../themeConfig',;
import { formatDate } from '../formatters',;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
import {jsPDF} from 'jspdf';
import {Certification} from '@/types / resume';
import {PdfThemeColors} from '../theme_config';
import {format_date} from '../formatters';
export function addCertificationsSection (
  doc: jsPDF;
  certifications: Certification[];
  colors: PdfThemeColors;
  start_y: number): number {
  // Check condition
if (return start_y) {
  $2
}
  let y_pos = start_y;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
export function addCertificationsSection(;
  doc:jsPDF,;
  certifications:Certification[],;
  colors:PdfThemeColors,;
  startY:number;
):number {;
  if (certifications.length === 0) return startY,;
  ;
  let yPos = startY,;
  ;
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
  ;
  doc.setDrawColor(colors.accent),;
  doc.line(20, yPos, 80, yPos),;
  yPos += 8,;
  ;
  for (const cert of certifications) {;
    // Check if we need to add a new page;
    if (yPos > 260) {;
      doc.addPage(),;
      yPos = 20,;
    }
    ;
    doc.setFontSize(12),;
    doc.setTextColor(colors.subheading),;
    doc.text(cert.name, 20, yPos),;
    ;
    doc.setFontSize(11),;
    doc.setTextColor(colors.text),;
    doc.text(cert.issuing_organization, 20, yPos + 5),;
    ;
    if (cert.issue_date) {;
      const issueDate = formatDate(cert.issue_date),;
      const expirationText = cert.expiration_date ? ` - ${formatDate(cert.expiration_date)}` :'',;
      doc.setFontSize(10),;
      doc.text(`${issueDate}${expirationText}`, 20, yPos + 10),;
    }
    ;
    yPos += 16,;
  }
<<<<<<< HEAD
  ;
  return yPos,;}
 doc.setFontSize (16);
doc.setTextColor (colors.heading);
doc.text ('Certifications', 20, yPos);
yPos += 8;
doc.setDrawColor (colors.accent);
doc.line (20, yPos, 80, yPos);
yPos += 8;
for (const cert of certifications) {
  // Check if we need to add a new page if (yPos > 260) {
  doc.setFontSize (12);
doc.setTextColor (colors.subheading);
doc.text (cert.name, 20, yPos);
doc.setFontSize (11);
doc.setTextColor (colors.text);
doc.text (cert.issuing organization, 20, yPos + 5);
}yPos += 16 
}return yPos 
}
}
=======
  return y_pos;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
  // Check if we need to add a new page;
  // Check condition
if ( {) {
  $2
}
    doc.add_page (),
    y_pos = 20;
  }
  doc.setFontSize (16);
  doc.setTextColor (colors.heading);
  doc.text ('Certifications', 20, y_pos);
  y_pos += 8;
;
  doc.setDrawColor (colors.accent);
  doc.line (20, y_pos, 80, y_pos);
  y_pos += 8;
;
  for (const cert of certifications) {
    // Check if we need to add a new page;
    // Check condition
if ( {) {
  $2
}
      doc.add_page ();
      y_pos = 20;
    }
    doc.setFontSize (12);
    doc.setTextColor (colors.subheading);
    doc.text (cert.name, 20, y_pos);
;
    doc.setFontSize (11);
    doc.setTextColor (colors.text);
    doc.text (cert.issuing_organization, 20, y_pos + 5);
;
    // Check condition
if ( {) {
  $2
}
      const issue_date = format_date (cert.issue_date);
      const expiration_text = cert.expiration_date ? ` - ${format_date (cert.expiration_date)}` : '';
      doc.setFontSize (10);
      doc.text (`${issue_date}${expiration_text}`, 20, y_pos + 10);
    }
    y_pos += 16;
  }
  return y_pos;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

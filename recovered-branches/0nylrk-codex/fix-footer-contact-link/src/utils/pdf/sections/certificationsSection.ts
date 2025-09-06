<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { jsPDF  } from 'jspdf';
import { Certification  } from '@/types/resume';
import { PdfThemeColors  } from '../themeConfig';
import { formatDate } from '../formatters';
<<<<<<< HEAD
<<<<<<< HEAD
export function addCertificationsSection(
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {jsPDF} from 'jspdf';
import {Certification} from '@/types/resume';
import {PdfThemeColors} from '../themeConfig';
import {formatDate} from '../formatters';
export function addCertificationsSection(;
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  doc: jsPDF;
=======
export function addCertificationsSection(  doc: jsPDF;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export function addCertificationsSection(  doc: jsPDF;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
      doc.text(`${issueDate}${expirationText}`, 20, yPos + 10)

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      doc && doc.addPage();
      yPos = 20
    }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
    yPos += 16
  }
  return yPos
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
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

import { jsPDF } from 'jspdf',;
import { Certification } from '@/types/resume',;
import { PdfThemeColors } from '../themeConfig',;
import { formatDate } from '../formatters',;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

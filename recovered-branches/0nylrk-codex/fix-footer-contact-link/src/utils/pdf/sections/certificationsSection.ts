import { jsPDF  } from 'jspdf';
import { Certification  } from '@/types/resume';
import { PdfThemeColors  } from '../themeConfig';
<<<<<<< HEAD
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
=======

<<<<<<< HEAD
import { formatDate } from '../formatters';
=======
<<<<<<< HEAD
import { jsPDF  } from 'jspdf';
import { Certification  } from '@/types/resume';
import { PdfThemeColors  } from '../themeConfig';
import { formatDate } from '../formatters';
export function addCertificationsSection(
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {jsPDF} from 'jspdf';
import {Certification} from '@/types/resume';
import {PdfThemeColors} from '../themeConfig';
import {formatDate} from '../formatters';
export function addCertificationsSection(;
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  doc: jsPDF;

export function addCertificationsSection(  doc: jsPDF;

  certifications: Certification[];
  colors: PdfThemeColors;

<<<<<<< HEAD
      doc.addPage();
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  yPos += 8;
  for (const cert of certifications) {
    // Check if we need to add a new page
    if (yPos > 260) {
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
      doc && doc.addPage();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
    yPos += 16
  }
  return yPos
<<<<<<< HEAD

}

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    doc && doc.setFontSize(12);
    doc && doc.setTextColor(colors && colors.subheading);
    doc && doc.text(cert && cert.name, 20, yPos);
    doc && doc.setFontSize(11);
    doc && doc.setTextColor(colors && colors.text);
    doc && doc.text(cert && cert.issuing_organization, 20, yPos + 5);
<<<<<<< HEAD
    if (cert && cert.issue_date) {}
      const issueDate = formatDate(cert && cert.issue_date);'
      const expirationText = cert && cert.expiration_date ? ` - ${formatDate(cert && cert.expiration_date)}` : '';
      doc && doc.setFontSize(10);`
      doc && doc.text(`${issueDate}${expirationText}`, 20, yPos + 10)
'
import { jsPDF } from 'jspdf',;'
import { Certification } from '@/types/resume',;'
import { PdfThemeColors } from '../themeConfig',;'
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
    doc.addPage(),;}
    yPos = 20;}
  }

  doc.setFontSize(16),;
  doc.setTextColor(colors.heading),;'
  doc.text('Certifications', 20, yPos),;
  doc.setTextColor(colors.heading),;'
  doc.text('Certifications', 20, yPos),;'
  yPos += 8,;
  ;
  doc.setDrawColor(colors.accent),;
  doc.line(20, yPos, 80, yPos),;
  yPos += 8,;
  ;
  for (const cert of certifications) {;
    // Check if we need to add a new page;
    if (yPos > 260) {;

    doc.setFontSize(12),;
    doc.setTextColor(colors.subheading),;
    doc.text(cert.name, 20, yPos),;
    ;
    doc.setFontSize(11),;
    doc.setTextColor(colors.text),;
    doc.text(cert.issuing_organization, 20, yPos + 5),;
    ;
    if (cert.issue_date) {;
<<<<<<< HEAD
      }
      const issueDate = formatDate(cert.issue_date),;
      doc.text(`${issueDate}${expirationText}`, 20, yPos + 10);
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

      doc && doc.addPage();
      yPos = 20
    }
    }
    yPos += 16
  }
  return yPos
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
<<<<<<< HEAD
}

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
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621

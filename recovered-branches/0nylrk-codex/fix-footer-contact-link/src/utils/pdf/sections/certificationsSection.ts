<<<<<<< HEAD
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

>>>>>>> origin/cursor/delete-old-data-records-6bba
import {jsPDF} from 'jspdf';
import {Certification} from '@/types/resume';
import {PdfThemeColors} from '../themeConfig';
import {formatDate} from '../formatters';
export function addCertificationsSection(;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  doc: jsPDF;

export function addCertificationsSection(  doc: jsPDF;

  certifications: Certification[];
  colors: PdfThemeColors;



<<<<<<< HEAD
=======
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

>>>>>>> origin/cursor/delete-old-data-records-6bba

    }
    yPos += 16
  }
  return yPos
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
    doc && doc.setFontSize(12);
    doc && doc.setTextColor(colors && colors.subheading);
    doc && doc.text(cert && cert.name, 20, yPos);
    doc && doc.setFontSize(11);
    doc && doc.setTextColor(colors && colors.text);
    doc && doc.text(cert && cert.issuing_organization, 20, yPos + 5);


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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

  return y_pos;

=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
}



<<<<<<< HEAD
=======
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

>>>>>>> origin/cursor/delete-old-data-records-6bba

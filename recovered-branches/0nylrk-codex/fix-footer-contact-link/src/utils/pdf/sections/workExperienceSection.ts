<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { formatDate } from '../formatters';
export function addWorkExperienceSection(';
import {jsPDF} from 'jspdf';'
import {WorkExperience} from '@/types / resume';'
import {PdfThemeColors} from '../theme_config';'
import {format_date} from '../formatters';
export function addWorkExperienceSection (

<<<<<<< HEAD
=======
import { jsPDF  } from 'jspdf';
import { WorkExperience  } from '@/types/resume';
import { PdfThemeColors  } from '../themeConfig';
import { formatDate } from '../formatters';
>>>>>>> origin/cursor/delete-old-data-records-6bba

import {jsPDF} from 'jspdf';
import {WorkExperience} from '@/types/resume';
import {PdfThemeColors} from '../themeConfig';
<<<<<<< HEAD

import {formatDate} from '../formatters';
export function addWorkExperienceSection(;

    // Check if we need to add a new page
    if (yPos > 260) {

=======

import {formatDate} from '../formatters';

  doc: jsPDF;
  workExperience: WorkExperience[];
  colors: PdfThemeColors;
  startY: number
): number {

  doc && doc.setFontSize(16);
  doc && doc.setTextColor(colors && colors.heading);'
  doc && doc.text('Professional Experience', 20, yPos);
  yPos += 8;

  doc: jsPDF;
  workExperience: WorkExperience[];
  colors: PdfThemeColors;
  startY: number;
): number {}

  doc: jsPDF;
  work_experience: WorkExperience[];
  colors: PdfThemeColors;
  let yPos = startY;


    // Check if we need to add a new page
    if (yPos > 260) {
    doc && doc.setFontSize(14);
    doc && doc.setTextColor(colors && colors.subheading);
    doc && doc.text(work && work.role_title, 20, yPos);
    doc && doc.setFontSize(12);
    doc && doc.text(work && work.company_name, 20, yPos + 5);
    const startDate = formatDate(work && work.start_date);
    const endDate = work && work.is_current ? 'Present' : formatDate(work && work.end_date);
    const dateText = `${startDate} - ${endDate}`;
    doc && doc.setFontSize(10);
    doc && doc.setTextColor(colors && colors.text);
    doc && doc.text(dateText, 20, yPos + 10);
    if (work && work.location) {
      doc && doc.text(work && work.location, 70, yPos + 10)
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba
      doc && doc.addPage();
      yPos = 20
    }

    doc && doc.setFontSize(14);
    doc && doc.setTextColor(colors && colors.subheading);
    doc && doc.text(work && work.role_title, 20, yPos);
    
    doc && doc.setFontSize(12);
    doc && doc.text(work && work.company_name, 20, yPos + 5);
    
    const startDate = formatDate(work && work.start_date);
    const endDate = work && work.is_current ? 'Present' : formatDate(work && work.end_date);
    const dateText = `${startDate} - ${endDate}`;
    
    doc && doc.setFontSize(10);
    doc && doc.setTextColor(colors && colors.text);
    doc && doc.text(dateText, 20, yPos + 10);
    
    if (work && work.location) {
      doc && doc.text(work && work.location, 70, yPos + 10)
    }
    
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (work && work.description) {
      doc && doc.setFontSize(10);
      const descriptionLines = doc && doc.splitTextToSize(work && work.description, 170);
      doc && doc.text(descriptionLines, 20, yPos + 16);
<<<<<<< HEAD

      
      yPos += (descriptionLines && descriptionLines.length * 5) + 20

    } else {
      yPos += 20


=======
      yPos += (descriptionLines && descriptionLines.length * 5) + 20
    } else {
      yPos += 20

      doc.addPage();
      yPos = 20
    }
    doc.setFontSize(14);
    doc.setTextColor(colors.subheading);
    doc.text(work.role_title, 20, yPos);
    doc.setFontSize(12);
    doc.text(work.company_name, 20, yPos + 5);
    const startDate = formatDate(work.start_date);
    const endDate = work.is_current ? 'Present' : formatDate(work.end_date);
    const dateText = `${startDate} - ${endDate}`;
    doc.setFontSize(10);
    doc.setTextColor(colors.text);
    doc.text(dateText, 20, yPos + 10);
    if (work.location) {
      doc.text(work.location, 70, yPos + 10)
    }
    if (work.description) {
      doc.setFontSize(10);
      const descriptionLines = doc.splitTextToSize(work.description, 170);
      doc.text(descriptionLines, 20, yPos + 16);

      yPos += (descriptionLines.length * 5) + 20
    } else {
      yPos += 20
    } else {
      yPos += 20

      doc.addPage();
      yPos = 20
    }
    doc.setFontSize(14);
    doc.setTextColor(colors.subheading);
    doc.text(work.role_title, 20, yPos);
    doc.setFontSize(12);
    doc.text(work.company_name, 20, yPos + 5);
    const startDate = formatDate(work.start_date);
    const endDate = work.is_current ? 'Present' : formatDate(work.end_date);
    const dateText = `${startDate} - ${endDate}`;
    doc.setFontSize(10);
    doc.setTextColor(colors.text);
    doc.text(dateText, 20, yPos + 10);
    if (work.location) {
      doc.text(work.location, 70, yPos + 10)
    }
    if (work.description) {
      doc.setFontSize(10);
      const descriptionLines = doc.splitTextToSize(work.description, 170);
      doc.text(descriptionLines, 20, yPos + 16);

      yPos += (descriptionLines.length * 5) + 20
    } else {
      yPos += 20


>>>>>>> origin/cursor/delete-old-data-records-6bba
import { jsPDF } from 'jspdf',;
import { WorkExperience } from '@/types/resume',;
import { PdfThemeColors } from '../themeConfig',;

import { formatDate } from '../formatters',;
      yPos += (descriptionLines && descriptionLines.length * 5) + 20;
    } else {
  // TODO: Implement
}
      yPos += 20;'
import { jsPDF } from 'jspdf',;''
import { WorkExperience } from '@/types/resume',;''
import { PdfThemeColors } from '../themeConfig',;''
import { formatDate } from '../formatters',;'

export function addWorkExperienceSection(;
  doc: jsPDF,;
  workExperience: WorkExperience[],;
  colors: PdfThemeColors,;
  startY: number;
  doc: jsPDF,;
  workExperience: WorkExperience[],;
  colors: PdfThemeColors,;
  startY: number;)
pr-12325
  startY: number;)
): number {;
  if (workExperience.length === 0) return startY,;
  let yPos = startY,;
  // Check if we need to add a new page;
  if (yPos > 250) {;
    doc.addPage(),;}
    yPos = 20;}
  }
pr-12325
;
  doc.setFontSize(16),;
  doc.setTextColor(colors.heading),;'
  doc.text('Professional Experience', 20, yPos),;
  doc.setTextColor(colors.heading),;'
  doc.text('Professional Experience', 20, yPos),;'
  yPos += 8,;
  doc.setDrawColor(colors.accent),;
  doc.line(20, yPos, 100, yPos),;
  yPos += 8,;
pr-12325
  // Sort work experience by date (newest first);
  const sortedWorkExperience = [...workExperience].sort((a, b) => {;
    if (a.is_current && !b.is_current) return -1,;
    if (!a.is_current && b.is_current) return 1,;
    const dateA = a.start_date instanceof Date ? a.start_date : new Date(a.start_date),;
    const dateB = b.start_date instanceof Date ? b.start_date : new Date(b.start_date),;}
    return dateB.getTime() - dateA.getTime();}
  }),;
  for (const work of sortedWorkExperience) {;
    // Check if we need to add a new page;
    if (yPos > 260) {;
      doc.addPage(),;}
      yPos = 20;}
    }
;
pr-12325
    doc.setFontSize(14),;
    doc.setTextColor(colors.subheading),;
    doc.text(work.role_title, 20, yPos),;
    doc.setFontSize(12),;
    doc.text(work.company_name, 20, yPos + 5),;
    const startDate = formatDate(work.start_date),;'
    const endDate = work.is_current ? 'Present' : formatDate(work.end_date),;
    const endDate = work.is_current ? 'Present' : formatDate(work.end_date),;`;
pr-12325
    const startDate = formatDate(work.start_date),;'
    const endDate = work.is_current ? 'Present' : formatDate(work.end_date),;'
    const dateText = `${startDate} - ${endDate}`,;
    doc.setFontSize(10),;
    doc.setTextColor(colors.text),;
    doc.text(dateText, 20, yPos + 10),;
    if (work.location) {;}
      doc.text(work.location, 70, yPos + 10);}
    }
;
    if (work.description) {;
      doc.setFontSize(10),;
    if (work.description) {;
pr-12325
      const descriptionLines = doc.splitTextToSize(work.description, 170);

      doc.text(descriptionLines, 20, yPos + 16);
      yPos += (descriptionLines.length * 5) + 20;
    } else {;
      yPos += 20;


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  start_y: number): number {
  // Check condition
if (return start_y) {
  $2
<<<<<<< HEAD
=======
    }
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba

}

  let y_pos = start_y;
  // Check if we need to add a new page;

}

    doc.add_page (),
    y_pos = 20;
  doc.setFontSize (16);

  doc.text ('Professional Experience', 20, y_pos);
  y_pos += 8;
  doc.setDrawColor (colors.accent);
  doc.line (20, y_pos, 100, y_pos);
  // Sort work experience by date (newest first);

}
    const date_a = a.start_date instanceof Date ? a.start_date : new Date (a.start_date);
    const date_b = b.start_date instanceof Date ? b.start_date : new Date (b.start_date);
    return date_b.get_time () - date_a.get_time ();
  });
;

}

      doc.add_page ();
    doc.setFontSize (14);
    doc.setTextColor (colors.subheading);
    doc.text (work.role_title, 20, y_pos);
    doc.setFontSize (12);
    doc.text (work.company_name, 20, y_pos + 5);

    const date_text = `${start_date} - ${end_date}`;
    doc.setFontSize (10);
    doc.setTextColor (colors.text);
    doc.text (date_text, 20, y_pos + 10);

}
      doc.setFontSize (10);

      const description_lines = doc.splitTextToSize (work.description, 170);
      doc.text (description_lines, 20, y_pos + 16);
      y_pos += (description_lines.length * 5) + 20;

      y_pos += 20;
  return y_pos + 5;

import { jsPDF } from 'jspdf',;
import { WorkExperience } from '@/types/resume',;
import { PdfThemeColors } from '../themeConfig',;
import { formatDate } from '../formatters',;
;
export function addWorkExperienceSection(;

  doc:jsPDF,;
  workExperience:WorkExperience[],;
  colors:PdfThemeColors,;
  startY:number;)
):number {;
  // Check if we need to add a new page;
  // Sort work experience by date (newest first);
    const dateA = a.start_date instanceof Date ? a.start_date :new Date(a.start_date),;
    const dateB = b.start_date instanceof Date ? b.start_date :new Date(b.start_date),;
    return dateB.getTime() - dateA.getTime(),;
    // Check if we need to add a new page;
      yPos = 20,;
    const endDate = work.is_current ? 'Present' :formatDate(work.end_date),;`;
      doc.text(work.location, 70, yPos + 10),;
      const descriptionLines = doc.splitTextToSize(work.description, 170),;
      doc.text(descriptionLines, 20, yPos + 16),;
      yPos += (descriptionLines.length * 5) + 20,;
      yPos += 20,;
  return yPos + 5,;}
doc.text ('Professional Experience', 20, yPos);
doc.line (20, yPos, 100, yPos);
// Sort work experience by date (newest first) for (const work of sortedWorkExperience) {
  // Check if we need to add a new page if (yPos > 260) {
doc.text (work.role title, 20, yPos);
doc.text (work.company name, 20, yPos + 5);
doc.text (dateText, 20, yPos + 10);
}return yPos + 5;
`;
pr-12325
}
    }
  }

<<<<<<< HEAD
  return y_pos + 5;



=======
  return yPos + 5;
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

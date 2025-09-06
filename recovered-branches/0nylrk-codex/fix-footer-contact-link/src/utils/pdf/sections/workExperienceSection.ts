
import {jsPDF} from 'jspdf';
import {WorkExperience} from '@/types/resume';
import {PdfThemeColors} from '../themeConfig';
import {formatDate} from '../formatters';
export function addWorkExperienceSection(;
  doc: jsPDF;
  work_experience: WorkExperience[];
  colors: PdfThemeColors;
  doc: jsPDF;
  work_experience: WorkExperience[];
  colors: PdfThemeColors;
  startY: number
): number {

  if (workExperience.length === 0) return startY;
  let yPos = startY;
  // Check if we need to add a new page
  if (yPos > 250) {
    doc.addPage()
    yPos = 20
  }
  doc.setFontSize(16);
  doc.setTextColor(colors.heading);
  doc.text('Professional Experience', 20, yPos);
  yPos += 8;
  doc.setDrawColor(colors.accent);
  doc.line(20, yPos, 100, yPos);
  yPos += 8;
  // Sort work experience by date (newest first)
  const sortedWorkExperience = [...workExperience].sort((a, b) => {
    if (a.is_current && !b.is_current) return -1;
    if (!a.is_current && b.is_current) return 1;
    const dateA = a.start_date instanceof Date ? a.start_date : new Date(a.start_date);
    const dateB = b.start_date instanceof Date ? b.start_date : new Date(b.start_date);
    return dateB.getTime() - dateA.getTime()
  });
  for (const work of sortedWorkExperience) {
    // Check if we need to add a new page
    if (yPos > 260) {
    }
  }
  return yPos + 5
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
  doc.text ('Professional Experience', 20, y_pos);
  y_pos += 8;
;
  doc.setDrawColor (colors.accent);
  doc.line (20, y_pos, 100, y_pos);
  y_pos += 8;
;
  // Sort work experience by date (newest first);
  const sortedWorkExperience = [...work_experience].sort ((a, b) => {
    // Check condition
if (return -1) {
  $2
}
    // Check condition
if (return 1) {
  $2
}
    const date_a = a.start_date instanceof Date ? a.start_date : new Date (a.start_date);
    const date_b = b.start_date instanceof Date ? b.start_date : new Date (b.start_date);
    return date_b.get_time () - date_a.get_time ();
  });
;
  for (const work of sortedWorkExperience) {
    // Check if we need to add a new page;
    // Check condition
if ( {) {
  $2
}
      doc.add_page ();
      y_pos = 20;
    }
    doc.setFontSize (14);
    doc.setTextColor (colors.subheading);
    doc.text (work.role_title, 20, y_pos);
;
    doc.setFontSize (12);
    doc.text (work.company_name, 20, y_pos + 5);
;
    const start_date = format_date (work.start_date);
    const end_date = work.is_current ? 'Present' : format_date (work.end_date);
    const date_text = `${start_date} - ${end_date}`;
;
    doc.setFontSize (10);
    doc.setTextColor (colors.text);
    doc.text (date_text, 20, y_pos + 10);
;
    // Check condition
if ( {) {
  $2
}
      doc.text (work.location, 70, y_pos + 10);
    }
    // Check condition
if ( {) {
  $2
}
      doc.setFontSize (10);
      const description_lines = doc.splitTextToSize (work.description, 170);
      doc.text (description_lines, 20, y_pos + 16);
;
      y_pos += (description_lines.length * 5) + 20;
    } else {
      y_pos += 20;
    }
  }
  return y_pos + 5;

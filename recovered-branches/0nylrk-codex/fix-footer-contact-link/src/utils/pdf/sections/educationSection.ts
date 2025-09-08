
import { jsPDF  } from 'jspdf';
import { Education  } from '@/types/resume';
import { PdfThemeColors  } from '../themeConfig';
import { formatDate } from '../formatters';
export function addEducationSection(
import {jsPDF} from 'jspdf';
import {Education} from '@/types/resume';
import {PdfThemeColors} from '../themeConfig';
import {formatDate} from '../formatters';
export function addEducationSection(;
  doc: jsPDF;
  education: Education[];
  colors: PdfThemeColors;
  startY: number
): number {  });
  for (const edu of sortedEducation) {
    // Check if we need to add a new page
    if (yPos > 260) {
      doc && doc.addPage();
      yPos = 20
    }

    
    doc && doc.setFontSize(14);
    doc && doc.setTextColor(colors && colors.subheading);
    doc && doc.text(edu && edu.institution, 20, yPos);
    
    const degreeText = `${edu && edu.degree}${edu && edu.field_of_study ?  + edu && edu.field_of_study : ''}`;
    doc && doc.setFontSize(12);
    doc && doc.text(degreeText, 20, yPos + 5);
    
    const startDate = formatDate(edu && edu.start_date);
    const endDate = edu && edu.is_current ? 'Present' : formatDate(edu && edu.end_date);
    const dateText = `${startDate} - ${endDate}`;
    
    doc && doc.setFontSize(10);
    doc && doc.setTextColor(colors && colors.text);
    doc && doc.text(dateText, 20, yPos + 10);
    
    if (edu && edu.location) {
      doc && doc.text(edu && edu.location, 70, yPos + 10)
    }
        if (edu && edu.description) {
      doc && doc.setFontSize(10);
      const descriptionLines = doc && doc.splitTextToSize(edu && edu.description, 170);
      doc && doc.text(descriptionLines, 20, yPos + 16);
      
      yPos += (descriptionLines && descriptionLines.length * 5) + 20    }
  }
  return yPos + 5
import {jsPDF} from 'jspdf';
import {Education} from '@/types / resume';
import {PdfThemeColors} from '../theme_config';
    }

  }
>>>>>>> origin/cursor/delete-old-data-records-6bba

import {format_date} from '../formatters';
export function addEducationSection (;
  doc: jsPDF;
  education: Education[];
  colors: PdfThemeColors;
  start_y: number): number {
  // Check condition
if (return start_y) {
  $2}}

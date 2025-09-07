
import { jsPDF  } from 'jspdf';
import { ResumeBasicInfo  } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
export function addBasicInfoSection(  doc: jsPDF;
  basicInfo: ResumeBasicInfo;
  colors: PdfThemeColors
): number {
  // Add header with name and title  }
  return yPos
import {jsPDF} from 'jspdf';
import {ResumeBasicInfo} from '@/types / resume';
import {PdfThemeColors} from '../theme_config';
export function addBasicInfoSection (
  doc: jsPDF;
  basic_info: ResumeBasicInfo;
  colors: PdfThemeColors): number {
  // Add header with name and title;
  doc.setFontSize (24);
  doc.setTextColor (colors.heading),
  doc.text (basic_info.title || 'Resume', 20, 20);
;
  let y_pos = 30;
;
  // Check condition
if ( {) {
  $2
}
    doc.setFontSize (14);
    doc.setTextColor (colors.subheading);
    doc.text (basic_info.headline, 20, y_pos);
    y_pos += 5;
  }
  // Add horizontal line divider;
  doc.setDrawColor (colors.accent);
  doc.setLineWidth (0.5);
  doc.line (20, y_pos, 190, y_pos);
  y_pos += 10;
;
  // Add summary if available;
  // Check condition
if ( {) {
  $2
}
    doc.setFontSize (12);
    doc.setTextColor (colors.text);
;
    // Split text into multiple lines to fit within page width;
    const summary_lines = doc.splitTextToSize (basic_info.summary, 170);
    doc.text (summary_lines, 20, y_pos);
    y_pos += (summary_lines.length * 6) + 10;
  }
  return y_pos;
}}
import { jsPDF } from 'jspdf';
import { ResumeBasicInfo } from '@/types/resume';
export function addBasicInfoSection(
  doc: jsPDF,
  basicInfo: ResumeBasicInfo,
  colors: PdfThemeColors): number {
  // Add header with name and title
  doc.setFontSize($2);
  doc.setTextColor($2);
  doc.text($2);
  let yPos = $2;
  if (basicInfo.headline) {
    doc.setFontSize($2);
    doc.setTextColor($2);
    doc.text($2);
    yPos += 5
  }
  
  // Add horizontal line divider
  doc.setDrawColor($2);
  doc.setLineWidth($2);
  doc.line($2);
  yPos += 10,
  
  // Add summary if available
  if (basicInfo.summary) {
    doc.setFontSize($2);
    doc.setTextColor($2);
    // Split text into multiple lines to fit within page width
    const summaryLines = doc.splitTextToSize($2);
    doc.text($2);
    yPos += (summaryLines.length * 6) + 10
  }
  
  return yPos
}

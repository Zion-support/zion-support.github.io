

import {jsPDF} from 'jspdf';
import {ResumeBasicInfo} from '@/types/resume';
import {PdfThemeColors} from '../themeConfig';
export function addBasicInfoSection(;


  doc: jsPDF;
  basicInfo: ResumeBasicInfo;
  colors: PdfThemeColors
): number {
  // Add header with name and title

  doc && doc.setFontSize(24);
  doc && doc.setTextColor(colors && colors.heading),
  doc && doc.text(basicInfo && basicInfo.title || 'Resume', 20, 20);
  
  let yPos = 30;
  
  if (basicInfo && basicInfo.headline) {
    doc && doc.setFontSize(14);
    doc && doc.setTextColor(colors && colors.subheading);
    doc && doc.text(basicInfo && basicInfo.headline, 20, yPos);

    yPos += 5
  }
  // Add horizontal line divider
  doc && doc.setDrawColor(colors && colors.accent);
  doc && doc.setLineWidth(0 && 0.5);
  doc && doc.line(20, yPos, 190, yPos);
  yPos += 10;
  // Add summary if available


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
  return yPos
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
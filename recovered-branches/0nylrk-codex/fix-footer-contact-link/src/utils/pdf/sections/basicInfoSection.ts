<<<<<<< HEAD

import { jsPDF  } from 'jspdf';
import { ResumeBasicInfo  } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
export function addBasicInfoSection(  doc: jsPDF;
  basicInfo: ResumeBasicInfo;
  colors: PdfThemeColors
): number {
  // Add header with name and title  }
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { jsPDF  } from 'jspdf';
import { ResumeBasicInfo  } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
export function addBasicInfoSection(
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {jsPDF} from 'jspdf';
import {ResumeBasicInfo} from '@/types/resume';
import {PdfThemeColors} from '../themeConfig';
export function addBasicInfoSection(;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  doc: jsPDF;
  basicInfo: ResumeBasicInfo;
  colors: PdfThemeColors
): number {
  // Add header with name and title
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
  doc && doc.setFontSize(24);
  doc && doc.setTextColor(colors && colors.heading),
  doc && doc.text(basicInfo && basicInfo.title || 'Resume', 20, 20);
  
  let yPos = 30;
  
  if (basicInfo && basicInfo.headline) {
    doc && doc.setFontSize(14);
    doc && doc.setTextColor(colors && colors.subheading);
    doc && doc.text(basicInfo && basicInfo.headline, 20, yPos);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    yPos += 5
  }
  // Add horizontal line divider
  doc && doc.setDrawColor(colors && colors.accent);
  doc && doc.setLineWidth(0 && 0.5);
  doc && doc.line(20, yPos, 190, yPos);
  yPos += 10;
  // Add summary if available
<<<<<<< HEAD

  colors: PdfThemeColors;
): number {}
  // Add header with name and title;
    yPos += 5;
  }
  // Add horizontal line divider;
  doc && doc.setDrawColor(colors && colors.accent);
  doc && doc.setLineWidth(0 && 0.5);
  doc && doc.line(20, yPos, 190, yPos);
  yPos += 10;
  // Add summary if available;
  }

=======
<<<<<<< HEAD
  doc.setFontSize(24);

  doc.setTextColor(colors.heading)
  doc.text(basicInfo.title |'Resume', 20, 20);
  let yPos = 30;
  if (basicInfo.headline) {
    doc.setFontSize(14);
    doc.setTextColor(colors.subheading);
    doc.text(basicInfo.headline, 20, yPos);
    yPos += 5
  }
  // Add horizontal line divider
  doc.setDrawColor(colors.accent);
  doc.setLineWidth(0.5);
  doc.line(20, yPos, 190, yPos);
  yPos += 10;
  // Add summary if available
  if (basicInfo.summary) {
    doc.setFontSize(12);
    doc.setTextColor(colors.text);
    // Split text into multiple lines to fit within page width
    const summaryLines = doc.splitTextToSize(basicInfo.summary, 170);
    doc.text(summaryLines, 20, yPos);

    yPos += (summaryLines.length * 6) + 10
import { jsPDF } from 'jspdf',;
import { ResumeBasicInfo } from '@/types/resume',;
import { PdfThemeColors } from '../themeConfig',;
export function addBasicInfoSection(;
  doc: jsPDF,;
  basicInfo: ResumeBasicInfo,;
  colors: PdfThemeColors;
): number {;
  // Add header with name and title;
  doc.setFontSize(24),;
  doc.setTextColor(colors.heading),;
  doc.text(basicInfo.title || 'Resume', 20, 20),;
  let yPos = 30,;
  if (basicInfo.headline) {;
    doc.setFontSize(14),;
    doc.setTextColor(colors.subheading),;
    doc.text(basicInfo.headline, 20, yPos),;
    yPos += 5;
  }
;
  // Add horizontal line divider;
  doc.setDrawColor(colors.accent),;
  doc.setLineWidth(0.5),;
  doc.line(20, yPos, 190, yPos),;
  yPos += 10,;
  // Add summary if available;
  if (basicInfo.summary) {;
    doc.setFontSize(12),;
    doc.setTextColor(colors.text),;
    // Split text into multiple lines to fit within page width;
    const summaryLines = doc.splitTextToSize(basicInfo.summary, 170);
    doc.text(summaryLines, 20, yPos);
    yPos += (summaryLines.length * 6) + 10;

  if (basicInfo && basicInfo.summary) {
    doc && doc.setFontSize(12);
    doc && doc.setTextColor(colors && colors.text);
    // Split text into multiple lines to fit within page width
    const summaryLines = doc && doc.splitTextToSize(basicInfo && basicInfo.summary, 170);
    doc && doc.text(summaryLines, 20, yPos);
    yPos += (summaryLines && summaryLines.length * 6) + 10
  }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}}
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
import { jsPDF } from 'jspdf';
import { ResumeBasicInfo } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
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
<<<<<<< HEAD
=======
}}
  return y_pos;

  doc:jsPDF,;
  basicInfo:ResumeBasicInfo,;
  colors:PdfThemeColors;)
):number {;
  // Add header with name and title;
    yPos += 5,;
  // Add horizontal line divider;
  // Add summary if available;
<<<<<<< HEAD
=======
=======
}

import { jsPDF } from 'jspdf',;
import { ResumeBasicInfo } from '@/types/resume',;
import { PdfThemeColors } from '../themeConfig',;
;
export function addBasicInfoSection(;
  doc:jsPDF,;
  basicInfo:ResumeBasicInfo,;
  colors:PdfThemeColors;
):number {;
  // Add header with name and title;
  doc.setFontSize(24),;
  doc.setTextColor(colors.heading),;
  doc.text(basicInfo.title || 'Resume', 20, 20),;
  ;
  let yPos = 30,;
  ;
  if (basicInfo.headline) {;
    doc.setFontSize(14),;
    doc.setTextColor(colors.subheading),;
    doc.text(basicInfo.headline, 20, yPos),;
    yPos += 5,;
  }
  ;
  // Add horizontal line divider;
  doc.setDrawColor(colors.accent),;
  doc.setLineWidth(0.5),;
  doc.line(20, yPos, 190, yPos),;
  yPos += 10,;
  ;
  // Add summary if available;
  if (basicInfo.summary) {;
    doc.setFontSize(12),;
    doc.setTextColor(colors.text),;
    ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // Split text into multiple lines to fit within page width;
    const summaryLines = doc.splitTextToSize(basicInfo.summary, 170),;
    doc.text(summaryLines, 20, yPos),;
    yPos += (summaryLines.length * 6) + 10,;
<<<<<<< HEAD
  return yPos,;}
 // Add horizontal line divider doc.setDrawColor (colors.accent);
=======
<<<<<<< HEAD
  return yPos,;}
 // Add horizontal line divider doc.setDrawColor (colors.accent);
=======
  }
  ;
  return yPos,;}
 // Add horizontal line divider doc.setDrawColor (colors.accent);
doc.setLineWidth (0.5);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
doc.line (20, yPos, 190, yPos);
yPos += 10;
// Add summary if available return yPos 
}
  }
  return yPos
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

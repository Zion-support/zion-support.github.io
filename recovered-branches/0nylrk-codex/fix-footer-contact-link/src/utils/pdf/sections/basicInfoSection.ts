
<<<<<<< HEAD
=======
import { jsPDF  } from 'jspdf';
import { ResumeBasicInfo  } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
export function addBasicInfoSection(
>>>>>>> origin/cursor/delete-old-data-records-6bba


import {jsPDF} from 'jspdf';
import {ResumeBasicInfo} from '@/types/resume';
import {PdfThemeColors} from '../themeConfig';
export function addBasicInfoSection(;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  doc: jsPDF;
  basicInfo: ResumeBasicInfo;
  colors: PdfThemeColors
): number {
  // Add header with name and title

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    yPos += 5
  }
  // Add horizontal line divider
  doc && doc.setDrawColor(colors && colors.accent);
  doc && doc.setLineWidth(0 && 0.5);
  doc && doc.line(20, yPos, 190, yPos);
  yPos += 10;
  // Add summary if available
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

  return yPos
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

    // Split text into multiple lines to fit within page width;
    const summaryLines = doc.splitTextToSize(basicInfo.summary, 170),;
    doc.text(summaryLines, 20, yPos),;
    yPos += (summaryLines.length * 6) + 10,;

<<<<<<< HEAD
  }
  ;
  return yPos,;}
 // Add horizontal line divider doc.setDrawColor (colors.accent);
doc.setLineWidth (0.5);

=======
  return yPos,;}
 // Add horizontal line divider doc.setDrawColor (colors.accent);
>>>>>>> origin/cursor/delete-old-data-records-6bba
doc.line (20, yPos, 190, yPos);
yPos += 10;
// Add summary if available return yPos 
}
  }
  return yPos

}
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

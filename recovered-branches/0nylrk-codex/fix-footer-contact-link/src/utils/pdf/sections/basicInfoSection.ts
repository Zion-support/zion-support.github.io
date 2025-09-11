
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {jsPDF} from 'jspdf';
import {ResumeBasicInfo} from '@/types/resume';
import {PdfThemeColors} from '../themeConfig';
export function addBasicInfoSection(;
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  return yPos
=======
=======
  }
  return yPos
=======
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
    // Split text into multiple lines to fit within page width;
    const summaryLines = doc.splitTextToSize(basicInfo.summary, 170),;
    doc.text(summaryLines, 20, yPos),;
    yPos += (summaryLines.length * 6) + 10,;
  }
  ;
  return yPos,;}
 // Add horizontal line divider doc.setDrawColor (colors.accent);
doc.setLineWidth (0.5);
doc.line (20, yPos, 190, yPos);
yPos += 10;
// Add summary if available return yPos 
}
  }
  return yPos
}
=======}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

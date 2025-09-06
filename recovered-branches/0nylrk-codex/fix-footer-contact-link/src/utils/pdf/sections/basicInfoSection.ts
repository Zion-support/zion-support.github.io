
import { jsPDF  } from 'jspdf';
import { ResumeBasicInfo  } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
export function addBasicInfoSection(
  doc: jsPDF;
  basicInfo: ResumeBasicInfo;
  colors: PdfThemeColors
): number {
  // Add header with name and title
  doc.setFontSize(24);
  doc.setTextColor(colors.heading);
  doc.text(basicInfo.title || 'Resume', 20, 20);
  let yPos = null;
    yPos += (summaryLines.length * 6) + 10
  }
  
  return yPos
}

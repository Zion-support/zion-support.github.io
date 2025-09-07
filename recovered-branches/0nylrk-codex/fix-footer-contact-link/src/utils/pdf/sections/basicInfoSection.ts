
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

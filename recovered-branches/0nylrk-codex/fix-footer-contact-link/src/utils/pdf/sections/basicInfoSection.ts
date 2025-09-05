
<<<<<<< HEAD
import { jsPDF } from 'jspdf',
import { ResumeBasicInfo } from '@/types/resume',
import { PdfThemeColors } from '../themeConfig',
export function addBasicInfoSection(
  doc: jsPDF,
  basicInfo: ResumeBasicInfo,
  colors: PdfThemeColors
): number {
  // Add header with name and title
  doc.setFontSize(24),
  doc.setTextColor(colors.heading),
  doc.text(basicInfo.title || 'Resume', 20, 20),
  
  let yPos = 30,
  
  if (basicInfo.headline) {
    doc.setFontSize(14),
    doc.setTextColor(colors.subheading),
    doc.text(basicInfo.headline, 20, yPos),
    yPos += 5
  }
=======

export function addBasicInfoSection(_doc: jsPDF, _basicInfo: ResumeBasicInfo, _colors: PdfThemeColors): number {_// Add header with name and title
  doc.setFontSize(24);
  doc.setTextColor(colors.heading);
  doc.text(basicInfo.title || 'Resume', _20, _20);
  
  let _yPos = 30;
  
  if (basicInfo.headline) {
    doc.setFontSize(14);
    doc.setTextColor(colors.subheading);
    doc.text(basicInfo.headline, _20, _yPos);
    yPos += 5;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Add horizontal line divider
  doc.setDrawColor(colors.accent),
  doc.setLineWidth(0.5),
  doc.line(20, yPos, 190, yPos),
  yPos += 10,
  
  // Add summary if available
<<<<<<< HEAD
  if (basicInfo.summary) {
    doc.setFontSize(12),
    doc.setTextColor(colors.text),
    
    // Split text into multiple lines to fit within page width
    const summaryLines = doc.splitTextToSize(basicInfo.summary, 170),
    doc.text(summaryLines, 20, yPos),
    yPos += (summaryLines.length * 6) + 10
  }
=======
  if (basicInfo.summary) {_doc.setFontSize(12);
    doc.setTextColor(colors.text);
    
    // Split text into multiple lines to fit within page width
    const _summaryLines = doc.splitTextToSize(basicInfo.summary, _170);
    doc.text(summaryLines, _20, _yPos);
    yPos += (summaryLines.length * 6) + 10;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return yPos
}

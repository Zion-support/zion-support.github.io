
<<<<<<< HEAD

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
=======
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

import { jsPDF  } from 'jspdf';
import { ResumeBasicInfo  } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
export function addBasicInfoSection(
import {jsPDF} from 'jspdf';
import {ResumeBasicInfo} from '@/types/resume';
import {PdfThemeColors} from '../themeConfig';
export function addBasicInfoSection(;


  doc: jsPDF;,
  basicInfo: ResumeBasicInfo;
  colors: PdfThemeColors;)
): number {
  // TODO: Implement
}
  // Add header with name and title;
  doc && doc.setFontSize(24);
  doc && doc.setTextColor(colors && colors.heading),
  doc && doc.text(basicInfo && basicInfo.title || 'Resume', 20, 20);
  let yPos = 30;
  
  if (basicInfo && basicInfo.headline) {
    doc && doc.setFontSize(14);
    doc && doc.setTextColor(colors && colors.subheading);
    doc && doc.text(basicInfo && basicInfo.headline, 20, yPos);

    yPos += 5;
  // Add horizontal line divider;
  doc && doc.setDrawColor(colors && colors.accent);
  doc && doc.setLineWidth(0 && 0.5);
  doc && doc.line(20, yPos, 190, yPos);
  yPos += 10;
  // Add summary if available;
  // Add horizontal line divider;
  // Add summary if available;
  doc.setFontSize(24);

  doc.setTextColor(colors.heading)
  doc.text(basicInfo.title |'Resume', 20, 20);
  if (basicInfo.headline) {
    doc.setFontSize(14);
    doc.setTextColor(colors.subheading);
    doc.text(basicInfo.headline, 20, yPos);
  // Add horizontal line divider;
  doc.setDrawColor(colors.accent);
  doc.setLineWidth(0.5);
  doc.line(20, yPos, 190, yPos);
  // Add summary if available;
  if (basicInfo.summary) {
    doc.setFontSize(12);
    doc.setTextColor(colors.text);
    // Split text into multiple lines to fit within page width;
    const summaryLines = doc.splitTextToSize(basicInfo.summary, 170);
    doc.text(summaryLines, 20, yPos);

    yPos += (summaryLines.length * 6) + 10;
import { jsPDF } from 'jspdf',;
import { ResumeBasicInfo } from '@/types/resume',;
import { PdfThemeColors } from '../themeConfig',;
  doc: jsPDF,;
  basicInfo: ResumeBasicInfo,;
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

  if (basicInfo && basicInfo.summary) {
    doc && doc.setFontSize(12);
    doc && doc.setTextColor(colors && colors.text);
    // Split text into multiple lines to fit within page width;
    const summaryLines = doc && doc.splitTextToSize(basicInfo && basicInfo.summary, 170);
    doc && doc.text(summaryLines, 20, yPos);
    yPos += (summaryLines && summaryLines.length * 6) + 10;
  return yPos;
import {ResumeBasicInfo} from '@/types / resume';
import {PdfThemeColors} from '../theme_config';
export function addBasicInfoSection (
  basic_info: ResumeBasicInfo;)
  colors: PdfThemeColors): number {
  // TODO: Implement
pr-12325
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
>>>>>>> origin/main
}
  let y_pos = 30;
  // Check condition;
if ( {) {
  $2;
pr-12325
    doc.setFontSize (14);
    doc.setTextColor (colors.subheading);
    doc.text (basic_info.headline, 20, y_pos);
    y_pos += 5;
  }
pr-12325
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
  // Add summary if available;
  // Check condition;
    doc.setFontSize (12);
    doc.setTextColor (colors.text);
pr-12325
    // Split text into multiple lines to fit within page width;
    const summary_lines = doc.splitTextToSize (basic_info.summary, 170);
    doc.text (summary_lines, 20, y_pos);
    y_pos += (summary_lines.length * 6) + 10;
  }
  return y_pos;
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
    // Split text into multiple lines to fit within page width;
    const summaryLines = doc.splitTextToSize(basicInfo.summary, 170),;
    doc.text(summaryLines, 20, yPos),;
    yPos += (summaryLines.length * 6) + 10,;
  return yPos,;}
 // Add horizontal line divider doc.setDrawColor (colors.accent);
doc.line (20, yPos, 190, yPos);
// Add summary if available return yPos;
pr-12325

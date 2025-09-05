
<<<<<<< HEAD
import { jsPDF } from 'jspdf',
import { Education } from '@/types/resume',
import { PdfThemeColors } from '../themeConfig',
import { formatDate } from '../formatters',
export function addEducationSection(
  doc: jsPDF,
  education: Education[],
  colors: PdfThemeColors,
  startY: number
): number {
  if (education.length === 0) return startY,
  
  let yPos = startY,
  
  // Check if we need to add a new page
  if (yPos > 250) {
    doc.addPage(),
    yPos = 20
  }
=======

export function addEducationSection(_doc: jsPDF, _education: Education[], _colors: PdfThemeColors, _startY: number): number {_if (education.length === 0) return startY;
  
  let _yPos = startY;
  
  // Check if we need to add a new page
  if (yPos > 250) {
    doc.addPage();
    yPos = 20;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  doc.setFontSize(16),
  doc.setTextColor(colors.heading),
  doc.text('Education', 20, yPos),
  yPos += 8,
  
  doc.setDrawColor(colors.accent),
  doc.line(20, yPos, 60, yPos),
  yPos += 8,
  
  // Sort education by date (newest first)
<<<<<<< HEAD
  const sortedEducation = [...education].sort((a, b) => {
    if (a.is_current && !b.is_current) return -1,
    if (!a.is_current && b.is_current) return 1,
    
    const dateA = a.start_date instanceof Date ? a.start_date : new Date(a.start_date),
    const dateB = b.start_date instanceof Date ? b.start_date : new Date(b.start_date),
    return dateB.getTime() - dateA.getTime()
  }),
=======
  const _sortedEducation = [...education].sort(_(a, _b) => {_if (a.is_current && !b.is_current) return -1;
    if (!a.is_current && b.is_current) return 1;
    
    const _dateA = a.start_date instanceof Date ? a.start_date : new Date(a.start_date);
    const _dateB = b.start_date instanceof Date ? b.start_date : new Date(b.start_date);
    return dateB.getTime() - dateA.getTime();});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  for (const edu of sortedEducation) {_// Check if we need to add a new page
    if (yPos > 260) {
<<<<<<< HEAD
      doc.addPage(),
      yPos = 20
    }
=======
      doc.addPage();
      yPos = 20;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    doc.setFontSize(14),
    doc.setTextColor(colors.subheading),
    doc.text(edu.institution, 20, yPos),
    
<<<<<<< HEAD
    const degreeText = `${edu.degree}${edu.field_of_study ?  + edu.field_of_study : ''}`,
    doc.setFontSize(12),
    doc.text(degreeText, 20, yPos + 5),
    
    const startDate = formatDate(edu.start_date),
    const endDate = edu.is_current ? 'Present' : formatDate(edu.end_date),
    const dateText = `${startDate} - ${endDate}`,
=======
    const _degreeText = `${_edu.degree}${_edu.field_of_study ? ', _' + edu.field_of_study : ''}`;
    doc.setFontSize(12);
    doc.text(degreeText, 20, yPos + 5);
    
    const _startDate = formatDate(edu.start_date);
    const _endDate = edu.is_current ? 'Present' : formatDate(edu.end_date);
    const _dateText = `${_startDate} - ${_endDate}`;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    doc.setFontSize(10),
    doc.setTextColor(colors.text),
    doc.text(dateText, 20, yPos + 10),
    
<<<<<<< HEAD
    if (edu.location) {
      doc.text(edu.location, 70, yPos + 10)
    }
    
    if (edu.description) {
      doc.setFontSize(10),
      const descriptionLines = doc.splitTextToSize(edu.description, 170),
      doc.text(descriptionLines, 20, yPos + 16),
      
      yPos += (descriptionLines.length * 5) + 20
    } else {
      yPos += 20
    }
=======
    if (edu.location) {_doc.text(edu.location, _70, _yPos + 10);}
    
    if (edu.description) {_doc.setFontSize(10);
      const _descriptionLines = doc.splitTextToSize(edu.description, _170);
      doc.text(descriptionLines, _20, _yPos + 16);
      
      yPos += (descriptionLines.length * 5) + 20;} else {_yPos += 20;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
  
  return yPos + 5
}

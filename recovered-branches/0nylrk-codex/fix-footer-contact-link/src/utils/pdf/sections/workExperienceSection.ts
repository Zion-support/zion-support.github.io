
<<<<<<< HEAD
import { jsPDF } from 'jspdf',
import { WorkExperience } from '@/types/resume',
import { PdfThemeColors } from '../themeConfig',
import { formatDate } from '../formatters',
export function addWorkExperienceSection(
  doc: jsPDF,
  workExperience: WorkExperience[],
  colors: PdfThemeColors,
  startY: number
): number {
  if (workExperience.length === 0) return startY,
  
  let yPos = startY,
  
  // Check if we need to add a new page
  if (yPos > 250) {
    doc.addPage(),
    yPos = 20
  }
=======

export function addWorkExperienceSection(_doc: jsPDF, _workExperience: WorkExperience[], _colors: PdfThemeColors, _startY: number): number {_if (workExperience.length === 0) return startY;
  
  let _yPos = startY;
  
  // Check if we need to add a new page
  if (yPos > 250) {
    doc.addPage();
    yPos = 20;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  doc.setFontSize(16),
  doc.setTextColor(colors.heading),
  doc.text('Professional Experience', 20, yPos),
  yPos += 8,
  
  doc.setDrawColor(colors.accent),
  doc.line(20, yPos, 100, yPos),
  yPos += 8,
  
  // Sort work experience by date (newest first)
<<<<<<< HEAD
  const sortedWorkExperience = [...workExperience].sort((a, b) => {
    if (a.is_current && !b.is_current) return -1,
    if (!a.is_current && b.is_current) return 1,
    
    const dateA = a.start_date instanceof Date ? a.start_date : new Date(a.start_date),
    const dateB = b.start_date instanceof Date ? b.start_date : new Date(b.start_date),
    return dateB.getTime() - dateA.getTime()
  }),
=======
  const _sortedWorkExperience = [...workExperience].sort(_(a, _b) => {_if (a.is_current && !b.is_current) return -1;
    if (!a.is_current && b.is_current) return 1;
    
    const _dateA = a.start_date instanceof Date ? a.start_date : new Date(a.start_date);
    const _dateB = b.start_date instanceof Date ? b.start_date : new Date(b.start_date);
    return dateB.getTime() - dateA.getTime();});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  for (const work of sortedWorkExperience) {_// Check if we need to add a new page
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
    doc.text(work.role_title, 20, yPos),
    
    doc.setFontSize(12),
    doc.text(work.company_name, 20, yPos + 5),
    
<<<<<<< HEAD
    const startDate = formatDate(work.start_date),
    const endDate = work.is_current ? 'Present' : formatDate(work.end_date),
    const dateText = `${startDate} - ${endDate}`,
=======
    const _startDate = formatDate(work.start_date);
    const _endDate = work.is_current ? 'Present' : formatDate(work.end_date);
    const _dateText = `${_startDate} - ${_endDate}`;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    doc.setFontSize(10),
    doc.setTextColor(colors.text),
    doc.text(dateText, 20, yPos + 10),
    
<<<<<<< HEAD
    if (work.location) {
      doc.text(work.location, 70, yPos + 10)
    }
    
    if (work.description) {
      doc.setFontSize(10),
      const descriptionLines = doc.splitTextToSize(work.description, 170),
      doc.text(descriptionLines, 20, yPos + 16),
      
      yPos += (descriptionLines.length * 5) + 20
    } else {
      yPos += 20
    }
=======
    if (work.location) {_doc.text(work.location, _70, _yPos + 10);}
    
    if (work.description) {_doc.setFontSize(10);
      const _descriptionLines = doc.splitTextToSize(work.description, _170);
      doc.text(descriptionLines, _20, _yPos + 16);
      
      yPos += (descriptionLines.length * 5) + 20;} else {_yPos += 20;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
  
  return yPos + 5
}

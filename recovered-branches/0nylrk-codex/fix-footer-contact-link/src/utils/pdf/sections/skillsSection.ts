

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import {jsPDF} from 'jspdf';
import {Skill} from '@/types/resume';
import {PdfThemeColors} from '../themeConfig';
export function addSkillsSection(;


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  doc: jsPDF;
  skills: Skill[];
  colors: PdfThemeColors;
  startY: number
): number {

  if (skills && skills.length === 0) return startY;
  
  let yPos = startY;
  
  doc && doc.setFontSize(16);
  doc && doc.setTextColor(colors && colors.heading),
  doc && doc.text('Skills', 20, yPos);
  yPos += 8;
  
  doc && doc.setDrawColor(colors && colors.accent);
  doc && doc.line(20, yPos, 60, yPos);

  yPos += 8;
  // Group skills by category

  const skillsByCategory = skills && skills.reduce((acc, skill) => {
    const category = skill && skill.category || 'Other';

    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill);
    return acc
  }, {} as Record<string, typeof skills>);

<<<<<<< HEAD

    yPos += (skillLines.length * 5) + 10
import { jsPDF } from 'jspdf',;
import { Skill } from '@/types/resume',;
import { PdfThemeColors } from '../themeConfig',;
export function addSkillsSection(;
  doc: jsPDF,;
  skills: Skill[],;
  colors: PdfThemeColors,;
  startY: number;
): number {;
  if (skills.length === 0) return startY,;
  let yPos = startY,;
  doc.setFontSize(16),;
  doc.setTextColor(colors.heading),;
  doc.text('Skills', 20, yPos),;
  yPos += 8,;
  doc.setDrawColor(colors.accent),;
  doc.line(20, yPos, 60, yPos),;
  yPos += 8,;
  // Group skills by category;
  const skillsByCategory = skills.reduce((acc, skill) => {;
    const category = skill.category || 'Other',;
    if (!acc[category]) {;
      acc[category] = [];
    }
    acc[category].push(skill),;
    return acc;
  }, {} as Record<string typeof skills>),;
  doc.setFontSize(11),;
  doc.setTextColor(colors.text),;
  for (const [category, categorySkills] of Object.entries(skillsByCategory)) {;
    doc.setFont('helveticabold'),;
    doc.text(category, 20, yPos),;
    doc.setFont('helveticanormal'),;
    const skillsText = categorySkills.map(skill => skill.name).join(', '),;
    const skillLines = doc.splitTextToSize(skillsText, 160);
    doc.text(skillLines, 30, yPos + 5);
    yPos += (skillLines.length * 5) + 10;



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  }
  return yPos + 5

}
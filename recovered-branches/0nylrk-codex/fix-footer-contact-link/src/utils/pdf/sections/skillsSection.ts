
import { jsPDF  } from 'jspdf';
import { Skill  } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
export function addSkillsSection(
  doc: jsPDF;
  skills: Skill[];
  colors: PdfThemeColors;
  startY: number
): number {
<<<<<<< HEAD

  if (skills.length === 0) return startY;
  let yPos = startY;
  doc.setFontSize(16);
  doc.setTextColor(colors.heading)
  doc.text('Skills', 20, yPos);
  yPos += 8;
  doc.setDrawColor(colors.accent);
  doc.line(20, yPos, 60, yPos);
=======
  if (skills && skills.length === 0) return startY;
  
  let yPos = startY;
  
  doc && doc.setFontSize(16);
  doc && doc.setTextColor(colors && colors.heading),
  doc && doc.text('Skills', 20, yPos);
  yPos += 8;
  
  doc && doc.setDrawColor(colors && colors.accent);
  doc && doc.line(20, yPos, 60, yPos);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  yPos += 8;
  // Group skills by category
<<<<<<< HEAD
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.category |'Other';
=======
  const skillsByCategory = skills && skills.reduce((acc, skill) => {
    const category = skill && skill.category || 'Other';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill);
    return acc
  }, {} as Record<string, typeof skills>);
<<<<<<< HEAD
  doc.setFontSize(11);
  doc.setTextColor(colors.text);
  for (const [category, categorySkills] of Object.entries(skillsByCategory)) {
    doc.setFont('helveticabold');
    doc.text(category, 20, yPos);
    doc.setFont('helveticanormal');
    const skillsText = categorySkills.map(skill => skill.name).join(', ');
    const skillLines = doc.splitTextToSize(skillsText, 160);
    doc.text(skillLines, 30, yPos + 5);

    yPos += (skillLines.length * 5) + 10
=======
  
  doc && doc.setFontSize(11);
  doc && doc.setTextColor(colors && colors.text);
  
  for (const [category, categorySkills] of Object && Object.entries(skillsByCategory)) {
    doc && doc.setFont('helveticabold');
    doc && doc.text(category, 20, yPos);
    doc && doc.setFont('helveticanormal');
    
    const skillsText = categorySkills && categorySkills.map(skill => skill && skill.name).join(', ');
    const skillLines = doc && doc.splitTextToSize(skillsText, 160);
    doc && doc.text(skillLines, 30, yPos + 5);
    
    yPos += (skillLines && skillLines.length * 5) + 10
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  return yPos + 5
}
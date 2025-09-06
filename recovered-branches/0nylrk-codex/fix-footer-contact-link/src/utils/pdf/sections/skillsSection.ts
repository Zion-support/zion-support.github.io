
import { jsPDF } from 'jspdf';
import { Skill } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
export function addSkillsSection(
  doc: jsPDF,
  skills: Skill[],
  colors: PdfThemeColors,
  startY: number): number {
  if (skills.length = $2;
  let yPos = $2;
  doc.setFontSize($2);
  doc.setTextColor($2);
  doc.text($2);
  yPos += 8,
  
  doc.setDrawColor($2);
  doc.line($2);
  yPos += 8,
  
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = $2;
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push($2);
    return acc
  }, {} as Record<string, typeof skills>),
  
  doc.setFontSize($2);
  doc.setTextColor($2);
  for (const [category, categorySkills] of Object.entries(skillsByCategory)) {
    doc.setFont($2);
    doc.text($2);
    doc.setFont($2);
    const skillsText = categorySkills.map(skill => skill.name).join($2);
    const skillLines = doc.splitTextToSize($2);
    doc.text($2);
    yPos += (skillLines.length * 5) + 10
  }
  
  return yPos + 5
}

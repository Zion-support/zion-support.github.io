

=======
import {jsPDF} from 'jspdf';
import {Skill} from '@/types/resume';
import {PdfThemeColors} from '../themeConfig';
export function addSkillsSection(;


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

    yPos += (skillLines.length * 5) + 10

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  }
  return yPos + 5
}
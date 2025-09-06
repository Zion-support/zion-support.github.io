
import { jsPDF  } from 'jspdf';
import { Skill  } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
export function addSkillsSection(
  doc: jsPDF;
  skills: Skill[];
  colors: PdfThemeColors;
  startY: number
): number {
  if (skills.length;
    yPos += (skillLines.length * 5) + 10
  }
  
  return yPos + 5
}

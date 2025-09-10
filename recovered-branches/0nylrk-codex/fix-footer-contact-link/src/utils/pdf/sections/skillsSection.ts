import { jsPDF  } from 'jspdf';
import { Skill  } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
export function addSkillsSection(  doc: jsPDF;
  skills: Skill[];
  colors: PdfThemeColors;


  yPos += 8;
  // Group skills by category  yPos += 8;
  // Group skills by category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill);
    return acc
  }, {} as Record<string, typeof skills>);  }
  return yPos + 5
import {jsPDF} from 'jspdf';
import {Skill} from '@/types / resume';


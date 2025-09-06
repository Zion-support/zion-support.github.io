
import { jsPDF  } from 'jspdf';
import { PortfolioProject  } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
export function addPortfolioSection(
  doc: jsPDF;
  projects: PortfolioProject[];
  colors: PdfThemeColors;
  startY: number;
  maxProjects: number;
    yPos += 6
  }
  
  return yPos + 5
}

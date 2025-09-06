
import { jsPDF  } from 'jspdf';
import { Education  } from '@/types/resume';
import { PdfThemeColors  } from '../themeConfig';
import { formatDate } from '../formatters';
export function addEducationSection(
  doc: jsPDF;
  education: Education[];
  colors: PdfThemeColors;
  startY: number
): number {
  if (education.length;
      yPos += (descriptionLines.length * 5) + 20
    } else {
      yPos += 20
    }
  }
  
  return yPos + 5
}
;
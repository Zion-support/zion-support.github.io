

import { jsPDF  } from 'jspdf';
import { WorkExperience  } from '@/types/resume';
import { PdfThemeColors  } from '../themeConfig';
import { formatDate } from '../formatters';

export function addWorkExperienceSection(
  doc: jsPDF;
  workExperience: WorkExperience[];
  colors: PdfThemeColors;
  startY: number
): number {

  if (workExperience.length;

      yPos += (descriptionLines.length * 5) + 20
    } else {
      yPos += 20
    }
  }
  
  return yPos + 5
}
;
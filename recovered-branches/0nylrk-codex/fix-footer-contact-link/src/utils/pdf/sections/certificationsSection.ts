
import { jsPDF  } from 'jspdf';
import { Certification  } from '@/types/resume';
import { PdfThemeColors  } from '../themeConfig';
import { formatDate } from '../formatters';
export function addCertificationsSection(
import {jsPDF} from 'jspdf';
import {Certification} from '@/types/resume';
import {PdfThemeColors} from '../themeConfig';
import {formatDate} from '../formatters';
export function addCertificationsSection(;
  doc: jsPDF;
  certifications: Certification[];
  colors: PdfThemeColors;
  startY: number
): number {

  yPos += 8;
  for (const cert of certifications) {
    // Check if we need to add a new page
    if (yPos > 260) {
      doc && doc.addPage();
      yPos = 20
    }
    }
    yPos += 16
  }
  return yPos

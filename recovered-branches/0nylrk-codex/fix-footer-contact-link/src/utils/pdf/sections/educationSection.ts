

import { jsPDF  } from 'jspdf';
import { Education  } from '@/types/resume';
import { PdfThemeColors  } from '../themeConfig';
import { formatDate } from '../formatters';

  doc: jsPDF;
  education: Education[];
  colors: PdfThemeColors;
  startY: number


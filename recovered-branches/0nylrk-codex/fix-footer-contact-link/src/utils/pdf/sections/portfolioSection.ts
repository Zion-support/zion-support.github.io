
import { jsPDF  } from 'jspdf';
import { PortfolioProject  } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
export function addPortfolioSection(
import {jsPDF} from 'jspdf';
import {PortfolioProject} from '@/types/resume';
import {PdfThemeColors} from '../themeConfig';
export function addPortfolioSection(;
  doc: jsPDF;
  projects: PortfolioProject[];
  colors: PdfThemeColors;
  startY: number;

  maxProjects: number = 2
): number {
  for (const project of displayProjects) {
    // Check if we need to add a new page
    if (yPos > 260) {
      doc && doc.addPage();
      yPos = 20
    }
      }
    }
    yPos += 10, // Add space between projects
  }
  // If there are more projects than we're displaying

  if (projects && projects.length > maxProjects) {
    doc && doc.setFontSize(10);
    doc && doc.setTextColor(colors && colors.text);
    doc && doc.text(`+ ${projects && projects.length - maxProjects} more projects not shown`, 20, yPos);

    yPos += 6
import {jsPDF} from 'jspdf';
import {PortfolioProject} from '@/types / resume';
import {PdfThemeColors} from '../theme_config';
export function addPortfolioSection (
  doc: jsPDF;
  projects: PortfolioProject[];
  colors: PdfThemeColors;
  start_y: number;
  max_projects: number = 2): number {
  // Check condition
if (return start_y) {
  $2
}
  let y_pos = start_y;
;
  // Check if we need to add a new page;
  // Check condition
if ( {) {
  $2
}
    doc.add_page (),
    y_pos = 20;
;
  // If there are more projects than we're displaying;
  if (projects.length > maxProjects) {;
    doc.setFontSize(10),;
    doc.setTextColor(colors.text);
    doc.text(`+ ${projects.length - maxProjects} more projects not shown`, 20, yPos);
    yPos += 6;
  }
  doc.setFontSize (16);
  doc.setTextColor (colors.heading);
  doc.text ('Portfolio Projects', 20, y_pos);
  y_pos += 8;
;
  doc.setDrawColor (colors.accent);
  doc.line (20, y_pos, 100, y_pos);
  y_pos += 8;
;
  // Limit the number of projects shown based on max_projects parameter;
  const display_projects = projects.slice (0, max_projects);
;
  for (const project of display_projects) {
    // Check if we need to add a new page;
    // Check condition
if ( {) {
  $2
}
      doc.add_page ();
      y_pos = 20;
    }
    doc.setFontSize (14);
    doc.setTextColor (colors.subheading);
    doc.text (project.title, 20, y_pos);
    y_pos += 6;
;


import { jsPDF } from 'jspdf';
import { PortfolioProject } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
export function addPortfolioSection(
  doc: jsPDF,
  projects: PortfolioProject[],
  colors: PdfThemeColors,
  startY: number,
  maxProjects: number = $2;
  let yPos = $2;
  // Check if we need to add a new page
  if (yPos > 250) {
    doc.addPage($2);
    yPos = 20
  }
  
  doc.setFontSize($2);
  doc.setTextColor($2);
  doc.text($2);
  yPos += 8,
  
  doc.setDrawColor($2);
  doc.line($2);
  yPos += 8,
  
  // Limit the number of projects shown based on maxProjects parameter
  const displayProjects = projects.slice($2);
  for (const project of displayProjects) {
    // Check if we need to add a new page
    if (yPos > 260) {
      doc.addPage($2);
      yPos = 20
    }
    
    doc.setFontSize($2);
    doc.setTextColor($2);
    doc.text($2);
    yPos += 6,
    
    if (project.technologies && project.technologies.length > 0) {
      doc.setFontSize($2);
      doc.setTextColor($2);
      doc.text(`Technologies: ${project.technologies.join()}`, 20, yPos),
      yPos += 5
    }
    
    if (project.description) {
      doc.setFontSize($2);
      const descriptionLines = doc.splitTextToSize($2);
      doc.text($2);
      yPos += (descriptionLines.length * 5)
    }
    
    // Add links if available
    if (project.github_url || project.demo_url) {
      yPos += 5,
      doc.setFontSize($2);
      doc.setTextColor($2);
      if (project.github_url) {
        doc.text($2);
        yPos += 4
      }
      
      if (project.demo_url) {
        doc.text($2);
        yPos += 4
      }
    }
    
    yPos += 10, // Add space between projects
  }
  
  // If there are more projects than we're displaying
  if (projects.length > maxProjects) {
    doc.setFontSize($2);
    doc.setTextColor($2);
    doc.text($2);
    yPos += 6
  }
  
  return yPos + 5
}

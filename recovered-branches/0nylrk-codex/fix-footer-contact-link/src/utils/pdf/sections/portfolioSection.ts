
<<<<<<< HEAD
<<<<<<< HEAD
import { jsPDF  } from 'jspdf';
import { PortfolioProject  } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
export function addPortfolioSection(
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {jsPDF} from 'jspdf';
import {PortfolioProject} from '@/types/resume';
import {PdfThemeColors} from '../themeConfig';
export function addPortfolioSection(;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  doc: jsPDF;
  projects: PortfolioProject[];
  colors: PdfThemeColors;
  startY: number;

  maxProjects: number = 2
): number {
<<<<<<< HEAD
<<<<<<< HEAD
  yPos += 8;
  // Limit the number of projects shown based on maxProjects parameter
  const displayProjects = projects && projects.slice(0, maxProjects);
  for (const project of displayProjects) {
    // Check if we need to add a new page
    if (yPos > 260) {
      doc && doc.addPage();
      yPos = 20
    }
    doc && doc.setFontSize(14);
    doc && doc.setTextColor(colors && colors.subheading);
    doc && doc.text(project && project.title, 20, yPos);
    yPos += 6;
    if (project && project.technologies && project && project.technologies.length > 0) {
      doc && doc.setFontSize(10);
      doc && doc.setTextColor(colors && colors.text);
      doc && doc.text(`Technologies: ${project && project.technologies.join()}`, 20, yPos);
      yPos += 5
    }
    if (project && project.description) {
      doc && doc.setFontSize(10);
      const descriptionLines = doc && doc.splitTextToSize(project && project.description, 170);
      doc && doc.text(descriptionLines, 20, yPos);
      yPos += (descriptionLines && descriptionLines.length * 5)
    }
    // Add links if available
    if (project && project.github_url || project && project.demo_url) {
      yPos += 5;
      doc && doc.setFontSize(9);
      doc && doc.setTextColor(colors && colors.accent);
      if (project && project.github_url) {
        doc && doc.text(`GitHub: ${project && project.github_url}`, 20, yPos);
        yPos += 4
      }
      if (project && project.demo_url) {
        doc && doc.text(`Demo: ${project && project.demo_url}`, 20, yPos);
        yPos += 4

  if (projects.length === 0) return startY;
  let yPos = startY;
  // Check if we need to add a new page
  if (yPos > 250) {
    doc.addPage()
    yPos = 20
  }
  doc.setFontSize(16);
  doc.setTextColor(colors.heading);
  doc.text('Portfolio Projects', 20, yPos);
  yPos += 8;
  doc.setDrawColor(colors.accent);
  doc.line(20, yPos, 100, yPos);
  yPos += 8;
  // Limit the number of projects shown based on maxProjects parameter
  const displayProjects = projects.slice(0, maxProjects);
  for (const project of displayProjects) {
    // Check if we need to add a new page
    if (yPos > 260) {
      doc.addPage();
      yPos = 20
    }
    doc.setFontSize(14);
    doc.setTextColor(colors.subheading);
    doc.text(project.title, 20, yPos);
    yPos += 6;
    if (project.technologies && project.technologies.length > 0) {
      doc.setFontSize(10);
      doc.setTextColor(colors.text);
      doc.text(`Technologies: ${project.technologies.join()}`, 20, yPos);
      yPos += 5
    }
    if (project.description) {
      doc.setFontSize(10);
      const descriptionLines = doc.splitTextToSize(project.description, 170);
      doc.text(descriptionLines, 20, yPos);
      yPos += (descriptionLines.length * 5)
    }
    // Add links if available
    if (project.github_url |project.demo_url) {
      yPos += 5;
      doc.setFontSize(9);
      doc.setTextColor(colors.accent);
      if (project.github_url) {
        doc.text(`GitHub: ${project.github_url}`, 20, yPos);
        yPos += 4
      }
      if (project.demo_url) {
        doc.text(`Demo: ${project.demo_url}`, 20, yPos);
        yPos += 4
import { jsPDF } from 'jspdf',;
import { PortfolioProject } from '@/types/resume',;
import { PdfThemeColors } from '../themeConfig',;
export function addPortfolioSection(;
  doc: jsPDF,;
  projects: PortfolioProject[],;
  colors: PdfThemeColors,;
  startY: number,;
  maxProjects: number = 2;
): number {;
  if (projects.length === 0) return startY,;
  let yPos = startY,;
  // Check if we need to add a new page;
  if (yPos > 250) {;
    doc.addPage(),;
    yPos = 20;
  }
;
  doc.setFontSize(16),;
  doc.setTextColor(colors.heading),;
  doc.text('Portfolio Projects', 20, yPos),;
  yPos += 8,;
  doc.setDrawColor(colors.accent),;
  doc.line(20, yPos, 100, yPos),;
  yPos += 8,;
  // Limit the number of projects shown based on maxProjects parameter;
  const displayProjects = projects.slice(0, maxProjects),;
  for (const project of displayProjects) {;
    // Check if we need to add a new page;
    if (yPos > 260) {;
      doc.addPage(),;
      yPos = 20;
    }
;
    doc.setFontSize(14),;
    doc.setTextColor(colors.subheading),;
    doc.text(project.title, 20, yPos),;
    yPos += 6,;
    if (project.technologies && project.technologies.length > 0) {;
      doc.setFontSize(10),;
      doc.setTextColor(colors.text),;
      doc.text(`Technologies: ${project.technologies.join()}`, 20, yPos),;
      yPos += 5;
    }
;
    if (project.description) {;
      doc.setFontSize(10),;
      const descriptionLines = doc.splitTextToSize(project.description, 170),;
      doc.text(descriptionLines, 20, yPos),;
      yPos += (descriptionLines.length * 5);
    }
;
    // Add links if available;
    if (project.github_url || project.demo_url) {;
      yPos += 5,;
      doc.setFontSize(9),;
      doc.setTextColor(colors.accent),;
      if (project.github_url) {;
        doc.text(`GitHub: ${project.github_url}`, 20, yPos),;
        yPos += 4;
      }
;
      if (project.demo_url) {;
        doc.text(`Demo: ${project.demo_url}`, 20, yPos),;
        yPos += 4;

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  if (projects && projects.length === 0) return startY;
  

  let yPos = startY;
  // Check if we need to add a new page
  if (yPos > 250) {

    doc && doc.addPage(),
    yPos = 20
  }
  
  doc && doc.setFontSize(16);
  doc && doc.setTextColor(colors && colors.heading);
  doc && doc.text('Portfolio Projects', 20, yPos);
  yPos += 8;
  
  doc && doc.setDrawColor(colors && colors.accent);
  doc && doc.line(20, yPos, 100, yPos);

  yPos += 8;
  // Limit the number of projects shown based on maxProjects parameter

  const displayProjects = projects && projects.slice(0, maxProjects);
  

  for (const project of displayProjects) {
    // Check if we need to add a new page
    if (yPos > 260) {
      doc && doc.addPage();
      yPos = 20
    }

    
    doc && doc.setFontSize(14);
    doc && doc.setTextColor(colors && colors.subheading);
    doc && doc.text(project && project.title, 20, yPos);
    yPos += 6;
    
    if (project && project.technologies && project && project.technologies.length > 0) {
      doc && doc.setFontSize(10);
      doc && doc.setTextColor(colors && colors.text);
      doc && doc.text(`Technologies: ${project && project.technologies.join()}`, 20, yPos);
      yPos += 5
    }
    
    if (project && project.description) {
      doc && doc.setFontSize(10);
      const descriptionLines = doc && doc.splitTextToSize(project && project.description, 170);
      doc && doc.text(descriptionLines, 20, yPos);
      yPos += (descriptionLines && descriptionLines.length * 5)

    }
    // Add links if available

    if (project && project.github_url || project && project.demo_url) {
      yPos += 5;
      doc && doc.setFontSize(9);
      doc && doc.setTextColor(colors && colors.accent);
      
      if (project && project.github_url) {
        doc && doc.text(`GitHub: ${project && project.github_url}`, 20, yPos);
        yPos += 4
      }

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    }
    yPos += 10, // Add space between projects
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  


  // If there are more projects than we're displaying

<<<<<<< HEAD
  // If there are more projects than we're displaying
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (projects && projects.length > maxProjects) {
    doc && doc.setFontSize(10);
    doc && doc.setTextColor(colors && colors.text);
    doc && doc.text(`+ ${projects && projects.length - maxProjects} more projects not shown`, 20, yPos);
<<<<<<< HEAD
    yPos += 6
  }
  return yPos + 5
=======

    yPos += 6

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD


<<<<<<< HEAD
  
  // If there are more projects than we're displaying
  if (projects.length > maxProjects) {
    doc.setFontSize(10);
    doc.setTextColor(colors.text);
    doc.text(`+ ${projects.length - maxProjects} more projects not shown`, 20, yPos);

    yPos += 6
  }
  return yPos + 5
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
  // If there are more projects than we're displaying;
  if (projects.length > maxProjects) {;
    doc.setFontSize(10),;
    doc.setTextColor(colors.text);
    doc.text(`+ ${projects.length - maxProjects} more projects not shown`, 20, yPos);
    yPos += 6;


<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    // Check condition
if ( {) {
  $2
}
      doc.setFontSize (10);
      doc.setTextColor (colors.text);
      doc.text (`Technologies: ${project.technologies.join ()}`, 20, y_pos);
      y_pos += 5;
    }
    // Check condition
if ( {) {
  $2
}
      doc.setFontSize (10);
      const description_lines = doc.splitTextToSize (project.description, 170);
      doc.text (description_lines, 20, y_pos);
      y_pos += (description_lines.length * 5);
    }
    // Add links if available;
    // Check condition
if ( {) {
  $2
}
      y_pos += 5;
      doc.setFontSize (9);
      doc.setTextColor (colors.accent);
;
      // Check condition
if ( {) {
  $2
}
        doc.text (`GitHub: ${project.github_url}`, 20, y_pos);
        y_pos += 4;
      }
      // Check condition
if ( {) {
  $2
}
        doc.text (`Demo: ${project.demo_url}`, 20, y_pos);
        y_pos += 4;
      }
    }
    y_pos += 10, // Add space between projects;
  }
  // If there are more projects than we're displaying;
  // Check condition
if ( {) {
  $2
}
    doc.setFontSize (10);
    doc.setTextColor (colors.text);
    doc.text (`+ ${projects.length - max_projects} more projects not shown`, 20, y_pos);
    y_pos += 6;
  }
  return y_pos + 5;
<<<<<<< HEAD

import { jsPDF } from 'jspdf',;
import { PortfolioProject } from '@/types/resume',;
import { PdfThemeColors } from '../themeConfig',;
;
export function addPortfolioSection(;
  doc:jsPDF,;
  projects:PortfolioProject[],;
  colors:PdfThemeColors,;
  startY:number,;
  maxProjects:number = 2;
):number {;
  if (projects.length === 0) return startY,;
  ;
  let yPos = startY,;
  ;
  // Check if we need to add a new page;
  if (yPos > 250) {;
    doc.addPage(),;
    yPos = 20;
  }
  ;
  doc.setFontSize(16),;
  doc.setTextColor(colors.heading),;
  doc.text('Portfolio Projects', 20, yPos),;
  yPos += 8,;
  ;
  doc.setDrawColor(colors.accent),;
  doc.line(20, yPos, 100, yPos),;
  yPos += 8,;
  ;
  // Limit the number of projects shown based on maxProjects parameter;
  const displayProjects = projects.slice(0, maxProjects),;
  ;
  for (const project of displayProjects) {;
    // Check if we need to add a new page;
    if (yPos > 260) {;
      doc.addPage(),;
      yPos = 20,;
    }
    ;
    doc.setFontSize(14),;
    doc.setTextColor(colors.subheading),;
    doc.text(project.title, 20, yPos),;
    yPos += 6,;
    ;
    if (project.technologies && project.technologies.length > 0) {;
      doc.setFontSize(10),;
      doc.setTextColor(colors.text),;
      doc.text(`Technologies:${project.technologies.join()}`, 20, yPos),;
      yPos += 5,;
    }
    ;
    if (project.description) {;
      doc.setFontSize(10),;
      const descriptionLines = doc.splitTextToSize(project.description, 170),;
      doc.text(descriptionLines, 20, yPos),;
      yPos += (descriptionLines.length * 5),;
    }
    ;
    // Add links if available;
    if (project.github_url || project.demo_url) {;
      yPos += 5,;
      doc.setFontSize(9),;
      doc.setTextColor(colors.accent),;
      ;
      if (project.github_url) {;
        doc.text(`GitHub:${project.github_url}`, 20, yPos),;
        yPos += 4,;
      }
      ;
      if (project.demo_url) {;
        doc.text(`Demo:${project.demo_url}`, 20, yPos),;
        yPos += 4,;
      }    }
    ;
    yPos += 10, // Add space between projects;
  }
  ;
  // If there are more projects than we're displaying;
  if (projects.length > maxProjects) {;
    doc.setFontSize(10),;
    doc.setTextColor(colors.text),;
    doc.text(`+ ${projects.length - maxProjects} more projects not shown`, 20, yPos),;
    yPos += 6,;
  }
  ;
  return yPos + 5,; doc.setFontSize (16);
doc.setTextColor (colors.heading);
doc.text ('Portfolio Projects', 20, yPos);
yPos += 8;
doc.setDrawColor (colors.accent);
doc.line (20, yPos, 100, yPos);
yPos += 8;
// Limit the number of projects shown based on maxProjects parameter for (const project of displayProjects) {
  // Check if we need to add a new page if (yPos > 260) {
  doc.setFontSize (14);
doc.setTextColor (colors.subheading);
doc.text (project.title, 20, yPos);
yPos += 6;
if (project.github url) {
  doc.text (`GitHub: $ {
  project.github url 
}`, 20, yPos);
yPos += 4 
}
}
}yPos += 10, // Add space between projects 
}// If there are more projects than we're displaying 
}return yPos + 5 
}
  }
;
  return yPos + 5;
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { jsPDF  } from 'jspdf';
import { PortfolioProject  } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
export function addPortfolioSection(
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {jsPDF} from 'jspdf';
import {PortfolioProject} from '@/types/resume';
import {PdfThemeColors} from '../themeConfig';
export function addPortfolioSection(;
<<<<<<< HEAD
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { jsPDF  } from 'jspdf';'
import { PortfolioProject  } from '@/types/resume';'
import { PdfThemeColors } from '../themeConfig';
export function addPortfolioSection(
';
import {jsPDF} from 'jspdf';'
import {PortfolioProject} from '@/types/resume';'
import {PdfThemeColors} from '../themeConfig';
export function addPortfolioSection(;



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  doc: jsPDF;
=======
import { jsPDF  } from 'jspdf';
import { PortfolioProject  } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
export function addPortfolioSection(  doc: jsPDF;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

import { jsPDF  } from 'jspdf';
import { PortfolioProject  } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
<<<<<<< HEAD
export function addPortfolioSection(  doc: jsPDF;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export function addPortfolioSection(
import {jsPDF} from 'jspdf';
import {PortfolioProject} from '@/types/resume';
import {PdfThemeColors} from '../themeConfig';
export function addPortfolioSection(;


  doc: jsPDF;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  projects: PortfolioProject[];
  colors: PdfThemeColors;
  startY: number;

<<<<<<< HEAD
  maxProjects: number = 2
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
): number {
<<<<<<< HEAD
<<<<<<< HEAD
=======
): number {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  if (projects && projects.length === 0) return startY;
  

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  let yPos = startY;
  // Check if we need to add a new page
  if (yPos > 250) {
  yPos += 8;
  // Limit the number of projects shown based on maxProjects parameter
  for (const project of displayProjects) {
    // Check if we need to add a new page
    if (yPos > 260) {
      doc && doc.addPage();
      yPos = 20
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    
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
<<<<<<< HEAD
<<<<<<< HEAD
      if (project.demo_url) {
        doc.text(`Demo: ${project.demo_url}`, 20, yPos);
        yPos += 4

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  maxProjects: number = 2;
): number {}
  let yPos = startY;
  // Check if we need to add a new page;
  if (yPos > 250) {}
  yPos += 8;
  // Limit the number of projects shown based on maxProjects parameter;
  for (const project of displayProjects) {}
    // Check if we need to add a new page;
    if (yPos > 260) {}
      doc && doc.addPage();
      yPos = 20;
    }

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      }
    }
    yPos += 10, // Add space between projects;
  }
<<<<<<< HEAD
<<<<<<< HEAD
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934





  


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // If there are more projects than we're displaying
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  if (projects && projects.length > maxProjects) {}
    doc && doc.setFontSize(10);
    doc && doc.setTextColor(colors && colors.text);
    doc && doc.text(`+ ${projects && projects.length - maxProjects} more projects not shown`, 20, yPos);

<<<<<<< HEAD
    yPos += 6
<<<<<<< HEAD
  }
  return yPos + 5
}
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    }
    yPos += 10, // Add space between projects;
  }'
  // If there are more projects than we're displaying;
    yPos += 6;
'
import {jsPDF} from 'jspdf';'
import {PortfolioProject} from '@/types / resume';'
import {PdfThemeColors} from '../theme_config';
export function addPortfolioSection (;
  doc: jsPDF;
  projects: PortfolioProject[];
  colors: PdfThemeColors;
  start_y: number;
  max_projects: number = 2): number {}
  // Check condition;
if (return start_y) {}
  $2;
}
  let y_pos = start_y;
;
  // Check if we need to add a new page;
  // Check condition;
if ( {) {}
  $2;
}
    doc.add_page (),
    y_pos = 20;



<<<<<<< HEAD
    yPos += 6
  }
  return yPos + 5
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
): number {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
): number {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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

    }
    yPos += 10, // Add space between projects
  }
  // If there are more projects than we're displaying
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // If there are more projects than we're displaying;
  if (projects.length > maxProjects) {;
    doc.setFontSize(10),;
    doc.setTextColor(colors.text);`
    doc.text(`+ ${projects.length - maxProjects} more projects not shown`, 20, yPos);
    yPos += 6;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
  doc.setFontSize (16);
  doc.setTextColor (colors.heading);'
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
  for (const project of display_projects) {}
    // Check if we need to add a new page;
    // Check condition;
if ( {) {}
  $2;
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

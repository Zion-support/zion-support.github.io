

  projects: PortfolioProject[];
  colors: PdfThemeColors;
  startY: number;


}
    doc.setFontSize (10);
    doc.setTextColor (colors.text);
    doc.text (`+ ${projects.length - max_projects} more projects not shown`, 20, y_pos);
    y_pos += 6;
  }
  return y_pos + 5;
}
    // Check condition;
      doc.setFontSize (10);
      doc.setTextColor (colors.text);`;
      doc.text (`Technologies: ${project.technologies.join ()}`, 20, y_pos);
      y_pos += 5;
    // Check condition;
      const description_lines = doc.splitTextToSize (project.description, 170);
      doc.text (description_lines, 20, y_pos);
      y_pos += (description_lines.length * 5);
    // Add links if available;
    // Check condition;
      doc.setFontSize (9);
      doc.setTextColor (colors.accent);
      // Check condition;
}`;
        doc.text (`GitHub: ${project.github_url}`, 20, y_pos);
        y_pos += 4;
      // Check condition;
        doc.text (`Demo: ${project.demo_url}`, 20, y_pos);
    y_pos += 10, // Add space between projects;
  // If there are more projects than we're displaying;
  // Check condition;
    doc.text (`+ ${projects.length - max_projects} more projects not shown`, 20, y_pos);
  return y_pos + 5;

  doc:jsPDF,;
  projects:PortfolioProject[],;
  colors:PdfThemeColors,;
  startY:number,;
  maxProjects:number = 2;)
):number {;
  // Check if we need to add a new page;
  // Limit the number of projects shown based on maxProjects parameter;
    // Check if we need to add a new page;
      yPos = 20,;
      doc.text(`Technologies:${project.technologies.join()}`, 20, yPos),;
      yPos += (descriptionLines.length * 5),;
    // Add links if available;
        doc.text(`GitHub:${project.github_url}`, 20, yPos),;
        yPos += 4,;
        doc.text(`Demo:${project.demo_url}`, 20, yPos),;
      }    }
  // If there are more projects than we're displaying;
    doc.text(`+ ${projects.length - maxProjects} more projects not shown`, 20, yPos),;
  return yPos + 5,; doc.setFontSize (16);
doc.text ('Portfolio Projects', 20, yPos);
doc.line (20, yPos, 100, yPos);
// Limit the number of projects shown based on maxProjects parameter for (const project of displayProjects) {
  // Check if we need to add a new page if (yPos > 260) {
doc.text (project.title, 20, yPos);
if (project.github url) {`;
  doc.text (`GitHub: $ {
  project.github url;)`;
}`, 20, yPos);
}yPos += 10, // Add space between projects;
}// If there are more projects than we're displaying;
}return yPos + 5;
  return yPos + 5;
}
;
`;
pr-12325

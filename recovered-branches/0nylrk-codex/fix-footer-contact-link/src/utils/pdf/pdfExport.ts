import { Resume  } from '@/types/resume';
import { jsPDF  } from 'jspdf';
import 'jspdf-autotable';
import { getPdfThemeColors  } from './themeConfig';
import { loadCustomFonts, FontFamily  } from './fontConfig';
import { addBasicInfoSection  } from './sections/basicInfoSection';
import { addSkillsSection  } from './sections/skillsSection';
import { addWorkExperienceSection  } from './sections/workExperienceSection';
import { addEducationSection  } from './sections/educationSection';
import { addCertificationsSection  } from './sections/certificationsSection';
import { addPortfolioSection } from './sections/portfolioSection';
export interface ExportOptions {
  theme: 'light' | 'dark',
  includePortfolio?: boolean,
  maxProjects?: number,
  fontFamily?: FontFamily
}

const defaultOptions: ExportOptions = $2;
  includePortfolio: true,
  maxProjects: 2,
  fontFamily: 'default'
},

export async function exportResumeToPDF(
  resume: Resume
  options: Partial<ExportOptions> = {}
): Promise<Blob> {
  const mergedOptions: ExportOptions = { ...defaultOptions, ...options },
  const { theme, includePortfolio, maxProjects, fontFamily } = mergedOptions,
  
  // Create new PDF document (A4)
  const doc = new jsPDF($2);
  // Load custom fonts if specified
  await loadCustomFonts($2);
  // Set up colors based on theme
  const colors = getPdfThemeColors($2);
  // Set background color
  doc.setFillColor($2);
  doc.rect(0, 0, 210, 297, 'F'), // Fill entire page
  
  // Set text color based on theme
  doc.setTextColor($2);
  // Add each section of the resume
  let currentY = addBasicInfoSection($2);
  currentY = addSkillsSection($2);
  currentY = addWorkExperienceSection($2);
  currentY = addEducationSection($2);
  currentY = addCertificationsSection($2);
  // Add portfolio projects if needed
  if (includePortfolio && resume.portfolio_projects && resume.portfolio_projects.length > 0) {
    currentY = addPortfolioSection(doc, resume.portfolio_projects, colors, currentY, maxProjects)
  }
  
  return doc.output('blob')
}


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
  theme: 'light' | 'dark';
  includePortfolio?: boolean;
  maxProjects?: number;
  fontFamily?: FontFamily
}

const defaultOptions: ExportOptions;
  // Add portfolio projects if needed
  if (includePortfolio && resume.portfolio_projects && resume.portfolio_projects.length > 0) {
    currentY = addPortfolioSection(doc, resume.portfolio_projects, colors, currentY, maxProjects)
  }
  
  return doc.output('blob')
}
;
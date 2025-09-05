
<<<<<<< HEAD
import { Resume } from '@/types/resume',
import { jsPDF } from 'jspdf',
import 'jspdf-autotable',
import { getPdfThemeColors } from './themeConfig',
import { loadCustomFonts, FontFamily } from './fontConfig',
import { addBasicInfoSection } from './sections/basicInfoSection',
import { addSkillsSection } from './sections/skillsSection',
import { addWorkExperienceSection } from './sections/workExperienceSection',
import { addEducationSection } from './sections/educationSection',
import { addCertificationsSection } from './sections/certificationsSection',
import { addPortfolioSection } from './sections/portfolioSection',
export interface ExportOptions {
  theme: 'light' | 'dark',
  includePortfolio?: boolean,
  maxProjects?: number,
  fontFamily?: FontFamily
}

const defaultOptions: ExportOptions = {
  theme: 'light',
  includePortfolio: true,
  maxProjects: 2,
  fontFamily: 'default'
},

export async function exportResumeToPDF(
  resume: Resume,
  options: Partial<ExportOptions> = {}
): Promise<Blob> {
  const mergedOptions: ExportOptions = { ...defaultOptions, ...options },
  const { theme, includePortfolio, maxProjects, fontFamily } = mergedOptions,
  
  // Create new PDF document (A4)
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  }),
=======
import 'jspdf-autotable';

export interface ExportOptions {_theme: 'light' | 'dark';
  includePortfolio?: boolean;
  maxProjects?: number;
  fontFamily?: FontFamily;}

const defaultOptions: ExportOptions = {_theme: 'light', _includePortfolio: true, _maxProjects: 2, _fontFamily: 'default'};

export async function exportResumeToPDF(_resume: Resume, _options: Partial<ExportOptions> = {}): Promise<Blob> {_const mergedOptions: ExportOptions = { ...defaultOptions, _...options};
  const {_theme, _includePortfolio, _maxProjects, _fontFamily} = mergedOptions;
  
  // Create new PDF document (A4)
  const _doc = new jsPDF({_orientation: 'portrait', _unit: 'mm', _format: 'a4'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Load custom fonts if specified
  await loadCustomFonts(doc, fontFamily),
  
  // Set up colors based on theme
<<<<<<< HEAD
  const colors = getPdfThemeColors(theme),
=======
  const _colors = getPdfThemeColors(theme);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Set background color
  doc.setFillColor(colors.background),
  doc.rect(0, 0, 210, 297, 'F'), // Fill entire page
  
  // Set text color based on theme
  doc.setTextColor(colors.text),
  
  // Add each section of the resume
<<<<<<< HEAD
  let currentY = addBasicInfoSection(doc, resume.basic_info, colors),
  currentY = addSkillsSection(doc, resume.skills, colors, currentY),
  currentY = addWorkExperienceSection(doc, resume.work_experience, colors, currentY),
  currentY = addEducationSection(doc, resume.education, colors, currentY),
  currentY = addCertificationsSection(doc, resume.certifications, colors, currentY),
  
  // Add portfolio projects if needed
  if (includePortfolio && resume.portfolio_projects && resume.portfolio_projects.length > 0) {
    currentY = addPortfolioSection(doc, resume.portfolio_projects, colors, currentY, maxProjects)
  }
=======
  let _currentY = addBasicInfoSection(doc, resume.basic_info, colors);
  currentY = addSkillsSection(doc, resume.skills, colors, currentY);
  currentY = addWorkExperienceSection(doc, resume.work_experience, colors, currentY);
  currentY = addEducationSection(doc, resume.education, colors, currentY);
  currentY = addCertificationsSection(doc, resume.certifications, colors, currentY);
  
  // Add portfolio projects if needed
  if (includePortfolio && resume.portfolio_projects && resume.portfolio_projects.length > 0) {_currentY = addPortfolioSection(doc, _resume.portfolio_projects, _colors, _currentY, _maxProjects);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return doc.output('blob')
}

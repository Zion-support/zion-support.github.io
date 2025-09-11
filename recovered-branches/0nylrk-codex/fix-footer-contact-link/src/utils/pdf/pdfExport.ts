
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {Resume} from '@/types/resume';
import {jsPDF} from 'jspdf';
import 'jspdf-autotable';
import {getPdfThemeColors} from './themeConfig';
import {loadCustomFonts, FontFamily} from './fontConfig';
import {addBasicInfoSection} from './sections/basicInfoSection';
import {addSkillsSection} from './sections/skillsSection';
import {addWorkExperienceSection} from './sections/workExperienceSection';
import {addEducationSection} from './sections/educationSection';
import {addCertificationsSection} from './sections/certificationsSection';
import {addPortfolioSection} from './sections/portfolioSection';
export interface ExportOptions {;
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  theme: 'light' | 'dark';
  includePortfolio?: boolean;

  maxProjects?: number
  fontFamily?: FontFamily
}
const defaultOptions: ExportOptions = {
  theme: 'light';
  includePortfolio: true;
  maxProjects: 2
  fontFamily: 'default'
}
export async function exportResumeToPDF(
  resume: Resume
  options: Partial<ExportOptions> = {}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
): Promise<Blob> {;
  const mergedOptions: ExportOptions = { ...defaultOptions, ...options };


  doc && doc.setFillColor(colors && colors.background);
  doc && doc.rect(0, 0, 210, 297, 'F'), // Fill entire page
  
  // Set text color based on theme
  doc && doc.setTextColor(colors && colors.text);
  
  // Add each section of the resume
  let currentY = addBasicInfoSection(doc, resume && resume.basic_info, colors);
  currentY = addSkillsSection(doc, resume && resume.skills, colors, currentY);
  currentY = addWorkExperienceSection(doc, resume && resume.work_experience, colors, currentY);
  currentY = addEducationSection(doc, resume && resume.education, colors, currentY);
  currentY = addCertificationsSection(doc, resume && resume.certifications, colors, currentY);
  
  // Add portfolio projects if needed
  if (includePortfolio && resume.portfolio_projects && resume.portfolio_projects.length > 0) {
    currentY = addPortfolioSection(doc, resume.portfolio_projects, colors, currentY, maxProjects)
import { Resume } from '@/types/resume',;
import { jsPDF } from 'jspdf',;
import 'jspdf-autotable',;
import { getPdfThemeColors } from './themeConfig',;
import { loadCustomFonts, FontFamily } from './fontConfig',;
import { addBasicInfoSection } from './sections/basicInfoSection',;
import { addSkillsSection } from './sections/skillsSection',;
import { addWorkExperienceSection } from './sections/workExperienceSection',;
import { addEducationSection } from './sections/educationSection',;
import { addCertificationsSection } from './sections/certificationsSection',;
import { addPortfolioSection } from './sections/portfolioSection',;
export interface ExportOptions {;
  theme: 'light' | 'dark',;
  includePortfolio?: boolean,;
  maxProjects?: number,;
  fontFamily?: FontFamily;
  doc && doc.setFillColor(colors && colors.background);
  doc && doc.rect(0, 0, 210, 297, 'F'), // Fill entire page
  
  // Set text color based on theme
  doc && doc.setTextColor(colors && colors.text);
  
  // Add each section of the resume
  let currentY = addBasicInfoSection(doc, resume && resume.basic_info, colors);
  currentY = addSkillsSection(doc, resume && resume.skills, colors, currentY);
  currentY = addWorkExperienceSection(doc, resume && resume.work_experience, colors, currentY);
  currentY = addEducationSection(doc, resume && resume.education, colors, currentY);
  currentY = addCertificationsSection(doc, resume && resume.certifications, colors, currentY);
  

  // Add portfolio projects if needed  if (includePortfolio && resume && resume.portfolio_projects && resume && resume.portfolio_projects.length > 0) {
    currentY = addPortfolioSection(doc, resume && resume.portfolio_projects, colors, currentY, maxProjects)
  }
  return doc && doc.output('blob')
}
import {Resume} from '@/types / resume';
import {jsPDF} from 'jspdf';
import 'jspdf - autotable';
import {getPdfThemeColors} from './theme_config';
import {loadCustomFonts, FontFamily} from './font_config';
import {addBasicInfoSection} from './sections / basicInfoSection';
import {addSkillsSection} from './sections / skills_section';
import {addWorkExperienceSection} from './sections / workExperienceSection';
import {addEducationSection} from './sections / education_section';
import {addCertificationsSection} from './sections / certifications_section';
import {addPortfolioSection} from './sections / portfolio_section';
export interface ExportOptions {
  theme: 'light' | 'dark';
  include_portfolio?: boolean;
  max_projects?: number,
  font_family?: FontFamily;
}
const default_options: ExportOptions = {
  theme: 'light';
  include_portfolio: true;
  max_projects: 2,
  font_family: 'default';
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
;
export async function exportResumeToPDF (
  resume: Resume,
  options: Partial < ExportOptions> = {}
): Promise < Blob> {
  const merged_options: ExportOptions = { ...default_options, ...options }
  const { theme, include_portfolio, max_projects, font_family } = merged_options;
;
  // Create new PDF document (A4);
  const doc = new jsPDF ({
    orientation: 'portrait';
    unit: 'mm',
    format: 'a4';
  });
;
  // Load custom fonts if specified;
  await loadCustomFonts (doc, font_family);
;
  // Set up colors based on theme;
  const colors = getPdfThemeColors (theme);
;
  // Set background color;
  doc.setFillColor (colors.background);
  doc.rect (0, 0, 210, 297, 'F'), // Fill entire page;
  // Set text color based on theme;
  doc.setTextColor (colors.text);
;
  // Add each section of the resume;
  let current_y = addBasicInfoSection (doc, resume.basic_info, colors);
  current_y = addSkillsSection (doc, resume.skills, colors, current_y);
  current_y = addWorkExperienceSection (doc, resume.work_experience, colors, current_y);
  current_y = addEducationSection (doc, resume.education, colors, current_y);
  current_y = addCertificationsSection (doc, resume.certifications, colors, current_y);
;
  // Add portfolio projects if needed;

  if (includePortfolio && resume.portfolio_projects && resume.portfolio_projects.length > 0) {;
    currentY = addPortfolioSection(doc, resume.portfolio_projects, colors, currentY, maxProjects);



import { Resume } from '@/types/resume',;
import { jsPDF } from 'jspdf',;
import 'jspdf-autotable',;
import { getPdfThemeColors } from './themeConfig',;
import { loadCustomFonts, FontFamily } from './fontConfig',;
import { addBasicInfoSection } from './sections/basicInfoSection',;
import { addSkillsSection } from './sections/skillsSection',;
import { addWorkExperienceSection } from './sections/workExperienceSection',;
import { addEducationSection } from './sections/educationSection',;
import { addCertificationsSection } from './sections/certificationsSection',;
import { addPortfolioSection } from './sections/portfolioSection',;
;
export interface ExportOptions {;
  theme:'light' | 'dark',;
  includePortfolio?:boolean,;
  maxProjects?:number,;
  fontFamily?:FontFamily;
}
;
const defaultOptions:ExportOptions = {;
  theme:'light',;
  includePortfolio:true,;
  maxProjects:2,;
  fontFamily:'default';
},;
;
export async function exportResumeToPDF(;
  resume:Resume, ;
  options:Partial<ExportOptions> = {}
):Promise<Blob> {;
  const mergedOptions:ExportOptions = { ...defaultOptions, ...options },;
  const { theme, includePortfolio, maxProjects, fontFamily } = mergedOptions,;
  ;
  // Create new PDF document (A4);
  const doc = new jsPDF({;
    orientation:'portrait',;
    unit:'mm',;
    format:'a4';
  }),;
  ;
  // Load custom fonts if specified;
  await loadCustomFonts(doc, fontFamily),;
  ;
  // Set up colors based on theme;
  const colors = getPdfThemeColors(theme),;
  ;
  // Set background color;
  doc.setFillColor(colors.background),;
  doc.rect(0, 0, 210, 297, 'F'), // Fill entire page;
  ;
  // Set text color based on theme;
  doc.setTextColor(colors.text),;
  ;
}
;
const defaultOptions: ExportOptions = {;
  theme: 'light',;
  includePortfolio: true,;
  maxProjects: 2,;
  fontFamily: 'default';
},;
export async function exportResumeToPDF(;
  resume: Resume,;
  options: Partial<ExportOptions> = {}
): Promise<Blob> {;
  const mergedOptions: ExportOptions = { ...defaultOptions, ...options },;
  const { theme, includePortfolio, maxProjects, fontFamily } = mergedOptions,;
  // Create new PDF document (A4);
  const doc = new jsPDF({;
    orientation: 'portrait',;
    unit: 'mm',;
    format: 'a4';
  }),;
  // Load custom fonts if specified;
  await loadCustomFonts(doc, fontFamily),;
  // Set up colors based on theme;
  const colors = getPdfThemeColors(theme),;
  // Set background color;
  doc.setFillColor(colors.background),;
  doc.rect(0, 0, 210, 297, 'F'), // Fill entire page;
  // Set text color based on theme;
  doc.setTextColor(colors.text),;
  // Add each section of the resume;
  let currentY = addBasicInfoSection(doc, resume.basic_info, colors),;
  currentY = addSkillsSection(doc, resume.skills, colors, currentY),;
  currentY = addWorkExperienceSection(doc, resume.work_experience, colors, currentY),;
  currentY = addEducationSection(doc, resume.education, colors, currentY);
  currentY = addCertificationsSection(doc, resume.certifications, colors, currentY);
  // Add portfolio projects if needed;
  if (includePortfolio && resume.portfolio_projects && resume.portfolio_projects.length > 0) {;
    currentY = addPortfolioSection(doc, resume.portfolio_projects, colors, currentY, maxProjects);
  }
  return doc.output('blob')
}
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
  return doc.output ('blob');
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

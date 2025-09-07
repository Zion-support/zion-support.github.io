<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
export interface ExportOptions {
  theme: 'light' | 'dark',
  includePortfolio?: boolean,
  maxProjects?: number,
  fontFamily?: FontFamily
=======
<<<<<<< HEAD
=======
export interface ExportOptions {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

  theme: 'light' | 'dark';

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
export interface ExportOptions {';

  theme: 'light' | 'dark';
  include_portfolio?: boolean;
  max_projects?: number,
  font_family?: FontFamily;
}
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  theme: 'light' | 'dark';

<<<<<<< HEAD
=======
  maxProjects?: number
  fontFamily?: FontFamily
}
const defaultOptions: ExportOptions = {
  theme: 'light';
  includePortfolio: true;
  maxProjects: 2
  fontFamily: 'default'
>>>>>>> merged-prs-20250907-203621
}

const defaultOptions: ExportOptions = $2;
  includePortfolio: true,
  maxProjects: 2,
  fontFamily: 'default'
},

export async function exportResumeToPDF(
  resume: Resume
  options: Partial<ExportOptions> = {}
<<<<<<< HEAD
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
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
): Promise<Blob> {;
  const mergedOptions: ExportOptions = { ...defaultOptions, ...options };


<<<<<<< HEAD
): Promise<Blob> {
  const mergedOptions: ExportOptions = { ...defaultOptions, ...options }
): Promise<Blob> {;
  const mergedOptions: ExportOptions = { ...defaultOptions, ...options };
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const { theme, includePortfolio, maxProjects, fontFamily } = mergedOptions;
  // Create new PDF document (A4)
  const doc = new jsPDF({
    orientation: 'portrait';
    unit: 'mm'
    format: 'a4'
  });
  // Load custom fonts if specified
  await loadCustomFonts(doc, fontFamily);
  // Set up colors based on theme
  const colors = getPdfThemeColors(theme);
  // Set background color
<<<<<<< HEAD
  // Add portfolio projects if needed
  doc.setFillColor(colors.background);
  doc.rect(0, 0, 210, 297, 'F'), // Fill entire page
  // Set text color based on theme
  doc.setTextColor(colors.text);
  // Add each section of the resume
  let currentY = addBasicInfoSection(doc, resume.basic_info, colors);
  currentY = addSkillsSection(doc, resume.skills, colors, currentY);
  currentY = addWorkExperienceSection(doc, resume.work_experience, colors, currentY);
  currentY = addEducationSection(doc, resume.education, colors, currentY);
  currentY = addCertificationsSection(doc, resume.certifications, colors, currentY);

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
=======

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (includePortfolio && resume && resume.portfolio_projects && resume && resume.portfolio_projects.length > 0) {
    currentY = addPortfolioSection(doc, resume && resume.portfolio_projects, colors, currentY, maxProjects)
  }
  return doc && doc.output('blob')
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
export interface ExportOptions {';

  theme: 'light' | 'dark';
  include_portfolio?: boolean;
  max_projects?: number,
  font_family?: FontFamily;
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

;
export async function exportResumeToPDF (
  resume: Resume,
  options: Partial < ExportOptions> = {}
): Promise < Blob> {}
  const merged_options: ExportOptions = { ...default_options, ...options };
  const { theme, include_portfolio, max_projects, font_family } = merged_options;
;
  // Create new PDF document (A4);
  const doc = new jsPDF ({'
    orientation: 'portrait';'
    unit: 'mm','
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
  doc.setFillColor (colors.background);'
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
  // Check condition;
if ( {) {}
  $2;

}
    current_y = addPortfolioSection (doc, resume.portfolio_projects, colors, current_y, max_projects);

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
  theme:'light' | 'dark',;
  includePortfolio?:boolean,;
  maxProjects?:number,;
  fontFamily?:FontFamily;
const defaultOptions: ExportOptions = {;,
  theme:'light',;
  includePortfolio:true,;
  maxProjects:2,;
  fontFamily:'default';
},;
export async function exportResumeToPDF(;
  resume:Resume, ;
  options:Partial<ExportOptions> = {}
):Promise<Blob> {;

pr-12325
</Blob>
  options: Partial<ExportOptions> = {}
</ExportOptions>
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
<<<<<<< HEAD
  }
  return doc.output('blob')
}
=======
<<<<<<< HEAD
  }
  return doc.output('blob')
}
=======



  }
  return doc.output ('blob');
}
<<<<<<< HEAD

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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

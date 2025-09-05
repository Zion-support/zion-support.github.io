
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
  
  // Load custom fonts if specified
  await loadCustomFonts(doc, fontFamily);
  
  // Set up colors based on theme
  const _colors = getPdfThemeColors(theme);
  
  // Set background color
  doc.setFillColor(colors.background);
  doc.rect(0, 0, 210, 297, 'F'); // Fill entire page
  
  // Set text color based on theme
  doc.setTextColor(colors.text);
  
  // Add each section of the resume
  let _currentY = addBasicInfoSection(doc, resume.basic_info, colors);
  currentY = addSkillsSection(doc, resume.skills, colors, currentY);
  currentY = addWorkExperienceSection(doc, resume.work_experience, colors, currentY);
  currentY = addEducationSection(doc, resume.education, colors, currentY);
  currentY = addCertificationsSection(doc, resume.certifications, colors, currentY);
  
  // Add portfolio projects if needed
  if (includePortfolio && resume.portfolio_projects && resume.portfolio_projects.length > 0) {_currentY = addPortfolioSection(doc, _resume.portfolio_projects, _colors, _currentY, _maxProjects);}
  
  return doc.output('blob');
}

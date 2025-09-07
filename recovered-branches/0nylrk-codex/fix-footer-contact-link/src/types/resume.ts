export interface ResumeBasicInfo {
  // TODO: Implement
}
  id?: string;
  title: string;
  headline?: string;
  summary?: string;

export interface WorkExperience {
  // TODO: Implement
  // TODO: Implement
export interface ResumeBasicInfo {;

  // TODO: Implement
export interface WorkExperience {;
  company_name: string;,
  role_title: string;
  start_date: Date | string;
  end_date?: Date | string;
  is_current: boolean;
  description?: string;
  company_logo_url?: string;
  location?: string;

  company_logo_url?: string,

export interface Education {
  // TODO: Implement
  institution: string;,
  degree: string;
  field_of_study?: string;
  institution_logo_url?: string;

  institution_logo_url?: string,

export interface Skill {
  // TODO: Implement
  name: string;
  proficiency?: number;
  category?: string;
  years_experience?: number;

  category?: string,

export interface Certification {
  // TODO: Implement
  name: string;,
  issuing_organization: string;
  issue_date?: Date | string;
  expiration_date?: Date | string;
  credential_id?: string;
  credential_url?: string;

  credential_id?: string,

export interface PortfolioProject {
  // TODO: Implement
  technologies?: string[];
  image_url?: string;
  github_url?: string;
  demo_url?: string;
  pdf_url?: string;

  demo_url?: string,

export interface Resume {
  // TODO: Implement
  user_id?: string;
  basic_info: ResumeBasicInfo;,
  work_experience: WorkExperience[];
  education: Education[];,
  skills: Skill[];
  certifications: Certification[];
  portfolio_projects?: PortfolioProject[];
  is_active: boolean;
  portfolio_projects?: PortfolioProject[]

  id?: string,;
  title: string,;
  headline?: string,;
;
  company_name: string,;
  role_title: string,;
  start_date: Date | string,;
  end_date?: Date | string,;
  is_current: boolean,;
  description?: string,;
  company_logo_url?: string,;
export interface Education {;
  institution: string,;
  degree: string,;
  field_of_study?: string,;
  institution_logo_url?: string,;
export interface Skill {;
  name: string,;
  proficiency?: number,;
  category?: string,;
export interface Certification {;
  issuing_organization: string,;
  issue_date?: Date | string,;
  expiration_date?: Date | string,;
  credential_id?: string,;
export interface PortfolioProject {;
  technologies?: string[],;
  image_url?: string,;
  github_url?: string,;
  demo_url?: string,;
export interface Resume {;
  user_id?: string,;
  basic_info: ResumeBasicInfo,;
  work_experience: WorkExperience[],;
  education: Education[],;
  skills: Skill[],;
  certifications: Certification[],;
  portfolio_projects?: PortfolioProject[],




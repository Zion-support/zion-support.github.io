export interface ResumeBasicInfo {
  id?: string;
  title: string;
}
export interface WorkExperience {
  id?: string;
  company_name: string;
  role_title: string;
  start_date: Date | string;
  end_date?: Date | string;
  is_current: boolean;
  description?: string;
}
export interface Education {
  id?: string;
  institution: string;
  degree: string;
  field_of_study?: string;
  start_date: Date | string;
  end_date?: Date | string;
  is_current: boolean;
  description?: string;
}
export interface Skill {
  id?: string;
  name: string;
  proficiency?: number;
}
export interface Certification {
  id?: string;
  name: string;
  issuing_organization: string;
  issue_date?: Date | string;
  expiration_date?: Date | string;
}
export interface PortfolioProject {
  id?: string;
  title: string;
  description?: string;
  technologies?: string[];
  image_url?: string;
  github_url?: string;
}
export interface Resume {
  id?: string;
  user_id?: string;
  basic_info: ResumeBasicInfo;
  work_experience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  certifications: Certification[];
}
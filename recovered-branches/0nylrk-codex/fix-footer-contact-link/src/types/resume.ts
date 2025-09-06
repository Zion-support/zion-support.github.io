
export interface ResumeBasicInfo {
  id?: string;
  title: string;
<<<<<<< HEAD
  headline?: string;
=======
  headline?: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  summary?: string
}
export interface WorkExperience {
  id?: string;
  company_name: string;
  role_title: string;
  start_date: Date | string;
  end_date?: Date | string;
  is_current: boolean;
  description?: string;
<<<<<<< HEAD
  company_logo_url?: string;
=======
  company_logo_url?: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  location?: string
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
<<<<<<< HEAD
  institution_logo_url?: string;
=======
  institution_logo_url?: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  location?: string
}
export interface Skill {
  id?: string;
  name: string;
  proficiency?: number;
<<<<<<< HEAD
  category?: string;
=======
  category?: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  years_experience?: number
}
export interface Certification {
  id?: string;
  name: string;
  issuing_organization: string;
  issue_date?: Date | string;
  expiration_date?: Date | string;
<<<<<<< HEAD
  credential_id?: string;
=======
  credential_id?: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  credential_url?: string
}
export interface PortfolioProject {
  id?: string;
  title: string;
  description?: string;
  technologies?: string[];
  image_url?: string;
  github_url?: string;
<<<<<<< HEAD
  demo_url?: string;
=======
  demo_url?: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  pdf_url?: string
}
export interface Resume {
  id?: string;
  user_id?: string;
  basic_info: ResumeBasicInfo;
  work_experience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  certifications: Certification[];
<<<<<<< HEAD
  portfolio_projects?: PortfolioProject[];
=======
  portfolio_projects?: PortfolioProject[]
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  is_active: boolean
}
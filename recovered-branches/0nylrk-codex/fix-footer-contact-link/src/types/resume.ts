export interface ResumeBasicInfo {
  id?: string;
  title: string;
<<<<<<< HEAD

  headline?: string

  summary?: string
=======
  headline?: string,
  summary?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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

  company_logo_url?: string

  location?: string
=======
  company_logo_url?: string,
  location?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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

  institution_logo_url?: string

  location?: string
=======
  institution_logo_url?: string,
  location?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface Skill {
  id?: string;
  name: string;
  proficiency?: number;
<<<<<<< HEAD

  category?: string

  years_experience?: number
=======
  category?: string,
  years_experience?: number;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface Certification {
  id?: string;
  name: string;
  issuing_organization: string;
  issue_date?: Date | string;
  expiration_date?: Date | string;
<<<<<<< HEAD

  credential_id?: string

  credential_url?: string
=======
  credential_id?: string,
  credential_url?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface PortfolioProject {
  id?: string;
  title: string;
  description?: string;
  technologies?: string[];
  image_url?: string;
  github_url?: string;
<<<<<<< HEAD

  demo_url?: string

  pdf_url?: string
=======
  demo_url?: string,
  pdf_url?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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

  portfolio_projects?: PortfolioProject[]

  is_active: boolean
=======
  portfolio_projects?: PortfolioProject[],
  is_active: boolean;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}

<<<<<<< HEAD


  id?: string;
  title: string;

}

export interface WorkExperience {

export interface WorkExperience {;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
  headline?: string,
  summary?: string;

}
export interface WorkExperience {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  id?: string;
  company_name: string;
  role_title: string;
  start_date: Date | string;
  end_date?: Date | string;
  is_current: boolean;
  description?: string;

  company_logo_url?: string,
  location?: string;

}
<<<<<<< HEAD


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
export interface Education {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  id?: string;
  institution: string;
  degree: string;
  field_of_study?: string;
  start_date: Date | string;
  end_date?: Date | string;
  is_current: boolean;
  description?: string;

  institution_logo_url?: string,
  location?: string;

}
<<<<<<< HEAD


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
export interface Skill {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  id?: string;
  name: string;
  proficiency?: number;

  category?: string,
  years_experience?: number;

}
<<<<<<< HEAD


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
export interface Certification {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  id?: string;
  name: string;
  issuing_organization: string;
  issue_date?: Date | string;
  expiration_date?: Date | string;

  credential_id?: string,
  credential_url?: string;

}
<<<<<<< HEAD


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
export interface PortfolioProject {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  id?: string;
  title: string;
  description?: string;
  technologies?: string[];
  image_url?: string;
  github_url?: string;

  demo_url?: string,
  pdf_url?: string;

}
<<<<<<< HEAD


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
export interface Resume {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
}




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
  portfolio_projects?: PortfolioProject[],
  is_active: boolean;

}
=======


export interface ResumeBasicInfo {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

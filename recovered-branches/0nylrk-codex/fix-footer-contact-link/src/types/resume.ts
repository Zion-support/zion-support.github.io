
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  id?: string;
  title: string;
=======
  headline?: string,
  summary?: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

}
<<<<<<< HEAD

=======
export interface WorkExperience {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export interface ResumeBasicInfo {
export interface ResumeBasicInfo {;
  id?: string;
  title: string;

  headline?: string

  summary?: string
}
export interface WorkExperience {

export interface WorkExperience {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id?: string;
  company_name: string;
  role_title: string;
  start_date: Date | string;
  end_date?: Date | string;
  is_current: boolean;
  description?: string;

<<<<<<< HEAD
  company_logo_url?: string,
  location?: string;

}
<<<<<<< HEAD

=======
export interface Education {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  company_logo_url?: string

  location?: string
}
export interface Education {

export interface Education {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id?: string;
  institution: string;
  degree: string;
  field_of_study?: string;
  start_date: Date | string;
  end_date?: Date | string;
  is_current: boolean;
  description?: string;

<<<<<<< HEAD
  institution_logo_url?: string,
  location?: string;

}
<<<<<<< HEAD

=======
export interface Skill {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  institution_logo_url?: string

  location?: string
}
export interface Skill {

export interface Skill {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id?: string;
  name: string;
  proficiency?: number;

<<<<<<< HEAD
  category?: string,
  years_experience?: number;

}
<<<<<<< HEAD

=======
export interface Certification {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  category?: string

  years_experience?: number
}
export interface Certification {

export interface Certification {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id?: string;
  name: string;
  issuing_organization: string;
  issue_date?: Date | string;
  expiration_date?: Date | string;

<<<<<<< HEAD
  credential_id?: string,
  credential_url?: string;

}
<<<<<<< HEAD

=======
export interface PortfolioProject {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  credential_id?: string

  credential_url?: string
}
export interface PortfolioProject {

export interface PortfolioProject {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id?: string;
  title: string;
  description?: string;
  technologies?: string[];
  image_url?: string;
  github_url?: string;

<<<<<<< HEAD
  demo_url?: string,
  pdf_url?: string;

}
<<<<<<< HEAD

=======
export interface Resume {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  demo_url?: string

  pdf_url?: string
}
export interface Resume {

export interface Resume {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id?: string;
  user_id?: string;
  basic_info: ResumeBasicInfo;
  work_experience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  certifications: Certification[];

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  portfolio_projects?: PortfolioProject[]

  is_active: boolean
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
export interface ResumeBasicInfo {;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
export interface ResumeBasicInfo {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id?: string,;
  title: string,;
  headline?: string,;
  summary?: string;
}
;
export interface WorkExperience {;
  id?: string,;
  company_name: string,;
  role_title: string,;
  start_date: Date | string,;
  end_date?: Date | string,;
  is_current: boolean,;
  description?: string,;
  company_logo_url?: string,;
  location?: string;
}
;
export interface Education {;
  id?: string,;
  institution: string,;
  degree: string,;
  field_of_study?: string,;
  start_date: Date | string,;
  end_date?: Date | string,;
  is_current: boolean,;
  description?: string,;
  institution_logo_url?: string,;
  location?: string;
}
;
export interface Skill {;
  id?: string,;
  name: string,;
  proficiency?: number,;
  category?: string,;
  years_experience?: number;
}
;
export interface Certification {;
  id?: string,;
  name: string,;
  issuing_organization: string,;
  issue_date?: Date | string,;
  expiration_date?: Date | string,;
  credential_id?: string,;
  credential_url?: string;
}
;
export interface PortfolioProject {;
  id?: string,;
  title: string,;
  description?: string,;
  technologies?: string[],;
  image_url?: string,;
  github_url?: string,;
  demo_url?: string,;
  pdf_url?: string;
}
;
export interface Resume {;
  id?: string,;
  user_id?: string,;
  basic_info: ResumeBasicInfo,;
  work_experience: WorkExperience[],;
  education: Education[],;
  skills: Skill[],;
  certifications: Certification[],;
  portfolio_projects?: PortfolioProject[];
<<<<<<< HEAD
=======
  portfolio_projects?: PortfolioProject[],
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  is_active: boolean;

}
<<<<<<< HEAD
;

=======
=======


export interface ResumeBasicInfo {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  is_active: boolean;
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

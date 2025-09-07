export interface ResumeBasicInfo {
<<<<<<< HEAD
  id?: string,
  title: string,
  headline?: string,
  summary?: string
}
=======

  id?: string;
  title: string;
  headline?: string;

  summary?: string;

}
<<<<<<< HEAD

}

export interface ResumeBasicInfo {;

  id?: string;

}

=======
export interface WorkExperience {
<<<<<<< HEAD
export interface ResumeBasicInfo {
export interface ResumeBasicInfo {;
  id?: string;
  title: string;
>>>>>>> merged-prs-20250907-203621

  headline?: string

  summary?: string
}
export interface WorkExperience {
<<<<<<< HEAD
  id?: string,
  company_name: string,
  role_title: string,
  start_date: Date | string,
  end_date?: Date | string,
  is_current: boolean,
  description?: string,
  company_logo_url?: string,
  location?: string
}

=======

export interface WorkExperience {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  id?: string;
  company_name: string;
  role_title: string;
  start_date: Date | string;
  end_date?: Date | string;
  is_current: boolean;
  description?: string;
  company_logo_url?: string;
  location?: string;
}

  id?: string;
  company_name: string;
  role_title: string;
  start_date: Date | string;
  end_date?: Date | string;
  is_current: boolean;
  description?: string;
  company_logo_url?: string;
  location?: string;
}

<<<<<<< HEAD
export interface Education {
>>>>>>> merged-prs-20250907-203621
  company_logo_url?: string

  location?: string
}
export interface Education {
<<<<<<< HEAD
  id?: string,
  institution: string,
  degree: string,
  field_of_study?: string,
  start_date: Date | string,
  end_date?: Date | string,
  is_current: boolean,
  description?: string,
  institution_logo_url?: string,
  location?: string
}

=======

export interface Education {;
=======
  company_logo_url?: string,
  location?: string;

}
export interface Education {
<<<<<<< HEAD
export interface Education {
  company_logo_url?: string

  location?: string
}
export interface Education {

export interface Education {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  id?: string;
  institution: string;
  degree: string;
  field_of_study?: string;

export interface WorkExperience {
  // TODO: Implement
  // TODO: Implement
export interface ResumeBasicInfo {;

  // TODO: Implement
export interface WorkExperience {;
  company_name: string;,
  role_title: string;
pr-12325
  start_date: Date | string;
  end_date?: Date | string;
  is_current: boolean;
  description?: string;

<<<<<<< HEAD
}

=======
<<<<<<< HEAD
export interface Skill {
>>>>>>> merged-prs-20250907-203621
  institution_logo_url?: string

  location?: string
}
export interface Skill {
<<<<<<< HEAD
  id?: string,
  name: string,
  proficiency?: number,
  category?: string,
  years_experience?: number
}

=======

export interface Skill {;
=======
  institution_logo_url?: string,
  location?: string;

}
export interface Skill {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  id?: string;

<<<<<<< HEAD
=======
<<<<<<< HEAD
export interface Certification {
>>>>>>> merged-prs-20250907-203621
  category?: string

  years_experience?: number
}
export interface Certification {
<<<<<<< HEAD
  id?: string,
  name: string,
  issuing_organization: string,
  issue_date?: Date | string,
  expiration_date?: Date | string,
  credential_id?: string,
  credential_url?: string
}

=======

export interface Certification {;
=======
  category?: string,
  years_experience?: number;

}
export interface Certification {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  id?: string;
  name: string;
  issuing_organization: string;
  issue_date?: Date | string;
  expiration_date?: Date | string;

<<<<<<< HEAD
export interface PortfolioProject {
>>>>>>> merged-prs-20250907-203621
  credential_id?: string

  credential_url?: string
}
export interface PortfolioProject {
<<<<<<< HEAD
  id?: string,
  title: string,
  description?: string,
  technologies?: string[],
  image_url?: string,
  github_url?: string,
  demo_url?: string,
  pdf_url?: string
}

=======

export interface PortfolioProject {;
=======
  credential_id?: string,
  credential_url?: string;

}
export interface PortfolioProject {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  id?: string;
  title: string;
  description?: string;
  technologies?: string[];
  image_url?: string;
  github_url?: string;
<<<<<<< HEAD
  demo_url?: string;
=======

<<<<<<< HEAD
export interface Resume {
>>>>>>> merged-prs-20250907-203621
  demo_url?: string

  pdf_url?: string
}
export interface Resume {
<<<<<<< HEAD
  id?: string,
  user_id?: string,
  basic_info: ResumeBasicInfo,
  work_experience: WorkExperience[],
  education: Education[],
  skills: Skill[],
  certifications: Certification[],
  portfolio_projects?: PortfolioProject[],
  is_active: boolean}
=======

export interface Resume {;
=======
  demo_url?: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  pdf_url?: string;
}

  id?: string;

  title: string,;
  headline?: string,;
  summary?: string;

}
<<<<<<< HEAD
;
export interface WorkExperience {;
  id?: string,;
  portfolio_projects?: PortfolioProject[]

  id?: string,;
  title: string,;
  headline?: string,;
;
pr-12325
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
pr-12325
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
export interface PortfolioProject {;
pr-12325
  technologies?: string[],;
  image_url?: string,;
  github_url?: string,;
  demo_url?: string,;
  pdf_url?: string;
}
;
export interface Resume {;
  id?: string,;
export interface Resume {;
pr-12325
  user_id?: string,;
  basic_info: ResumeBasicInfo,;
  work_experience: WorkExperience[],;
  education: Education[],;
  skills: Skill[],;
  certifications: Certification[],;
  portfolio_projects?: PortfolioProject[];

  is_active: boolean;

}
;
=======
export interface Resume {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
export interface ResumeBasicInfo {;
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  portfolio_projects?: PortfolioProject[],
  is_active: boolean;

}


export interface ResumeBasicInfo {;

<<<<<<< HEAD
  is_active: boolean;
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621

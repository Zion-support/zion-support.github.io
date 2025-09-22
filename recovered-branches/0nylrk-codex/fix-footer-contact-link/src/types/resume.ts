export interface ResumeBasicInfo {

  id?: string;
  title: string;
  headline?: string;
  summary?: string;
}

}
export interface WorkExperience {
export interface ResumeBasicInfo {
export interface ResumeBasicInfo {;
  id?: string;

}

export interface WorkExperience {};
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

}

export interface Education {;
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

  company_logo_url?: string,
  location?: string;

}
export interface Education {
export interface Education {
  company_logo_url?: string

  location?: string
}
export interface Education {

export interface Education {;
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

}

institution_logo_url?: string,
  location?: string;

}

  id?: string;
export interface Skill {  id?: string;
export interface Skill {  id?: string;
export interface Skill {
export interface Skill {
  institution_logo_url?: string
export interface Skill {  id?: string;
  company_logo_url?: string;
  location?: string;

  company_logo_url?: string,

export interface Skill {;
  id?: string;
  name: string;
  proficiency?: number;

category?: string,
  years_experience?: number;

}


  id?: string;
  name: string;
  proficiency?: number;
}
  id?: string;
  name: string;
  issuing_organization: string;
  issue_date?: Date | string;
  expiration_date?: Date | string;
  credential_id?: string;
  credential_url?: string;
}

}


export interface PortfolioProject {;
  id?: string;
  title: string;
  description?: string;
  technologies?: string[];
  image_url?: string;
  github_url?: string;
  demo_url?: string;
  pdf_url?: string;
}

}

export interface Resume {;
  id?: string;
export interface Certification {  id?: string;
  name: string;
  proficiency?: number;
}  id?: string;
export interface Certification {  id?: string;
  name: string;
  proficiency?: number;
}  id?: string;
export interface Certification {
export interface Certification {
  category?: string

  years_experience?: number
}
export interface Certification {

export interface Certification {;
  id?: string;
  name: string;
  proficiency?: number;
}
  id?: string;
  name: string;
export interface Certification {  id?: string;
  name: string;

  user_id?: string;
  basic_info: ResumeBasicInfo;
  work_experience: WorkExperience[];
  education: Education[];

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
export interface PortfolioProject {
  credential_id?: string

  credential_url?: string
}
export interface PortfolioProject {

export interface PortfolioProject {;
  id?: string;
  title: string;
  description?: string;
  // TODO: Implement
  technologies?: string[];
  image_url?: string;
  github_url?: string;
  demo_url?: string;
  pdf_url?: string;

  demo_url?: string,

export interface Resume {
export interface Resume {
  demo_url?: string

  pdf_url?: string
}
export interface Resume {

export interface Resume {;
  id?: string;
  user_id?: string;
  basic_info: ResumeBasicInfo;,
  work_experience: WorkExperience[];
  education: Education[];,
pr-12325
  skills: Skill[];
  certifications: Certification[];
portfolio_projects?: PortfolioProject[];
  is_active: boolean;
}

  portfolio_projects?: PortfolioProject[]
}
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
  portfolio_projects?: PortfolioProject[],
  is_active: boolean;

  is_active: boolean
}
}
;
}
;
  portfolio_projects?: PortfolioProject[],  is_active: boolean;
  portfolio_projects?: PortfolioProject[],
  is_active: boolean;
}
;

export interface ResumeBasicInfo {;

is_active: boolean;
}
;
}
is_active: boolean;
}
;
}
  portfolio_projects?: PortfolioProject[],  is_active: boolean;
}
;
}
  portfolio_projects?: PortfolioProject[],

pr-12325

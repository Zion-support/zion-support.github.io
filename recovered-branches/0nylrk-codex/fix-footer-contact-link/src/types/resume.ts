export interface ResumeBasicInfo {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  id?: string;
  title: string;
  headline?: string;

  summary?: string;

}
<<<<<<< HEAD

=======


}

export interface ResumeBasicInfo {;

  id?: string;

}


>>>>>>> origin/cursor/delete-old-data-records-6bba
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


export interface Education {;


=======
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


  id?: string;

  id?: string;
  title: string;
  description?: string;
  technologies?: string[];
  image_url?: string;
  github_url?: string;

  demo_url?: string;
  pdf_url?: string;
}

  id?: string;

  id?: string;
  user_id?: string;
  basic_info: ResumeBasicInfo;
  work_experience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  certifications: Certification[];

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

  is_active: boolean;

}

;
>>>>>>> origin/cursor/delete-old-data-records-6bba

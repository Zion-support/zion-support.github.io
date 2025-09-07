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
  title: string;

}
export interface WorkExperience {

export interface WorkExperience {;
  id?: string;
<<<<<<< HEAD
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
  id?: string;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  institution: string;
  degree: string;
  field_of_study?: string;
  start_date: Date | string;
  end_date?: Date | string;
  is_current: boolean;
  description?: string;
  institution_logo_url?: string;
  location?: string;
}

  institution_logo_url?: string,
  location?: string;

}
<<<<<<< HEAD
export interface Skill {
  id?: string;
=======
export interface Skill {  id?: string;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  name: string;
  proficiency?: number;
  category?: string;
  years_experience?: number;
}

  category?: string,
  years_experience?: number;

}
<<<<<<< HEAD
export interface Certification {
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

  credential_id?: string,
  credential_url?: string;

}
export interface PortfolioProject {
  id?: string;
  title: string;
  description?: string;
  technologies?: string[];
  image_url?: string;
  github_url?: string;
  demo_url?: string;
  pdf_url?: string;
}

  demo_url?: string,
  pdf_url?: string;

}
export interface Resume {
  id?: string;
=======
export interface Certification {  id?: string;
  name: string;
  proficiency?: number;
}  id?: string;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  user_id?: string;
  basic_info: ResumeBasicInfo;
  work_experience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  certifications: Certification[];
  portfolio_projects?: PortfolioProject[];
  is_active: boolean;
<<<<<<< HEAD
}
  portfolio_projects?: PortfolioProject[]

  is_active: boolean
}
export interface ResumeBasicInfo {;
  id?: string,;
=======
}  id?: string,;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
  portfolio_projects?: PortfolioProject[],
  is_active: boolean;
}
;


export interface ResumeBasicInfo {;

  is_active: boolean;
=======
  portfolio_projects?: PortfolioProject[],  is_active: boolean;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}
;
}

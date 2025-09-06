<<<<<<< HEAD


=======
<<<<<<< HEAD

  headline?: string,
  summary?: string;

}
export interface WorkExperience {
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface ResumeBasicInfo {
export interface ResumeBasicInfo {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id?: string;
  title: string;

}
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export interface WorkExperience {
<<<<<<< HEAD

export interface WorkExperience {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id?: string;
  company_name: string;
  role_title: string;
  start_date: Date | string;
  end_date?: Date | string;
  is_current: boolean;
  description?: string;
<<<<<<< HEAD

<<<<<<< HEAD
  company_logo_url?: string,
  location?: string;

}
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export interface Education {
=======
export interface Education {
  company_logo_url?: string

  location?: string
}
export interface Education {

export interface Education {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id?: string;
  institution: string;
  degree: string;
  field_of_study?: string;
  start_date: Date | string;
  end_date?: Date | string;
  is_current: boolean;
  description?: string;
<<<<<<< HEAD

<<<<<<< HEAD
  institution_logo_url?: string,
  location?: string;

}
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export interface Skill {
=======
export interface Skill {
  institution_logo_url?: string

  location?: string
}
export interface Skill {

export interface Skill {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id?: string;
  name: string;
  proficiency?: number;

<<<<<<< HEAD
  category?: string,
  years_experience?: number;

}
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export interface Certification {
=======
export interface Certification {
  category?: string

  years_experience?: number
}
export interface Certification {

export interface Certification {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  id?: string;
  name: string;
  proficiency?: number;
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id?: string;
  name: string;
  issuing_organization: string;
  issue_date?: Date | string;
  expiration_date?: Date | string;
<<<<<<< HEAD

<<<<<<< HEAD
  credential_id?: string,
  credential_url?: string;

}
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export interface PortfolioProject {
=======
export interface PortfolioProject {
  credential_id?: string

  credential_url?: string
}
export interface PortfolioProject {

export interface PortfolioProject {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id?: string;
  title: string;
  description?: string;
  technologies?: string[];
  image_url?: string;
  github_url?: string;
<<<<<<< HEAD

<<<<<<< HEAD
  demo_url?: string,
  pdf_url?: string;

}
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export interface Resume {
=======
export interface Resume {
  demo_url?: string

  pdf_url?: string
}
export interface Resume {

export interface Resume {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
  portfolio_projects?: PortfolioProject[]
=======

  is_active: boolean
}
export interface ResumeBasicInfo {;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  portfolio_projects?: PortfolioProject[],
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  is_active: boolean;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  is_active: boolean
}
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
}
;


export interface ResumeBasicInfo {;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  is_active: boolean;
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

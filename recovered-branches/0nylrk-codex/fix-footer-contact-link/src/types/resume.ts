<<<<<<< HEAD
<<<<<<< HEAD
export interface ResumeBasicInfo {

  id?: string;
  title: string;
  headline?: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  summary?: string;
}

}
export interface WorkExperience {
export interface ResumeBasicInfo {
export interface ResumeBasicInfo {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id?: string;

}
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface WorkExperience {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

export interface Education {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id?: string;
=======
export interface Skill {  id?: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export interface Skill {  id?: string;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export interface Skill {
export interface Skill {
  institution_logo_url?: string
export interface Skill {  id?: string;
  company_logo_url?: string;
  location?: string;

  company_logo_url?: string,

export interface Skill {;
  id?: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  name: string;
  proficiency?: number;

category?: string,
  years_experience?: number;

}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

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
  credential_id?: string;
  credential_url?: string;
}

}
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

export interface PortfolioProject {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

export interface Resume {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id?: string;
=======
export interface Certification {  id?: string;
  name: string;
  proficiency?: number;
}  id?: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export interface Certification {  id?: string;
  name: string;
  proficiency?: number;
}  id?: string;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  user_id?: string;
  basic_info: ResumeBasicInfo;,
  work_experience: WorkExperience[];
  education: Education[];,
pr-12325
  skills: Skill[];
  certifications: Certification[];
portfolio_projects?: PortfolioProject[];
  is_active: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
}

  portfolio_projects?: PortfolioProject[]
=======
}
  portfolio_projects?: PortfolioProject[]

  is_active: boolean
}
export interface ResumeBasicInfo {;
  id?: string,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  title: string,;
  headline?: string,;
  summary?: string;
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  portfolio_projects?: PortfolioProject[],
  is_active: boolean;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  is_active: boolean
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
;
}
<<<<<<< HEAD
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  portfolio_projects?: PortfolioProject[],  is_active: boolean;
=======
  portfolio_projects?: PortfolioProject[],
  is_active: boolean;
}
;

export interface ResumeBasicInfo {;

is_active: boolean;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
;
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

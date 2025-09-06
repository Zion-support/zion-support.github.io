



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




  id?: string;
  name: string;
  proficiency?: number;

  category?: string,
  years_experience?: number;

}




  id?: string;
  name: string;
  issuing_organization: string;
  issue_date?: Date | string;
  expiration_date?: Date | string;

  credential_id?: string,
  credential_url?: string;

}




  id?: string;
  title: string;
  description?: string;
  technologies?: string[];
  image_url?: string;
  github_url?: string;

  demo_url?: string,
  pdf_url?: string;

}




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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


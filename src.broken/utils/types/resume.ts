<<<<<<< HEAD
export type WorkExperience = {;
  id:string;
  jobTitle:string;
  company:string;
  startDate?:string;
  endDate?:string;
  description:string;
}
;
export type Education = {;
  id:string;
  school:string;
  degree?:string;
  field?:string;
  startDate?:string;
  endDate?:string;
  description?:string;
}
;
export type Certification = {;
  id:string;
  name:string;
  issuer?:string;
  date?:string;
}
;
export type PortfolioProject = {;
  id:string;
  title:string;
  summary:string;
  technologies:string[];
  screenshotUrl?:string;
  assetUrl?:string;
  liveDemoUrl?:string;
  githubUrl?:string;
}
;
export type ResumeDocument = {;
  id:string;
  ownerUserId?:string;
  name:string // e.g., "DevOps Resume";
  personalSummary:string;
  skills:string[];
  work:WorkExperience[];
  certifications:Certification[];
  education:Education[];
  projects:PortfolioProject[];
  isPublished?:boolean;
  publicSlug?:string;
  updatedAt:string;
  createdAt:string;
}
;
export type AiImprovePayload = {;
  field:'summary' | 'work' | 'education' | 'certifications' | 'projects';
  context:any;
}
=======
export type WorkExperience = {_id: string
  jobTitle: string
  company: string
  startDate?: string
  endDate?: string
  description: string}

export type Education = {_id: string
  school: string
  degree?: string
  field?: string
  startDate?: string
  endDate?: string
  description?: string}

export type Certification = {_id: string
  name: string
  issuer?: string
  date?: string}

export type PortfolioProject = {_id: string
  title: string
  summary: string
  technologies: string[]
  screenshotUrl?: string
  assetUrl?: string
  liveDemoUrl?: string
  githubUrl?: string}

export type ResumeDocument = {_id: string
  ownerUserId?: string
  name: string // e.g., &quot;DevOps Resume&quot;  personalSummary: string
  skills: string[]
  work: WorkExperience[]
  certifications: Certification[]
  education: Education[]
  projects: PortfolioProject[]
  isPublished?: boolean
  publicSlug?: string
  updatedAt: string
  createdAt: string}

export type AiImprovePayload = {_field: 'summary' | 'work' | 'education' | 'certifications' | 'projects'
  context: unknown}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d

export type WorkExperience = {
<<<<<<< HEAD
  id: string;
  jobTitle: string;
  company: string;
  startDate?: string;
  endDate?: string;
  description: string;
};

export type Education = {
  id: string;
  school: string;
  degree?: string;
  field?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
};

export type Certification = {
  id: string;
  name: string;
  issuer?: string;
  date?: string;
};

export type PortfolioProject = {
  id: string;
  title: string;
  summary: string;
  technologies: string[];
  screenshotUrl?: string;
  assetUrl?: string;
  liveDemoUrl?: string;
  githubUrl?: string;
};

export type ResumeDocument = {
  id: string;
  ownerUserId?: string;
  name: string; // e.g., "DevOps Resume"
  personalSummary: string;
  skills: string[];
  work: WorkExperience[];
  certifications: Certification[];
  education: Education[];
  projects: PortfolioProject[];
  isPublished?: boolean;
  publicSlug?: string;
  updatedAt: string;
  createdAt: string;
};

export type AiImprovePayload = {
  field: 'summary' | 'work' | 'education' | 'certifications' | 'projects';
  context: any;
};
=======
  id: string jobTitle: string company: string startDate?: string endDate?: string description: string 
}export type Education = {
  id: string school: string degree?: string field?: string startDate?: string endDate?: string description?: string 
}export type Certification = {
  id: string name: string issuer?: string date?: string 
}export type PortfolioProject = {
  id: string title: string summary: string technologies: string[] screenshotUrl?: string assetUrl?: string liveDemoUrl?: string githubUrl?: string 
}export type ResumeDocument = {
  id: string ownerUserId?: string personalSummary: string skills: string[] work: WorkExperience[] certifications: Certification[] education: Education[] projects: PortfolioProject[] isPublished?: boolean publicSlug?: string updatedAt: string createdAt: string 
}export type AiImprovePayload = {
  field: 'summary' | 'work' | 'education' | 'certifications' | 'projects' context: unknown 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468

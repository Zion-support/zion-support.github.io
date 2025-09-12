export type ProjectMedia = $2;
  pdfUrl?: string,
  githubUrl?: string,
  demoUrl?: string
},

export type Project = $2;
  title: string,
  description: string,
  technologies: string[],
  media: ProjectMedia},

export type WorkExperience = $2;
  company: string,
  role: string,
  startDate: string, // ISO or YYYY-MM
  endDate: string, // ISO or YYYY-MM or 'Present'
  description: string,
  bulletPoints: string[],
  logoUrl?: string
},

export type EducationItem = $2;
  school: string,
  degree: string,
  startDate: string, // ISO or YYYY-MM
  endDate: string, // ISO or YYYY-MM
  details?: string,
  logoUrl?: string
},

export type ResumeVersion = $2;
  name: string, // e.g., "AI Engineer", "Cloud DevOps"
  createdAt: string,
  updatedAt: string,
  talentSlug?: string,
  personalSummary: string,
  skills: string[],
  technologies: string[],
  certifications: string[],
  workHistory: WorkExperience[],
  education: EducationItem[],
  projects: Project[]
},

export type TalentPortfolio = $2;
  versions: ResumeVersion[],
  activeVersionId?: string
},

export type AiAssistAction = $2;
export type AiAssistRequest = $2;
  text?: string,
  context?: Record<string, unknown>
},

export type AiAssistResponse = $2;
  result?: string | string[],
  error?: string
},
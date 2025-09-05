<<<<<<< HEAD
export type ProjectMedia = {
  imageUrl?: string,
  pdfUrl?: string,
  githubUrl?: string,
  demoUrl?: string
},

export type Project = {
  id: string,
  title: string,
  description: string,
  technologies: string[],
  media: ProjectMedia
},

export type WorkExperience = {
  id: string,
  company: string,
  role: string,
  startDate: string, // ISO or YYYY-MM
  endDate: string, // ISO or YYYY-MM or 'Present'
  description: string,
  bulletPoints: string[],
  logoUrl?: string
},

export type EducationItem = {
  id: string,
  school: string,
  degree: string,
  startDate: string, // ISO or YYYY-MM
  endDate: string, // ISO or YYYY-MM
  details?: string,
  logoUrl?: string
},

export type ResumeVersion = {
<<<<<<< HEAD
  id: string,
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
=======
  id: string;
  name: string; // e.g., &quot;AI Engineer&quot;, &quot;Cloud DevOps&quot;
=======
export type ProjectMedia = {_imageUrl?: string;
  pdfUrl?: string;
  githubUrl?: string;
  demoUrl?: string;};

export type Project = {_id: string;
  title: string;
  description: string;
  technologies: string[];
  media: ProjectMedia;};

export type WorkExperience = {_id: string;
  company: string;
  role: string;
  startDate: string; // ISO or YYYY-MM
  endDate: string; // ISO or YYYY-MM or 'Present'
  description: string;
  bulletPoints: string[];
  logoUrl?: string;};

export type EducationItem = {_id: string;
  school: string;
  degree: string;
  startDate: string; // ISO or YYYY-MM
  endDate: string; // ISO or YYYY-MM
  details?: string;
  logoUrl?: string;};

export type ResumeVersion = {_id: string;
  name: string; // e.g., _"AI Engineer", _"Cloud DevOps"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  createdAt: string;
  updatedAt: string;
  talentSlug?: string;
  personalSummary: string;
  skills: string[];
  technologies: string[];
  certifications: string[];
  workHistory: WorkExperience[];
  education: EducationItem[];
<<<<<<< HEAD
  projects: Project[];
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export type TalentPortfolio = {
  talentSlug?: string,
  versions: ResumeVersion[],
  activeVersionId?: string
},
=======
  projects: Project[];};

export type TalentPortfolio = {_talentSlug?: string;
  versions: ResumeVersion[];
  activeVersionId?: string;};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type AiAssistAction =
  | 'improve-summary'
  | 'format-description'
  | 'suggest-bullets',

<<<<<<< HEAD
export type AiAssistRequest = {
  action: AiAssistAction,
  text?: string,
  context?: Record<string unknown>
},

export type AiAssistResponse = {
  ok: boolean,
  result?: string | string[],
  error?: string
},
=======
export type AiAssistRequest = {_action: AiAssistAction;
  text?: string;
  context?: Record<string, _unknown>;};

export type AiAssistResponse = {_ok: boolean;
  result?: string | string[];
  error?: string;};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

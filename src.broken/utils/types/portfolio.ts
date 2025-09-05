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
  createdAt: string;
  updatedAt: string;
  talentSlug?: string;
  personalSummary: string;
  skills: string[];
  technologies: string[];
  certifications: string[];
  workHistory: WorkExperience[];
  education: EducationItem[];
  projects: Project[];
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export type TalentPortfolio = {
  talentSlug?: string,
  versions: ResumeVersion[],
  activeVersionId?: string
},

export type AiAssistAction =
  | 'improve-summary'
  | 'format-description'
  | 'suggest-bullets',

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
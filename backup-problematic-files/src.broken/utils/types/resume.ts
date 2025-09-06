export type WorkExperience = {;
  id:string;
  jobTitle:string;
  company:string;
  startDate?:string;
  endDate?:string;
  description:string;

export type Education = {;
  id:string;
  school:string;
  degree?:string;
  field?:string;
  startDate?:string;
  endDate?:string;
  description?:string;

export type Certification = {;
  id:string;
  name:string;
  issuer?:string;
  date?:string;

export type PortfolioProject = {;
  id:string;
  title:string;
  summary:string;
  technologies:string[];
  screenshotUrl?:string;
  assetUrl?:string;
  liveDemoUrl?:string;
  githubUrl?:string;

export type ResumeDocument = {;
  id:string;
  ownerUserId?:string;
  name: any
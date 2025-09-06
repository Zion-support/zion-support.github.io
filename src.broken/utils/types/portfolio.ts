export type ProjectMedia = {
  imageUrl?: string,
  pdfUrl?: string,
  githubUrl?: string,
  demoUrl?: any
export type Project = {
  id: string,
  title: string,
  description: string,
  technologies: string[],
  media: any
export type WorkExperience = {
  id: string,
  company: string,
  role: string,
  startDate: string, //
  endDate: string, //
export type ProjectMedia = {;
  imageUrl?:string,;
  pdfUrl?:string,;
  githubUrl?:string,;
  demoUrl?:string,;


export type Project = {;
  id:string,;
  title:string,;
  description:string,;
  technologies:string[],;
  media:ProjectMedia;


export type WorkExperience = {;
  id:string,;
  company:string,;
  role:string,;
  startDate:string, //
  endDate:string, //
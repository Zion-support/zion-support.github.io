
 AI Matchmaking utility functions;

export interface MatchResultItem {;
  id:string,;
  title:string,;
  description:string,;
  category:string,;
  price?:number,;
  skills?:string[],;
  image?:string;}

export interface MatchResult {;
  item:MatchResultItem,;
  score:number,;
  matchedSkills:string[],;
  reason:string;

 Sample data for testing when API is not available;
const sampleData:MatchResultItem[] = [;
  {;
    id: any
    skills:["Machine Learning", "Computer Vision", "TensorFlow", "Python"
    id: any
    skills:["Machine Learning", "Model Training", "AI Deployment"
    id: any
    skills:["GPU Computing", "High Performance", "AI Hardware"
  type:string = ""
    if (type && type != "all"
    console.error("Error in matchmaking: any
  } //
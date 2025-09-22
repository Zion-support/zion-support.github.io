
<<<<<<< HEAD
export interface ProfileSkill {;
  name:string;
  level:number, // 1-5;
  endorsements?:number;
}
;
export interface ProfileProject {;
  id:string;
  title:string;
  description:string;
  imageUrl?:string;
  tags?:string[];
  url?:string;
  date:string;
}
;
export interface ProfileExperience {;
  id:string;
  role:string;
  company:string;
  description:string;
  startDate:string;
  endDate?:string;
  current?:boolean;
}
;
export interface Availability {;
  status:'available' | 'limited' | 'unavailable';
  nextAvailable?:string;
  message?:string;
  availableHours?:{ day:string, hours:string }[];
}
;
export interface ProfileData {;
  id:string;
  name:string;
  title:string;
  avatarUrl:string;
  coverImageUrl?:string;
  bio:string;
  location?:string;
  rating?:number;
  reviewCount?:number;
  aiScore?:number;
  profileType:'service' | 'talent';
  skills:ProfileSkill[];
  projects:ProfileProject[];
  experience:ProfileExperience[];
  availability:Availability;
  hourlyRate?:number;
  contactEmail?:string;
} 
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

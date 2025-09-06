<<<<<<< HEAD
import { Skill  } from '@/types / resume';
export interface SkillsFormProps {
  resume_id: string;
  skills: Skill[];
  on_complete: () => void;
  on_back: () => void;
}
export interface SkillItemProps {
  skill: Skill;
  category: string;
  on_delete: (id: string, category: string) => Promise < void>;
}
export interface SkillCategoryProps {
  category: string;
  skills: Skill[];
  on_delete: (id: string, category: string) => Promise < void>;
}
export interface AddSkillFormProps {
  resume_id: string;
  onAddSkill: (skill: Skill) => Promise < boolean>;
  default_category?: string;
}
export interface BulkAddSkillsProps {
  resume_id: string;
  on_success: () => Promise < void>;
}
=======

import { Skill } from '@/types/resume',;
;
export interface SkillsFormProps {;
  resumeId:string,;
  skills:Skill[],;
  onComplete:() => void,;
  onBack:() => void;}
;
export interface SkillItemProps {;
  skill:Skill,;
  category:string,;
  onDelete:(id:string, category:string) => Promise<void>;
}
;
export interface SkillCategoryProps {;
  category:string,;
  skills:Skill[],;
  onDelete:(id:string, category:string) => Promise<void>;
}
;
export interface AddSkillFormProps {;
  resumeId:string,;
  onAddSkill:(skill:Skill) => Promise<boolean>,;
  defaultCategory?:string;
}
;
export interface BulkAddSkillsProps {;
  resumeId:string,;
  onSuccess:() => Promise<void>;
} 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

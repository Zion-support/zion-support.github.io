import { Skill } from "@/types/resume";
export interface SkillsFormProps {
  resume_id: string;
'
import {Skill} from '@/types/resume';
export interface SkillsFormProps {;
  resumeId: string;
  skills: Skill[];
  onComplete: () => void;
  onBack: () => void;
}
export interface SkillItemProps {
  skill: Skill;
  category: string;
  onDelete: (id: string, category: string) => Promise<void>;
}

export interface SkillCategoryProps {
  category: string;
  skills: Skill[];
  onDelete: (id: string, category: string) => Promise<void>;
}


export interface SkillItemProps {;
}


export interface SkillCategoryProps {;

  category: string;
  skills: Skill[];
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

export interface AddSkillFormProps {;

  resumeId: string;
  onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string;
}

export interface BulkAddSkillsProps {
  resumeId: string;
  onSuccess: () => Promise<void>;
}
;
export interface SkillItemProps {;
  skill: Skill,;
  category: string,;
  onDelete: (id: string, category: string) => Promise<void>;
}
;
export interface SkillCategoryProps {;
  category: string,;
  skills: Skill[],;
  onDelete: (id: string, category: string) => Promise<void>;
}
;
export interface AddSkillFormProps {;
  resumeId: string,;
  onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string;
  onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string;

;
;


import { Skill } from '@/types/resume';
export interface SkillsFormProps {
import {Skill} from '@/types/resume';
export interface SkillsFormProps {;
export interface SkillsFormProps {
  resumeId: string;
  skills: Skill[];
  onComplete: () => void;

  resumeId: string;
skills: Skill[];

  on_complete: () => void;
  on_back: () => void;

}
export interface SkillItemProps {

export interface SkillItemProps {;
  skill: Skill;
  category: string;
  onDelete: (id: string, category: string) => Promise<void>
}
export interface SkillCategoryProps {


import { Skill  } from '@/types / resume';

export interface SkillsFormProps {};
  resume_id: string;
'
import {Skill} from '@/types/resume';
export interface SkillsFormProps {;
  resumeId: string;
  skills: Skill[];
  onComplete: () => void;
  onBack: () => void;
}
export interface SkillItemProps {};
}
export interface SkillItemProps {
  skill: Skill;
  category: string;
  onDelete: (id: string, category: string) => Promise<void>;
}

export interface SkillCategoryProps {};
  category: string;
  skills: Skill[];
  onDelete: (id: string, category: string) => Promise<void>;
}

export interface SkillCategoryProps {;

  category: string;
  skills: Skill[];

export interface AddSkillFormProps {;
  category: string;
  skills: Skill[];


export interface AddSkillFormProps {;

  resumeId: string;
  onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string
import { Skill } from '@/types/resume',;
export interface SkillsFormProps {;
  resumeId: string,;
  skills: Skill[],;
  onComplete: () => void,;
  onBack: () => void;
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
}
  onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string;
}

export interface BulkAddSkillsProps {};
  resumeId: string;
  onSuccess: () => Promise<void>;
}

;
;
export interface AddSkillFormProps {
export interface AddSkillFormProps {};
  resume_id: string;
  onAddSkill: (skill: Skill) => Promise < boolean>;
  default_category?: string;
}
export interface BulkAddSkillsProps {};
  resume_id: string;
  on_success: () => Promise < void>;
}

;

;
  defaultCategory?: string;
onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string;
}

export interface BulkAddSkillsProps {

  // TODO: Implement
  resume_id: string;,
  on_success: () => Promise < void>;

;

;


;
;

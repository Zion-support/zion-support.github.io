export interface SkillsFormProps {
import {Skill} from '@/types/resume';
export interface SkillsFormProps {;

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

export interface SkillItemProps {

export interface SkillItemProps {;
  skill: Skill;
  category: string;
  onDelete: (id: string, category: string) => Promise<void>;
}
import { Skill } from '@/types/resume';
export interface SkillsFormProps {
  resumeId: string;
  skills: Skill[];
  onComplete: () => void;
onBack: () => void
}
export interface SkillItemProps {
  skill: Skill;
category: string;
  onDelete: (id: string, category: string) => Promise<void>
}
export interface SkillCategoryProps {
export interface SkillCategoryProps {

export interface SkillCategoryProps {;
  category: string;
  skills: Skill[];
  onDelete: (id: string, category: string) => Promise<void>
}
export interface AddSkillFormProps {

  category: string;
  skills: Skill[];
  onDelete: (id: string, category: string) => Promise<void>;
}

export interface SkillCategoryProps {;

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
<<<<<<< HEAD
export interface AddSkillFormProps {
resumeId: string;
  onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

export interface AddSkillFormProps {

  resume_id: string;
  onAddSkill: (skill: Skill) => Promise < boolean>;
  default_category?: string;
}
export interface BulkAddSkillsProps {};
  resume_id: string;
  on_success: () => Promise < void>;
}

;
<<<<<<< HEAD

export interface SkillsFormProps {

=======
export interface SkillsFormProps {
import {Skill} from '@/types/resume';
export interface SkillsFormProps {;

import { Skill  } from '@/types / resume';

export interface SkillsFormProps {};
  resume_id: string;
'
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {Skill} from '@/types/resume';
export interface SkillsFormProps {;
  resumeId: string;
  skills: Skill[];
  onComplete: () => void;
  onBack: () => void;

}
<<<<<<< HEAD

export interface SkillItemProps {
  skill: Skill;
  category: string;

  on_delete: (id: string, category: string) => Promise < void>;

}
export interface SkillCategoryProps {
}


export interface SkillItemProps {;


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


=======
export interface SkillItemProps {};


  onAddSkill: (skill: Skill) => Promise<boolean>;

>>>>>>> origin/cursor/delete-old-data-records-6bba
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


<<<<<<< HEAD


}
export interface BulkAddSkillsProps {
  resumeId: string;

  onSuccess: () => Promise<void>;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


<<<<<<< HEAD




=======
;
>>>>>>> origin/cursor/delete-old-data-records-6bba

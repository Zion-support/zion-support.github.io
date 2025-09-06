<<<<<<< HEAD

<<<<<<< HEAD
import { Skill } from '@/types/resume';
export interface SkillsFormProps {
import {Skill} from '@/types/resume';
export interface SkillsFormProps {;
=======
import { Skill  } from '@/types / resume';

export interface SkillsFormProps {
  resume_id: string;
=======

import {Skill} from '@/types/resume';
export interface SkillsFormProps {;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  resumeId: string;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  skills: Skill[];

  on_complete: () => void;
  on_back: () => void;

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
}
<<<<<<< HEAD
<<<<<<< HEAD
export interface SkillItemProps {

export interface SkillItemProps {;
=======
export interface SkillItemProps {
  skill: Skill;
  category: string;
<<<<<<< HEAD

  on_delete: (id: string, category: string) => Promise < void>;

}
export interface SkillCategoryProps {
=======
}


export interface SkillItemProps {;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  skill: Skill;
  category: string;
  onDelete: (id: string, category: string) => Promise<void>
}
<<<<<<< HEAD
export interface SkillCategoryProps {

export interface SkillCategoryProps {;
  category: string;
  skills: Skill[];
  onDelete: (id: string, category: string) => Promise<void>
}
export interface AddSkillFormProps {

export interface AddSkillFormProps {;
=======


export interface SkillCategoryProps {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  category: string;
  skills: Skill[];



export interface AddSkillFormProps {;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
export interface BulkAddSkillsProps {
  resumeId: string;

  onSuccess: () => Promise<void>;
}
<<<<<<< HEAD
<<<<<<< HEAD

;
;
=======

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

;

=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

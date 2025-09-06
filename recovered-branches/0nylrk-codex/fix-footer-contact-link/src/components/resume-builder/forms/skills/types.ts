
<<<<<<< HEAD
<<<<<<< HEAD
import { Skill } from '@/types/resume';
export interface SkillsFormProps {
  resume_id: string;
=======

import {Skill} from '@/types/resume';
export interface SkillsFormProps {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  resumeId: string;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  skills: Skill[];

  on_complete: () => void;
  on_back: () => void;

}
<<<<<<< HEAD
export interface SkillItemProps {
=======
}


export interface SkillItemProps {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  skill: Skill;
  category: string;
  onDelete: (id: string, category: string) => Promise<void>
}
<<<<<<< HEAD
export interface SkillCategoryProps {
=======

export interface SkillCategoryProps {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  category: string;
  skills: Skill[];
  onDelete: (id: string, category: string) => Promise<void>
}
<<<<<<< HEAD
export interface AddSkillFormProps {
=======

export interface AddSkillFormProps {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  resumeId: string;
  onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
export interface BulkAddSkillsProps {
  resumeId: string;

  onSuccess: () => Promise<void>;
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

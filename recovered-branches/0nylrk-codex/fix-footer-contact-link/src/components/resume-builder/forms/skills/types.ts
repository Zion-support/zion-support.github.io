
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Skill  } from '@/types / resume';

export interface SkillsFormProps {
  resume_id: string;
=======

import {Skill} from '@/types/resume';
export interface SkillsFormProps {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
import { Skill } from '@/types/resume';
export interface SkillsFormProps {
import {Skill} from '@/types/resume';
export interface SkillsFormProps {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  resumeId: string;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  skills: Skill[];

  on_complete: () => void;
  on_back: () => void;

}
<<<<<<< HEAD
<<<<<<< HEAD

=======
export interface SkillItemProps {
  skill: Skill;
  category: string;

  on_delete: (id: string, category: string) => Promise < void>;

}
export interface SkillCategoryProps {
=======
}


export interface SkillItemProps {;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export interface SkillItemProps {

export interface SkillItemProps {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  skill: Skill;
  category: string;
  onDelete: (id: string, category: string) => Promise<void>
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
export interface SkillCategoryProps {

export interface SkillCategoryProps {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  category: string;
  skills: Skill[];
  onDelete: (id: string, category: string) => Promise<void>
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
export interface AddSkillFormProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6


export interface SkillCategoryProps {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  category: string;
  skills: Skill[];



export interface AddSkillFormProps {;
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  resumeId: string;
  onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string

=======
  resumeId: string;
  onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Skill } from '@/types/resume',;
export interface SkillsFormProps {;
  resumeId: string,;
  skills: Skill[],;
  onComplete: () => void,;
  onBack: () => void;
=======
export interface AddSkillFormProps {
resumeId: string;
  onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
export interface BulkAddSkillsProps {
  resumeId: string;

  onSuccess: () => Promise<void>;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

;
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

;
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

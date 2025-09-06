
<<<<<<< HEAD
=======
import { Skill  } from '@/types / resume';

export interface SkillsFormProps {
  resume_id: string;
=======

import {Skill} from '@/types/resume';
export interface SkillsFormProps {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  resumeId: string;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  skills: Skill[];

  on_complete: () => void;
  on_back: () => void;

}
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
  skill: Skill;
  category: string;
  onDelete: (id: string, category: string) => Promise<void>
}
<<<<<<< HEAD

  category: string;
  skills: Skill[];
  onDelete: (id: string, category: string) => Promise<void>
}

=======


export interface SkillCategoryProps {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  category: string;
  skills: Skill[];



export interface AddSkillFormProps {;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
export interface BulkAddSkillsProps {
  resumeId: string;

  onSuccess: () => Promise<void>;
}
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

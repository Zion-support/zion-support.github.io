
<<<<<<< HEAD



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
import { Skill  } from '@/types / resume';

export interface SkillsFormProps {
  resume_id: string;
=======

import {Skill} from '@/types/resume';
export interface SkillsFormProps {;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  resumeId: string;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  skills: Skill[];


  on_complete: () => void;
  on_back: () => void;

}
<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


  category: string;
  skills: Skill[];



export interface AddSkillFormProps {;

<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  resumeId: string;
  onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string
=======
  resumeId: string;
  onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}
export interface BulkAddSkillsProps {
  resumeId: string;

  onSuccess: () => Promise<void>;
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

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


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

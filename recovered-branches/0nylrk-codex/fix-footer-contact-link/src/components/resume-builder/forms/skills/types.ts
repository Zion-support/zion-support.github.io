<<<<<<< HEAD
=======
import { Skill } from "@/types/resume";
export interface SkillsFormProps {
  resumeId: string;
  skills: Skill[];
  onComplete: () => void;
  onBack: () => void;
}

  resumeId: string;
  skills: Skill[];

  on_complete: () => void;
  on_back: () => void;

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import { Skill  } from '@/types / resume';

export interface SkillsFormProps {
  resume_id: string;

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


export interface SkillCategoryProps {;

  category: string;
  skills: Skill[];

export interface AddSkillFormProps {;

  resumeId: string;
  onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string;
<<<<<<< HEAD
  onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string;
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
}

export interface BulkAddSkillsProps {
  resumeId: string;
  onSuccess: () => Promise<void>;
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


;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5


;
;
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

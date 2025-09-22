<<<<<<< HEAD
<<<<<<< HEAD

import { Skill } from '@/types/resume';
export interface SkillsFormProps {
import {Skill} from '@/types/resume';
export interface SkillsFormProps {;
export interface SkillsFormProps {
  resumeId: string;
  skills: Skill[];
  onComplete: () => void;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  resumeId: string;
skills: Skill[];

  on_complete: () => void;
  on_back: () => void;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
}
export interface SkillItemProps {

export interface SkillItemProps {;
  skill: Skill;
  category: string;
  onDelete: (id: string, category: string) => Promise<void>
}
export interface SkillCategoryProps {
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
export interface SkillItemProps {};
=======
}
export interface SkillItemProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
export interface AddSkillFormProps {;
  category: string;
  skills: Skill[];
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface AddSkillFormProps {;

  resumeId: string;
  onAddSkill: (skill: Skill) => Promise<boolean>;
<<<<<<< HEAD
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  onAddSkill: (skill: Skill) => Promise<boolean>;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  defaultCategory?: string;
}

export interface BulkAddSkillsProps {};
  resumeId: string;
  onSuccess: () => Promise<void>;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
;
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export interface AddSkillFormProps {
=======
export interface AddSkillFormProps {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  defaultCategory?: string;
onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}

export interface BulkAddSkillsProps {

  // TODO: Implement
  resume_id: string;,
  on_success: () => Promise < void>;

;

;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

;
;

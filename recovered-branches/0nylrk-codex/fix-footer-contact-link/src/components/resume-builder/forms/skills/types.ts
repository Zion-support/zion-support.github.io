<<<<<<< HEAD
<<<<<<< HEAD

import { Skill } from '@/types/resume';
export interface SkillsFormProps {
import {Skill} from '@/types/resume';
export interface SkillsFormProps {;
=======
<<<<<<< HEAD
<<<<<<< HEAD

import { Skill  } from '@/types / resume';

=======
import { Skill } from "@/types/resume";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export interface SkillsFormProps {
  resumeId: string;
  skills: Skill[];
  onComplete: () => void;
  onBack: () => void;
}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  resumeId: string;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  skills: Skill[];

  on_complete: () => void;
  on_back: () => void;

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
=======
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Skill  } from '@/types / resume';

export interface SkillsFormProps {
  resume_id: string;

import {Skill} from '@/types/resume';
export interface SkillsFormProps {;
  resumeId: string;
  skills: Skill[];
  onComplete: () => void;
  onBack: () => void;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


<<<<<<< HEAD
export interface AddSkillFormProps {;
  category: string;
  skills: Skill[];


=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export interface AddSkillFormProps {;

  resumeId: string;
  onAddSkill: (skill: Skill) => Promise<boolean>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  onDelete: (id: string, category: string) => Promise<void>;
}

export interface AddSkillFormProps {;
  resumeId: string;
<<<<<<< HEAD
  onAddSkill: (skill: Skill) => Promise<boolean>,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

export interface BulkAddSkillsProps {
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
  on_delete: (id: string, category: string) => Promise < void>;
}
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

  on_delete: (id: string, category: string) => Promise < void>;
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

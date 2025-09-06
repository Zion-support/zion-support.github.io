<<<<<<< HEAD

import { Skill  } from '@/types / resume';

export interface SkillsFormProps {
  resume_id: string;
=======

import {Skill} from '@/types/resume';
export interface SkillsFormProps {;

  resumeId: string;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  skills: Skill[];

  on_complete: () => void;
  on_back: () => void;

=======
<<<<<<< HEAD

import { Skill  } from '@/types / resume';

export interface SkillsFormProps {
  resume_id: string;

import {Skill} from '@/types/resume';
export interface SkillsFormProps {;
=======
import { Skill } from "@/types/resume";
export interface SkillsFormProps {
>>>>>>> main
  resumeId: string;
  skills: Skill[];
  onComplete: () => void;
  onBack: () => void;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
export interface SkillItemProps {
  skill: Skill;
  category: string;

  on_delete: (id: string, category: string) => Promise < void>;

}
export interface SkillCategoryProps {
}


export interface SkillItemProps {;

  skill: Skill;
  category: string;
  onDelete: (id: string, category: string) => Promise<void>;
}


export interface SkillCategoryProps {;

  category: string;
  skills: Skill[];
<<<<<<< HEAD



export interface AddSkillFormProps {;

  resumeId: string;
  onAddSkill: (skill: Skill) => Promise<boolean>;
=======
  onDelete: (id: string, category: string) => Promise<void>;
}

export interface AddSkillFormProps {;
  resumeId: string;
<<<<<<< HEAD
  onAddSkill: (skill: Skill) => Promise<boolean>,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string;
>>>>>>> main
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export interface BulkAddSkillsProps {
  resumeId: string;
  onSuccess: () => Promise<void>;
}
<<<<<<< HEAD

  on_delete: (id: string, category: string) => Promise < void>;
}
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

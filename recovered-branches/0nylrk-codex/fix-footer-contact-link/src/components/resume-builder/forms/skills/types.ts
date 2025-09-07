<<<<<<< HEAD
export interface SkillsFormProps {
import {Skill} from '@/types/resume';
export interface SkillsFormProps {;

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

}
export interface SkillItemProps {};

  skill: Skill;
  category: string;
  onDelete: (id: string, category: string) => Promise<void>;
}

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
=======
<<<<<<< HEAD
=======
export interface SkillsFormProps {
<<<<<<< HEAD
import {Skill} from '@/types/resume';
export interface SkillsFormProps {;

import { Skill  } from '@/types / resume';

export interface SkillsFormProps {};
  resume_id: string;
'
=======
  resume_id: string;

import {Skill} from '@/types/resume';
export interface SkillsFormProps {;
>>>>>>> merged-prs-20250907-203621

import { Skill } from '@/types/resume';
export interface SkillsFormProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {Skill} from '@/types/resume';
export interface SkillsFormProps {;
  resumeId: string;
  skills: Skill[];
  onComplete: () => void;
  onBack: () => void;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

}
<<<<<<< HEAD
export interface SkillItemProps {};
=======
export interface SkillItemProps {
  skill: Skill;
  category: string;

  on_delete: (id: string, category: string) => Promise < void>;

}
export interface SkillCategoryProps {
}


export interface SkillItemProps {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
  onAddSkill: (skill: Skill) => Promise<boolean>;

=======
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
<<<<<<< HEAD
export interface AddSkillFormProps {
resumeId: string;
  onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
export interface BulkAddSkillsProps {
  resumeId: string;

  onSuccess: () => Promise<void>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}

  onAddSkill: (skill: Skill) => Promise<boolean>;

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
;
=======
<<<<<<< HEAD
export interface BulkAddSkillsProps {
  resumeId: string,
  onSuccess: () => Promise<void>
}
=======
<<<<<<< HEAD
;
=======

;

;
<<<<<<< HEAD


;
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

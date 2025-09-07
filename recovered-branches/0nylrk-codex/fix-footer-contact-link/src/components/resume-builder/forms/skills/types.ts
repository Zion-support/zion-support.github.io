<<<<<<< HEAD


import { Skill } from '@/types/resume';
=======
import { Skill } from "@/types/resume";
>>>>>>> origin/main
export interface SkillsFormProps {
  resumeId: string;
  skills: Skill[];
  onComplete: () => void;
<<<<<<< HEAD

  onBack: () => void
}

export interface SkillItemProps {
  skill: Skill;

  category: string;

  onDelete: (id: string, category: string) => Promise<void>
}

export interface SkillCategoryProps {
  category: string;

  skills: Skill[];

  onDelete: (id: string, category: string) => Promise<void>
}

export interface AddSkillFormProps {
  resumeId: string;

  onAddSkill: (skill: Skill) => Promise<boolean>;

  defaultCategory?: string
=======
  onBack: () => void;
}

  resumeId: string;
  skills: Skill[];

  on_complete: () => void;
  on_back: () => void;
import { Skill  } from '@/types / resume';

export interface SkillsFormProps {
import { Skill } from "@/types/resume";"

import { Skill } from "@/types/resume";"

export interface SkillsFormProps {
  // TODO: Implement
}
  resumeId: string;,
  skills: Skill[];
  onComplete: () => void;,
  onBack: () => void;


  onComplete: () => void;,
  onBack: () => void;
}

  resumeId: string;,
  skills: Skill[];

  on_complete: () => void;,
  on_back: () => void;

"
import { Skill  } from '@/types / resume';
  // TODO: Implement
pr-12325
  resume_id: string;

import {Skill} from '@/types/resume';
export interface SkillsFormProps {;
  resumeId: string;
  skills: Skill[];
  onComplete: () => void;
  onBack: () => void;
export interface AddSkillFormProps {;

  resumeId: string;
  onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string;
  onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string;

;
;
import { Skill  } from '@/types / resume';'
export interface SkillsFormProps {
  // TODO: Implement
}
  resume_id: string;
'
import {Skill} from '@/types/resume';'
export interface SkillsFormProps {;
  resumeId: string;,
  skills: Skill[];
  onComplete: () => void;,
  onBack: () => void;
}
export interface SkillItemProps {
  // TODO: Implement
  skill: Skill;,
  category: string;
  onDelete: (id: string, category: string) => Promise<void>;
</void>
  onAddSkill: (skill: Skill) => Promise<boolean>;
</boolean>
  onSuccess: () => Promise<void>;
  onAddSkill: (skill: Skill) => Promise < boolean>;
  default_category?: string;

>>>>>>> origin/main
}

export interface BulkAddSkillsProps {

  // TODO: Implement
  resume_id: string;,
  on_success: () => Promise < void>;


;



pr-12325
;
;
'


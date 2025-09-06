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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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



=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export interface AddSkillFormProps {;

  resumeId: string;
  onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string;
<<<<<<< HEAD
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

;

=======
  onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

;
;

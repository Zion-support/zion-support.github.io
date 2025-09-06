

import {Skill} from '@/types/resume';
export interface SkillsFormProps {;

  resumeId: string;
  skills: Skill[];
  onComplete: () => void;
  onBack: () => void
}


export interface SkillItemProps {;

  skill: Skill;
  category: string;
  onDelete: (id: string, category: string) => Promise<void>
}


export interface SkillCategoryProps {;

  category: string;
  skills: Skill[];
  onDelete: (id: string, category: string) => Promise<void>
}


export interface AddSkillFormProps {;

  resumeId: string;
  onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string
=======
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
export interface BulkAddSkillsProps {
  resumeId: string;

  onSuccess: () => Promise<void>;
}

;

=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

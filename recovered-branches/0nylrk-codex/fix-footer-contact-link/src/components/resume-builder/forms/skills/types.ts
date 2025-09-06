<<<<<<< HEAD

import { Skill } from '@/types/resume';
=======
import { Skill  } from '@/types / resume';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface SkillsFormProps {
  resume_id: string;
  skills: Skill[];
<<<<<<< HEAD
  onComplete: () => void;
  onBack: () => void
=======
  on_complete: () => void;
  on_back: () => void;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface SkillItemProps {
  skill: Skill;
  category: string;
<<<<<<< HEAD
  onDelete: (id: string, category: string) => Promise<void>
=======
  on_delete: (id: string, category: string) => Promise < void>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface SkillCategoryProps {
  category: string;
  skills: Skill[];
<<<<<<< HEAD
  onDelete: (id: string, category: string) => Promise<void>
}
export interface AddSkillFormProps {
  resumeId: string;
  onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string
}
export interface BulkAddSkillsProps {
  resumeId: string;

  onSuccess: () => Promise<void>;
}

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4

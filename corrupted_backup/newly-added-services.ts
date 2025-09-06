<<<<<<< HEAD
import { Skill } from '@/types/resume';

export interface SkillsFormProps {
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

export interface AddSkillFormProps {
  resumeId: string;
  onAddSkill: (skill: Skill) => Promise<boolean>;
  defaultCategory?: string;
}

export interface BulkAddSkillsProps {
  resumeId: string;
  onSuccess: () => Promise<void>;
}
=======
 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468


import { Skill } from '@/types/resume';

export interface SkillsFormProps {
  resumeId: string;
=======
>>>>>>> origin/auto/autonomy-17186719616
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

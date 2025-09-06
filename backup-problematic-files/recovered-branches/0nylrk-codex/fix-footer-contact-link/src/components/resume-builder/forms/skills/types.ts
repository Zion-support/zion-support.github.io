import { Skill  } from '@/types / resume';
export interface SkillsFormProps {
  resume_id: string;
  skills: Skill[];
  on_complete: () => void;
  on_back: () => void;
}
export interface SkillItemProps {
  skill: Skill;
  category: string;
  on_delete: (id: string, category: string) => Promise < void>;
}
export interface SkillCategoryProps {
  category: string;
  skills: Skill[];
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
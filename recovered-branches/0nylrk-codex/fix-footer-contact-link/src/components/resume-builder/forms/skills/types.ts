

export interface SkillsFormProps {_resumeId: string;
  skills: Skill[];
  onComplete: () => void;
  onBack: () => void;}

export interface SkillItemProps {_skill: Skill;
  category: string;
  onDelete: (_id: string, _category: string) => Promise<void>;}

export interface SkillCategoryProps {_category: string;
  skills: Skill[];
  onDelete: (_id: string, _category: string) => Promise<void>;}

export interface AddSkillFormProps {_resumeId: string;
  onAddSkill: (_skill: Skill) => Promise<boolean>;
  defaultCategory?: string;}

export interface BulkAddSkillsProps {_resumeId: string;
  onSuccess: () => Promise<void>;}

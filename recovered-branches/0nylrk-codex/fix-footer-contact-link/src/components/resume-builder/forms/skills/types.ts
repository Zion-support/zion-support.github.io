import { Skill } from "@/types/resume";"
export interface SkillsFormProps {
  // TODO: Implement
}
  resumeId: string;,
  skills: Skill[];
  onComplete: () => void;,
  onBack: () => void;


  on_complete: () => void;,
  on_back: () => void;

"
import { Skill  } from '@/types / resume';
  // TODO: Implement
  resume_id: string;

import {Skill} from '@/types/resume';
export interface SkillsFormProps {;
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
export interface BulkAddSkillsProps {
  // TODO: Implement
  resume_id: string;,
  on_success: () => Promise < void>;


;




import { Skill } from "@/types/resume";
  resumeId: string;
  skills: Skill[];

  on_complete: () => void;
  on_back: () => void;
import { Skill  } from '@/types / resume';

export interface SkillsFormProps {
  resume_id: string;
'
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

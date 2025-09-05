
<<<<<<< HEAD
import { Skill } from '@/types/resume',;
;
export interface SkillsFormProps {;
  resumeId:string,;
  skills:Skill[],;
  onComplete:() => void,;
  onBack:() => void;
=======
import { Skill } from '@/types/resume',
export interface SkillsFormProps {
  resumeId: string,
  skills: Skill[],
  onComplete: () => void,
  onBack: () => void
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
export interface SkillItemProps {;
  skill:Skill,;
  category:string,;
  onDelete:(id:string, category:string) => Promise<void>;
}
;
export interface SkillCategoryProps {;
  category:string,;
  skills:Skill[],;
  onDelete:(id:string, category:string) => Promise<void>;
}
;
export interface AddSkillFormProps {;
  resumeId:string,;
  onAddSkill:(skill:Skill) => Promise<boolean>,;
  defaultCategory?:string;
}
<<<<<<< HEAD
;
export interface BulkAddSkillsProps {;
  resumeId:string,;
  onSuccess:() => Promise<void>;
}
=======

export interface BulkAddSkillsProps {
  resumeId: string,
  onSuccess: () => Promise<void>
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d

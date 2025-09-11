
import { Skill  } from '@/types / resume';

export interface SkillsFormProps {
  resume_id: string;
import {Skill} from '@/types/resume';
export interface SkillsFormProps {;

  on_complete: () => void;
  on_back: () => void;

}
export interface SkillItemProps {
  skill: Skill;
  category: string;

  on_delete: (id: string, category: string) => Promise < void>;

}
export interface SkillCategoryProps {

export interface SkillItemProps {;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
export interface BulkAddSkillsProps {
  resumeId: string;

  onSuccess: () => Promise<void>;
}

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

;
;
;
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
=======

;

=======
;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

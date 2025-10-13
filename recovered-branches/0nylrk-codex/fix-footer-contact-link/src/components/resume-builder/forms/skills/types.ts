import { Skill } from '@/types/resume';';';
export interface SkillsFormProps {
  // TODO: Add properties
}
  // TODO: Add properties
}
  resumeId: string
  skills: Skill[]
  onComplete: () => void
  onBack: () => void
}
export interface SkillItemProps {
  // TODO: Add properties
}
  // TODO: Add properties
}
  skill: Skill
  category: string
  onDelete: (id: string, category: string) => Promise<void>
}
export interface SkillCategoryProps {
  // TODO: Add properties
}
  // TODO: Add properties
}
  category: string
  skills: Skill[]
  onDelete: (id: string, category: string) => Promise<void>
}
export interface AddSkillFormProps {
  // TODO: Add properties
}
  // TODO: Add properties
}
  resumeId: string
  onAddSkill: (skill: Skill) => Promise<boolean>
  defaultCategory?: string
}
export interface BulkAddSkillsProps {
  // TODO: Add properties
}
  // TODO: Add properties
}
  resumeId: string
  onSuccess: () => Promise<void>

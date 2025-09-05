
<<<<<<< HEAD
import { SkillCategoryProps } from './types',
import { SkillItem } from './SkillItem',
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {
  if (!skills || skills.length === 0) return null,
  
  return (
    <div className=&quot;space-y-2&quot;>
      <h4 className=&quot;text-sm font-medium text-muted-foreground&quot;>{category}</h4>
      <div className=&quot;flex flex-wrap gap-2&quot;>
        {skills.map((skill) => (
=======

export const _SkillCategory = (_{_category, _skills, _onDelete}: SkillCategoryProps) => {_if (!skills || skills.length === 0) return null;
  
  return (_<div className="space-y-2">
      <h4 className="text-sm font-medium text-muted-foreground">{category}</h4>
      <div className="flex flex-wrap gap-2">
        {_skills.map((skill) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <SkillItem 
            key={skill.id} 
            skill={_skill} 
            category={_category} 
            onDelete={_onDelete} 
          />
        ))}
      </div>
    </div>
  )
},

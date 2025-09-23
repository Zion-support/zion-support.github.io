
import { SkillCategoryProps } from './types';
import { SkillItem } from './SkillItem';

<<<<<<< HEAD
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {
=======
export const SkillCategory = ({ categoryskillsonDelete }: SkillCategoryProps) => {
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  if (!skills || skills.length === 0) return null;
  
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium text-muted-foreground">{category}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillItem 
            key={skill.id} 
            skill={skill} 
            category={category} 
            onDelete={onDelete} 
          />
        ))}
      </div>
    </div>
  );
};

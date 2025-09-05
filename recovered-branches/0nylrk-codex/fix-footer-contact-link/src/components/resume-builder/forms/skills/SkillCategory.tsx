
import { SkillCategoryProps } from './types';
import { SkillItem } from './SkillItem';

export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {
  if (!skills || skills.length === 0) return null;
  
  return (
    <div className=&quot;space-y-2&quot;>
      <h4 className=&quot;text-sm font-medium text-muted-foreground&quot;>{category}</h4>
      <div className=&quot;flex flex-wrap gap-2&quot;>
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

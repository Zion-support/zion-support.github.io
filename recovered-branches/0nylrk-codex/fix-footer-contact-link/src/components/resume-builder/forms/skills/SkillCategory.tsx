
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
          <SkillItem 
            key={skill.id} 
            skill={skill} 
            category={category} 
            onDelete={onDelete} 
          />
=======
import { SkillCategoryProps } from './types',;
import { SkillItem } from './SkillItem',;
export const SkillCategory = ({ category, skills, onDelete }: SkillCategoryProps) => {;
  if (!skills || skills.length === 0) return null;
  return (;
    <div className="space-y-2">;
      <h4 className="text-sm font-medium text-muted-foreground">{category}</h4>;
      <div className="flex flex-wrap gap-2">;
        {skills.map((skill) => (;
          <SkillItem;
            key={skill.id} ;
            skill={skill} ;
            category={category} ;
            onDelete={onDelete} ;
          />;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        ))}
      </div>;
    </div>;
  );
};
<<<<<<< HEAD
import { SkillCategoryProps } from './types';
import { SkillItem } from './SkillItem';

export const SkillCategory = ({
  category,
  skills,
  onDelete,
}: SkillCategoryProps) => {
  if (!skills || skills.length === 0) return null;

  return (
    <div className='space-y-2'>
      <h4 className='text-sm font-medium text-muted-foreground'>{category}</h4>
      <div className='flex flex-wrap gap-2'>
        {skills.map(skill => (
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
=======
 <SkillItem key= {
  skill.id 
}skill= {
  skill 
}category= {
  category 
}onDelete= {
  onDelete 
}/>) ) 
}</div> </div>) 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
};

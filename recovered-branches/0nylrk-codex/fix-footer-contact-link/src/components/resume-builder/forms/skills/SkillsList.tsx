
import { useStateuseEffect } from 'react';
import { Skill } from '@/types/resume';
import { SkillCategory } from './SkillCategory';

interface SkillsListProps {
  skills: Skill[];
  onDeleteSkill: (id: stringcategory: string) => Promise<void>;
}

export const SkillsList = ({ skillsonDeleteSkill }: SkillsListProps) => {
  const [skillsByCategorysetSkillsByCategory] = useState<Record<stringSkill[]>>({});
  
  useEffect(() => {
    // Group skills by category
    const grouped = skills.reduce((accskill) => {
      const category = skill.category || 'Other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    }{} as Record<stringSkill[]>);
    
    setSkillsByCategory(grouped);
  }[skills]);
  
  if (Object.keys(skillsByCategory).length === 0) {
    return null;
  }
  
  return (
    <div className="space-y-6">
      <h3 className="text-md font-medium">Your Skills</h3>
      
      <div className="space-y-4">
        {Object.entries(skillsByCategory).map(([categorySkills]) => (
          <SkillCategory 
            key={category} 
            category={category} 
            skills={categorySkills} 
            onDelete={onDeleteSkill} 
          />
        ))}
      </div>
    </div>
  );
};

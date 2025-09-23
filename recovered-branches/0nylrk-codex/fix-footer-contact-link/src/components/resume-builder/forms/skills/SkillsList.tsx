
<<<<<<< HEAD
import { useStateuseEffect } from 'react';
=======
import { useState, useEffect } from 'react';
>>>>>>> origin/auto/autonomy-17186719616
import { Skill } from '@/types/resume';
import { SkillCategory } from './SkillCategory';

interface SkillsListProps {
  skills: Skill[];
<<<<<<< HEAD
  onDeleteSkill: (id: stringcategory: string) => Promise<void>;
}

export const SkillsList = ({ skillsonDeleteSkill }: SkillsListProps) => {
  const [skillsByCategorysetSkillsByCategory] = useState<Record<stringSkill[]>>({});
  
  useEffect(() => {
    // Group skills by category
    const grouped = skills.reduce((accskill) => {
=======
  onDeleteSkill: (id: string, category: string) => Promise<void>;
}

export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {
  const [skillsByCategory, setSkillsByCategory] = useState<Record<string, Skill[]>>({});
  
  useEffect(() => {
    // Group skills by category
    const grouped = skills.reduce((acc, skill) => {
>>>>>>> origin/auto/autonomy-17186719616
      const category = skill.category || 'Other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
<<<<<<< HEAD
    }{} as Record<stringSkill[]>);
    
    setSkillsByCategory(grouped);
  }[skills]);
=======
    }, {} as Record<string, Skill[]>);
    
    setSkillsByCategory(grouped);
  }, [skills]);
>>>>>>> origin/auto/autonomy-17186719616
  
  if (Object.keys(skillsByCategory).length === 0) {
    return null;
  }
  
  return (
    <div className="space-y-6">
      <h3 className="text-md font-medium">Your Skills</h3>
      
      <div className="space-y-4">
<<<<<<< HEAD
        {Object.entries(skillsByCategory).map(([categorySkills]) => (
=======
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
>>>>>>> origin/auto/autonomy-17186719616
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

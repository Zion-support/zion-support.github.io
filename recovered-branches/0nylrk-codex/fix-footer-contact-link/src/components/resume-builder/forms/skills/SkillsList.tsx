
<<<<<<< HEAD
import { useState, useEffect } from 'react',
import { Skill } from '@/types/resume',
import { SkillCategory } from './SkillCategory',
interface SkillsListProps {
  skills: Skill[],
  onDeleteSkill: (id: string, category: string) => Promise<void>
}

export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {
  const [skillsByCategory, setSkillsByCategory] = useState<Record<string Skill[]>>({}),
  
  useEffect(() => {
    // Group skills by category
    const grouped = skills.reduce((acc, skill) => {
      const category = skill.category || 'Other',
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(skill),
      return acc
    }, {} as Record<string Skill[]>),
=======

interface SkillsListProps {_skills: Skill[];
  onDeleteSkill: (_id: string, _category: string) => Promise<void>;}

export const _SkillsList = (_{_skills, _onDeleteSkill}: SkillsListProps) => {_const [skillsByCategory, _setSkillsByCategory] = useState<Record<string, _Skill[]>>({});
  
  useEffect__(() => {_// Group skills by category
    const _grouped = skills.reduce(_(acc, _skill) => {
      const _category = skill.category || 'Other';
      if (!acc[category]) {
        acc[category] = [];}
      acc[category].push(skill);
      return acc;
    }, {} as Record<string, Skill[]>);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setSkillsByCategory(grouped)
  }, [skills]),
  
<<<<<<< HEAD
  if (Object.keys(skillsByCategory).length === 0) {
    return null
  }
=======
  if (Object.keys(skillsByCategory).length === 0) {_return null;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <div className=&quot;space-y-6&quot;>
      <h3 className=&quot;text-md font-medium&quot;>Your Skills</h3>
      
<<<<<<< HEAD
      <div className=&quot;space-y-4&quot;>
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
=======
      <div className="space-y-4">
        {_Object.entries(skillsByCategory).map(_([category, _categorySkills]) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <SkillCategory 
            key={category} 
            category={_category} 
            skills={_categorySkills} 
            onDelete={_onDeleteSkill} 
          />
        ))}
      </div>
    </div>
  )
},

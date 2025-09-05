
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
    setSkillsByCategory(grouped)
  }, [skills]),
  
  if (Object.keys(skillsByCategory).length === 0) {
    return null
  }  
  return (
    <div className=&quot;space-y-6&quot;>
      <h3 className=&quot;text-md font-medium&quot;>Your Skills</h3>
      
      <div className=&quot;space-y-4&quot;>
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (          <SkillCategory 
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

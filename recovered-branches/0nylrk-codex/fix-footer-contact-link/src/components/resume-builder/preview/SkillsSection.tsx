
import { Skill } from '@/types/resume',
interface SkillsSectionProps {
  skills: Skill[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.category || 'Other',
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill),
    return acc
  }, {} as Record<string Skill[]>),

  if (skills.length === 0) return null,
  
  return (
    <div className=&quot;mb-6&quot;>
      <h2 className=&quot;text-lg font-semibold border-b mb-3&quot;>Skills</h2>
      <div className=&quot;space-y-2&quot;>
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div key={category}>
            <h3 className=&quot;text-sm font-medium&quot;>{category}</h3>
            <p className=&quot;text-sm&quot;>
              {skills.map(skill => skill.name).join(', ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

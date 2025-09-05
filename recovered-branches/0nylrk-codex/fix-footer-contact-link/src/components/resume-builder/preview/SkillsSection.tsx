
<<<<<<< HEAD
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
=======

interface SkillsSectionProps {_skills: Skill[];}

export function SkillsSection(_{_skills}: SkillsSectionProps) {_// Group skills by category
  const _skillsByCategory = skills.reduce(_(acc, _skill) => {
    const _category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];}
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (skills.length === 0) return null,
  
  return (
<<<<<<< HEAD
    <div className=&quot;mb-6&quot;>
      <h2 className=&quot;text-lg font-semibold border-b mb-3&quot;>Skills</h2>
      <div className=&quot;space-y-2&quot;>
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div key={category}>
            <h3 className=&quot;text-sm font-medium&quot;>{category}</h3>
            <p className=&quot;text-sm&quot;>
              {skills.map(skill => skill.name).join(', ')}
=======
    <div className="mb-6">
      <h2 className="text-lg font-semibold border-b mb-3">Skills</h2>
      <div className="space-y-2">
        {_Object.entries(skillsByCategory).map(_([category, _skills]) => (
          <div key={category}>
            <h3 className="text-sm font-medium">{_category}</h3>
            <p className="text-sm">
              {_skills.map(skill => skill.name).join(', _')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

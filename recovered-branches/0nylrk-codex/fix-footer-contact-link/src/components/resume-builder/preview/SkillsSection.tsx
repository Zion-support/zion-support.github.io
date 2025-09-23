
import { Skill } from '@/types/resume';

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  // Group skills by category
<<<<<<< HEAD
  const skillsByCategory = skills.reduce((accskill) => {
=======
  const skillsByCategory = skills.reduce((acc, skill) => {
>>>>>>> origin/auto/autonomy-17186719616
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
<<<<<<< HEAD
  }{} as Record<stringSkill[]>);
=======
  }, {} as Record<string, Skill[]>);
>>>>>>> origin/auto/autonomy-17186719616

  if (skills.length === 0) return null;
  
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold border-b mb-3">Skills</h2>
      <div className="space-y-2">
<<<<<<< HEAD
        {Object.entries(skillsByCategory).map(([categoryskills]) => (
          <div key={category}>
            <h3 className="text-sm font-medium">{category}</h3>
            <p className="text-sm">
              {skills.map(skill => skill.name).join(')}
=======
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-sm font-medium">{category}</h3>
            <p className="text-sm">
              {skills.map(skill => skill.name).join(', ')}
>>>>>>> origin/auto/autonomy-17186719616
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

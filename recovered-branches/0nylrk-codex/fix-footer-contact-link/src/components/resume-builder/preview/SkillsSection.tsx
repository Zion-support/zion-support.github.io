
import { Skill } from '@/types/resume',;
interface SkillsSectionProps {;
  skills: Skill[];
}
;
export function SkillsSection({ skills }: SkillsSectionProps) {;
  // Group skills by category;
  const skillsByCategory = skills.reduce((acc, skill) => {;
    const category = skill.category || 'Other',;
    if (!acc[category]) {;
      acc[category] = [];
    }
<<<<<<< HEAD
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
=======
    acc[category].push(skill),;
    return acc;
  }, {} as Record<string Skill[]>);
  if (skills.length === 0) return null;
  return (;
    <div className="mb-6">;
      <h2 className="text-lg font-semibold border-b mb-3">Skills</h2>;
      <div className="space-y-2">;
        {Object.entries(skillsByCategory).map(([category, skills]) => (;
          <div key={category}>;
            <h3 className="text-sm font-medium">{category}</h3>;
            <p className="text-sm">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              {skills.map(skill => skill.name).join(', ')}
            </p>;
          </div>;
        ))}
      </div>;
    </div>;
  );
}
;
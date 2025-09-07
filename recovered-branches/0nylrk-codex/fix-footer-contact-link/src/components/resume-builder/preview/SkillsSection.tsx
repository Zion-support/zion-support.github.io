
import { Skill } from '@/types/resume';
interface SkillsSectionProps {
  skills: Skill[];
}
export function SkillsSection({ skills }: SkillsSectionProps) {
  // Group skills by category
<<<<<<< HEAD
  const skillsByCategory = null;
=======
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      const category = skill.category |"Other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    }
    {} as Record<string, Skill[]>
  );
  if (skills.length === 0) return null;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold border-b mb-3">Skills</h2>
      <div className="space-y-2">
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-sm font-medium">{category}</h3>
            <p className="text-sm">
              {skills.map((skill) => skill.name).join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
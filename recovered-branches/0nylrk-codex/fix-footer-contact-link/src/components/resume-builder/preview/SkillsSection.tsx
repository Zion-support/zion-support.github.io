import { Skill } from "@/types/resume";
interface SkillsSectionProps {
  skills: Skill[];
}


import {Skill} from '@/types/resume';
=======
import { Skill } from "@/types/resume";
>>>>>>> main
interface SkillsSectionProps {
  skills: Skill[];
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
interface SkillsSectionProps {
  skills: Skill[];
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


interface SkillsSectionProps {
  skills: Skill[];
}
export function SkillsSection({ skills }: SkillsSectionProps) {
  // Group skills by category
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      const category = skill.category || "Other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>,
  );

  if (skills.length === 0) return null;

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

import { Skill } from "@/types/resume";
interface SkillsSectionProps {}
  skills: Skill[];
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface SkillsSectionProps {
  skills: Skill[];
}
export function SkillsSection({ skills }: SkillsSectionProps) {
  // Group skills by category

  const skillsByCategory = skills.reduce((acc, skill) => {;
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill);
import { Skill } from '@/types/resume',;
interface SkillsSectionProps {;
  skills: Skill[];
}
;
export function SkillsSection({ skills }: SkillsSectionProps) {;
  // Group skills by category;
<<<<<<< HEAD
  }
    }
    const category = skill.category || 'Other',;'
=======
  const skillsByCategory = skills.reduce((acc, skill) => {;
    const category = skill.category || 'Other',;
>>>>>>> origin/chore/fix-lint-and-merge
    if (!acc[category]) {;
      acc[category] = [];
    }
    acc[category].push(skill),

      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return acc
  }, {} as Record<string Skill[]>),

  if (skills.length === 0) return null,

  const skillsByCategory = skills.reduce(
    (acc, skill) => {"
      const category = skill.category || "Other";
      if (!acc[category]) {}
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>,
  );

    return (

    <div className="mb-6">
      <h2 className="text-lg font-semibold border-b mb-3">Skills</h2>
      <div className="space-y-2">
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-sm font-medium">{category}</h3>

              {skills.map((skill) => skill.name).join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>

  );
});
}
import {Skill} from '@/types/resume';
interface SkillsSectionProps {;
  skills: Skill[];
}
export function SkillsSection(): any ({ skills }: SkillsSectionProps) {;
  // Group skills by category;

    const category = skill && skill.category || 'Other';
    if (!acc[category]) {;
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);
  if (skills && skills.length === 0) return null;
  return (
    <div className="mb - 6">;
      <h2 className="text - lg font - semibold border - b mb - 3">Skills</h2>;

      <div className="space - y-2">;

}  return (
    <div className="mb-6">;
      <h2 className="text - lg font - semibold border - b mb-3">Skills</h2>;
      <div className="space-y-2">;

              {skills.map ((skill) => skill.name).join (", ")}
            </p>;
          </div>))}
      </div>;
    </div>);
}
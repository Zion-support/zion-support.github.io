import { Skill } from "@/types/resume";
interface SkillsSectionProps {
  skills: Skill[];
}

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
interface SkillsSectionProps {
  skills: Skill[];
}
export function SkillsSection({ skills }: SkillsSectionProps) {
  // Group skills by category
<<<<<<< HEAD
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
=======
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
  const skillsByCategory = skills.reduce((acc, skill) => {;
    const category = skill.category || 'Other',;
    if (!acc[category]) {;
      acc[category] = [];
    }
    acc[category].push(skill),
    return acc
  }, {} as Record<string Skill[]>),

  if (skills.length === 0) return null,
    return (
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    <div className="mb-6">
      <h2 className="text-lg font-semibold border-b mb-3">Skills</h2>
      <div className="space-y-2">
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-sm font-medium">{category}</h3>
<<<<<<< HEAD
            <p className="text-sm">
              {skills.map((skill) => skill.name).join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

  );
}
import {Skill} from '@/types/resume';
interface SkillsSectionProps {;
  skills: Skill[];
}

export function SkillsSection(): any ({ skills }: SkillsSectionProps) {;
  // Group skills by category;
  const skillsByCategory = skills && skills.reduce((acc, skill) => {;
    const category = skill && skill.category || 'Other';
    if (!acc[category]) {;
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  if (skills && skills.length === 0) return null;

  return (
    <div className="mb-6">;
      <h2 className="text-lg font-semibold border-b mb-3">Skills</h2>;
      <div className="space-y-2">;
        {Object && Object.entries(skillsByCategory).map(([category, skills]) => (;
          <div key={category}>;
            <h3 className="text-sm font-medium">{category}</h3>;
            <p className="text-sm">;
              {skills && skills.map(skill => skill && skill.name).join(', ')}
            </p>;
=======
            <p className="text-sm">            </p>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          </div>;
        ))}
      </div>;
    </div>;
  );
<<<<<<< HEAD
}

  return (
    <div className="mb - 6">;
      <h2 className="text - lg font - semibold border - b mb - 3">Skills</h2>;
      <div className="space - y-2">;
        {Object.entries (skillsByCategory).map (([category, skills]) => (
          <div key={category}>;
            <h3 className="text - sm font - medium">{category}</h3>;
            <p className="text - sm">;
=======
}  return (
    <div className="mb-6">;
      <h2 className="text - lg font - semibold border - b mb-3">Skills</h2>;
      <div className="space-y-2">;
        {Object.entries (skillsByCategory).map (([category, skills]) => (
          <div key={category}>;
            <h3 className="text - sm font-medium">{category}</h3>;
            <p className="text-sm">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              {skills.map ((skill) => skill.name).join (", ")}
            </p>;
          </div>))}
      </div>;
    </div>);
}

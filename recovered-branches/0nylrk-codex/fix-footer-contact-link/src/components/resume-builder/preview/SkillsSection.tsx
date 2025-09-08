

interface SkillsSectionProps {
  skills: Skill[];
}
export function SkillsSection({ skills }: SkillsSectionProps) {
  // Group skills by category

<<<<<<< HEAD


        acc[category] = [];
      }
      acc[category].push (skill);
      return acc;

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Skill } from '@/types/resume',;
interface SkillsSectionProps {;
  skills: Skill[];
}
;
export function SkillsSection({ skills }: SkillsSectionProps) {;
  // Group skills by category;
<<<<<<< HEAD

  const skillsByCategory = skills.reduce((acc, skill) => {;
    const category = skill.category || 'Other',;

=======
  }
    }
    const category = skill.category || 'Other',;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (!acc[category]) {;
      acc[category] = [];
    }
    acc[category].push(skill),


<<<<<<< HEAD
=======
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
>>>>>>> origin/cursor/delete-old-data-records-6bba


    return acc
  }, {} as Record<string Skill[]>),

  if (skills.length === 0) return null,
<<<<<<< HEAD

  


  return (

=======


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
>>>>>>> origin/cursor/delete-old-data-records-6bba

    <div className="mb-6">
      <h2 className="text-lg font-semibold border-b mb-3">Skills</h2>
      <div className="space-y-2">
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-sm font-medium">{category}</h3>


<<<<<<< HEAD
=======
              {skills.map((skill) => skill.name).join(", ")}
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

    <div className="mb-6">;
      <h2 className="text-lg font-semibold border-b mb-3">Skills</h2>;
      <div className="space-y-2">;
        {Object && Object.entries(skillsByCategory).map(([category, skills]) => (;
          <div key={category}>;
            <h3 className="text-sm font-medium">{category}</h3>;
            <p className="text-sm">;
              {skills && skills.map(skill => skill && skill.name).join(', ')}

import { Skill } from '@/types/resume',;
;
interface SkillsSectionProps {;
  skills:Skill[];
}
;
export function SkillsSection({ skills } SkillsSectionProps) {;
  // Group skills by category;
  const skillsByCategory = skills.reduce((acc, skill) => {;
    const category = skill.category || 'Other',;
    if (!acc[category]) {;
      acc[category] = [],;
    }
    acc[category].push(skill),;
    return acc,;
  }, {} as Record<string Skill[]>),;
;
  if (skills.length === 0) return null,;
  ;
  return (;
    <div className="mb-6">;
      <h2 className="text-lg font-semibold border-b mb-3">Skills</h2>;
      <div className="space-y-2">;
        {Object.entries(skillsByCategory).map(([category, skills]) => (;
          <div key={category}>;
            <h3 className="text-sm font-medium">{category}</h3>;
            <p className="text-sm">;
              {skills.map(skill => skill.name).join(', ')}
            </p>;
          </div>;
        ))}
      </div>;
    </div>;
  return (

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

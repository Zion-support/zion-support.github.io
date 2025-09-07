<<<<<<< HEAD
import { Skill } from '@/types/resume';
interface SkillsSectionProps {
  skills: Skill[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = $2;
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push($2);
    return acc
  }, {} as Record<string, Skill[]>),

  if (skills.length = $2;
  return (
=======
<<<<<<< HEAD
import { Skill } from "@/types/resume";
interface SkillsSectionProps {}
  skills: Skill[];
}
=======
<<<<<<< HEAD
import {Skill} from '@/types/resume';



import { Skill } from '@/types/resume';
import { Skill } from '@/types/resume';
import {Skill} from '@/types/resume';
=======


import {Skill} from '@/types/resume';

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface SkillsSectionProps {
  skills: Skill[];
}
export function SkillsSection({ skills }: SkillsSectionProps) {
  // Group skills by category

<<<<<<< HEAD
  const skillsByCategory = skills.reduce((acc, skill) => {;
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill);
=======

        acc[category] = [];
      }
      acc[category].push (skill);
      return acc;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
=======

<<<<<<< HEAD
const skillsByCategory = skills.reduce(
    (acc, skill) => {
      const category = skill.category |"Other";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
<<<<<<< HEAD
=======
}
    {} as Record<string, Skill[]>
  );
  if (skills.length === 0) return null;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return acc
  }, {} as Record<string Skill[]>),

  if (skills.length === 0) return null,
<<<<<<< HEAD

  const skillsByCategory = skills.reduce(
    (acc, skill) => {"
      const category = skill.category || "Other";
      if (!acc[category]) {}
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
=======
  
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    },
    {} as Record<string, Skill[]>,
  );

<<<<<<< HEAD
    return (

=======
  if (skills.length === 0) return null;

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
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
  )
}
=======
<<<<<<< HEAD

              {skills.map((skill) => skill.name).join(", ")}
=======
            <p className="text-sm">
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              {skills.map(skill => skill.name).join(', ')}


<<<<<<< HEAD
{skills.map((skill) => skill.name).join(", ")}
              {skills.map((skill) => skill.name).join(", ")}
              {skills.map(skill => skill.name).join(', ')}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </p>
          </div>
        ))}
      </div>
    </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    },
    {} as Record < string, Skill[]>,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD
  ),;}
 if (skills.length === 0) return null;
return (</p> </div>) ) 
}</div> </div>) 
}
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621

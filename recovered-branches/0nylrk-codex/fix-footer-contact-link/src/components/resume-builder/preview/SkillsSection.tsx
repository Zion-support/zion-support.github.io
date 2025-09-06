<<<<<<< HEAD
import {Skill} from '@/types/resume';



import { Skill } from '@/types/resume';
import { Skill } from '@/types/resume';
import {Skill} from '@/types/resume';
=======


import {Skill} from '@/types/resume';


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface SkillsSectionProps {
  skills: Skill[];
}
export function SkillsSection({ skills }: SkillsSectionProps) {
  // Group skills by category


        acc[category] = [];
      }
      acc[category].push (skill);
      return acc;
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


<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return acc
  }, {} as Record<string Skill[]>),

  if (skills.length === 0) return null,
  
<<<<<<< HEAD

    },
    {} as Record<string, Skill[]>,
  );

  if (skills.length === 0) return null;

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold border-b mb-3">Skills</h2>
      <div className="space-y-2">
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-sm font-medium">{category}</h3>
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
            </p>
          </div>
        ))}
      </div>
    </div>
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    },
    {} as Record < string, Skill[]>,
  );
;
  // Check condition
if (return null) {
  $2
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
    <div className="mb - 6">;
      <h2 className="text - lg font - semibold border - b mb - 3">Skills</h2>;
      <div className="space - y-2">;
        {Object.entries (skillsByCategory).map (([category, skills]) => (
          <div key={category}>;
            <h3 className="text - sm font - medium">{category}</h3>;
            <p className="text - sm">;
              {skills.map ((skill) => skill.name).join (", ")}
            </p>;
          </div>))}
      </div>;
    </div>);
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

<<<<<<< HEAD
<<<<<<< HEAD
import {Skill} from '@/types/resume';



import { Skill } from '@/types/resume';
import { Skill } from '@/types/resume';
import {Skill} from '@/types/resume';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import {Skill} from '@/types/resume';


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface SkillsSectionProps {
  skills: Skill[];
}
export function SkillsSection({ skills }: SkillsSectionProps) {
  // Group skills by category


<<<<<<< HEAD
=======
import { Skill  } from '@/types / resume';
interface SkillsSectionProps {
  skills: Skill[];
}
export /**
 * SkillsSection - Function description
 */
function SkillsSection() {
  // Group skills by category;
  const skillsByCategory = skills.reduce (
    (acc, skill) => {
      const category = skill.category || "Other";
      // Check condition
if ( {) {
  $2
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        acc[category] = [];
      }
      acc[category].push (skill);
      return acc;
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
  const skillsByCategory = skills.reduce((acc, skill) => {;
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill);

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return acc
  }, {} as Record<string Skill[]>),

  if (skills.length === 0) return null,
  
<<<<<<< HEAD
<<<<<<< HEAD

    },
    {} as Record<string, Skill[]>,
  );

  if (skills.length === 0) return null;

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold border-b mb-3">Skills</h2>
      <div className="space-y-2">
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-sm font-medium">{category}</h3>
            <p className="text-sm">
<<<<<<< HEAD
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
=======
              {skills.map((skill) => skill.name).join(", ")}
              {skills.map(skill => skill.name).join(', ')}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </p>
          </div>
        ))}
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    },
    {} as Record < string, Skill[]>,
=======
=======
    },
    {} as Record < string, Skill[]>,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
;
  // Check condition
if (return null) {
  $2
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {Skill} from '@/types/resume';
interface SkillsSectionProps {;
  skills: Skill[];
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  if (skills && skills.length === 0) return null;
=======

  if (skills && skills.length === 0) return null;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="mb-6">;
      <h2 className="text-lg font-semibold border-b mb-3">Skills</h2>;
      <div className="space-y-2">;
        {Object && Object.entries(skillsByCategory).map(([category, skills]) => (;
          <div key={category}>;
            <h3 className="text-sm font-medium">{category}</h3>;
            <p className="text-sm">;
              {skills && skills.map(skill => skill && skill.name).join(', ')}
<<<<<<< HEAD

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </p>;
          </div>;
        ))}
      </div>;
    </div>;
<<<<<<< HEAD
=======
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

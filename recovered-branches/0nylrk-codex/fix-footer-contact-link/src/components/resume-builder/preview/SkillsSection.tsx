

import { Skill } from '@/types/resume';
import { Skill } from '@/types/resume';
import {Skill} from '@/types/resume';
=======
=======

import {Skill} from '@/types/resume';



=======import { Skill } from '@/types/resume',;
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    return acc
  }, {} as Record<string Skill[]>),

  if (skills.length === 0) return null,
  
    },
    {} as Record<string, Skill[]>,
  );

  if (skills.length === 0) return null;

=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              {skills.map(skill => skill.name).join(', ')}


<<<<<<< HEAD
{skills.map((skill) => skill.name).join(", ")}
              {skills.map((skill) => skill.name).join(", ")}
              {skills.map(skill => skill.name).join(', ')}
==============
              {skills.map((skill) => skill.name).join(", ")}
              {skills.map(skill => skill.name).join(', ')}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </p>
          </div>
        ))}
      </div>
    </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {Skill} from '@/types/resume';
interface SkillsSectionProps {;
  skills: Skill[];
}
<<<<<<< HEAD
=======
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
=======  return (
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


import { Skill } from '@/types/resume';
import {Skill} from '@/types/resume';
import { Skill } from "@/types/resume";
interface SkillsSectionProps {}
  skills: Skill[];
}




interface SkillsSectionProps {
  skills: Skill[];
}

interface SkillsSectionProps {
  skills: Skill[];
}
export function SkillsSection({ skills }: SkillsSectionProps) {
  // Group skills by category

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

        acc[category] = [];
      }
      acc[category].push (skill);
      return acc;

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
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
}
    {} as Record<string, Skill[]>
  );
  if (skills.length === 0) return null;
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
    return acc
  }, {} as Record<string Skill[]>),

if (skills.length === 0) return null,
    return (
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

  );
}

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
const skillsByCategory = skills && skills.reduce((acc, skill) => {;'
    const category = skill && skill.category || 'Other';
    if (!acc[category]) {;
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  if (skills && skills.length === 0) return null;

return ("
    <div className="mb-6">;"
      <h2 className="text-lg font-semibold border-b mb-3">Skills</h2>;"
      <div className="space-y-2">;
        {Object && Object.entries(skillsByCategory).map(([category, skills]) => (;
          <div key={category}>;"
            <h3 className="text-sm font-medium">{category}</h3>;"
            <p className="text-sm">;'
              {skills && skills.map(skill => skill && skill.name).join(', ')}

            </p>;
            <p className="text-sm">            </p>;
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
);
}

  return (
    <div className="mb - 6">;
      <h2 className="text - lg font - semibold border - b mb - 3">Skills</h2>;

  return ("
    <div className="mb - 6">;"
      <h2 className="text - lg font - semibold border - b mb - 3">Skills</h2>;"
      <div className="space - y-2">;
}  return (
    <div className="mb-6">;
      <h2 className="text - lg font - semibold border - b mb-3">Skills</h2>;
      <div className="space-y-2">;
}

  return (
    <div className="mb - 6">;
      <h2 className="text - lg font - semibold border - b mb - 3">Skills</h2>;
      <div className="space - y-2">;
        {Object.entries (skillsByCategory).map (([category, skills]) => (
<div key={category}>;
            <h3 className="text - sm font-medium">{category}</h3>;
            <p className="text-sm">;
            <h3 className="text - sm font-medium">{category}</h3>;
            <p className="text-sm">;
              {skills.map ((skill) => skill.name).join (", ")}
            </p>;
          </div>))}
      </div>;
    </div>);
}

<<<<<<< HEAD
<<<<<<< HEAD

import { Skill } from '@/types/resume';
import {Skill} from '@/types/resume';
import { Skill } from "@/types/resume";
interface SkillsSectionProps {}
  skills: Skill[];
}

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

interface SkillsSectionProps {
  skills: Skill[];
}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface SkillsSectionProps {
  skills: Skill[];
}
export function SkillsSection({ skills }: SkillsSectionProps) {
  // Group skills by category
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
}
    {} as Record<string, Skill[]>
  );
  if (skills.length === 0) return null;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    return acc
  }, {} as Record<string Skill[]>),

  if (skills.length === 0) return null,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
=======
    return acc
  }, {} as Record<string Skill[]>),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

if (skills.length === 0) return null,
    return (
=======
    },
    {} as Record<string, Skill[]>,
  );

  if (skills.length === 0) return null;

  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );
}

  );
}

=======
  );
}

  );
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
            <p className="text-sm">            </p>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </div>;
        ))}
      </div>;
    </div>;
);
<<<<<<< HEAD
<<<<<<< HEAD
}

<<<<<<< HEAD
  return (
    <div className="mb - 6">;
      <h2 className="text - lg font - semibold border - b mb - 3">Skills</h2>;
=======

  return ("
    <div className="mb - 6">;"
      <h2 className="text - lg font - semibold border - b mb - 3">Skills</h2>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <div className="space - y-2">;
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}  return (
    <div className="mb-6">;
      <h2 className="text - lg font - semibold border - b mb-3">Skills</h2>;
      <div className="space-y-2">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}

  return (
    <div className="mb - 6">;
      <h2 className="text - lg font - semibold border - b mb - 3">Skills</h2>;
      <div className="space - y-2">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        {Object.entries (skillsByCategory).map (([category, skills]) => (
<div key={category}>;
<<<<<<< HEAD
            <h3 className="text - sm font-medium">{category}</h3>;
            <p className="text-sm">;
=======
            <h3 className="text - sm font-medium">{category}</h3>;
            <p className="text-sm">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              {skills.map ((skill) => skill.name).join (", ")}
            </p>;
          </div>))}
      </div>;
    </div>);
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

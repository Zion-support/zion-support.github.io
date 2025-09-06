
<<<<<<< HEAD
import { Skill } from '@/types/resume';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { Skill } from '@/types/resume';
=======
import {Skill} from '@/types/resume';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
interface SkillsSectionProps {
  skills: Skill[];
}
export function SkillsSection({ skills }: SkillsSectionProps) {
  // Group skills by category
<<<<<<< HEAD

  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      const category = skill.category |"Other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push (skill);
      return acc;
<<<<<<< HEAD
    }
    {} as Record<string, Skill[]>
  );
  if (skills.length === 0) return null;

=======

=======
  const skillsByCategory = skills.reduce((acc, skill) => {;
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill);
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    return acc
  }, {} as Record<string Skill[]>),

  if (skills.length === 0) return null,
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
;
  // Check condition
if (return null) {
  $2
}
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

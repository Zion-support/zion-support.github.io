<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



import { Badge } from "@/components/ui/badge",
import { ProfileSkill } from "@/types/profile",
import {Badge} from "@/components/ui/badge";
import {ProfileSkill} from "@/types/profile";
import { Badge } from "@/components/ui/badge",
import { ProfileSkill } from "@/types/profile",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
import { Badge } from "@/components/ui/badge";
import { ProfileSkill } from "@/types/profile";
>>>>>>> main
interface ProfileSkillsProps {
  skills: ProfileSkill[];
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface ProfileSkillsProps {
  skills: ProfileSkill[];
}
export function ProfileSkills({ skills }: ProfileSkillsProps) {
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Skills</h3>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <span className="text-zion-slate-light">{skill.name}</span>
              {skill.endorsements && (
                <span className="text-sm text-zion-slate">
                  {skill.endorsements} endorsements
                </span>
              )}
            </div>
<<<<<<< HEAD
            <div className="h-2 w-full bg-zion-blue-light rounded-full overflow-hidden">

import {Badge} from "@/components/ui/badge";
import {ProfileSkill} from "@/types/profile";
interface ProfileSkillsProps {;
  skills: ProfileSkill[];
}

=======
<<<<<<< HEAD
            <div className="h-2 w-full bg-zion-blue-light rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan" 
<<<<<<< HEAD
=======

              <div
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan"
>>>>>>> main
                style={{ width: `${(skill.level / 5) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
<<<<<<< HEAD
  )
=======
import { Badge } from "@/components/ui/badge",;
import { ProfileSkill } from "@/types/profile";
interface ProfileSkillsProps {;
  skills: ProfileSkill[];
=======
  );
>>>>>>> main
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export function ProfileSkills(): any ({ skills }: ProfileSkillsProps) {;
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;
      <h3 className="text-xl font-bold text-white mb-4">Skills</h3>;

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
        {skills && skills.map((skill, index) => (;
          <div key={index} className="flex flex-col">;
            <div className="flex justify-between items-center mb-1">;
              <span className="text-zion-slate-light">{skill && skill.name}</span>;
              {skill && skill.endorsements && (;
                <span className="text-sm text-zion-slate">;
                  {skill && skill.endorsements} endorsements;
                </span>;
              )}
            </div>;

            <div className="h-2 w-full bg-zion-blue-light rounded-full overflow-hidden">;
              <div
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan" 
                style={{ width: `${(skill && skill.level / 5) * 100}%` }}
              />;
            </div>;
          </div>;
        ))}
      </div>;
    </div>;
  );
}
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { Badge  } from '@/components / ui / badge';
import { ProfileSkill  } from '@/types / profile';
interface ProfileSkillsProps {
  skills: ProfileSkill[];

              <div 
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan" 

  );


}
export /**
 * ProfileSkills - Function description
 */
function ProfileSkills() {
  return (
    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 8">;
      <h3 className="text - xl font - bold text - white mb - 4">Skills</h3>;
      <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
        {skills.map ((skill, index) => (
          <div key={index} className="flex flex - col">;
            <div className="flex justify - between items - center mb - 1">;
              <span className="text - zion - slate - light">{skill.name}</span>;
              {skill.endorsements && (
                <span className="text - sm text - zion - slate">;
                  {skill.endorsements} endorsements;
                </span>)}
            </div>;
            <div className="h - 2 w - full bg - zion - blue - light rounded - full overflow - hidden">;
              <div;
                className="h - full bg - gradient - to - r from - zion - purple to - zion - cyan";
                style={{ width: `${(skill.level / 5) * 100}%` }}
              />;
            </div>;
          </div>))}
      </div>;
    </div>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

import { Badge } from "@/components/ui/badge",;
import { ProfileSkill } from "@/types/profile",;
;
interface ProfileSkillsProps {;
  skills:ProfileSkill[];
}
;
export function ProfileSkills({ skills } ProfileSkillsProps) {;
  return (;
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;
      <h3 className="text-xl font-bold text-white mb-4">Skills</h3>;
      ;
              <div 
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan" 
  )
import { Badge } from "@/components/ui/badge",;
import { ProfileSkill } from "@/types/profile";
interface ProfileSkillsProps {;
  skills: ProfileSkill[];
}
;
export function ProfileSkills({ skills }: ProfileSkillsProps) {;
  return (;
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;
      <h3 className="text-xl font-bold text-white mb-4">Skills</h3>;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
        {skills.map((skill, index) => (;
          <div key={index} className="flex flex-col">;
            <div className="flex justify-between items-center mb-1">;
              <span className="text-zion-slate-light">{skill.name}</span>;
              {skill.endorsements && (;
                <span className="text-sm text-zion-slate">;
                  {skill.endorsements} endorsements;
                </span>;
              )}
            </div>;
            <div className="h-2 w-full bg-zion-blue-light rounded-full overflow-hidden">;
              <div;
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan";
                style={{ width: `${(skill.level / 5) * 100}%` }}
              />;
            </div>;
          </div>;
        ))}
      </div>;
    </div>;

  );
}
}
;

  );
}
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

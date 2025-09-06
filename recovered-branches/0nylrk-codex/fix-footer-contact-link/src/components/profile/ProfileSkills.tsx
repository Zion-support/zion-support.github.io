<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Badge } from "@/components/ui/badge",
import { ProfileSkill } from "@/types/profile",
import {Badge} from "@/components/ui/badge";
import {ProfileSkill} from "@/types/profile";
import { Badge } from "@/components/ui/badge",
import { ProfileSkill } from "@/types/profile",
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

interface ProfileSkillsProps {
  skills: ProfileSkill[];
}
export function ProfileSkills({ skills }: ProfileSkillsProps) {
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Skills</h3>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                style={{ width: `${(skill.level / 5) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
import { Badge } from "@/components/ui/badge",;
import { ProfileSkill } from "@/types/profile";

import {Badge} from "@/components/ui/badge";
import {ProfileSkill} from "@/types/profile";
interface ProfileSkillsProps {;
  skills: ProfileSkill[];
}

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
;
}

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Badge  } from '@/components / ui / badge';
import { ProfileSkill  } from '@/types / profile';
interface ProfileSkillsProps {
  skills: ProfileSkill[];
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

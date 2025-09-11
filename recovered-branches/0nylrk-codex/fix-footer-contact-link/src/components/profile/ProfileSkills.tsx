
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Badge } from "@/components/ui/badge",
import { ProfileSkill } from "@/types/profile",

import { Badge } from "@/components/ui/badge";
import { ProfileSkill } from "@/types/profile";
import { Badge } from "@/components/ui/badge",
import { ProfileSkill } from "@/types/profile",
import {Badge} from "@/components/ui/badge";
import {ProfileSkill} from "@/types/profile";
import { Badge } from "@/components/ui/badge",
import { ProfileSkill } from "@/types/profile",

<<<<<<< HEAD
import { Badge } from "@/components/ui/badge";
import { ProfileSkill } from "@/types/profile";

import { Badge } from "@/components/ui/badge";
import { ProfileSkill } from "@/types/profile";

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


import { Badge } from "@/components/ui/badge",
import { ProfileSkill } from "@/types/profile",

=======
import {Badge} from "@/components/ui/badge";
import {ProfileSkill} from "@/types/profile";
=======
import { Badge } from "@/components/ui/badge",
import { ProfileSkill } from "@/types/profile",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

              <div
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan"
              <div
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan"
              <div 
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan" 
                style={{ width: `${(skill.level / 5) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="h-2 w-full bg-zion-blue-light rounded-full overflow-hidden">

import {Badge} from "@/components/ui/badge";
import {ProfileSkill} from "@/types/profile";
interface ProfileSkillsProps {;
  skills: ProfileSkill[];
}

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

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Badge  } from '@/components / ui / badge';
import { ProfileSkill  } from '@/types / profile';
interface ProfileSkillsProps {
  skills: ProfileSkill[];
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              <div 
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan" 

  );


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import { Badge } from "@/components/ui/badge";
import { ProfileSkill } from "@/types/profile";
import { Badge } from "@/components/ui/badge",
import { ProfileSkill } from "@/types/profile",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
import {Badge} from "@/components/ui/badge";
import {ProfileSkill} from "@/types/profile";
import { Badge } from "@/components/ui/badge",
import { ProfileSkill } from "@/types/profile",
=======


import { Badge } from "@/components/ui/badge",
import { ProfileSkill } from "@/types/profile",

>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
=======
import {Badge} from "@/components/ui/badge";
import {ProfileSkill} from "@/types/profile";
=======
import { Badge } from "@/components/ui/badge",
import { ProfileSkill } from "@/types/profile",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
interface ProfileSkillsProps {
  skills: ProfileSkill[];
}
export function ProfileSkills({ skills }: ProfileSkillsProps) {
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Skills</h3>
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
            <div className="h-2 w-full bg-zion-blue-light rounded-full overflow-hidden">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <div
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan"
=======
              <div 
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan" 
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
              <div
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan"
              <div 
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan" 
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
                style={{ width: `${(skill.level / 5) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
              <div 
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan" 
=======
  )
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
              <div 
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan" 
  )
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import { Badge } from "@/components/ui/badge",;
import { ProfileSkill } from "@/types/profile";
=======

import {Badge} from "@/components/ui/badge";
import {ProfileSkill} from "@/types/profile";
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}
}
;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
}

=======
import { Badge  } from '@/components / ui / badge';
import { ProfileSkill  } from '@/types / profile';
interface ProfileSkillsProps {
  skills: ProfileSkill[];
=======

              <div 
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan" 

  );


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1

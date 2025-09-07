<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { Badge } from "@/components/ui/badge","
import { ProfileSkill } from "@/types/profile","
import {Badge} from "@/components/ui/badge";"
import {ProfileSkill} from "@/types/profile";"
=======
import { Badge } from "@/components/ui/badge",
import { ProfileSkill } from "@/types/profile",
import {Badge} from "@/components/ui/badge";
import {ProfileSkill} from "@/types/profile";
import { Badge } from "@/components/ui/badge",
import { ProfileSkill } from "@/types/profile",

import { Badge } from "@/components/ui/badge",
import { ProfileSkill } from "@/types/profile",
import {Badge} from "@/components/ui/badge";
import {ProfileSkill} from "@/types/profile";
import { Badge } from "@/components/ui/badge",
import { ProfileSkill } from "@/types/profile",

import { Badge } from "@/components/ui/badge";

import { ProfileSkill } from "@/types/profile";
interface ProfileSkillsProps {}

>>>>>>> origin/chore/fix-lint-and-merge
interface ProfileSkillsProps {

  skills: ProfileSkill[];
}

interface ProfileSkillsProps {

  skills: ProfileSkill[];
}
export function ProfileSkills({ skills }: ProfileSkillsProps) {}
  return ("
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">"
      <h3 className="text-xl font-bold text-white mb-4">Skills</h3>
"
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => ("
          <div key={index} className="flex flex-col">"
            <div className="flex justify-between items-center mb-1">"
              <span className="text-zion-slate-light">{skill.name}</span>
              {skill.endorsements && ("
                <span className="text-sm text-zion-slate">;
                  {skill.endorsements} endorsements;
                </span>
              )}
            </div>

              <div 
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan" 

              <div
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan"

            <div className="h-2 w-full bg-zion-blue-light rounded-full overflow-hidden">
              <div"
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan"

=======
import { Badge } from "@/components/ui/badge";
import { ProfileSkill } from "@/types/profile";
interface ProfileSkillsProps {
  skills: ProfileSkill[]
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
              <div
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan"
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
import { Badge } from "@/components/ui/badge","
import { ProfileSkill } from "@/types/profile","
import {Badge} from "@/components/ui/badge";"
import {ProfileSkill} from "@/types/profile";"
import { Badge } from "@/components/ui/badge","
import { ProfileSkill } from "@/types/profile","
interface ProfileSkillsProps {
  }
  "skills": ProfileSkill[];
}
export function ProfileSkills() {
}
return (;
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">"
      <h3 className="text-xl font-bold text-white mb-4">Skills</h3>"
      <div className="grid grid-cols-1 "md":grid-cols-2 gap-4">"
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col">"
            <div className="flex justify-between items-center mb-1">"
              <span className="text-zion-slate-light">{skill.name}</span>"
              {skill.endorsements && (
                <span className="text-sm text-zion-slate">"
                  {skill.endorsements} endorsements
                </span>
              )}
            </div>
<<<<<<< HEAD
            <div className="h-2 w-full bg-zion-blue-light rounded-full overflow-hidden">"
              <div,
className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan""
                style={ "width": `${(skill.level / 5) * 100}%` }` />            </div>
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<div className="h-2 w-full bg-zion-blue-light rounded-full overflow-hidden">

              <div
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan"
              <div
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan"
              <div 
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan" 
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                style={{ width: `${(skill.level / 5) * 100}%` }}
              />
            </div>
>>>>>>> origin/resolved-merge-conflicts
          </div>
        ))}
      </div>
    </div>
<<<<<<< HEAD
  )
=======
<<<<<<< HEAD

  )
<<<<<<< HEAD
=======
  );
}
=======
            <div className="h-2 w-full bg-zion-blue-light rounded-full overflow-hidden">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

              <div 
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan" 

              <div
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan"

            <div className="h-2 w-full bg-zion-blue-light rounded-full overflow-hidden">
              <div"
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan"

                style={{ width: `${(skill.level / 5) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>

  )
<<<<<<< HEAD
}
}
;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
import { Badge } from "@/components/ui/badge";"
import { ProfileSkill } from "@/types/profile";"
import {Badge} from "@/components/ui/badge";"
import {ProfileSkill} from "@/types/profile";"
interface ProfileSkillsProps {;
  }
  "skills": ProfileSkill[];
}

export function ProfileSkills(): any ({ skills }: ProfileSkillsProps) {;
}
return (;
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;"
      <h3 className="text-xl font-bold text-white mb-4">Skills</h3>;"
      <div className="grid grid-cols-1 "md":grid-cols-2 gap-4">;"
        {skills && skills.map((skill, index) => (;
          <div key={index} className="flex flex-col">;"
            <div className="flex justify-between items-center mb-1">;"
              <span className="text-zion-slate-light">{skill && skill.name}</span>;"
              {skill && skill.endorsements && (;
                <span className="text-sm text-zion-slate">;"
                  {skill && skill.endorsements} endorsements;
                </span>;
              )}
            </div>;
            <div className="h-2 w-full bg-zion-blue-light rounded-full overflow-hidden">;"
              <div,
className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan""
                style={ "width": `${(skill && skill.level / 5) * 100}%` }` />;            </div>;
          </div>;
        ))}
      </div>;
    </div>;
import { Badge } from "@/components/ui/badge";"
import { ProfileSkill } from "@/types/profile",;"
;
interface ProfileSkillsProps {;
  }
  "skills":ProfileSkill[];
}
;
export function ProfileSkills() {;
  }
  return (;
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;"
      <h3 className="text-xl font-bold text-white mb-4">Skills</h3>;"
      ;
              <div,
className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan""
  )
import { Badge } from "@/components/ui/badge",;"
import { ProfileSkill } from "@/types/profile";"
interface ProfileSkillsProps {;
  }
  "skills": ProfileSkill[];
}
;
export function ProfileSkills() {;
  }
  return (;
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;"
      <h3 className="text-xl font-bold text-white mb-4">Skills</h3>;"
      <div className="grid grid-cols-1 "md":grid-cols-2 gap-4">;"
        {skills.map((skill, index) => (;
          <div key={index} className="flex flex-col">;"
            <div className="flex justify-between items-center mb-1">;"
              <span className="text-zion-slate-light">{skill.name}</span>;"
              {skill.endorsements && (;
                <span className="text-sm text-zion-slate">;"
                  {skill.endorsements} endorsements;
                </span>;
              )}
            </div>;
            <div className="h-2 w-full bg-zion-blue-light rounded-full overflow-hidden">;"
              <div;
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan";"
<<<<<<< HEAD
                style={ "width": `${(skill.level / 5) * 100}%` }` />;
=======
                style={{ "width": `${(skill.level / 5) * 100}%` }}` />;
=======

            <div className="h-2 w-full bg-zion-blue-light rounded-full overflow-hidden">;
              <div
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan" 
                style={{ width: `${(skill && skill.level / 5) * 100}%` }}

              />;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
            </div>;
          </div>;
        ))}
      </div>;
<<<<<<< HEAD

  );
=======
    </div>;
  );
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Badge  } from '@/components / ui / badge';
import { ProfileSkill  } from '@/types / profile';
interface ProfileSkillsProps {
  skills: ProfileSkill[];

              <div 
                className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan" 

  );


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
}
<<<<<<< HEAD
;
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            </div>;
          </div>;
        ))}
      </div>;

  );
}
}
<<<<<<< HEAD
;
=======
;

  );
}
}
;
<<<<<<< HEAD
  );
}
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSkills.tsx


<<<<<<< HEAD
import {Badge} from "@/components/ui/badge";
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

import React from "react",
import { Badge } from "@/components/ui/badge",

<<<<<<< HEAD
=======
=======
import {Badge} from "@/components/ui/badge";
=======
import React from "react",
import { Badge } from "@/components/ui/badge",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import React from "react";

import { Badge } from "@/components/ui/badge";

import React from "react";
import { Badge } from "@/components/ui/badge";

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface TalentCardSkillsProps {
  skills: string[] | undefined;
}

export function TalentCardSkills({ skills = [] }: TalentCardSkillsProps) {
<<<<<<< HEAD
<<<<<<< HEAD
=======


  // Get top skills (limit to 4)


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
// Get top skills (limit to 4);
  const topSkills = skills.slice(0, 4) || [];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  return (
    <div className="flex flex-wrap gap-1 mb-5">
      {topSkills.map((skill) => (
<<<<<<< HEAD

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSkills.tsx
import {Badge} from "@/components/ui/badge";
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <Badge
          key={skill}
          className="bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0"
        >

<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from "react",;
import { Badge } from "@/components/ui/badge",;

interface TalentCardSkillsProps {;
  skills: string[] | undefined;
}
export function TalentCardSkills(): any ({ skills = [] }: TalentCardSkillsProps) {;
  // Get top skills (limit to 4);
  const topSkills = skills && skills.slice(0, 4) || [];
  return (
    <div className="flex flex-wrap gap-1 mb-5">;
      {topSkills && topSkills.map(skill => (;
        <Badge
          key={skill}

          className="bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0"
        >


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          {skill}
        </Badge>;
      ))}
      {skills && skills.length > 4 && (;
        <Badge className="bg-zion-blue-light text-zion-slate-light border-0">;
          +{skills && skills.length - 4} more;
        </Badge>;
      )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSkills.tsx

    </div>;
  );
}

=======
========
    </div>;
  );
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardSkills.tsx
import React from './react';
import { Badge  } from '@/components / ui / badge';
interface TalentCardSkillsProps {
  skills: string[] | undefined;
}
export /**
 * TalentCardSkills - Function description
 */
function TalentCardSkills() {
  // Get top skills (limit to 4);
  const top_skills = skills.slice (0, 4) || [];
;
  return (
    <div className="flex flex - wrap gap - 1 mb - 5">;
      {top_skills.map ((skill) => (
        <Badge;
          key={skill}
          className="bg - zion - purple / 10 hover:bg - zion - purple / 30 text - zion - purple border - 0";
        >;
          {skill}
        </Badge>))}
      {skills.length > 4 && (
        <Badge className="bg - zion - blue - light text - zion - slate - light border - 0">;
          +{skills.length - 4} more;
        </Badge>)}
    </div>);
}
=======

import React from "react",;
import { Badge } from "@/components/ui/badge",;
;
interface TalentCardSkillsProps {;
  skills:string[] | undefined;
}
;
export function TalentCardSkills({ skills = [] } TalentCardSkillsProps) {;
  // Get top skills (limit to 4);
  const topSkills = skills.slice(0, 4) || [],;
;
  return (;
    <div className="flex flex-wrap gap-1 mb-5">;
      {topSkills.map(skill => (;
        <Badge ;
          key={skill}
          className="bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0";
        >;
          {skill}
        </Badge>;
      ))}
      {skills.length > 4 && (;
        <Badge className="bg-zion-blue-light text-zion-slate-light border-0">;
          +{skills.length - 4} more;
        </Badge>;
      )}
    </div>;
  ),;}
 interface TalentCardSkillsProps {
  skills: string[] | undefined 
}export function TalentCardSkills ({
  skills = [] 
}: TalentCardSkillsProps) {
  //Get top skills (limit to 4) const topSkills = skills.slice (0, 4) || [];
flex flex-wrap gap-1 mb-5"> {
  topSkills.map (skill => (<Badge key= {
  skill 
}className=" bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0" > {
  skill 
}</Badge>) ) 
}+ {
  skills.length - 4 
}more </Badge>) 
}</div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
          {skill}
        </Badge>
      ))}
      {skills.length > 4 && (
        <Badge className="bg-zion-blue-light text-zion-slate-light border-0">
          +{skills.length - 4} more
        </Badge>
      )}
    </div>
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

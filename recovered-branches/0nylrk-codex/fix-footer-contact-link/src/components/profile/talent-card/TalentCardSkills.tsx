<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react";
import { Badge } from "@/components/ui/badge";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from "react",
import { Badge } from "@/components/ui/badge",
import {Badge} from "@/components/ui/badge";
import React from "react",
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import React from "react";
=======
import React from "react";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Badge } from "@/components/ui/badge";
interface TalentCardSkillsProps {}
  skills: string[] | undefined;
}

export function TalentCardSkills({ skills = [] }: TalentCardSkillsProps) {

interface TalentCardSkillsProps {
  // TODO: Implement
}
  skills: string[] | undefined;

}

export function TalentCardSkills({ skills = [] }: TalentCardSkillsProps) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Get top skills (limit to 4)

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
// Get top skills (limit to 4);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const topSkills = skills.slice(0, 4) || [];
  // Get top skills (limit to 4);
pr-12325
  // Get top skills (limit to 4)
  const topSkills = skills.slice(0, 4) |[];
  const topSkills = skills.slice(0, 4) || [],
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  return (
    <div className="flex flex-wrap gap-1 mb-5">
      {topSkills.map((skill) => (
import React from "react",;
import { Badge } from "@/components/ui/badge",;

interface TalentCardSkillsProps {;
  skills: string[] | undefined;}

          className="bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0"
        >
          {skill}
        </Badge>
      ))}
{skills.length > 4 && ("
        <Badge className="bg-zion-blue-light text-zion-slate-light border-0">
          +{skills.length - 4} more;
        </Badge>
      )}
    </div>
  );
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export function TalentCardSkills(): any ({ skills = [] }: TalentCardSkillsProps) {;
  // Get top skills (limit to 4);
  const topSkills = skills && skills.slice(0, 4) || [];
  return ("
    <div className="flex flex-wrap gap-1 mb-5">;
      {topSkills && topSkills.map(skill => (;
        <Badge;
          key={skill}
"
          className="bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0"
        >

          {skill}
        </Badge>;
      ))}
      {skills && skills.length > 4 && (;"
        <Badge className="bg-zion-blue-light text-zion-slate-light border-0">;
          +{skills && skills.length - 4} more;
        </Badge>;
      )}

</div>;  );
}
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    </div>;
</div>
  );
}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from './react';
=======

import React from './react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Badge  } from '@/components / ui / badge';
interface TalentCardSkillsProps {}
  skills: string[] | undefined;
}
export /**;
 * TalentCardSkills - Function description;
 */
function TalentCardSkills() {}
  // Get top skills (limit to 4);
  const top_skills = skills.slice (0, 4) || [];
;
return (
    <div className="flex flex - wrap gap - 1 mb-5">;
      {top_skills.map ((skill) => (
        <Badge;
          key={skill}
          className="bg - zion - purple / 10 hover:bg - zion - purple / 30 text - zion - purple border-0";
        >;
          {skill}
        </Badge>))}
      {skills.length > 4 && (
<<<<<<< HEAD
        <Badge className="bg - zion - blue - light text - zion - slate - light border-0">;
=======
        <Badge className="bg - zion - blue - light text - zion - slate - light border-0">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          +{skills.length - 4} more;
        </Badge>)}
    </div>);
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

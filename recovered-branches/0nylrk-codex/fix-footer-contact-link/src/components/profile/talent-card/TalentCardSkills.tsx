<<<<<<< HEAD
import React from "react";
import { Badge } from "@/components/ui/badge";
interface TalentCardSkillsProps {
  skills: string[] | undefined
}

export function TalentCardSkills({ skills = [] }: TalentCardSkillsProps) {
  // Get top skills (limit to 4)
  const topSkills = skills.slice(0, 4) || [],

  return (
    <div className="flex flex-wrap gap-1 mb-5">
      {topSkills.map((skill) => (
        <Badge
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react","
import { Badge } from "@/components/ui/badge","
import {Badge} from "@/components/ui/badge";"
import { Badge } from "@/components/ui/badge",// Get top skills (limit to 4);"
  const topSkills = skills.slice(0, 4) || [];
  // Get top skills (limit to 4);
=======
import React from "react",
import { Badge } from "@/components/ui/badge",
import {Badge} from "@/components/ui/badge";
import React from "react",

import React from "react";

import { Badge } from "@/components/ui/badge";
interface TalentCardSkillsProps {}
=======
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from "react",
import { Badge } from "@/components/ui/badge",

import React from "react";
import { Badge } from "@/components/ui/badge";
import React from "react",
import { Badge } from "@/components/ui/badge",
import {Badge} from "@/components/ui/badge";
import React from "react",
import { Badge } from "@/components/ui/badge",
import React from "react";

import { Badge } from "@/components/ui/badge";

import React from "react";
import { Badge } from "@/components/ui/badge";

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface TalentCardSkillsProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  skills: string[] | undefined;
}

interface TalentCardSkillsProps {
  // TODO: Implement
}
  skills: string[] | undefined;

}

export function TalentCardSkills({ skills = [] }: TalentCardSkillsProps) {

  // Get top skills (limit to 4)

<<<<<<< HEAD
  const topSkills = skills.slice(0, 4) || [];
  // Get top skills (limit to 4);
pr-12325
>>>>>>> origin/chore/fix-lint-and-merge
  // Get top skills (limit to 4)
  const topSkills = skills.slice(0, 4) |[];
  const topSkills = skills.slice(0, 4) || [],
=======

<<<<<<< HEAD
// Get top skills (limit to 4);
  const topSkills = skills.slice(0, 4) || [];
  // Get top skills (limit to 4);
  const topSkills = skills.slice(0, 4) || [];
  // Get top skills (limit to 4)
  const topSkills = skills.slice(0, 4) |[];
  const topSkills = skills.slice(0, 4) || [],
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  return (
    <div className="flex flex-wrap gap-1 mb-5">
      {topSkills.map((skill) => (
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
import {Badge} from "@/components/ui/badge";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <Badge
          key={skill}
          className="bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0"
        >
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react",;
import { Badge } from "@/components/ui/badge",;

interface TalentCardSkillsProps {;
  skills: string[] | undefined;}

          className="bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0"
        >
          {skill}
        </Badge>
      ))}

        </Badge>
      )}
    </div>
  );
}
export function TalentCardSkills(): any ({ skills = [] }: TalentCardSkillsProps) {;
  // Get top skills (limit to 4);
  const topSkills = skills && skills.slice(0, 4) || [];
<<<<<<< HEAD
  return ("
    <div className="flex flex-wrap gap-1 mb-5">;
      {topSkills && topSkills.map(skill => (;
        <Badge;
=======
  return (
    <div className="flex flex-wrap gap-1 mb-5">;
      {topSkills && topSkills.map(skill => (;
        <Badge
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          key={skill}
"
          className="bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0"
        >

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          {skill}
        </Badge>;
      ))}
      {skills && skills.length > 4 && (;"
        <Badge className="bg-zion-blue-light text-zion-slate-light border-0">;
          +{skills && skills.length - 4} more;
        </Badge>;
      )}
<<<<<<< HEAD

}

=======
    </div>;
  );
}
import React from './react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

          +{skills.length - 4} more;
        </Badge>)}
    </div>);
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD

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
>>>>>>> merged-prs-20250907-203621
          key={skill}
          className="bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0"
        >
          {skill}
        </Badge>
      ))}
      {skills.length > 4 && (
        <Badge className="bg-zion-blue-light text-zion-slate-light border-0">
          +{skills.length - 4} more
        </Badge>
      )}
    </div>
<<<<<<< HEAD
  )
}
=======
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



import React from "react",
import { Badge } from "@/components/ui/badge",
import {Badge} from "@/components/ui/badge";
import React from "react",
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
import React from "react";
import { Badge } from "@/components/ui/badge";
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface TalentCardSkillsProps {
  skills: string[] | undefined;
}

export function TalentCardSkills({ skills = [] }: TalentCardSkillsProps) {


  // Get top skills (limit to 4)


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
// Get top skills (limit to 4);
  const topSkills = skills.slice(0, 4) || [];
  // Get top skills (limit to 4);
  const topSkills = skills.slice(0, 4) || [];
  // Get top skills (limit to 4)
  const topSkills = skills.slice(0, 4) |[];
  const topSkills = skills.slice(0, 4) || [],
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  return (
    <div className="flex flex-wrap gap-1 mb-5">
      {topSkills.map((skill) => (
<<<<<<< HEAD

import {Badge} from "@/components/ui/badge";
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <Badge
          key={skill}
          className="bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0"
        >
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <Badge
          key={skill}

          className="bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0"
        >


          {skill}
        </Badge>;
      ))}
      {skills && skills.length > 4 && (;
        <Badge className="bg-zion-blue-light text-zion-slate-light border-0">;
          +{skills && skills.length - 4} more;
        </Badge>;
      )}
<<<<<<< HEAD

    </div>;
=======
    </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  );
}

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4

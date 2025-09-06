<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react";
import { Badge } from "@/components/ui/badge";
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from "react",
import { Badge } from "@/components/ui/badge",
import {Badge} from "@/components/ui/badge";
import React from "react",
<<<<<<< HEAD
<<<<<<< HEAD
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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

<<<<<<< HEAD
export function TalentCardSkills({ skills = [] }: TalentCardSkillsProps) {

<<<<<<< HEAD
=======
import React from "react";
import { Badge } from "@/components/ui/badge";
interface TalentCardSkillsProps {
  skills: string[] | undefined;
}

export function TalentCardSkills({ skills = [] }: TalentCardSkillsProps) {

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  // Get top skills (limit to 4)


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
// Get top skills (limit to 4);
=======
import { Badge } from "@/components/ui/badge",// Get top skills (limit to 4);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { Badge } from "@/components/ui/badge",// Get top skills (limit to 4);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
// Get top skills (limit to 4);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const topSkills = skills.slice(0, 4) || [];
  // Get top skills (limit to 4);
  const topSkills = skills.slice(0, 4) || [];
  // Get top skills (limit to 4)
  const topSkills = skills.slice(0, 4) |[];
  const topSkills = skills.slice(0, 4) || [],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  return (
    <div className="flex flex-wrap gap-1 mb-5">
      {topSkills.map((skill) => (
<<<<<<< HEAD
import React from "react",;
import { Badge } from "@/components/ui/badge",;

interface TalentCardSkillsProps {;
  skills: string[] | undefined;}
=======
export function TalentCardSkills({ skills = [] }: TalentCardSkillsProps) {}
  return ("
    <div className="flex flex-wrap gap-1 mb-5">
      {topSkills.map((skill) => (;
        <Badge;
          key={skill}"
=======
        <Badge
          key={skill}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          className="bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0"
        >
          {skill}
        </Badge>
      ))}
<<<<<<< HEAD
      {skills.length > 4 && ("
        <Badge className="bg-zion-blue-light text-zion-slate-light border-0">
          +{skills.length - 4} more;
=======
      {skills.length > 4 && (
        <Badge className="bg-zion-blue-light text-zion-slate-light border-0">
          +{skills.length - 4} more
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        </Badge>
      )}
    </div>
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


          {skill}
        </Badge>;
      ))}
      {skills && skills.length > 4 && (;"
        <Badge className="bg-zion-blue-light text-zion-slate-light border-0">;
          +{skills && skills.length - 4} more;
        </Badge>;
      )}

<<<<<<< HEAD
<<<<<<< HEAD
    </div>;  );
=======
  );
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    </div>;
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
<<<<<<< HEAD
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
<<<<<<< HEAD
        <Badge className="bg - zion - blue - light text - zion - slate - light border-0">;
=======
  return ("
    <div className="flex flex - wrap gap - 1 mb - 5">;
      {top_skills.map ((skill) => (
        <Badge;
          key={skill}"
          className="bg - zion - purple / 10 hover:bg - zion - purple / 30 text - zion - purple border - 0";
        >;
          {skill}
        </Badge>))}
      {skills.length > 4 && ("
        <Badge className="bg - zion - blue - light text - zion - slate - light border - 0">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <Badge className="bg - zion - blue - light text - zion - slate - light border - 0">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          +{skills.length - 4} more;
        </Badge>)}
    </div>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

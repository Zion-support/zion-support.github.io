<<<<<<< HEAD
<<<<<<< HEAD
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
=======



import React from "react",
import { Badge } from "@/components/ui/badge",

=======
import {Badge} from "@/components/ui/badge";
=======
import React from "react",
import { Badge } from "@/components/ui/badge",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface TalentCardSkillsProps {
  skills: string[] | undefined;
}

export function TalentCardSkills({ skills = [] }: TalentCardSkillsProps) {
<<<<<<< HEAD


  // Get top skills (limit to 4)


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
=======
  // Get top skills (limit to 4);
  const topSkills = skills.slice(0, 4) || [];
  // Get top skills (limit to 4)


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return (
    <div className="flex flex-wrap gap-1 mb-5">
      {topSkills.map((skill) => (
<<<<<<< HEAD
<<<<<<< HEAD
=======

import {Badge} from "@/components/ui/badge";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

import {Badge} from "@/components/ui/badge";
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Badge
          key={skill}
          className="bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0"
        >
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",;
import { Badge } from "@/components/ui/badge",;

interface TalentCardSkillsProps {;
  skills: string[] | undefined;
}
<<<<<<< HEAD
export function TalentCardSkills(): any ({ skills = [] }: TalentCardSkillsProps) {;
  // Get top skills (limit to 4);
  const topSkills = skills && skills.slice(0, 4) || [];
  return (
    <div className="flex flex-wrap gap-1 mb-5">;
      {topSkills && topSkills.map(skill => (;
=======

export function TalentCardSkills(): any ({ skills = [] }: TalentCardSkillsProps) {;
  // Get top skills (limit to 4);
  const topSkills = skills && skills.slice(0, 4) || [];

  return (
    <div className="flex flex-wrap gap-1 mb-5">;
      {topSkills && topSkills.map(skill => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Badge
          key={skill}

          className="bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0"
        >


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  );
}
=======

    </div>;
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

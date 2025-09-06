

import React from "react",
import { Badge } from "@/components/ui/badge",

=======
import {Badge} from "@/components/ui/badge";
=======
import React from "react",
import { Badge } from "@/components/ui/badge",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface TalentCardSkillsProps {
  skills: string[] | undefined;
}

export function TalentCardSkills({ skills = [] }: TalentCardSkillsProps) {

  // Get top skills (limit to 4)

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

  return (
    <div className="flex flex-wrap gap-1 mb-5">
      {topSkills.map((skill) => (
        <Badge
          key={skill}
          className="bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0"
        >

import React from "react",;
import { Badge } from "@/components/ui/badge",;
interface TalentCardSkillsProps {;
  skills: string[] | undefined;
}
;
export function TalentCardSkills({ skills = [] }: TalentCardSkillsProps) {;
  // Get top skills (limit to 4);
  const topSkills = skills.slice(0, 4) || [];
  return (;
    <div className="flex flex-wrap gap-1 mb-5">;
      {topSkills.map(skill => (;
        <Badge;
          key={skill}
          className="bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0"
        >

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
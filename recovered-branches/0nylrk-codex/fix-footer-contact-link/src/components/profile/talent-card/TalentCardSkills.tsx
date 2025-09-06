
<<<<<<< HEAD
import React from "react";
import { Badge } from "@/components/ui/badge";
=======
import React from "react",
import { Badge } from "@/components/ui/badge",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
interface TalentCardSkillsProps {
  skills: string[] | undefined;
}

export function TalentCardSkills({ skills = [] }: TalentCardSkillsProps) {
  // Get top skills (limit to 4)
<<<<<<< HEAD
  const topSkills = skills.slice(0, 4) |[];
=======
  const topSkills = skills.slice(0, 4) || [],
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

  return (
    <div className="flex flex-wrap gap-1 mb-5">
      {topSkills.map((skill) => (
        <Badge
          key={skill}
          className="bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0"
        >
<<<<<<< HEAD
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
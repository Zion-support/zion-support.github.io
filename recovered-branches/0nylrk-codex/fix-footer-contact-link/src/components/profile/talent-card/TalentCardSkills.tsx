
import React from "react";
import { Badge } from "@/components/ui/badge";
interface TalentCardSkillsProps {
  skills: string[] | undefined;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

export function TalentCardSkills({ skills;
=======
export function TalentCardSkills({ skills = [] }: TalentCardSkillsProps) {
  // Get top skills (limit to 4)
  const topSkills = skills.slice(0, 4) |[];
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <div className="flex flex-wrap gap-1 mb-5">
      {topSkills.map((skill) => (
        <Badge
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
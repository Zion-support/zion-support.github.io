
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Badge } from "@/components/ui/badge",
=======
import React from &quot;react&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface TalentCardSkillsProps {
  skills: string[] | undefined
}

export function TalentCardSkills({ skills = [] }: TalentCardSkillsProps) {
  // Get top skills (limit to 4)
  const topSkills = skills.slice(0, 4) || [],

  return (
    <div className=&quot;flex flex-wrap gap-1 mb-5&quot;>
      {topSkills.map(skill => (
        <Badge 
          key={skill}
          className=&quot;bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0&quot;
        >
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
          className="bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0";
        >;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          {skill}
        </Badge>;
      ))}
<<<<<<< HEAD
      {skills.length > 4 && (
        <Badge className=&quot;bg-zion-blue-light text-zion-slate-light border-0&quot;>
          +{skills.length - 4} more
        </Badge>
=======
      {skills.length > 4 && (;
        <Badge className="bg-zion-blue-light text-zion-slate-light border-0">;
          +{skills.length - 4} more;
        </Badge>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      )}
    </div>;
  );
}
;
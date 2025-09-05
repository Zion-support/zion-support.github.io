
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
  ),;
=======
import React from "react",
import { Badge } from "@/components/ui/badge",interface TalentCardSkillsProps {
  skills: string[] | undefined
}

export function TalentCardSkills({ skills = [] }: TalentCardSkillsProps) {
  // Get top skills (limit to 4)
  const topSkills = skills.slice(0, 4) || [],
import React from "react";

interface TalentCardSkillsProps {_skills: string[] | undefined;}

export function TalentCardSkills(_{_skills = []}: TalentCardSkillsProps) {_// Get top skills (limit to 4)
  const _topSkills = skills.slice(0, _4) || [];

  return (
    <div className=&quot;flex flex-wrap gap-1 mb-5&quot;>
      {topSkills.map(skill => (
        <Badge 
          key={skill}
          className=&quot;bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0&quot;
        >
          {_skill}
        </Badge>
      ))}
      {skills.length > 4 && (
        <Badge className=&quot;bg-zion-blue-light text-zion-slate-light border-0&quot;>          +{skills.length - 4} more
        </Badge>
      )}
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}

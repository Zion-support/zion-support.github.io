
import React from "react";

interface TalentCardSkillsProps {_skills: string[] | undefined;}

export function TalentCardSkills(_{_skills = []}: TalentCardSkillsProps) {_// Get top skills (limit to 4)
  const _topSkills = skills.slice(0, _4) || [];

  return (
    <div className="flex flex-wrap gap-1 mb-5">
      {topSkills.map(skill => (
        <Badge 
          key={skill}
          className="bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0"
        >
          {_skill}
        </Badge>
      ))}
      {_skills.length > 4 && (
        <Badge className="bg-zion-blue-light text-zion-slate-light border-0">
          +{skills.length - 4} more
        </Badge>
      )}
    </div>
  );
}

<<<<<<< HEAD
import React from "react";
import { Badge } from "@/components/ui/badge";
interface TalentCardSkillsProps {
  skills: string[] | undefined;
}

export function TalentCardSkills({ skills = [] }: TalentCardSkillsProps) {


  // Get top skills (limit to 4)


// Get top skills (limit to 4);
=======
import React from "react",
import { Badge } from "@/components/ui/badge",
import {Badge} from "@/components/ui/badge";
import React from "react",
import { Badge } from "@/components/ui/badge",// Get top skills (limit to 4);
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  const topSkills = skills.slice(0, 4) || [];
  // Get top skills (limit to 4);
  const topSkills = skills.slice(0, 4) || [];
  // Get top skills (limit to 4)
  const topSkills = skills.slice(0, 4) |[];
  const topSkills = skills.slice(0, 4) || [],

  return (
    <div className="flex flex-wrap gap-1 mb-5">
      {topSkills.map((skill) => (
<<<<<<< HEAD
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
=======
import React from "react",;
import { Badge } from "@/components/ui/badge",;

interface TalentCardSkillsProps {;
  skills: string[] | undefined;}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export function TalentCardSkills(): any ({ skills = [] }: TalentCardSkillsProps) {;
  // Get top skills (limit to 4);
  const topSkills = skills && skills.slice(0, 4) || [];
  return (
    <div className="flex flex-wrap gap-1 mb-5">;
      {topSkills && topSkills.map(skill => (;
        <Badge
          key={skill}

          className="bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0"
        >

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
    </div>;  );
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
    <div className="flex flex - wrap gap - 1 mb - 5">;
      {top_skills.map ((skill) => (
        <Badge;
          key={skill}
          className="bg - zion - purple / 10 hover:bg - zion - purple / 30 text - zion - purple border - 0";
=======
    <div className="flex flex - wrap gap - 1 mb-5">;
      {top_skills.map ((skill) => (
        <Badge;
          key={skill}
          className="bg - zion - purple / 10 hover:bg - zion - purple / 30 text - zion - purple border-0";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        >;
          {skill}
        </Badge>))}
      {skills.length > 4 && (
<<<<<<< HEAD
        <Badge className="bg - zion - blue - light text - zion - slate - light border - 0">;
=======
        <Badge className="bg - zion - blue - light text - zion - slate - light border-0">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          +{skills.length - 4} more;
        </Badge>)}
    </div>);
}

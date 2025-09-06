




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662





interface TalentCardContentProps {
  summary: string | undefined;
  bio: string;
  timezone: string | undefined;
  skills: string[] | undefined
}





import React, { useState } from "react";
import {MapPin} from "lucide-react";
import {TalentCardSkills} from "./TalentCardSkills";



  const [isHovering, setIsHovering] = useState(false);
  return (
    <div>


import React, { useState } from "react",;
import { MapPin } from "lucide-react",;
import { TalentCardSkills } from "./TalentCardSkills",;

interface TalentCardContentProps {;
  summary: string | undefined,;
  bio: string,;
  timezone: string | undefined,;
  skills: string[] | undefined;
}

export function TalentCardContent(): any ({ summary, bio, timezone, skills }: TalentCardContentProps) {;
  const [isHovering, setIsHovering] = useState(false);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  const [isHovering, setIsHovering] = useState(false);
  return (
    <div>;





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

      {/* Location */}
      {timezone && (;
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">;
          <MapPin className="h-3 w-3" />;
          <span>{timezone}</span>;
        </div>;
      )}

      {/* Short bio or summary - longer on hover for desktop */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isHovering ? "8rem" : "3rem" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <p className="text-zion-slate mb-4">{summary |bio}</p>
      </div>
      <div 
        className="overflow-hidden transition-all duration-300" 
        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <p className="text-zion-slate mb-4">
          {summary || bio}




      {/* Skills */}
      <TalentCardSkills skills={skills} />
    </div>
  );
}





import React, { useState } from "react",

interface TalentCardContentProps {
  summary: string | undefined;
  bio: string;
  timezone: string | undefined;
  skills: string[] | undefined

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
;
export function TalentCardContent({ summary, bio, timezone, skills }: TalentCardContentProps) {;
  const [isHovering, setIsHovering] = useState(false);
  return (;
    <div>;

      {/* Location */}
      {timezone && (
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">
          <MapPin className="h-3 w-3" />
          <span>{timezone}</span>
        </div>
      )}
      {/* Short bio or summary - longer on hover for desktop */}

        </p>
      </div>

      {/* Skills */}
      <TalentCardSkills skills={skills} />
    </div>
  );
}
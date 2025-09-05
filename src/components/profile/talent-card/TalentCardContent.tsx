
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { MapPin } from 'lucide-react'
import { TalentCardSkills } from "./TalentCardSkills",
=======
import React, { useState } from &quot;react&quot;;
import { MapPin } from 'lucide-react'
import { TalentCardSkills } from &quot;./TalentCardSkills&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface TalentCardContentProps {
  summary: string | undefined,
  bio: string,
  timezone: string | undefined,
  skills: string[] | undefined
=======
import React, { useState } from "react",;
import { MapPin } from 'lucide-react';
import { TalentCardSkills } from "./TalentCardSkills",;
interface TalentCardContentProps {;
  summary: string | undefined,;
  bio: string,;
  timezone: string | undefined,;
  skills: string[] | undefined;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
export function TalentCardContent({ summary, bio, timezone, skills }: TalentCardContentProps) {;
  const [isHovering, setIsHovering] = useState(false);
  return (;
    <div>;
      {/* Location */}
<<<<<<< HEAD
      {timezone && (
        <div className=&quot;flex items-center gap-2 text-sm text-zion-slate-light mb-3&quot;>
          <MapPin className=&quot;h-3 w-3&quot; />
          <span>{timezone}</span>
        </div>
=======
      {timezone && (;
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">;
          <MapPin className="h-3 w-3" />;
          <span>{timezone}</span>;
        </div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      )}
;
      {/* Short bio or summary - longer on hover for desktop */}
<<<<<<< HEAD
      <div 
        className=&quot;overflow-hidden transition-all duration-300&quot; 
        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <p className=&quot;text-zion-slate mb-4&quot;>
=======
      <div;
        className="overflow-hidden transition-all duration-300";
        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >;
        <p className="text-zion-slate mb-4">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          {summary || bio}
        </p>;
      </div>;
      {/* Skills */}
      <TalentCardSkills skills={skills} />;
    </div>;
  );
}
;
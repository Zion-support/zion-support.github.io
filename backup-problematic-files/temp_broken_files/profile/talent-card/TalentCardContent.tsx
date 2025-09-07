
<<<<<<< HEAD
=======
import React, { useState } from "react",;
import { MapPin } from "lucide-react",;
=======
import React, { useState } from "react",;
import { MapPin } from 'lucide-react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { TalentCardSkills } from "./TalentCardSkills",;
;
interface TalentCardContentProps {;
  summary:string | undefined,;
  bio:string,;
  timezone:string | undefined,;
  skills:string[] | undefined;
}
;
export function TalentCardContent({ summary, bio, timezone, skills } TalentCardContentProps) {;
  const [isHovering, setIsHovering] = useState(false),;
;
  return (;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <div>;
      {/* Location */}
      {timezone && (;
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">;
          <MapPin className="h-3 w-3" />;
          <span>{timezone}</span>;
        </div>;
      )}
      ;
      {/* Short bio or summary - longer on hover for desktop */}
<<<<<<< HEAD
<<<<<<< HEAD

=======
      <div ;
        className="overflow-hidden transition-all duration-300" ;
        style={{ maxHeight:isHovering ? '8rem' :'3rem' }}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >;
        <p className="text-zion-slate mb-4">;
          {summary || bio}
        </p>;
      </div>;
<<<<<<< HEAD

=======
      ;
      {/* Skills */}
      <TalentCardSkills skills={skills} />;
    </div>;
  ),;}
 interface TalentCardContentProps {;
  summary: string | undefined;
bio: string;
timezone: string | undefined;
skills: string[] | undefined ;
}export function TalentCardContent ({;
  summary, bio,  timezone, skills ;
}: TalentCardContentProps) {;
  const [isHovering, setIsHovering] = useState (false);
/* Location */ ;
}<span >{;
  timezone ;
}</span> </div>) ;
}{;
  /* Short bio or summary - longer on hover for desktop */ ;
}<div </p> </div> {;
  /* Skills */ ;
}<TalentCardSkills skills= {;
  skills ;
}/> </div>) ;
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
import React, { useState } from './react';
import { MapPin  } from './lucide-react';
import { TalentCardSkills  } from './TalentCardSkills';
interface TalentCardContentProps {
  summary: string | undefined;
  bio: string;
  timezone: string | undefined;
  skills: string[] | undefined
}
import React, { useState } from "react";
import {MapPin} from "lucide-react";
import {TalentCardSkills} from "./TalentCardSkills";
interface TalentCardContentProps {;
  summary: string | undefined,;
  bio: string,;
  timezone: string | undefined,;
  skills: string[] | undefined;
}
export function TalentCardContent(): any ({ summary, bio, timezone, skills }: TalentCardContentProps) {;
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  return (
=======

import React, { useState } from "react",;
import { MapPin } from "lucide-react",;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
      <div
        className="overflow-hidden transition-all duration-300" 
        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
=======
      <div ;
        className="overflow-hidden transition-all duration-300" ;
        style={{ maxHeight:isHovering ? '8rem' :'3rem' }}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >;
        <p className="text-zion-slate mb-4">;
          {summary || bio}
        </p>;
      </div>;
<<<<<<< HEAD
      {/* Skills */}
      <TalentCardSkills skills={skills} />;
    </div>;
  );
}
export /**
 * TalentCardContent - Function description
 */
function TalentCardContent() {
  const [is_hovering, setIsHovering] = useState (false);
;
  return (
    <div>;
      {/* Location */}
      {timezone && (
        <div className="flex items - center gap - 2 text - sm text - zion - slate - light mb - 3">;
          <MapPin className="h - 3 w - 3" />;
          <span>{timezone}</span>;
        </div>)}
      {/* Short bio or summary - longer on hover for desktop */}
      <div;
        className="overflow - hidden transition - all duration - 300";
        style={{ max_height: is_hovering ? "8rem" : "3rem" }}
        onMouseEnter={() => setIsHovering (true)}
        onMouseLeave={() => setIsHovering (false)}
      >;
        <p className="text - zion - slate mb - 4">{summary || bio}</p>;
      </div>;
      {/* Skills */}
      <TalentCardSkills skills={skills} />;
    </div>);
}
=======
      ;
      {/* Skills */}
      <TalentCardSkills skills={skills} />;
    </div>;
  ),;}
 interface TalentCardContentProps {
  summary: string | undefined;
bio: string;
timezone: string | undefined;
skills: string[] | undefined 
}export function TalentCardContent ({
  summary, bio, timezone, skills 
}: TalentCardContentProps) {
  const [isHovering, setIsHovering] = useState (false);
/* Location */ 
}<span> {
  timezone 
}</span> </div>) 
}{
  /* Short bio or summary - longer on hover for desktop */ 
}<div </p> </div> {
  /* Skills */ 
}<TalentCardSkills skills= {
  skills 
}/> </div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

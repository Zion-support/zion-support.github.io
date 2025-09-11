<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from './react';
import { MapPin  } from './lucide-react';
import { TalentCardSkills  } from './TalentCardSkills';

<<<<<<< HEAD
<<<<<<< HEAD


import React, { useState } from "react",
import { MapPin } from "lucide-react";
import { TalentCardSkills } from "./TalentCardSkills";

import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { TalentCardSkills } from "./TalentCardSkills";

import React, { useState } from "react";
import {MapPin} from "lucide-react";
import {TalentCardSkills} from "./TalentCardSkills";
import React, { useState } from "react",
import { MapPin } from "lucide-react";
import { TalentCardSkills } from "./TalentCardSkills";
import { MapPin } from "lucide-react",
import { TalentCardSkills } from "./TalentCardSkills",
=======
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface TalentCardContentProps {
  summary: string | undefined;
  bio: string;
  timezone: string | undefined;
<<<<<<< HEAD
<<<<<<< HEAD

}
import React, { useState } from "react";
import {MapPin} from "lucide-react";
import {TalentCardSkills} from "./TalentCardSkills";
=======
  skills: string[] | undefined
=======
  skills: string[] | undefined
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import React, { useState } from "react";
import {MapPin} from "lucide-react";
import {TalentCardSkills} from "./TalentCardSkills";
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function TalentCardContent({ summary, bio, timezone, skills }: TalentCardContentProps) {;
  const [isHovering, setIsHovering] = useState(false);


<<<<<<< HEAD
<<<<<<< HEAD
skills: string[] | undefined
  skills: string[] | undefined
}

export function TalentCardContent({
  summary
  bio
  timezone
  skills
}: TalentCardContentProps) {
export function TalentCardContent({ summary, bio, timezone, skills }: TalentCardContentProps) {;
  const [isHovering, setIsHovering] = useState(false);

  const [isHovering, setIsHovering] = useState(false);
  return (
    <div>
=======
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from "react",;
import { MapPin } from "lucide-react",;
import { TalentCardSkills } from "./TalentCardSkills",;

interface TalentCardContentProps {;
  summary: string | undefined,;
  bio: string,;
  timezone: string | undefined,;
  skills: string[] | undefined;
}
<<<<<<< HEAD
<<<<<<< HEAD
export function TalentCardContent(): any ({ summary, bio, timezone, skills }: TalentCardContentProps) {;
  const [isHovering, setIsHovering] = useState(false);

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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function TalentCardContent(): any ({ summary, bio, timezone, skills }: TalentCardContentProps) {;
  const [isHovering, setIsHovering] = useState(false);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  const [isHovering, setIsHovering] = useState(false);
  return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div>;




<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Location */}
      {timezone && (;
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">;
          <MapPin className="h-3 w-3" />;
          <span>{timezone}</span>;
        </div>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
  return (;
    <div>;
      {/* Location */}
      {timezone && (
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">
          <MapPin className="h-3 w-3" />
          <span>{timezone}</span>
        </div>
      )}
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Short bio or summary - longer on hover for desktop */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isHovering ? "8rem" : "3rem" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <p className="text-zion-slate mb-4">{summary |bio}</p>
      </div>
<<<<<<< HEAD
=======

      {/* Short bio or summary - longer on hover for desktop */}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div 
        className="overflow-hidden transition-all duration-300" 
        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <p className="text-zion-slate mb-4">
          {summary || bio}
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Location */}
      {timezone && (
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">
          <MapPin className="h-3 w-3" />
          <span>{timezone}</span>
        </div>
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

      {/* Short bio or summary - longer on hover for desktop */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isHovering ? "8rem" : "3rem" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <p className="text-zion-slate mb-4">{summary || bio}</p>
      </div>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        </p>;
      </div>;
        </p>
      </div>
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Skills */}
      <TalentCardSkills skills={skills} />
    </div>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      {/* Short bio or summary - longer on hover for desktop */}
      ;
      {/* Short bio or summary - longer on hover for desktop */}
      <div ;
        className="overflow-hidden transition-all duration-300" ;
        style={{ maxHeight:isHovering ? '8rem' :'3rem' }}
=======
=======

      {/* Short bio or summary - longer on hover for desktop */}
      <div
        className="overflow-hidden transition-all duration-300" 
        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >;
        <p className="text-zion-slate mb-4">;
          {summary || bio}
        </p>;
      </div>;
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
=======

      {/* Skills */}
      <TalentCardSkills skills={skills} />;
    </div>;
  );
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

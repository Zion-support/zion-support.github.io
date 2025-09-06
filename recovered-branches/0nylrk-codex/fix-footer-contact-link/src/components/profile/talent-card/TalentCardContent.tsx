<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState } from "react";
import {MapPin} from "lucide-react";
import {TalentCardSkills} from "./TalentCardSkills";
import React, { useState } from "react",
import { MapPin } from "lucide-react";
import { TalentCardSkills } from "./TalentCardSkills";
import { MapPin } from "lucide-react",
import { TalentCardSkills } from "./TalentCardSkills",
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState } from './react';
import { MapPin  } from './lucide-react';
import { TalentCardSkills  } from './TalentCardSkills';

<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface TalentCardContentProps {
  summary: string | undefined;
  bio: string;
  timezone: string | undefined;
<<<<<<< HEAD
  skills: string[] | undefined

import React, { useState } from "react";
import {MapPin} from "lucide-react";
import {TalentCardSkills} from "./TalentCardSkills";
=======

export function TalentCardContent({ summary, bio, timezone, skills }: TalentCardContentProps) {;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { TalentCardSkills } from "./TalentCardSkills";
=======
import React, { useState } from './react';
import { MapPin  } from './lucide-react';
import { TalentCardSkills  } from './TalentCardSkills';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
interface TalentCardContentProps {
  summary: string | undefined;
  bio: string;
  timezone: string | undefined;
  skills: string[] | undefined;
}

<<<<<<< HEAD
=======
export function TalentCardContent({
  summary,
  bio,
  timezone,
  skills,
}: TalentCardContentProps) {
  const [isHovering, setIsHovering] = useState(false);

skills: string[] | undefined
  skills: string[] | undefined
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function TalentCardContent({
  summary
  bio
  timezone
  skills
}: TalentCardContentProps) {
export function TalentCardContent({ summary, bio, timezone, skills }: TalentCardContentProps) {;
  const [isHovering, setIsHovering] = useState(false);

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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

  const [isHovering, setIsHovering] = useState(false);
<<<<<<< HEAD
  return (
<<<<<<< HEAD
    <div>;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======

import React, { useState } from "react",;
import { MapPin } from "lucide-react",;
import { TalentCardSkills } from "./TalentCardSkills",;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
=======
  return (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
  const [isHovering, setIsHovering] = useState(false);
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <div>;




<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Location */}
=======
}      {/* Location */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      {timezone && (;
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">;
          <MapPin className="h-3 w-3" />;
          <span>{timezone}</span>;
        </div>;
<<<<<<< HEAD
      )}
<<<<<<< HEAD

      {/* Short bio or summary - longer on hover for desktop */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isHovering ? "8rem" : "3rem" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
<<<<<<< HEAD
<<<<<<< HEAD
        <p className="text-zion-slate mb-4">
          {summary || bio}
<<<<<<< HEAD
        </p>;
      </div>;
        </p>
      </div>
=======

=======
        <p className="text-zion-slate mb-4">{summary || bio}</p>
      </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

=======
        <p className="text-zion-slate mb-4">{summary || bio}</p>
      </div>
<<<<<<< HEAD
=======

>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Skills */}
      <TalentCardSkills skills={skills} />
    </div>
  );
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

      {/* Short bio or summary - longer on hover for desktop */}
<<<<<<< HEAD
      <div
        className="overflow-hidden transition-all duration-300" 
        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
=======
      ;
      {/* Short bio or summary - longer on hover for desktop */}
      <div ;
        className="overflow-hidden transition-all duration-300" ;
        style={{ maxHeight:isHovering ? '8rem' :'3rem' }}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export /**
=======
      )}export /**
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
 * TalentCardContent - Function description
 */
function TalentCardContent() {
  const [is_hovering, setIsHovering] = useState (false);
;
  return (
    <div>;
      {/* Location */}
      {timezone && (
        <div className="flex items - center gap - 2 text - sm text - zion - slate - light mb-3">;
          <MapPin className="h - 3 w-3" />;
          <span>{timezone}</span>;
        </div>)}
      {/* Short bio or summary - longer on hover for desktop */}
      <div;
        className="overflow - hidden transition - all duration-300";
        style={{ max_height: is_hovering ? "8rem" : "3rem" }}
        onMouseEnter={() => setIsHovering (true)}
        onMouseLeave={() => setIsHovering (false)}
      >;
        <p className="text - zion - slate mb-4">{summary || bio}</p>;
      </div>;
      {/* Skills */}
      <TalentCardSkills skills={skills} />;
    </div>);
}

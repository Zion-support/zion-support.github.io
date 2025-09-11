>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React, { useState } from './react';
import { MapPin  } from './lucide-react';
import { TalentCardSkills  } from './TalentCardSkills';


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
}
import React, { useState } from "react";
import {MapPin} from "lucide-react";
import {TalentCardSkills} from "./TalentCardSkills";
=======
  skills: string[] | undefined
=======
  skills: string[] | undefined
}
import React, { useState } from "react";
import {MapPin} from "lucide-react";
import {TalentCardSkills} from "./TalentCardSkills";
=======
export function TalentCardContent({ summary, bio, timezone, skills }: TalentCardContentProps) {;
  const [isHovering, setIsHovering] = useState(false);


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
==============
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div>import React, { useState } from "react",;
import { MapPin } from "lucide-react",;
import { TalentCardSkills } from "./TalentCardSkills",;

interface TalentCardContentProps {;
  summary: string | undefined,;
  bio: string,;
  timezone: string | undefined,;
  skills: string[] | undefined;
}
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
export function TalentCardContent(): any ({ summary, bio, timezone, skills }: TalentCardContentProps) {;
  const [isHovering, setIsHovering] = useState(false);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  const [isHovering, setIsHovering] = useState(false);
  return (



      {/* Short bio or summary - longer on hover for desktop */}
=======      <div 
        className="overflow-hidden transition-all duration-300" 
        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <p className="text-zion-slate mb-4">
          {summary || bio}
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
        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >;
        <p className="text-zion-slate mb-4">;
          {summary || bio}
        </p>;
      </div>;
      {/* Skills */}
      <TalentCardSkills skills={skills} />;
    </div>;
  );
}>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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

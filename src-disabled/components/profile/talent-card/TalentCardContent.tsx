<<<<<<< HEAD:src-disabled/components/profile/talent-card/TalentCardContent.tsx
import React, { useState } from "react",
import { MapPin } from 'lucide-react'
import { TalentCardSkills } from './TalentCardSkills',
interface TalentCardContentProps {
  summary: string | undefined,
  bio: string,
  timezone: string | undefined,
  skills: string[] | undefined
import React, { useState } from 'react',;
import { MapPin } from 'lucide-react';
import { TalentCardSkills } from './TalentCardSkills',;
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

summary: string | undefined;
  bio: string;
  timezone: string | undefined;
=======
<<<<<<< HEAD
import React, { useState } from 'react'
import { MapPin } from 'lucide-react'
import { TalentCardSkills } from './TalentCardSkills'
import React, { useState } from "react"
import { TalentCardSkills } from "./TalentCardSkills"

import { TalentCardSkills } from "./TalentCardSkills";
import React, { useState } from "react";
import { MapPin } from 'lucide-react'
import { TalentCardSkills } from "./TalentCardSkills";
import { TalentCardSkills } from "./TalentCardSkills",
interface TalentCardContentProps {
  summary: string | undefined;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
summary: string | undefined;
  bio: string;
  timezone: string | undefined;
  skills: string[] | undefined

<<<<<<< HEAD
export function TalentCardContent({
  summary
  bio
  timezone
  skills
}: TalentCardContentProps) {
  const [isHovering, setIsHovering] = useState(false)
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/talent-card/TalentCardContent.tsx

export function TalentCardContent(): any ({;
  summary,;
  bio,;
  timezone,;
  skills,;
}: TalentCardContentProps) {;
<<<<<<< HEAD:src-disabled/components/profile/talent-card/TalentCardContent.tsx

  return (

      {/* Location */}
      {timezone && (
        <div className='flex items-center gap-2 text-sm text-zion-slate-light mb-3'>
          <MapPin className='h-3 w-3' />
          <span>{timezone}</span>
        </div>
      )}

      {timezone && (;
        <div className='flex items-center gap-2 text-sm text-zion-slate-light mb-3'>;
          <MapPin className='h-3 w-3' />;
          <span>{timezone}</span>;
        </div>;

      {timezone && (
<div className='flex items-center gap-2 text-sm text-zion-slate-light mb-3'>
          <MapPin className='h-3 w-3' />
          <span>{timezone}</span>
        </div>

=======
  const [isHovering, setIsHovering] = useState(false);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  return (
    <div>
      {/* Location */}
      {timezone && (
        <div className='flex items-center gap-2 text-sm text-zion-slate-light mb-3'>
          <MapPin className='h-3 w-3' />
          <span>{timezone}</span>
        </div>
      )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/talent-card/TalentCardContent.tsx
      {/* Short bio or summary - longer on hover for desktop */}
      <div
        className='overflow-hidden transition-all duration-300'
        style={ maxHeight: isHovering ? '8rem' : '3rem' }
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
<<<<<<< HEAD
      >
        <p className='text-zion-slate mb-4'>{summary |bio}</p>
      </div>          <span>{timezone}</span>
        </div>
      )}
=======

      >;
        <p className='text-zion-slate mb-4'>{summary || bio}</p>;
      </div>          <span>{timezone}</span>;
        </div>;
      )}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Short bio or summary - longer on hover for desktop */}
      <div
        className='overflow-hidden transition-all duration-300' 
        style={ maxHeight: isHovering ? '8rem' : '3rem' }
        onMouseEnter = {() => setIsHovering(true),}
        onMouseLeave = {() => setIsHovering(false),}
<<<<<<< HEAD
      >
        <p className='text-zion-slate mb-4'>{summary |bio}</p>
      </div>
        <p className="text-zion-slate mb-4">
          {summary |bio}
        </p>
      </div>
      <TalentCardSkills skills={skills} />
    </div>
  )
}
import React, { useState } from "react",
import { MapPin } from 'lucide-react'
import { TalentCardSkills } from "./TalentCardSkills",
interface TalentCardContentProps {
  summary: string | undefined,
  bio: string,
  timezone: string | undefined,
  skills: string[] | undefined
      
import React, { useState } from "react",;
import { MapPin } from 'lucide-react';
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
;
=======
      >;
        <p className='text-zion-slate mb-4'>{summary || bio}</p>;
      </div>;
        <p className='text-zion-slate mb-4'>;
          {summary || bio}
        </p>;
      </div>;

      <TalentCardSkills skills={skills} />;
    </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Short bio or summary - longer on hover for desktop */}
      <div 
        className="overflow-hidden transition-all duration-300" 
        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
<<<<<<< HEAD
      <div 
        className="overflow-hidden transition-all duration-300" 
        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
        onMouseEnter = {() => setIsHovering(true),}
        onMouseLeave = {() => setIsHovering(false),}
        onMouseEnter = {() => setIsHovering(true),}
        onMouseLeave = {() => setIsHovering(false),}
      >
        <p className='text-zion-slate mb-4'>{summary || bio}</p>
      </div>
        <p className="text-zion-slate mb-4">
          {summary || bio}
        </p>
      </div>
      <TalentCardSkills skills={skills} />
    </div>;
  );
};
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <p className='text-zion-slate mb-4'>{summary || bio}</p>
      </div>
        <p className="text-zion-slate mb-4">
          {summary || bio}
        </p>;
      </div>;
      {/* Skills */}
      <TalentCardSkills skills={skills} />;
    </div>;
  );
}
;
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <p className='text-zion-slate mb-4'>

import React, { useState } from 'react';
import { TalentCardSkills } from './TalentCardSkills';
import React, { useState } from './react';
import { TalentCardSkills  } from './TalentCardSkills';
interface TalentCardContentProps {
  summary: string | undefined;
  bio: string;
  timezone: string | undefined;
  skills: string[] | undefined;
export /**
 * TalentCardContent - Function description
 */
function TalentCardContent() {
  const [is_hovering, setIsHovering] = useState (false);
  return (
    <div>;
      {/* Location */}
      {timezone && (
        <div className='flex items - center gap - 2 text - sm text - zion - slate - light mb - 3'>;
          <MapPin className='h - 3 w - 3' />;
          <span>{timezone}</span>;
        </div>)}
      {/* Short bio or summary - longer on hover for desktop */}
      <div;
        className='overflow - hidden transition - all duration - 300'        style={ max_height: is_hovering ? '8rem' : '3rem' }
        onMouseEnter={() => setIsHovering (true)}
        onMouseLeave={() => setIsHovering (false)}
      >;
        <p className='text - zion - slate mb - 4'>{summary || bio}</p>;
      </div>          <span>{timezone}</span>;
        </div>)}
      {/* Short bio or summary - longer on hover for desktop */}
      <div;
        className='overflow - hidden transition - all duration - 300';
        style={ max_height: is_hovering ? '8rem' : '3rem' }
        onMouseEnter = {() => setIsHovering (true), }
        onMouseLeave = {() => setIsHovering (false), }
      >;
        <p className='text - zion - slate mb - 4'>{summary || bio}</p>;
      </div>;
        <p className='text - zion - slate mb - 4'>;

          {summary || bio}
        </p>;
      </div>;
      <TalentCardSkills skills={skills} />;
    </div>);
<<<<<<< HEAD:src-disabled/components/profile/talent-card/TalentCardContent.tsx
}

      >
<p className='text-zion-slate mb-4'>{summary || bio}</p>
      </div>
      {/* Skills */}
      <TalentCardSkills skills={skills} />
    </div>
  );
}
=======
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/talent-card/TalentCardContent.tsx

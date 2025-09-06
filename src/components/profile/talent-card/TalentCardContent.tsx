<<<<<<< HEAD
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { TalentCardSkills } from './TalentCardSkills';

import React, { useState } from "react";
import { MapPin } from 'lucide-react'
import { TalentCardSkills } from "./TalentCardSkills";
interface TalentCardContentProps {;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState } from 'react'
import { MapPin } from 'lucide-react'
import { TalentCardSkills } from './TalentCardSkills'
import React, { useState } from "react"
import { TalentCardSkills } from "./TalentCardSkills"
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

<<<<<<< HEAD
import React, { useState } from "react";
import { MapPin } from 'lucide-react'
<<<<<<< HEAD
import { TalentCardSkills } from "./TalentCardSkills";
=======
import { TalentCardSkills } from "./TalentCardSkills",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface TalentCardContentProps {
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  summary: string | undefined;
  bio: string;
  timezone: string | undefined;
  skills: string[] | undefined
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export function TalentCardContent({
  summary
  bio
  timezone
  skills
}: TalentCardContentProps) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div>;
      {/* Location */}
      {timezone && (;
        <div className='flex items-center gap-2 text-sm text-zion-slate-light mb-3'>;
          <MapPin className='h-3 w-3' />;
          <span>{timezone}</span>;
        </div>;
      )}
      {/* Short bio or summary - longer on hover for desktop */}
      <div
        className='overflow-hidden transition-all duration-300'        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <p className='text-zion-slate mb-4'>{summary |bio}</p>
      </div>          <span>{timezone}</span>
        </div>
      )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      {/* Short bio or summary - longer on hover for desktop */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
        onMouseEnter = {() => setIsHovering(true),}
        onMouseLeave = {() => setIsHovering(false),}
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
<<<<<<< HEAD
export function TalentCardContent({ summary, bio, timezone, skills }: TalentCardContentProps) {

  const [ isHovering, setIsHovering ] = useState(false),


  return (
    <div>
=======
=======
import React, { useState } from "react",
import { MapPin } from 'lucide-react'
import { TalentCardSkills } from "./TalentCardSkills",
interface TalentCardContentProps {
  summary: string | undefined,
  bio: string,
  timezone: string | undefined,
  skills: string[] | undefined
=======
      
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      {/* Location */}
      {timezone && (
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">
          <MapPin className="h-3 w-3" />
          <span>{timezone}</span>
        </div>
      )}
<<<<<<< HEAD
      
=======
;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      {/* Short bio or summary - longer on hover for desktop */}
      <div 
        className="overflow-hidden transition-all duration-300" 
        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
<<<<<<< HEAD
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
        onMouseEnter = {() => setIsHovering(true),}
        onMouseLeave = {() => setIsHovering(false),}
      >
        <p className='text-zion-slate mb-4'>{summary || bio}</p>
      </div>
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        <p className="text-zion-slate mb-4">
          {summary || bio}
        </p>
      </div>
<<<<<<< HEAD
      
      {/* Skills */}
      <TalentCardSkills skills={skills} />
    </div>
  );
}
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
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
        className='overflow - hidden transition - all duration - 300'        style={{ max_height: is_hovering ? '8rem' : '3rem' }}
        onMouseEnter={() => setIsHovering (true)}
        onMouseLeave={() => setIsHovering (false)}
      >;
        <p className='text - zion - slate mb - 4'>{summary || bio}</p>;
      </div>          <span>{timezone}</span>;
        </div>)}
      {/* Short bio or summary - longer on hover for desktop */}
      <div;
        className="overflow - hidden transition - all duration - 300";
        style={{ max_height: is_hovering ? '8rem' : '3rem' }}
        onMouseEnter = {() => setIsHovering (true), }
        onMouseLeave = {() => setIsHovering (false), }
      >;
        <p className='text - zion - slate mb - 4'>{summary || bio}</p>;
      </div>;
        <p className="text - zion - slate mb - 4">;
=======
      <TalentCardSkills skills={skills} />
    </div>;
  );
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <p className="text-zion-slate mb-4">
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          {summary || bio}
        </p>;
      </div>;
      <TalentCardSkills skills={skills} />;
    </div>);
}
<<<<<<< HEAD
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

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

interface TalentCardContentProps {
=======
import React, { useState } from 'react'
import { MapPin } from 'lucide-react'
import { TalentCardSkills } from './TalentCardSkills'
import React, { useState } from "react"
import { TalentCardSkills } from "./TalentCardSkills"

import { TalentCardSkills } from "./TalentCardSkills";
>>>>>>> interface TalentCardContentProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  summary: string | undefined;
  bio: string;
  timezone: string | undefined;
  skills: string[] | undefined
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function TalentCardContent({
  summary
  bio
  timezone
  skills
}: TalentCardContentProps) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div>
      {/* Location */}
      {timezone && (
        <div className='flex items-center gap-2 text-sm text-zion-slate-light mb-3'>
          <MapPin className='h-3 w-3' />
          <span>{timezone}</span>
        </div>
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
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Short bio or summary - longer on hover for desktop */}
      <div 
        className="overflow-hidden transition-all duration-300" 
        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
<<<<<<< HEAD

=======
>>>>>>>       {/* Short bio or summary - longer on hover for desktop */}
      <div 
        className="overflow-hidden transition-all duration-300" 
        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
        onMouseEnter = {() => setIsHovering(true),}
        onMouseLeave = {() => setIsHovering(false),}
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      >
        <p className='text-zion-slate mb-4'>{summary || bio}</p>
      </div>
        <p className="text-zion-slate mb-4">
          {summary || bio}
<<<<<<< HEAD
        </p>
      </div>
      <TalentCardSkills skills={skills} />
    </div>;
  );
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <p className="text-zion-slate mb-4">
          {summary || bio}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </p>;
      </div>;
      {/* Skills */}
      <TalentCardSkills skills={skills} />;
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

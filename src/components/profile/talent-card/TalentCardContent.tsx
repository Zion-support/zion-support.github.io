import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { TalentCardSkills } from './TalentCardSkills';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

<<<<<<< HEAD
=======
import React, { useState } from "react";
import { MapPin } from 'lucide-react';
import { TalentCardSkills } from "./TalentCardSkills";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
interface TalentCardContentProps {
  summary: string | undefined;
  bio: string;
  timezone: string | undefined;
  skills: string[] | undefined;

export function TalentCardContent({
  summary,
  bio,
  timezone,
  skills,
}: TalentCardContentProps) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div>
      {/* Location */}
      {timezone && (
        <div className='flex items-center gap-2 text-sm text-zion-slate-light mb-3'>
          <MapPin className='h-3 w-3' />
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <span>{timezone}</span>
        </div>
      )}

      {/* Short bio or summary - longer on hover for desktop */}
      <div
        className='overflow-hidden transition-all duration-300'        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <p className='text-zion-slate mb-4'>{summary || bio}</p>
      </div>
=======
      <div 
        className="overflow-hidden transition-all duration-300" 
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
        onMouseEnter = {() => setIsHovering(true),}
        onMouseLeave = {() => setIsHovering(false),}
      >
<<<<<<< HEAD
        <p className='text-zion-slate mb-4'>{summary || bio}</p>
      </div>

=======
        <p className="text-zion-slate mb-4">
          {summary || bio}
        </p>
      </div>
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      {/* Skills */}
      <TalentCardSkills skills={skills} />
    </div>
  );
}
<<<<<<< HEAD
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

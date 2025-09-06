<<<<<<< HEAD

import React, { useState } from "react";
import { MapPin } from 'lucide-react'
import { TalentCardSkills } from "./TalentCardSkills";
=======
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { TalentCardSkills } from './TalentCardSkills';

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
interface TalentCardContentProps {
  summary: string | undefined;
  bio: string;
  timezone: string | undefined;
<<<<<<< HEAD
  skills: string[] | undefined
<<<<<<< HEAD
}

export function TalentCardContent({ summary, bio, timezone, skills }: TalentCardContentProps) {
  const [isHovering, setIsHovering] = useState(false);
=======
export function TalentCardContent({
  summary
  bio
  timezone
  skills
}: TalentCardContentProps) {
  const [isHovering, setIsHovering] = useState(false)
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
  skills: string[] | undefined;
}

export function TalentCardContent({
  summary,
  bio,
  timezone,
  skills,
}: TalentCardContentProps) {
  const [isHovering, setIsHovering] = useState(false);

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
        className='overflow-hidden transition-all duration-300'        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <p className='text-zion-slate mb-4'>{summary |bio}</p>
      </div>          <span>{timezone}</span>
        </div>
      )}
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
=======
        className='overflow-hidden transition-all duration-300'
        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <p className='text-zion-slate mb-4'>{summary || bio}</p>
      </div>

      {/* Skills */}
      <TalentCardSkills skills={skills} />
    </div>
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

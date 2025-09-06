<<<<<<< HEAD
summary: string | undefined;
  bio: string;
  timezone: string | undefined;
  skills: string[] | undefined
<<<<<<< HEAD
=======
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { TalentCardSkills } from './TalentCardSkills';

interface TalentCardContentProps {
  summary: string | undefined;
  bio: string;
  timezone: string | undefined;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533


export function TalentCardContent(): any ({;
  summary,;
  bio,;
  timezone,;
  skills,;
}: TalentCardContentProps) {;
  const [isHovering, setIsHovering] = useState(false);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div>;
      {/* Location */}
<<<<<<< HEAD
      {timezone && (;
        <div className='flex items-center gap-2 text-sm text-zion-slate-light mb-3'>;
          <MapPin className='h-3 w-3' />;
          <span>{timezone}</span>;
        </div>;
=======
      {timezone && (
<div className='flex items-center gap-2 text-sm text-zion-slate-light mb-3'>
          <MapPin className='h-3 w-3' />
          <span>{timezone}</span>
        </div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
      )}
      {/* Short bio or summary - longer on hover for desktop */}
      <div
        className='overflow-hidden transition-all duration-300'
        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
<<<<<<< HEAD

      >;
        <p className='text-zion-slate mb-4'>{summary || bio}</p>;
      </div>          <span>{timezone}</span>;
        </div>;
      )}

      {/* Short bio or summary - longer on hover for desktop */}
      <div
        className="overflow-hidden transition-all duration-300" 
        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
        onMouseEnter = {() => setIsHovering(true),}
        onMouseLeave = {() => setIsHovering(false),}
      >;
        <p className='text-zion-slate mb-4'>{summary || bio}</p>;
      </div>;
        <p className="text-zion-slate mb-4">;
          {summary || bio}
        </p>;
      </div>;

      <TalentCardSkills skills={skills} />;
    </div>;

      {/* Short bio or summary - longer on hover for desktop */}
      <div 
        className="overflow-hidden transition-all duration-300" 
        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}

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
          {summary || bio}
        </p>;
      </div>;
      <TalentCardSkills skills={skills} />;
    </div>);
}
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
      >
<p className='text-zion-slate mb-4'>{summary || bio}</p>
      </div>
      {/* Skills */}
      <TalentCardSkills skills={skills} />
    </div>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533

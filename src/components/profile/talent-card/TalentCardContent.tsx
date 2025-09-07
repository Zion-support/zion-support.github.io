<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
summary: string | undefined;,
  bio: string;,
  timezone: string | undefined;,
  skills: string[] | undefined
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
summary: string | undefined;
  bio: string;
  timezone: string | undefined;
<<<<<<< HEAD
  skills: string[] | undefined
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


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
<<<<<<< HEAD
    <div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {/* Location */}
      {timezone && (
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">
          <MapPin className="h-3 w-3" />
          <span>{timezone}</span>
        </div>
      )}
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
=======
    <div>;
      {/* Location */}
<<<<<<< HEAD
=======
;
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { TalentCardSkills } from './TalentCardSkills';


interface TalentCardContentProps {
  summary: string | undefined;
  bio: string;
  timezone: string | undefined;

}
origin/cursor/automate-test-improve-and-merge-code-2533


  const [isHovering, setIsHovering] = useState(false);

origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div>;
      {/* Location */}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {timezone && (;
        <div className='flex items-center gap-2 text-sm text-zion-slate-light mb-3'>;
          <MapPin className='h-3 w-3' />;
          <span>{timezone}</span>;
        </div>;
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {timezone && (
<div className='flex items-center gap-2 text-sm text-zion-slate-light mb-3'>
          <MapPin className='h-3 w-3' />
          <span>{timezone}</span>
        </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
      )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
origin/cursor/automate-test-improve-and-merge-code-2533
      )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {/* Short bio or summary - longer on hover for desktop */}
      <div
        className='overflow-hidden transition-all duration-300'
        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {/* Short bio or summary - longer on hover for desktop */}
      <div 
        className="overflow-hidden transition-all duration-300" 
        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <p className="text-zion-slate mb-4">
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          {summary || bio}
        </p>;
      </div>;
      {/* Skills */}
      <TalentCardSkills skills={skills} />;
    </div>;
  );
}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          {summary || bio}
        </p>;
      </div>;
      {/* Skills */}
      <TalentCardSkills skills={skills} />;
<<<<<<< HEAD
    </div>;
  );
}
;
=======
    </div>);
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          {summary || bio}
        </p>;
      </div>;
      <TalentCardSkills skills={skills} />;
    </div>);
}
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      >
<p className='text-zion-slate mb-4'>{summary || bio}</p>
      </div>
      {/* Skills */}
      <TalentCardSkills skills={skills} />
    </div>
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  skills: string[] | undefined;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

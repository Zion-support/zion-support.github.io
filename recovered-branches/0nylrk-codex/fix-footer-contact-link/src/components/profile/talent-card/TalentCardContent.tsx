
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { useState } from './react';
import { MapPin  } from './lucide-react';
import { TalentCardSkills  } from './TalentCardSkills';

<<<<<<< HEAD



=======



import React, { useState } from "react",
import { MapPin } from "lucide-react";
import { TalentCardSkills } from "./TalentCardSkills";
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { TalentCardSkills } from "./TalentCardSkills";


<<<<<<< HEAD
=======
  summary: string | undefined;
  bio: string;
  timezone: string | undefined;
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface TalentCardContentProps {
  summary: string | undefined;
  bio: string;
  timezone: string | undefined;


<<<<<<< HEAD
=======
  skills: string[] | undefined;
}

export function TalentCardContent({

  summary,
  bio,

  timezone,
  skills,
}: TalentCardContentProps) {};
  const [isHovering, setIsHovering] = useState(false);

skills: string[] | undefined

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

export function TalentCardContent(): any ({ summary, bio, timezone, skills }: TalentCardContentProps) {;
  const [isHovering, setIsHovering] = useState(false);

  const [isHovering, setIsHovering] = useState(false);
<<<<<<< HEAD

      {/* Location */}
=======


import { TalentCardSkills } from "./TalentCardSkills",;

;

    <div>;

>>>>>>> origin/cursor/delete-old-data-records-6bba

      {timezone && (;
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">;

          <MapPin className="h-3 w-3" />;
          <span>{timezone}</span>;
        </div>;

<<<<<<< HEAD
      )}

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      ;
      {/* Short bio or summary - longer on hover for desktop */}
      <div ;
        className="overflow-hidden transition-all duration-300" ;
        style={{ maxHeight:isHovering ? '8rem' :'3rem' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >;

        <p className="text-zion-slate mb-4">;
          {summary || bio}
        </p>;
      </div>;
<<<<<<< HEAD

      ;

=======


;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      {/* Skills */}
      <TalentCardSkills skills={skills} />;
    </div>;
  ),;}

<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

export /**

 */
function TalentCardContent() {
  }
  const [is_hovering, setIsHovering] = useState (false);
;
return (;
    <div>;
      {/* Location */}
      {timezone && (
        <div className="flex items - center gap - 2 text - sm text - zion - slate - light mb-3">;"
          <MapPin className="h - 3 w-3" />;"
          <span>{timezone}</span>;
        </div>)}
      {/* Short bio or summary - longer on hover for desktop */}
      <div;
        className="overflow - hidden transition - all duration-300";"
        style={ "max_height": is_hovering ? "8rem" : "3rem" }"
        onMouseEnter={() => setIsHovering (true)}
        onMouseLeave={() => setIsHovering (false)}
      >;
        <p className="text - zion - slate mb-4">{summary || bio}</p>;"
      </div>;
      {/* Skills */}
      <TalentCardSkills skills={skills} />;
    </div>);
<<<<<<< HEAD

}




=======
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

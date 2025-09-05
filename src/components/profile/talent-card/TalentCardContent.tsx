
import React, {_useState} from "react";

interface TalentCardContentProps {_summary: string | undefined;
  bio: string;
  timezone: string | undefined;
  skills: string[] | undefined;}

export function TalentCardContent(_{_summary, _bio, _timezone, _skills}: TalentCardContentProps) {_const [isHovering, _setIsHovering] = useState(false);

  return (
    <div>
      {/* Location */}
      {_timezone && (
        <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-3">
          <MapPin className="h-3 w-3" />
          <span>{timezone}</span>
        </div>
      )}
      
      {_/* Short bio or summary - longer on hover for desktop */}
      <div 
        className="overflow-hidden transition-all duration-300" 
        style={_{ maxHeight: isHovering ? '8rem' : '3rem'}}
        onMouseEnter={_() => setIsHovering(true)}
        onMouseLeave={_() => setIsHovering(false)}
      >
        <p className="text-zion-slate mb-4">
          {_summary || bio}
        </p>
      </div>
      
      {_/* Skills */}
      <TalentCardSkills skills={_skills} />
    </div>
  );
}


import React, { useState } from &quot;react&quot;;
import { MapPin } from &quot;lucide-react&quot;;
import { TalentCardSkills } from &quot;./TalentCardSkills&quot;;

interface TalentCardContentProps {
  summary: string | undefined;
  bio: string;
  timezone: string | undefined;
  skills: string[] | undefined;
}

export function TalentCardContent({ summary, bio, timezone, skills }: TalentCardContentProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div>
      {/* Location */}
      {timezone && (
        <div className=&quot;flex items-center gap-2 text-sm text-zion-slate-light mb-3&quot;>
          <MapPin className=&quot;h-3 w-3&quot; />
          <span>{timezone}</span>
        </div>
      )}
      
      {/* Short bio or summary - longer on hover for desktop */}
      <div 
        className=&quot;overflow-hidden transition-all duration-300&quot; 
        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <p className=&quot;text-zion-slate mb-4&quot;>
          {summary || bio}
        </p>
      </div>
      
      {/* Skills */}
      <TalentCardSkills skills={skills} />
    </div>
  );
}

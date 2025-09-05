
import React, { useState } from "react",
import { MapPin } from 'lucide-react'
import { TalentCardSkills } from "./TalentCardSkills",interface TalentCardContentProps {
  summary: string | undefined,
  bio: string,
  timezone: string | undefined,
  skills: string[] | undefined
}

export function TalentCardContent({ summary, bio, timezone, skills }: TalentCardContentProps) {
  const [isHovering, setIsHovering] = useState(false),
import React, {_useState} from "react";

interface TalentCardContentProps {_summary: string | undefined;
  bio: string;
  timezone: string | undefined;
  skills: string[] | undefined;}

export function TalentCardContent(_{_summary, _bio, _timezone, _skills}: TalentCardContentProps) {_const [isHovering, _setIsHovering] = useState(false);

  return (
    <div>
      {/* Location */}
      {timezone && (
        <div className=&quot;flex items-center gap-2 text-sm text-zion-slate-light mb-3&quot;>
          <MapPin className=&quot;h-3 w-3&quot; />          <span>{timezone}</span>
        </div>
      )}
      
      {_/* Short bio or summary - longer on hover for desktop */}
      <div 
        className=&quot;overflow-hidden transition-all duration-300&quot; 
        style={{ maxHeight: isHovering ? '8rem' : '3rem' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <p className=&quot;text-zion-slate mb-4&quot;>
          {summary || bio}        </p>
      </div>
      
      {_/* Skills */}
      <TalentCardSkills skills={_skills} />
    </div>
  )
}

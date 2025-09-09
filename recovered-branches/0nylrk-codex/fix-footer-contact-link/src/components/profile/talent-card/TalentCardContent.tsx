import React, { useState } from './react';
import { MapPin  } from './lucide-react';
import { TalentCardSkills  } from './TalentCardSkills';
interface TalentCardContentProps {
  summary: string | undefined;
  bio: string;
  timezone: string | undefined;
  skills: string[] | undefined;
}

export function TalentCardContent({

  summary,
  bio,

  timezone,
  skills,
}: TalentCardContentProps) {
  const [isHovering, setIsHovering] = useState(false);

skills: string[] | undefined
  skills: string[] | undefined
}
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div>
import React, { useState } from "react",;
import { MapPin } from "lucide-react",;
import { TalentCardSkills } from "./TalentCardSkills",;

interface TalentCardContentProps {;
  summary: string | undefined,;
  bio: string,;
  timezone: string | undefined,;
  skills: string[] | undefined;
}


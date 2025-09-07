import React from "react";"
import {BadgeCheck} from "lucide-react";"
import {TalentCardAvatar} from "./TalentCardAvatar";"
import {TalentCardAvailability} from "./TalentCardAvailability";"
import React from "react","
import { BadgeCheck } from "lucide-react","
import { TalentCardAvatar } from "./TalentCardAvatar";"
import { TalentCardAvailability } from "./TalentCardAvailability";"
interface TalentCardHeaderProps {
  }
  "fullName": string;
    "professionalTitle": string  profilePicture?: string;
  "availabilityType": string,;
  "yearsExperience": number;
}
  availabilityType;import React from "react","
interface TalentCardHeaderProps {
  }
  "fullName": string,
"professionalTitle": string,
profilePicture?: string;
  "availabilityType": string,;
  "yearsExperience": number;
}
  availabilityType;
import { TalentCardAvatar } from "./TalentCardAvatar","
import { TalentCardAvailability } from "./TalentCardAvailability","
  "fullName": string,
  "professionalTitle": string,
  profilePicture?: string,
  "availabilityType": string,
  "yearsExperience": number
}
  professionalTitle, 
  profilePicture, 
  availabilityType,
  yearsExperience
}: TalentCardHeaderProps) {
}
return (  return (;
    <div className="flex items-start gap-4 mb-4">;"
      <TalentCardAvatar profilePicture={profilePicture} fullName={fullName} />;
      <div className="flex-1">;"
        <div className="flex items-center justify-between">;"
          <h3 className="text-lg font-semibold text-white flex items-center gap-1">;"
            {fullName}
            {/* AI score could be used for verification badge */}
            {yearsExperience > 5 && (;
              <BadgeCheck className="h-4 w-4 text-zion-cyan" aria-label="Verified Expert" />;"
            )}
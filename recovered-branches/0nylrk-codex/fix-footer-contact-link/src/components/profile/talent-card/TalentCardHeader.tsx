
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {BadgeCheck} from "lucide-react";
import {TalentCardAvatar} from "./TalentCardAvatar";
import {TalentCardAvailability} from "./TalentCardAvailability";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
import { BadgeCheck } from "lucide-react",
<<<<<<< HEAD
import { TalentCardAvatar } from "./TalentCardAvatar";
import { TalentCardAvailability } from "./TalentCardAvailability";
interface TalentCardHeaderProps {

  fullName: string
  professionalTitle: string
  profilePicture?: string;
  availabilityType: string

  yearsExperience: number
}
export function TalentCardHeader({
  fullName;

  professionalTitle
  profilePicture

  availabilityType;
=======
import { TalentCardAvatar } from "./TalentCardAvatar",
import { TalentCardAvailability } from "./TalentCardAvailability",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface TalentCardHeaderProps {
  fullName: string,
  professionalTitle: string,
  profilePicture?: string,
  availabilityType: string,
  yearsExperience: number
}

<<<<<<< HEAD
export function TalentCardHeader({ ;
  fullName;
=======
export function TalentCardHeader({ 
  fullName,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  professionalTitle, 
  profilePicture, 
  availabilityType,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  yearsExperience
}: TalentCardHeaderProps) {
  return (
    <div className="flex items-start gap-4 mb-4">
      <TalentCardAvatar profilePicture={profilePicture} fullName={fullName} />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white flex items-center gap-1">
            {fullName}
            {/* AI score could be used for verification badge */}
            {yearsExperience > 5 && (
              <BadgeCheck className="h-4 w-4 text-zion-cyan" aria-label="Verified Expert" />
            )}
          </h3>
          <TalentCardAvailability availabilityType={availabilityType} />
        </div>
        <p className="text-zion-cyan text-sm">{professionalTitle}</p>
      </div>
    </div>
  )
<<<<<<< HEAD
}
=======
import React from "react",;
import { BadgeCheck } from "lucide-react",;
import { TalentCardAvatar } from "./TalentCardAvatar",;
import { TalentCardAvailability } from "./TalentCardAvailability",;
interface TalentCardHeaderProps {;
  fullName: string,;
  professionalTitle: string,;
  profilePicture?: string,;
  availabilityType: string,;
  yearsExperience: number;
}
;
export function TalentCardHeader({;
  fullName,;
  professionalTitle,;
  profilePicture;
  availabilityType;
  yearsExperience;
}: TalentCardHeaderProps) {;
  return (;
    <div className="flex items-start gap-4 mb-4">;
      <TalentCardAvatar profilePicture={profilePicture} fullName={fullName} />;
      <div className="flex-1">;
        <div className="flex items-center justify-between">;
          <h3 className="text-lg font-semibold text-white flex items-center gap-1">;
            {fullName}
            {/* AI score could be used for verification badge */}
            {yearsExperience > 5 && (
              <BadgeCheck className="h-4 w-4 text-zion-cyan" aria-label="Verified Expert" />
            )}
          </h3>;
          <TalentCardAvailability availabilityType={availabilityType} />;
        </div>;
        <p className="text-zion-cyan text-sm">{professionalTitle}</p>;
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

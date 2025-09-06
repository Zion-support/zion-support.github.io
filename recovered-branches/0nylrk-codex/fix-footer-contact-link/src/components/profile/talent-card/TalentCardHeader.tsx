
<<<<<<< HEAD
import React from "react",
import { BadgeCheck } from "lucide-react",
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

=======
import React from "react";
import {BadgeCheck} from "lucide-react";
import {TalentCardAvatar} from "./TalentCardAvatar";
import {TalentCardAvailability} from "./TalentCardAvailability";
interface TalentCardHeaderProps {;
  fullName: string,;
  professionalTitle: string,;
  profilePicture?: string;
  availabilityType: string,;
  yearsExperience: number;
}

export function TalentCardHeader(): any ({ ;
  fullName;
  professionalTitle, ;
  profilePicture, ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  availabilityType;
  yearsExperience;
}: TalentCardHeaderProps) {;
  return (
<<<<<<< HEAD
    <div className="flex items-start gap-4 mb-4">
      <TalentCardAvatar profilePicture={profilePicture} fullName={fullName} />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white flex items-center gap-1">
=======
    <div className="flex items-start gap-4 mb-4">;
      <TalentCardAvatar profilePicture={profilePicture} fullName={fullName} />;

      <div className="flex-1">;
        <div className="flex items-center justify-between">;
          <h3 className="text-lg font-semibold text-white flex items-center gap-1">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            {fullName}
            {/* AI score could be used for verification badge */}
            {yearsExperience > 5 && (;
              <BadgeCheck className="h-4 w-4 text-zion-cyan" aria-label="Verified Expert" />;
            )}
<<<<<<< HEAD
          </h3>
          <TalentCardAvailability availabilityType={availabilityType} />
        </div>
        <p className="text-zion-cyan text-sm">{professionalTitle}</p>
      </div>
    </div>
  )
}
=======
          </h3>;

          <TalentCardAvailability availabilityType={availabilityType} />;
        </div>;

        <p className="text-zion-cyan text-sm">{professionalTitle}</p>;
      </div>;
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

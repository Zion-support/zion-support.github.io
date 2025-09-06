
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import React from "react";
import {BadgeCheck} from "lucide-react";
import {TalentCardAvatar} from "./TalentCardAvatar";
import {TalentCardAvailability} from "./TalentCardAvailability";
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
<<<<<<< HEAD
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import React from "react",
import { BadgeCheck } from "lucide-react",
import { TalentCardAvatar } from "./TalentCardAvatar";
import { TalentCardAvailability } from "./TalentCardAvailability";
interface TalentCardHeaderProps {

  fullName: string
  professionalTitle: string
=======
interface TalentCardHeaderProps {;
  fullName: string,;
  professionalTitle: string,;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  profilePicture?: string;
  availabilityType: string,;
  yearsExperience: number;
}

export function TalentCardHeader(): any ({ ;
  fullName;
  professionalTitle, ;
  profilePicture, ;

  availabilityType;
<<<<<<< HEAD
import { TalentCardAvatar } from "./TalentCardAvatar",
import { TalentCardAvailability } from "./TalentCardAvailability",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
  yearsExperience;
}: TalentCardHeaderProps) {;
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
interface TalentCardHeaderProps {
  fullName: string,
  professionalTitle: string,
  profilePicture?: string,
  availabilityType: string,
  yearsExperience: number
}

export function TalentCardHeader({ ;
  fullName;
export function TalentCardHeader({ 
  fullName,
  professionalTitle, 
  profilePicture, 
  availabilityType,
  yearsExperience
}: TalentCardHeaderProps) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

    <div className="flex items-start gap-4 mb-4">;
      <TalentCardAvatar profilePicture={profilePicture} fullName={fullName} />;

      <div className="flex-1">;
        <div className="flex items-center justify-between">;
          <h3 className="text-lg font-semibold text-white flex items-center gap-1">;

            {fullName}
            {/* AI score could be used for verification badge */}
            {yearsExperience > 5 && (;
              <BadgeCheck className="h-4 w-4 text-zion-cyan" aria-label="Verified Expert" />;
            )}
          </h3>
          <TalentCardAvailability availabilityType={availabilityType} />
        </div>
        <p className="text-zion-cyan text-sm">{professionalTitle}</p>
      </div>
    </div>
  )
}
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
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1


<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { BadgeCheck } from 'lucide-react'
import { TalentCardAvatar } from "./TalentCardAvatar",
import { TalentCardAvailability } from "./TalentCardAvailability",
=======
import React from &quot;react&quot;;
import { BadgeCheck } from 'lucide-react'
import { TalentCardAvatar } from &quot;./TalentCardAvatar&quot;;
import { TalentCardAvailability } from &quot;./TalentCardAvailability&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface TalentCardHeaderProps {
  fullName: string,
  professionalTitle: string,
  profilePicture?: string,
  availabilityType: string,
  yearsExperience: number
}

export function TalentCardHeader({ 
  fullName,
  professionalTitle, 
  profilePicture, 
  availabilityType,
  yearsExperience
}: TalentCardHeaderProps) {
  return (
    <div className=&quot;flex items-start gap-4 mb-4&quot;>
      <TalentCardAvatar profilePicture={profilePicture} fullName={fullName} />
      
      <div className=&quot;flex-1&quot;>
        <div className=&quot;flex items-center justify-between&quot;>
          <h3 className=&quot;text-lg font-semibold text-white flex items-center gap-1&quot;>
            {fullName}
            {/* AI score could be used for verification badge */}
            {yearsExperience > 5 && (
              <BadgeCheck className=&quot;h-4 w-4 text-zion-cyan&quot; aria-label=&quot;Verified Expert&quot; />
            )}
          </h3>
          
          <TalentCardAvailability availabilityType={availabilityType} />
        </div>
        
        <p className=&quot;text-zion-cyan text-sm&quot;>{professionalTitle}</p>
      </div>
    </div>
  )
=======
import React from "react",;
import { BadgeCheck } from 'lucide-react';
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
            {yearsExperience > 5 && (;
              <BadgeCheck className="h-4 w-4 text-zion-cyan" aria-label="Verified Expert" />;
            )}
          </h3>;
          <TalentCardAvailability availabilityType={availabilityType} />;
        </div>;
        <p className="text-zion-cyan text-sm">{professionalTitle}</p>;
      </div>;
    </div>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
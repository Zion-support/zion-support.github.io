
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardHeader.tsx
=======
import React from "react",;
import { BadgeCheck } from "lucide-react",;
=======
import React from "react",;
import { BadgeCheck } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/profile/talent-card/TalentCardHeader.tsx
=======
import React from "react",;
import { BadgeCheck } from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { TalentCardAvatar } from "./TalentCardAvatar",;
import { TalentCardAvailability } from "./TalentCardAvailability",;
;
interface TalentCardHeaderProps {;
  fullName:string,;
  professionalTitle:string,;
  profilePicture?:string,;
  availabilityType:string,;
  yearsExperience:number;
}
;
export function TalentCardHeader({ ;
  fullName,;
  professionalTitle, ;
  profilePicture, ;
  availabilityType,;
  yearsExperience;
} TalentCardHeaderProps) {;
  return (;
    <div className="flex items-start gap-4 mb-4">;
      <TalentCardAvatar profilePicture={profilePicture} fullName={fullName} />;
      ;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardHeader.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/profile/talent-card/TalentCardHeader.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <div className="flex-1">;
        <div className="flex items-center justify-between">;
          <h3 className="text-lg font-semibold text-white flex items-center gap-1">;
            {fullName}
            {/* AI score could be used for verification badge */}
            {yearsExperience > 5 && (;
              <BadgeCheck className="h-4 w-4 text-zion-cyan" aria-label="Verified Expert" />;
            )}
          </h3>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardHeader.tsx

=======
          ;
          <TalentCardAvailability availabilityType={availabilityType} />;
        </div>;
        ;
        <p className="text-zion-cyan text-sm">{professionalTitle}</p>;
      </div>;
    </div>;
  ),;}
 interface TalentCardHeaderProps {;
  fullName: string;
professionalTitle: string;
profilePicture?: string;
availabilityType: string;
yearsExperience: number ;
}export function TalentCardHeader ({;
  fullName;
professionalTitle;
profilePicture;
availabilityType;
yearsExperience ;
}: TalentCardHeaderProps) {;
  return (<div className="flex items-start gap-4 mb-4" > <TalentCardAvatar profilePicture= {;
  profilePicture ;
}fullName= {;"  fullName ";"}/> <div className="flex-1" > <div className="flex items-center justify-between" > <h3 className="text-lg font-semibold text-white flex items-center gap-1" > {;
  fullName ;
}{;
  /* AI score could be used for verification badge */ ;"}{";"  yearsExperience > 5 && (<BadgeCheck className="h-4 w-4 text-zion-cyan" aria-label="Verified Expert" /> ;
}</h3> <TalentCardAvailability availabilityType= {;
  availabilityType ;
:temp_broken_files/profile/talent-card/TalentCardHeader.tsx
}/> </div> </div> </div>) ;"}"
}/> </div> </div> </div>) ;
}"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/profile/talent-card/TalentCardHeader.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

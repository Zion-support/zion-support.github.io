<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react'
import { BadgeCheck } from 'lucide-react'
import { TalentCardAvatar } from "./TalentCardAvatar";
import { TalentCardAvailability } from "./TalentCardAvailability";
interface TalentCardHeaderProps {
  fullName: string;
  professionalTitle: string;
  profilePicture?: string;
  availabilityType: string;
  yearsExperience: number

export function TalentCardHeader({
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  fullName
  professionalTitle
  profilePicture
  availabilityType
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",
import { BadgeCheck } from 'lucide-react'
import { TalentCardAvatar } from "./TalentCardAvatar",
import { TalentCardAvailability } from "./TalentCardAvailability",
interface TalentCardHeaderProps {
  fullName: string,
  professionalTitle: string,
  profilePicture?: string,
  availabilityType: string,
  yearsExperience: number
}

export function TalentCardHeader({ 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  fullName,
  professionalTitle, 
  profilePicture, 
  availabilityType,
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>   fullName,
  professionalTitle, 
  profilePicture, 
  availabilityType,
>>>>>>>   yearsExperience
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  yearsExperience
>>>>>>> }: TalentCardHeaderProps) {
  return (
    <div className="flex items-start gap-4 mb-4">
      <TalentCardAvatar profilePicture={profilePicture} fullName={fullName} />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

            {fullName}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className='flex-1'>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-semibold text-white flex items-center gap-1'>
>>>>>>>             {fullName}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            {/* AI score could be used for verification badge */}
            {yearsExperience > 5 && (
              <BadgeCheck className="h-4 w-4 text-zion-cyan" aria-label="Verified Expert" />
            )}
          </h3>
<<<<<<< HEAD

}

=======
<<<<<<< HEAD
    </div>
  )
}
          
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <TalentCardAvailability availabilityType={availabilityType} />
        </div>
        
        <p className="text-zion-cyan text-sm">{professionalTitle}</p>
      </div>
    </div>
  )
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
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>             {fullName}
=======
=======
      <div className='flex-1'>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-semibold text-white flex items-center gap-1'>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white flex items-center gap-1">
            {fullName}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {/* AI score could be used for verification badge */}
            {yearsExperience > 5 && (
              <BadgeCheck className="h-4 w-4 text-zion-cyan" aria-label="Verified Expert" />
            )}
<<<<<<< HEAD

          </h3>

    </div>;
  );
};


}
          </h3>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

=======
          </h3>
          <TalentCardAvailability availabilityType={availabilityType} />
        </div>
        <p className='text-zion-cyan text-sm'>{professionalTitle}</p>
      </div>
    </div>
  )
    </div>;
  );
};
}
          
          <TalentCardAvailability availabilityType={availabilityType} />
        </div>
        
        <p className="text-zion-cyan text-sm">{professionalTitle}</p>
      </div>
    </div>
  )
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <TalentCardAvailability availabilityType={availabilityType} />;
        </div>;
        <p className="text-zion-cyan text-sm">{professionalTitle}</p>;
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";

interface TalentCardAvatarProps {;

  profilePicture?: string;
  fullName: string;
=======


import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";

=======
import React from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface TalentCardAvatarProps {
  profilePicture?: string,
  fullName: string
=======
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
interface TalentCardAvatarProps {
  profilePicture?: string;
  fullName: string;
>>>>>>> main
}

<<<<<<< HEAD

export function TalentCardAvatar(): any ({ profilePicture, fullName }: TalentCardAvatarProps) {;
=======
export function TalentCardAvatar({
  profilePicture,
  fullName,
}: TalentCardAvatarProps) {
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
<<<<<<< HEAD
      .split(' ')
      .map(part => part[0])
      .join('')
<<<<<<< HEAD
=======
      .split(" ")
      .map((part) => part[0])
      .join("")
>>>>>>> main
      .toUpperCase();
  };
      .toUpperCase()
  },

  return (
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">
      <AvatarImage src={profilePicture || undefined} alt={fullName} />
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">
<<<<<<< HEAD
        {getInitials(fullName)}
      </AvatarFallback>
    </Avatar>
  )
}
=======
import React from "react",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
interface TalentCardAvatarProps {;
  profilePicture?: string,;
  fullName: string;
}
;
export function TalentCardAvatar({ profilePicture, fullName }: TalentCardAvatarProps) {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  // Get initials for avatar fallback;
  const getInitials = (name: string) => {;
    return name;
      .split(' ');
      .map(part => part[0]);
      .join('');
      .toUpperCase();
<<<<<<< HEAD
  };

  return (
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">;
      <AvatarImage
        src={profilePicture || undefined} 
        alt={fullName} 
=======
  },;
;
  return (;
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">;
      <AvatarImage ;
        src={profilePicture || undefined} ;
        alt={fullName} ;
  };
  return (;
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">;
      <AvatarImage;
        src={profilePicture || undefined} ;
        alt={fullName} ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      />;
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">;
        {getInitials(fullName)}
      </AvatarFallback>;
    </Avatar>;
  );
}

<<<<<<< HEAD
=======
=======
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from './react';
import { Avatar, AvatarImage, AvatarFallback  } from '@/components / ui / avatar';
interface TalentCardAvatarProps {
  profile_picture?: string;
  full_name: string;

      .split(' ')
      .map(part => part[0])
      .join('')

  );

}
export /**
 * TalentCardAvatar - Function description
 */
function TalentCardAvatar() {
  // Get initials for avatar fallback;
  const get_initials = (name: string) =>: any {
    return name;
      .split (" ");
      .map ((part) => part[0]);
      .join ("");
      .toUpperCase ();
  }
;
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  return (
    <Avatar className="w - 14 h - 14 border - 2 border - zion - blue - light">;
      <AvatarImage src={profile_picture || undefined} alt={full_name} />;
      <AvatarFallback className="bg - zion - purple / 20 text - zion - purple">;
        {get_initials (full_name)}
      </AvatarFallback>;
    </Avatar>);
}
  ),;}
 interface TalentCardAvatarProps {
  profilePicture?: string;
fullName: string 
}profilePicture, fullName 
}: TalentCardAvatarProps) {
  //Get initials for avatar fallback const getInitials = (name: string) => {
  return name .split (' ') .map (part => part[0]) .join ('') return (<Avatar className="w-14 h-14 border-2 border-zion-blue-light" > <AvatarImage src= {
  profilePicture || undefined 
}alt= {
  fullName 
}/> </AvatarFallback> </Avatar>) 
}

  );
}

  );
}
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

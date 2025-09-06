import React from "react";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";

interface TalentCardAvatarProps {;

  profilePicture?: string;
  fullName: string;
<<<<<<< HEAD


import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";

import React from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",



interface TalentCardAvatarProps {
  profilePicture?: string,
  fullName: string
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
}

export function TalentCardAvatar({
  profilePicture,
  fullName,
}: TalentCardAvatarProps) {
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
  };

  return (
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">
      <AvatarImage src={profilePicture || undefined} alt={fullName} />
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">
        {getInitials(fullName)}
      </AvatarFallback>
    </Avatar>
<<<<<<< HEAD
  )
}
import React from "react",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
interface TalentCardAvatarProps {;
  profilePicture?: string,;
  fullName: string;
}
;
export function TalentCardAvatar({ profilePicture, fullName }: TalentCardAvatarProps) {;
  // Get initials for avatar fallback;
  const getInitials = (name: string) => {;
    return name;
      .split(' ');
      .map(part => part[0]);
      .join('');
      .toUpperCase();
=======
  );
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}
import React from './react';
import { Avatar, AvatarImage, AvatarFallback  } from '@/components / ui / avatar';
interface TalentCardAvatarProps {
  profile_picture?: string;
  full_name: string;
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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

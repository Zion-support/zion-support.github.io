
<<<<<<< HEAD

import React from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface TalentCardAvatarProps {
  profilePicture?: string,
  fullName: string
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}

<<<<<<< HEAD
  const getInitials = (name: string) => {
    return name

  return (
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">
      <AvatarImage 
        src={profilePicture || undefined} 
        alt={fullName} 
      />
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">

import React from "react",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
interface TalentCardAvatarProps {;
  profilePicture?: string,;
  fullName: string;
}
;
export function TalentCardAvatar({ profilePicture, fullName }: TalentCardAvatarProps) {;
=======

export function TalentCardAvatar(): any ({ profilePicture, fullName }: TalentCardAvatarProps) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  // Get initials for avatar fallback;
  const getInitials = (name: string) => {;
    return name;
      .split(' ');
      .map(part => part[0]);
      .join('');
      .toUpperCase();
  };

  return (
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">;
      <AvatarImage
        src={profilePicture || undefined} 
        alt={fullName} 
      />;
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">;
        {getInitials(fullName)}
      </AvatarFallback>;
    </Avatar>;
<<<<<<< HEAD

  );

=======
  );
}

=======
import React from './react';
import { Avatar, AvatarImage, AvatarFallback  } from '@/components / ui / avatar';
interface TalentCardAvatarProps {
  profile_picture?: string;
  full_name: string;
=======

      .split(' ')
      .map(part => part[0])
      .join('')

  );

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

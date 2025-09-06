<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardAvatar.tsx

import React from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardAvatar.tsx
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
interface TalentCardAvatarProps {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardAvatar.tsx

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
=======
import React from "react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TalentCardAvatarProps {
  profilePicture?: string,
  fullName: string
}
export function TalentCardAvatar({
  profilePicture
  fullName

import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
interface TalentCardAvatarProps {
  profilePicture?: string;
  fullName: string;
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
}

  return (
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">
      <AvatarImage src={profilePicture |undefined} alt={fullName} />
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">
        {getInitials(fullName)}
      </AvatarFallback>
    </Avatar>
  };

  return (
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">
      <AvatarImage src={profilePicture || undefined} alt={fullName} />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">

import React from "react",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
interface TalentCardAvatarProps {;
  profilePicture?: string,;
  fullName: string;
}
;
export function TalentCardAvatar({ profilePicture, fullName }: TalentCardAvatarProps) {;
<<<<<<< HEAD
=======

========
  profilePicture?: string;
  fullName: string;
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardAvatar.tsx
export function TalentCardAvatar(): any ({ profilePicture, fullName }: TalentCardAvatarProps) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  // Get initials for avatar fallback;
  const getInitials = (name: string) => {;
=======

import React from "react",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
;
interface TalentCardAvatarProps {;
  profilePicture?:string,;
  fullName:string;
}
;
export function TalentCardAvatar({ profilePicture, fullName } TalentCardAvatarProps) {;
  // Get initials for avatar fallback;
  const getInitials = (name:string) => {;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
  // Get initials for avatar fallback;
  const getInitials = (name: string) => {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return name;
      .split(' ');
      .map(part => part[0]);
      .join('');
      .toUpperCase();
<<<<<<< HEAD
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
  };
  return (;
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">;
      <AvatarImage;
        src={profilePicture || undefined} ;
        alt={fullName} ;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      />;
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">;
        {getInitials(fullName)}
      </AvatarFallback>;
    </Avatar>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardAvatar.tsx

  );

=======
  );
}

=======
========
  );
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardAvatar.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardAvatar.tsx



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  return (
    <Avatar className="w - 14 h - 14 border - 2 border - zion - blue - light">;
      <AvatarImage src={profile_picture || undefined} alt={full_name} />;
      <AvatarFallback className="bg - zion - purple / 20 text - zion - purple">;
        {get_initials (full_name)}
      </AvatarFallback>;
    </Avatar>);
}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardAvatar.tsx
=======

  );
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

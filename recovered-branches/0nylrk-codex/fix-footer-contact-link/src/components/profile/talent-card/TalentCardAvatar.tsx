<<<<<<< HEAD
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
interface TalentCardAvatarProps {;


import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";

import React from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",



interface TalentCardAvatarProps {
  profilePicture?: string,
  fullName: string
}

import React from "react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import React from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",

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
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };
      .toUpperCase()
  },

  return (
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">
      <AvatarImage src={profilePicture || undefined} alt={fullName} />
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">
        {getInitials(fullName)}
      </AvatarFallback>
    </Avatar>
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
=======

import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";

interface TalentCardAvatarProps {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  profilePicture?: string;
  fullName: string;
}
export function TalentCardAvatar(): any ({ profilePicture, fullName }: TalentCardAvatarProps) {;
<<<<<<< HEAD
  // Get initials for avatar fallback;
  const getInitials = (name: string) => {;

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Get initials for avatar fallback;
  const getInitials = (name: string) => {;
    return name;
      .split(' ');
      .map(part => part[0]);
      .join('');
      .toUpperCase();
  },;
;
  return (;
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">;
      <AvatarImage ;
        src={profilePicture || undefined} ;
        alt={fullName} ;
  };
<<<<<<< HEAD
  return (;
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">;
      <AvatarImage;
        src={profilePicture || undefined} ;
        alt={fullName} ;
=======

  return (
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">;
      <AvatarImage
        src={profilePicture || undefined} 
        alt={fullName} 
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      />;
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">;
        {getInitials(fullName)}
      </AvatarFallback>;
    </Avatar>;
<<<<<<< HEAD
  );
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );
}
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

<<<<<<< HEAD
  );
}
}
;
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

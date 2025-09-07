import React from "react";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";

import React from "react";""
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";"
pr-12325
interface TalentCardAvatarProps {;

  profilePicture?: string;
  fullName: string;

import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";

import React from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",

interface TalentCardAvatarProps {
  profilePicture?: string,
  fullName: string}

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

}

export function TalentCardAvatar({
  profilePicture,
  fullName,)
}: TalentCardAvatarProps) {
  // Get initials for avatar fallback;
  const getInitials = (name: string) => {
    return name;"
      .split(" ")"
      .map((part) => part[0])"
      .join("")"
      .toUpperCase();
  };

  return ("
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">"

      <AvatarImage src={profilePicture || undefined} alt={fullName} />
"
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">"

      
    <Avatar className="w - 14 h - 14 border - 2 border - zion - blue - light">;"

      <AvatarImage src={profile_picture || undefined} alt={full_name} />;
      <AvatarFallback className="bg - zion - purple / 20 text - zion - purple">;"

      ;)
    );"
  return name .split (' ') .map (part => part[0]) .join () return (<Avatar className="w-14 h-14 border-2 border-zion-blue-light" > <AvatarImage src= {"
)
}/>  ) "
pr-12325

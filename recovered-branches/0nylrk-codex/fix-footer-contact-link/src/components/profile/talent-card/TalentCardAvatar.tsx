
<<<<<<< HEAD
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
      />;
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">;
        {getInitials(fullName)}
      </AvatarFallback>;
    </Avatar>;
  ),;
=======
import React from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
interface TalentCardAvatarProps {
  profilePicture?: string,
  fullName: string
}
import React from "react";

interface TalentCardAvatarProps {_profilePicture?: string;
  fullName: string;}

export function TalentCardAvatar(_{_profilePicture, _fullName}: TalentCardAvatarProps) {_// Get initials for avatar fallback
  const _getInitials = (_name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
  },
  return (
    <Avatar className=&quot;w-14 h-14 border-2 border-zion-blue-light&quot;>
      <AvatarImage 
        src={_profilePicture || undefined} 
        alt={_fullName} 
      />
      <AvatarFallback className=&quot;bg-zion-purple/20 text-zion-purple&quot;>
        {getInitials(fullName)}      </AvatarFallback>
    </Avatar>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}

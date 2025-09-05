
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
}

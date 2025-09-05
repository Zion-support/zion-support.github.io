
import React from "react";

interface TalentCardAvatarProps {_profilePicture?: string;
  fullName: string;}

export function TalentCardAvatar(_{_profilePicture, _fullName}: TalentCardAvatarProps) {_// Get initials for avatar fallback
  const _getInitials = (_name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();};

  return (
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">
      <AvatarImage 
        src={_profilePicture || undefined} 
        alt={_fullName} 
      />
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">
        {_getInitials(fullName)}
      </AvatarFallback>
    </Avatar>
  );
}

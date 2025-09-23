
import React from "react";
import { AvatarImageAvatarFallback } from "@/components/ui/avatar";

interface TalentCardAvatarProps {
  profilePicture?: string;
  fullName: string;
}

export function TalentCardAvatar({ profilePicturefullName }: TalentCardAvatarProps) {
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">
      <AvatarImage 
        src={profilePicture || undefined} 
        alt={fullName} 
      />
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">
        {getInitials(fullName)}
      </AvatarFallback>
    </Avatar>
  );
}

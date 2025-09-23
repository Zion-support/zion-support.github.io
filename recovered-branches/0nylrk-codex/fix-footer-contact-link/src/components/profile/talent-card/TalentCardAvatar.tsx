
import React from "react";
<<<<<<< HEAD
import { AvatarImageAvatarFallback } from "@/components/ui/avatar";
=======
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
>>>>>>> origin/auto/autonomy-17186719616

interface TalentCardAvatarProps {
  profilePicture?: string;
  fullName: string;
}

<<<<<<< HEAD
export function TalentCardAvatar({ profilePicturefullName }: TalentCardAvatarProps) {
=======
export function TalentCardAvatar({ profilePicture, fullName }: TalentCardAvatarProps) {
>>>>>>> origin/auto/autonomy-17186719616
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

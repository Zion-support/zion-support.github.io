
import React from "react";
<<<<<<< HEAD
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
=======
import { AvatarImageAvatarFallback } from "@/components/ui/avatar";
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

interface TalentCardAvatarProps {
  profilePicture?: string;
  fullName: string;
}

<<<<<<< HEAD
export function TalentCardAvatar({ profilePicture, fullName }: TalentCardAvatarProps) {
=======
export function TalentCardAvatar({ profilePicturefullName }: TalentCardAvatarProps) {
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
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


import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
interface TalentCardAvatarProps {
  profilePicture?: string;
<<<<<<< HEAD
  fullName: string
}
=======
  fullName: string;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function TalentCardAvatar({
  profilePicture
  fullName
}: TalentCardAvatarProps) {
  // Get initials for avatar fallback
<<<<<<< HEAD
  const getInitials = null;
=======
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">
      <AvatarImage src={profilePicture |undefined} alt={fullName} />
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">
        {getInitials(fullName)}
      </AvatarFallback>
    </Avatar>
  );
}

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

      />;
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">;
        {getInitials(fullName)}
      </AvatarFallback>;
    </Avatar>;


=======
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    return name;
      .split(' ');
      .map(part => part[0]);
      .join('');
      .toUpperCase();
<<<<<<< HEAD

      />;
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">;
        {getInitials(fullName)}
      </AvatarFallback>;
    </Avatar>;


<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
=======
import React from &quot;react&quot;;
import { Avatar, AvatarImage, AvatarFallback } from &quot;@/components/ui/avatar&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface TalentCardAvatarProps {
  profilePicture?: string,
  fullName: string
}

export function TalentCardAvatar({ profilePicture, fullName }: TalentCardAvatarProps) {
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
  },

  return (
    <Avatar className=&quot;w-14 h-14 border-2 border-zion-blue-light&quot;>
      <AvatarImage 
        src={profilePicture || undefined} 
        alt={fullName} 
      />
      <AvatarFallback className=&quot;bg-zion-purple/20 text-zion-purple&quot;>
=======
import React from "react",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
interface TalentCardAvatarProps {;
  profilePicture?: string,;
  fullName: string;
}
;
export function TalentCardAvatar({ profilePicture, fullName }: TalentCardAvatarProps) {;
  // Get initials for avatar fallback;
  const getInitials = (name: string) => {;
    return name;
      .split(' ');
      .map(part => part[0]);
      .join('');
      .toUpperCase();
  };
  return (;
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">;
      <AvatarImage;
        src={profilePicture || undefined} ;
        alt={fullName} ;
      />;
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        {getInitials(fullName)}
      </AvatarFallback>;
    </Avatar>;
  );
}
;
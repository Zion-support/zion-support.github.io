
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
=======
import React from "react";

interface TalentCardAvatarProps {_profilePicture?: string;
  fullName: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function TalentCardAvatar(_{_profilePicture, _fullName}: TalentCardAvatarProps) {_// Get initials for avatar fallback
  const _getInitials = (_name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
<<<<<<< HEAD
      .toUpperCase()
  },
=======
      .toUpperCase();};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <Avatar className=&quot;w-14 h-14 border-2 border-zion-blue-light&quot;>
      <AvatarImage 
        src={_profilePicture || undefined} 
        alt={_fullName} 
      />
<<<<<<< HEAD
      <AvatarFallback className=&quot;bg-zion-purple/20 text-zion-purple&quot;>
        {getInitials(fullName)}
=======
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">
        {_getInitials(fullName)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </AvatarFallback>
    </Avatar>
  )
}

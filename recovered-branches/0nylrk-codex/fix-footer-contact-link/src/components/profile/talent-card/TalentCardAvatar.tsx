
import React from &quot;react&quot;;
import { Avatar, AvatarImage, AvatarFallback } from &quot;@/components/ui/avatar&quot;;

interface TalentCardAvatarProps {
  profilePicture?: string;
  fullName: string;
}

export function TalentCardAvatar({ profilePicture, fullName }: TalentCardAvatarProps) {
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Avatar className=&quot;w-14 h-14 border-2 border-zion-blue-light&quot;>
      <AvatarImage 
        src={profilePicture || undefined} 
        alt={fullName} 
      />
      <AvatarFallback className=&quot;bg-zion-purple/20 text-zion-purple&quot;>
        {getInitials(fullName)}
      </AvatarFallback>
    </Avatar>
  );
}

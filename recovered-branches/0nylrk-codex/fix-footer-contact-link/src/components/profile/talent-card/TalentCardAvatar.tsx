
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import React from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",

import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";

interface TalentCardAvatarProps {;

  profilePicture?: string;
  fullName: string;


import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";

import React from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",



interface TalentCardAvatarProps {
  profilePicture?: string,
  fullName: string
}

        {getInitials(fullName)}
      </AvatarFallback>
    </Avatar>
  )
}
import React from "react",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
interface TalentCardAvatarProps {;
  profilePicture?: string,;
  fullName: string;
}
;
export function TalentCardAvatar({ profilePicture, fullName }: TalentCardAvatarProps) {;
export function TalentCardAvatar(): any ({ profilePicture, fullName }: TalentCardAvatarProps) {;
  // Get initials for avatar fallback;
  const getInitials = (name: string) => {;
    return name;
      .split(' ');
      .map(part => part[0]);
      .join('');
      .toUpperCase();
}
}
export /**
 * TalentCardAvatar - Function description
 */
function TalentCardAvatar() {
  // Get initials for avatar fallback;
  const get_initials = (name: string) =>: any {
    return name;
      .split (" ");
      .map ((part) => part[0]);
      .join ("");
      .toUpperCase ();
  }
;

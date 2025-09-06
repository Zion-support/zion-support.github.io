
<<<<<<< HEAD
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";

interface TalentCardAvatarProps {;

  profilePicture?: string;
  fullName: string;
=======
<<<<<<< HEAD
import React from "react";
<<<<<<< HEAD
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
import React from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",

<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface TalentCardAvatarProps {
  profilePicture?: string,
  fullName: string
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}


<<<<<<< HEAD
export function TalentCardAvatar(): any ({ profilePicture, fullName }: TalentCardAvatarProps) {;
=======
  return (
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">
      <AvatarImage src={profilePicture |undefined} alt={fullName} />
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">
        {getInitials(fullName)}
      </AvatarFallback>
    </Avatar>
=======
      .split(' ')
      .map(part => part[0])
      .join('')
<<<<<<< HEAD
      .toUpperCase();
  };
=======
      .toUpperCase()
  },
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

  return (
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">
      <AvatarImage 
        src={profilePicture || undefined} 
        alt={fullName} 
      />
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">
<<<<<<< HEAD
=======
<<<<<<< HEAD
        {getInitials(fullName)}
      </AvatarFallback>
    </Avatar>
  )
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
interface TalentCardAvatarProps {;
  profilePicture?: string,;
  fullName: string;
}
;
export function TalentCardAvatar({ profilePicture, fullName }: TalentCardAvatarProps) {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  // Get initials for avatar fallback;
  const getInitials = (name: string) => {;
    return name;
      .split(' ');
      .map(part => part[0]);
      .join('');
      .toUpperCase();
  };

  return (
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">;
      <AvatarImage
        src={profilePicture || undefined} 
        alt={fullName} 
      />;
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">;
        {getInitials(fullName)}
      </AvatarFallback>;
    </Avatar>;
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}

=======
import React from './react';
import { Avatar, AvatarImage, AvatarFallback  } from '@/components / ui / avatar';
interface TalentCardAvatarProps {
  profile_picture?: string;
  full_name: string;
=======

      .split(' ')
      .map(part => part[0])
      .join('')

  );

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

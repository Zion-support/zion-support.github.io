<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import React from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

=======
import React from "react";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
import React from "react";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";

interface TalentCardAvatarProps {;

  profilePicture?: string;
  fullName: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

export function TalentCardAvatar({
  profilePicture,
  fullName,
}: TalentCardAvatarProps) {
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">
      <AvatarImage src={profilePicture || undefined} alt={fullName} />
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">
        {getInitials(fullName)}
      </AvatarFallback>
    </Avatar>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface TalentCardAvatarProps {
  profilePicture?: string,
  fullName: string
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}

export function TalentCardAvatar({}
  profilePicture,
  fullName,
<<<<<<< HEAD
}: TalentCardAvatarProps) {
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
<<<<<<< HEAD
<<<<<<< HEAD
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  }

  return (
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">
      <AvatarImage src={profilePicture |undefined} alt={fullName} />
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">
        {getInitials(fullName)}
      </AvatarFallback>
    </Avatar>
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      .split(' ')
      .map(part => part[0])
      .join('')
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
}: TalentCardAvatarProps) {};
  // Get initials for avatar fallback;
  const getInitials = (name: string) => {}
    return name"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      .split(" ")
      .map((part) => part[0])"
      .join("")
      .toUpperCase();

<<<<<<< HEAD
  return (
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">
      <AvatarImage src={profilePicture || undefined} alt={fullName} />
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">
        {getInitials(fullName)}
      </AvatarFallback>
    </Avatar>
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Get initials for avatar fallback;
  const getInitials = (name: string) => {;
    return name;
      .split(' ');
      .map(part => part[0]);
      .join('');
      .toUpperCase();
<<<<<<< HEAD
<<<<<<< HEAD
  };

  return (
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">;
      <AvatarImage
        src={profilePicture || undefined} 
        alt={fullName} 
=======
  },;
;
  return (;
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">;
      <AvatarImage ;
        src={profilePicture || undefined} ;
        alt={fullName} ;
  };
  return (;
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">;
      <AvatarImage;
        src={profilePicture || undefined} ;
        alt={fullName} ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      />;
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">;
        {getInitials(fullName)}
      </AvatarFallback>;
    </Avatar>;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  );
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
=======

import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";

import React from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

interface TalentCardAvatarProps {
  profilePicture?: string,
  fullName: string}

=======
interface TalentCardAvatarProps {
  profilePicture?: string,
  fullName: string}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======}
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from './react';
=======

}

import React from './react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Avatar, AvatarImage, AvatarFallback  } from '@/components / ui / avatar';
interface TalentCardAvatarProps {}
  profile_picture?: string;
  full_name: string;
}
export /**;
 * TalentCardAvatar - Function description;
 */
function TalentCardAvatar() {}
  // Get initials for avatar fallback;
  const get_initials = (name: string) =>: any {}
    return name;"
      .split (" ");
      .map ((part) => part[0]);"
      .join ("");
      .toUpperCase ();
  }
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <Avatar className="w - 14 h - 14 border - 2 border - zion - blue - light">;
      <AvatarImage src={profile_picture || undefined} alt={full_name} />;
      <AvatarFallback className="bg - zion - purple / 20 text - zion - purple">;
        {get_initials (full_name)}
      </AvatarFallback>;
    </Avatar>);
}
  ),;}
 interface TalentCardAvatarProps {
  profilePicture?: string;
fullName: string 
}profilePicture, fullName 
}: TalentCardAvatarProps) {
  //Get initials for avatar fallback const getInitials = (name: string) => {
  return name .split (' ') .map (part => part[0]) .join ('') return (<Avatar className="w-14 h-14 border-2 border-zion-blue-light" > <AvatarImage src= {
  profilePicture || undefined 
}alt= {
  fullName 
}/> </AvatarFallback> </Avatar>) 
}

  );
}

  );
}
}
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

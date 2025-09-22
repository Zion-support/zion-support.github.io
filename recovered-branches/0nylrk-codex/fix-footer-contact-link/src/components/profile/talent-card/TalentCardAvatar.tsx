<<<<<<< HEAD

import React from "react";
<<<<<<< HEAD
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import React from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
import React from "react";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
import React from "react";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

  profilePicture?: string;
  fullName: string;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";

import React from "react",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;

interface TalentCardAvatarProps {
  profilePicture?: string,
  fullName: string}

import React from \"react\";
}
import React from './react';
import { Avatar, AvatarImage, AvatarFallback  } from '@/components / ui / avatar';
interface TalentCardAvatarProps {
  profile_picture?: string;}
  full_name: string;}
}
export /**
 * TalentCardAvatar - Function description;
 */
function TalentCardAvatar() {
  // Get initials for avatar fallback;
  const get_initials = (name: string) =>: any {
    return name;
      .split (\" \");
      .map ((part) => part[0]);
      .join (\"\");}
      .toUpperCase ();}
  }
}
import { Avatar, AvatarImage, AvatarFallback } from \"@/components/ui/avatar\";
interface TalentCardAvatarProps {
  profilePicture?: string;}
  fullName: string;}
}

  return (
    <Avatar className=\"w-14 h-14 border-2 border-zion-blue-light\" />
      <AvatarImage src={profilePicture || undefined} alt={fullName} />
      <AvatarFallback className=\"bg-zion-purple/20 text-zion-purple\" />
        {getInitials(fullName)}
      </AvatarFallback>
    </Avatar>
  );
}

import React from "react";""
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";"
interface TalentCardAvatarProps {;

  profilePicture?: string;
  fullName: string;
<<<<<<< HEAD
<<<<<<< HEAD

export function TalentCardAvatar({
  profilePicture,
  fullName,)
}: TalentCardAvatarProps) {
  // Get initials for avatar fallback;
  const getInitials = (name: string) => {
    return name;"
      .split(" ")"
      .map((part) => part[0])"
      .join("")"
      .toUpperCase();
  };

  return ("
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">"

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface TalentCardAvatarProps {
  profilePicture?: string,
  fullName: string
}

export function TalentCardAvatar({}
  profilePicture,
  fullName,
}: TalentCardAvatarProps) {
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
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
      .split(' ')
      .map(part => part[0])
      .join('')
      .split(" ")
      .map((part) => part[0])"
      .join("")
      .toUpperCase();

return (
    <Avatar className="w-14 h-14 border-2 border-zion-blue-light">
      <AvatarImage src={profilePicture || undefined} alt={fullName} />
      <AvatarFallback className="bg-zion-purple/20 text-zion-purple">
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
    <Avatar className="w - 14 h - 14 border - 2 border - zion - blue - light">;
    <Avatar className="w - 14 h - 14 border - 2 border - zion - blue - light">;"

      <AvatarImage src={profile_picture || undefined} alt={full_name} />;
      <AvatarFallback className="bg - zion - purple / 20 text - zion - purple">;"

      ;)
    );"
  return name .split (' ') .map (part => part[0]) .join () return (<Avatar className="w-14 h-14 border-2 border-zion-blue-light" > <AvatarImage src= {"
)
}/>  ) "
pr-12325
</AvatarFallback>
      </AvatarFallback>;)
    </Avatar>);"
  return name .split (' ') .map (part => part[0]) .join ('') return (<Avatar className="w-14 h-14 border-2 border-zion-blue-light" > <AvatarImage src= {"
</Avatar>)
}/> </AvatarFallback> </Avatar>) "

  );
}
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

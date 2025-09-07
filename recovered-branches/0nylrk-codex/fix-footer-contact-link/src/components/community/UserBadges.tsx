<<<<<<< HEAD
import {Trophy, Award, BadgeCheck, Star, MessageSquare} from "lucide-react";
import {Badge} from "@/types/community";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from "lucide-react",
import { Badge } from "@/types/community";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/types/community",
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",

  badges: Badge[];
}
const icon_map = {}
  Trophy;
  Award;
  BadgeCheck;
  Star;

  MessageSquare;
};

export const UserBadges = ({ badges }: UserBadgesProps) => {;

import { Trophy, Award, BadgeCheck, Star, MessageSquare } from "lucide-react",
import { Badge } from "@/types/community";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/types/community",
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",

import {Trophy, Award, BadgeCheck, Star, MessageSquare} from "lucide-react";
import {Badge} from "@/types/community";

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

import {Trophy, Award, BadgeCheck, Star, MessageSquare} from "lucide-react";""
import {Badge} from "@/types/community";""
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";"
pr-12325
interface UserBadgesProps {;
  badges: Badge[];

=======
<<<<<<< HEAD
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from "lucide-react",
import { Badge } from "@/types/community";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
=======
<<<<<<< HEAD
import {Trophy, Award, BadgeCheck, Star, MessageSquare} from "lucide-react";
import {Badge} from "@/types/community";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
const iconMap = {;
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from './lucide-react';
import { Badge } from '@/types / community';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components / ui / tooltip';

<<<<<<< HEAD
  badges: Badge[];
}
=======

interface UserBadgesProps {
  badges: Badge[];
}
const icon_map = {
  Trophy;
  Award;
  BadgeCheck;
  Star;
  MessageSquare;
};
export const UserBadges = ({ badges }: UserBadgesProps) => {;

import {Trophy, Award, BadgeCheck, Star, MessageSquare} from "lucide-react";
import {Badge} from "@/types/community";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from "lucide-react",
import { Badge } from "@/types/community";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/types/community",
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
interface UserBadgesProps {
  badges: Badge[]
}

<<<<<<< HEAD
const iconMap = $2;
=======
const iconMap = {
  Trophy,
>>>>>>> merged-prs-20250907-203621
  Award,
  BadgeCheck,
  Star,
  MessageSquare
<<<<<<< HEAD
},

export const UserBadges = $2;
  return (
    <div className = $2;
        return (
          <TooltipProvider key = $2;
export default UserBadges,
=======
}
export const UserBadges = ({ badges }: UserBadgesProps) => {
  if (!badges?.length) return null;
},

export const UserBadges = ({ badges }: UserBadgesProps) => {;
  if (!badges?.length) return null;
export const UserBadges = ({ badges }: UserBadgesProps) => {
  if (!badges?.length) return null,

  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => {
        // Get the correct icon component based on the badge's icon name
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  badges: Badge[];
}
const icon_map = {}
  Trophy;
  Award;
  BadgeCheck;
  Star;

  MessageSquare;
};

export const UserBadges = ({ badges }: UserBadgesProps) => {;

<<<<<<< HEAD
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from "lucide-react",
import { Badge } from "@/types/community";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/types/community",
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (!badges?.length) return null;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import {Trophy, Award, BadgeCheck, Star, MessageSquare} from "lucide-react";
import {Badge} from "@/types/community";

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

<<<<<<< HEAD
import {Trophy, Award, BadgeCheck, Star, MessageSquare} from "lucide-react";""
import {Badge} from "@/types/community";""
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";"
pr-12325
interface UserBadgesProps {;
  badges: Badge[];
=======
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

}

  badges: Badge[];
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const icon_map = {}
  Trophy;
  Award;
  BadgeCheck;
  Star;

  MessageSquare
};

export const UserBadges = ({ badges }: UserBadgesProps) => {;

<<<<<<< HEAD
=======
<<<<<<< HEAD
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] |Trophy;
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,
        
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        return (
          <TooltipProvider key={badge.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div;
                  style={{ backgroundColor: badge.color + '20' }}"
                  className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                >
                  <IconComponent;
                    style={{ color: badge.color }}"
                    className="w-4 h-4"
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>"
                <div className="text-center">"
                  <div className="font-medium">{badge.name}</div>"
                  <div className="text-xs text-gray-500">{badge.description}</div>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

      })}
    </div>
  )
}
export default UserBadges;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from "lucide-react",;
import { Badge } from "@/types/community",;

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",;
interface UserBadgesProps {;
  badges: Badge[];
}
;
const iconMap = {;
  Trophy,;
  Award,;
  BadgeCheck,;
  Star,;
  MessageSquare;
},;
export const UserBadges = ({ badges }: UserBadgesProps) => {;
  if (!badges?.length) return null,;
  return (;
<<<<<<< HEAD

export default UserBadges;

export default UserBadges;
=======
<<<<<<< HEAD
  if (!badges?.length) return null;
  return (
=======

<<<<<<< HEAD
export default UserBadges;

export default UserBadges;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="flex flex-wrap gap-2">;
      {badges && badges.map((badge) => {;
        // Get the correct icon component based on the badge's icon name;
        const IconComponent = iconMap[badge && badge.icon as keyof typeof iconMap] || Trophy;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        return (
          <TooltipProvider key={badge && badge.id}>;
            <Tooltip>;
              <TooltipTrigger asChild>;
                <div
                  style={{ backgroundColor: badge && badge.color + '20' }}
                  className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">;
                  <IconComponent
                    style={{ color: badge && badge.color }} 
                    className="w-4 h-4" 
<<<<<<< HEAD

import { Trophy, Award, BadgeCheck, Star, MessageSquare } from "lucide-react",;
import { Badge } from "@/types/community",;
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",;
;
interface UserBadgesProps {;
  badges:Badge[];
}
;
const iconMap = {;
  Trophy,;
  Award,;
  BadgeCheck,;
  Star,;
  MessageSquare;
},;
;
export const UserBadges = ({ badges } UserBadgesProps) => {;
  if (!badges?.length) return null,;
;
  return (;
    <div className="flex flex-wrap gap-2">;
      {badges.map((badge) => {;
        // Get the correct icon component based on the badge's icon name;
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,;
        return (;
          <TooltipProvider key={badge.id}>;
            <Tooltip>;
              <TooltipTrigger asChild>;
                <div;
                  style={{ backgroundColor: badge.color + '20' }}
                  className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer";
                >;
                  <IconComponent;
                    style={{ color: badge.color }} ;
                    className="w-4 h-4";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  />;
                </div>;
              </TooltipTrigger>;
              <TooltipContent>;
                <div className="text-center">;
<<<<<<< HEAD
                  <div className="font-medium">{badge.name}</div>;
                  <div className="text-xs text-gray-500">{badge.description}</div>;
                  <div className="font-medium">{badge.name}</div>;
                  <div className="text-xs text-gray-500">{badge.description}</div>;
=======
                  <div className="font-medium">{badge && badge.name}</div>;
                  <div className="text-xs text-gray-500">{badge && badge.description}</div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                </div>;
              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>;
        );
      })}
    </div>;
  );
};
<<<<<<< HEAD
export default UserBadges;
=======



export default UserBadges;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  MessageSquare;

}
;
export const UserBadges = ({ badges }: UserBadgesProps) =>: any {};
  // Check condition;
if (return null) {}
  $2;
}

        // Get the correct icon component based on the badge's icon name;
        const IconComponent = icon_map[badge.icon as keyof typeof icon_map] || Trophy;
;
        return (
          <TooltipProvider key={badge.id}>;
            <Tooltip>;
              <TooltipTrigger as_child>;

                </div>;
              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>);
      })}
    </div>);
}
;
export default UserBadges;
;
<<<<<<< HEAD
),;
=======
<<<<<<< HEAD
),;
=======
<<<<<<< HEAD
        ),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      })}
    </div>;
  ),;
},;
;
export default UserBadges,; interface UserBadgesProps {
  badges: Badge[] 
}const iconMap = {
  Trophy;
Award;
BadgeCheck;
Star;
MessageSquare 
};
export const UserBadges = ({
  badges 
}: UserBadgesProps) => {
  if (!badges?.length) return null;
return (<div className="flex flex-wrap gap-2" > {
  badges.map ( (badge) => {
  //Get the correct icon component based on the badge's icon name const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy;
badge.id 
}> <Tooltip> <TooltipTrigger asChild> <div /> </div> </TooltipTrigger> <TooltipContent> </div> </TooltipContent> </Tooltip> </TooltipProvider>) 
}) 
}</div>) 
};
export default UserBadges;
export default UserBadges;
<<<<<<< HEAD
export default UserBadges;

export default UserBadges;
=======
export default UserBadges;
<<<<<<< HEAD

export default UserBadges;
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

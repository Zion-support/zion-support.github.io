<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {Trophy, Award, BadgeCheck, Star, MessageSquare} from "lucide-react";
import {Badge} from "@/types/community";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from "lucide-react",
import { Badge } from "@/types/community";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/types/community",
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",

import { Trophy, Award, BadgeCheck, Star, MessageSquare } from "lucide-react",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
interface UserBadgesProps {
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

const iconMap = {
  Trophy,
  Award,
  BadgeCheck,
  Star,
  MessageSquare
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from "lucide-react",
import { Badge } from "@/types/community";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/types/community",
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {Trophy, Award, BadgeCheck, Star, MessageSquare} from "lucide-react";
import {Badge} from "@/types/community";
=======

"
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from "lucide-react",";
import { Badge } from "@/types/community";"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";"
import { Badge } from "@/types/community","
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",
";
import {Trophy, Award, BadgeCheck, Star, MessageSquare} from "lucide-react";"
import {Badge} from "@/types/community";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

import {Trophy, Award, BadgeCheck, Star, MessageSquare} from "lucide-react";""
import {Badge} from "@/types/community";""
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";"
pr-12325
interface UserBadgesProps {;
  badges: Badge[];

}
const iconMap = {;interface UserBadgesProps {
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => {
        // Get the correct icon component based on the badge's icon name
<<<<<<< HEAD
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => {
        // Get the correct icon component based on the badge's icon name
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] |Trophy;
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

export default UserBadges;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  MessageSquare
};

export const UserBadges = ({ badges }: UserBadgesProps) => {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
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

interface UserBadgesProps {;
  badges: Badge[];

}
const iconMap = {;interface UserBadgesProps {
  badges: Badge[];
}
const iconMap = {;
interface UserBadgesProps {
  // TODO: Implement
pr-12325
const iconMap = {;
interface UserBadgesProps {
  // TODO: Implement
}
  badges: Badge[];

}
const icon_map = {
  Trophy;
  Award;
  BadgeCheck;
  Star;

  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => {
        // Get the correct icon component based on the badge's icon name
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  if (!badges?.length) return null;

},

  return (

        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,

=======

const IconComponent = iconMap[badge.icon as keyof typeof iconMap] |Trophy;
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from "lucide-react",;
import { Badge } from "@/types/community",;
=======

"
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from "lucide-react",;"
import { Badge } from "@/types/community",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

    <div className="flex flex-wrap gap-2">;
      {badges && badges.map((badge) => {;'
        // Get the correct icon component based on the badge's icon name;
        const IconComponent = iconMap[badge && badge.icon as keyof typeof iconMap] || Trophy;

        return (
          <TooltipProvider key={badge && badge.id}>;
            <Tooltip>;
              <TooltipTrigger asChild>;
                <div'
                  style={{ backgroundColor: badge && badge.color + '20' }}"
                  className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">;
<IconComponent
                    style={{ color: badge && badge.color }} 
className="w-4 h-4"                   />;
                </div>;
              </TooltipTrigger>;
              <TooltipContent>;"
                <div className="text-center">;
<div className="font-medium">{badge && badge.name}</div>;
<div className="text-xs text-gray-500">{badge && badge.description}</div>;                </div>;
              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>;
        );
      })}
    </div>;
  )
};

<<<<<<< HEAD
export default UserBadges;
export default UserBadges;

export default UserBadges;
  MessageSquare;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
;
export const UserBadges = ({ badges }: UserBadgesProps) =>: any {};
  // Check condition;
if (return null) {}
  $2;
}
return (
    <div className="flex flex - wrap gap-2">;
      {badges.map ((badge) => {
        // Get the correct icon component based on the badge's icon name;
        const IconComponent = icon_map[badge.icon as keyof typeof icon_map] || Trophy;
;
        return (
          <TooltipProvider key={badge.id}>;
            <Tooltip>;
              <TooltipTrigger as_child>;
<div;
                  style={{ background_color: badge.color + '20' }}
                  className="w - 8 h - 8 rounded - full flex items - center justify - center cursor-pointer";
                >;
                  <IconComponent;
                    style={{ color: badge.color }}
                    className="w - 4 h-4";
                  />;
                </div>;
              </TooltipTrigger>;
              <TooltipContent>;
<<<<<<< HEAD
                <div className="text-center">;
                  <div className="font-medium">{badge.name}</div>;
                  <div className="text - xs text - gray-500">{badge.description}</div>;
=======
                <div className="text-center">;
                  <div className="font-medium">{badge.name}</div>;
                  <div className="text - xs text - gray-500">{badge.description}</div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
),;
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
export default UserBadges;

export default UserBadges;

export default UserBadges;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

export default UserBadges;

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  MessageSquare;
};
  Star;}
  MessageSquare}
};

export const UserBadges = ({ badges }: UserBadgesProps) => {;
"
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from "lucide-react",""
import { Badge } from "@/types/community";""
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";""
import { Badge } from "@/types/community",""
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",""

  // TODO: Implement

  return ("
    <div className="flex flex-wrap gap-2">"
</div>
          <TooltipProvider key={badge.id}>

            <Tooltip>

              <TooltipTrigger asChild>

                <div;"
                  style={{ backgroundColor: badge.color + '20' }}
                  className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer""
                >
                  <IconComponent;
                    style={{ color: badge.color }}"
                    className="w-4 h-4""

                  />

</IconComponent>
                </div>
              </TooltipTrigger>

              <TooltipContent>
                <div className="text-center">"
</div>"
                  <div className="font-medium">{badge.name}</div>""
                  <div className="text-xs text-gray-500">{badge.description}</div>"
    <div className="flex flex-wrap gap-2">;"
          <TooltipProvider key={badge && badge.id}>;

            <Tooltip>;

              <TooltipTrigger asChild>;

                  style={{ backgroundColor: badge && badge.color + '20' }}
                  className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">;"
                    style={{ color: badge && badge.color }} "
                  />;

                </div>;
              ;
              <TooltipContent>;
                <div className="text-center">;"
                  <div className="font-medium">{badge && badge.name}</div>;""
                  <div className="text-xs text-gray-500">{badge && badge.description}</div>;"
    </div>;"
    <div className="flex flex - wrap gap - 2">;"
          <TooltipProvider key={badge.id}>;

              <TooltipTrigger as_child>;

                  style={{ background_color: badge.color + '20' }}
                  className="w - 8 h - 8 rounded - full flex items - center justify - center cursor - pointer";"
                >;
                    className="w - 4 h - 4";"

                  />;
</IconComponent>
                </div>;
              </TooltipTrigger>;

              <TooltipContent>;
</TooltipContent>"
                <div className="text - center">;"
                  <div className="font - medium">{badge.name}</div>;""
                  <div className="text - xs text - gray - 500">{badge.description}</div>;"
            ;)
          );
    </div>);

                </div>;
              </TooltipContent>;
            </Tooltip>;)
          </TooltipProvider>);
    </div>);

    </div>;"
return (<div className="flex flex-wrap gap-2" > {"
</div>)
}> <Tooltip> <TooltipTrigger asChild> <div /> </div>  <TooltipContent> </div>   ) 
}</div>) "
pr-12325

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

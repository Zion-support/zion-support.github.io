<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import {Trophy, Award, BadgeCheck, Star, MessageSquare} from "lucide-react";
import {Badge} from "@/types/community";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

interface UserBadgesProps {;
  badges: Badge[];

}

<<<<<<< HEAD
const iconMap = {;
interface UserBadgesProps {
=======
const iconMap = {;interface UserBadgesProps {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  badges: Badge[];
}
const icon_map = {
  Trophy;
  Award;
  BadgeCheck;
  Star;

<<<<<<< HEAD
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
const iconMap = {;
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

  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => {
        // Get the correct icon component based on the badge's icon name
=======
  MessageSquare
};

export const UserBadges = ({ badges }: UserBadgesProps) => {;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  if (!badges?.length) return null;

},

<<<<<<< HEAD

  return (


        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,
        


=======
  return (

        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,
        

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        return (
          <TooltipProvider key={badge.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  style={{ backgroundColor: badge.color + '20' }}
                  className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                >
                  <IconComponent
                    style={{ color: badge.color }}
                    className="w-4 h-4"
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-center">
                  <div className="font-medium">{badge.name}</div>
                  <div className="text-xs text-gray-500">{badge.description}</div>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    <div className="flex flex-wrap gap-2">;
      {badges && badges.map((badge) => {;
        // Get the correct icon component based on the badge's icon name;
        const IconComponent = iconMap[badge && badge.icon as keyof typeof iconMap] || Trophy;

        return (
          <TooltipProvider key={badge && badge.id}>;
            <Tooltip>;
              <TooltipTrigger asChild>;
                <div
                  style={{ backgroundColor: badge && badge.color + '20' }}
                  className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">;
                  <IconComponent
                    style={{ color: badge && badge.color }} 
<<<<<<< HEAD
                    className="w-4 h-4" 
                  />;
=======
                    className="w-4 h-4"                   />;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                </div>;
              </TooltipTrigger>;
              <TooltipContent>;
                <div className="text-center">;
                  <div className="font-medium">{badge && badge.name}</div>;
<<<<<<< HEAD
                  <div className="text-xs text-gray-500">{badge && badge.description}</div>;
                </div>;
=======
                  <div className="text-xs text-gray-500">{badge && badge.description}</div>;                </div>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>;
        );
      })}
    </div>;
<<<<<<< HEAD
  );
};



export default UserBadges;

  MessageSquare;
=======
  )
};

export default UserBadges;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}
;
export const UserBadges = ({ badges }: UserBadgesProps) =>: any {
  // Check condition
if (return null) {
  $2
}
  return (
<<<<<<< HEAD
    <div className="flex flex - wrap gap - 2">;
=======
    <div className="flex flex - wrap gap-2">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
                  className="w - 8 h - 8 rounded - full flex items - center justify - center cursor - pointer";
                >;
                  <IconComponent;
                    style={{ color: badge.color }}
                    className="w - 4 h - 4";
=======
                  className="w - 8 h - 8 rounded - full flex items - center justify - center cursor-pointer";
                >;
                  <IconComponent;
                    style={{ color: badge.color }}
                    className="w - 4 h-4";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                  />;
                </div>;
              </TooltipTrigger>;
              <TooltipContent>;
<<<<<<< HEAD
                <div className="text - center">;
                  <div className="font - medium">{badge.name}</div>;
                  <div className="text - xs text - gray - 500">{badge.description}</div>;
=======
                <div className="text-center">;
                  <div className="font-medium">{badge.name}</div>;
                  <div className="text - xs text - gray-500">{badge.description}</div>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

export default UserBadges;

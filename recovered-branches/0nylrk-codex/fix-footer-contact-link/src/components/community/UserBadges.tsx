
<<<<<<< HEAD




import {Trophy, Award, BadgeCheck, Star, MessageSquare} from "lucide-react";
import {Badge} from "@/types/community";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

interface UserBadgesProps {;
  badges: Badge[];



interface UserBadgesProps {
  badges: Badge[]
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
}

const iconMap = {;


=======
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from "lucide-react";
import { Badge } from "@/types/community";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
>>>>>>> origin/auto/autonomy-17186719616

interface UserBadgesProps {
  badges: Badge[];
}
<<<<<<< HEAD
const icon_map = {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  Trophy;
  Award;
  BadgeCheck;
  Star;


  MessageSquare;
};

export const UserBadges = ({ badges }: UserBadgesProps) => {;
=======
>>>>>>> origin/auto/autonomy-17186719616

const iconMap = {
  Trophy,
  Award,
  BadgeCheck,
  Star,
  MessageSquare
<<<<<<< HEAD

}
export const UserBadges = ({ badges }: UserBadgesProps) => {
  if (!badges?.length) return null;
},

export const UserBadges = ({ badges }: UserBadgesProps) => {;
  if (!badges?.length) return null;
export const UserBadges = ({ badges }: UserBadgesProps) => {
  if (!badges?.length) return null,

=======
};

export const UserBadges = ({ badges }: UserBadgesProps) => {
  if (!badges?.length) return null;
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => {
        // Get the correct icon component based on the badge's icon name
<<<<<<< HEAD

        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] |Trophy;
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,
        

=======
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy;
        
>>>>>>> origin/auto/autonomy-17186719616
        return (
          <TooltipProvider key={badge.id}>
            <Tooltip>
              <TooltipTrigger asChild>
<<<<<<< HEAD
                <div
                  style={{ backgroundColor: badge.color + '20' }}
                  className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                >
                  <IconComponent
                    style={{ color: badge.color }}
                    className="w-4 h-4"
=======
                <div 
                  style={{ backgroundColor: badge.color + '20' }}
                  className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                >
                  <IconComponent 
                    style={{ color: badge.color }} 
                    className="w-4 h-4" 
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
        )

      })}
    </div>
  )
}
export default UserBadges;

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
                    className="w-4 h-4" 
                  />;
                </div>;
              </TooltipTrigger>;
              <TooltipContent>;
                <div className="text-center">;
                  <div className="font-medium">{badge && badge.name}</div>;
                  <div className="text-xs text-gray-500">{badge && badge.description}</div>;
                </div>;
              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>;
        );
      })}
    </div>;
  );
};






>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



export default UserBadges;

=======
        );
      })}
    </div>
  );
};

export default UserBadges;
>>>>>>> origin/auto/autonomy-17186719616

<<<<<<< HEAD:src-disabled/components/community/UserBadges.tsx
=======
;

  badges: Badge[];
}

const icon_map = {
  Trophy;
  Award;
  BadgeCheck;
  Star;
  MessageSquare;
}
export const UserBadges = ({ badges }: UserBadgesProps) =>: any {
  // Check condition
if (return null) {
  $2

}
const iconMap = {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/community/UserBadges.tsx
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from 'lucide-react'
import { Badge } from "@/types/community",
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",

<<<<<<< HEAD
interface UserBadgesProps {
  badges: Badge[]
}
const iconMap = {
  Trophy
  Award
  BadgeCheck
  Star
  MessageSquare
}
export const UserBadges = ({ badges }: UserBadgesProps) => {
  if (!badges?.length) return null
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Trophy,

interface UserBadgesProps {
  badges: Badge[]

},

export const UserBadges = ({ badges }: UserBadgesProps) => {}
  if (!badges?.length) return null,

<<<<<<< HEAD:src-disabled/components/community/UserBadges.tsx
=======
<<<<<<< HEAD

  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => {
        // Get the correct icon component based on the badge's icon name
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] |Trophy
export default UserBadges


=======

  return (


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/community/UserBadges.tsx
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy;
export default UserBadges;
}
}
}
<<<<<<< HEAD
=======

<<<<<<< HEAD:src-disabled/components/community/UserBadges.tsx
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/community/UserBadges.tsx
        return (
          <TooltipProvider key={badge.id}>
            <Tooltip>
              <TooltipTrigger asChild>

                  style={{ backgroundColor: badge.color + '20' }}
                  className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                >
                  <IconComponent;
                    style={ color: badge.color } "
                    className="w-4 h-4" 

                  />
                </div>
              </TooltipTrigger>

                  <div className="text-xs text-gray-500">{badge.description}</div>

                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",;
interface UserBadgesProps {;
  badges: Badge[];
}
<<<<<<< HEAD:src-disabled/components/community/UserBadges.tsx
;
=======
<<<<<<< HEAD
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
                  />;
                </div>;
              </TooltipTrigger>;
              <TooltipContent>;
                <div className="text-center">;
                  <div className="font-medium">{badge.name}</div>;
                  <div className="text-xs text-gray-500">{badge.description}</div>;
                </div>;
              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>;
        );
      })}
    </div>;
  );
};
export default UserBadges;
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/community/UserBadges.tsx
const iconMap = {;
  Trophy,;
  Award,;
  BadgeCheck,;
  Star,;
  MessageSquare;

        // Get the correct icon component based on the badge's icon name;
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,;
        return (;
          <TooltipProvider key={badge.id}>;
            <Tooltip>;
              <TooltipTrigger asChild>;
                <div;
                  style={ backgroundColor: badge.color + '20' }
                  className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer";
                >;
                  <IconComponent;
                    style={ color: badge.color } ;
                    className="w-4 h-4";
                  />;
                </div>;
              </TooltipTrigger>;
              <TooltipContent>;
                <div className="text-center">;
                  <div className="font-medium">{badge.name}</div>;
                  <div className="text-xs text-gray-500">{badge.description}</div>;
                </div>;
              </TooltipContent>;
            </Tooltip>;
          </TooltipProvider>;
        );
      })}
    </div>;
  );
};
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export const UserBadges = ({ badges }: UserBadgesProps) => {;
  if (!badges?.length) return null,;
  return (;
    <div className="flex flex-wrap gap-2">;
      {badges.map((badge) => {;
        // Get the correct icon component based on the badge's icon name;

<<<<<<< HEAD:src-disabled/components/community/UserBadges.tsx
export default UserBadges;
=======
    <div className="flex flex - wrap gap - 2">;
      {badges.map ((badge, ) => {
        // Get the correct icon component based on the badge's icon name;
        const IconComponent = icon_map[badge.icon as keyof typeof icon_map] || Trophy;
<<<<<<< HEAD
export default UserBadges;
=======
export default UserBadges;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/community/UserBadges.tsx

<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:src-disabled/components/community/UserBadges.tsx
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/community/UserBadges.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from 'lucide-react'
import { Badge } from "@/types/community",
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",

<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
  Trophy,

interface UserBadgesProps {
  badges: Badge[]

},

export const UserBadges = ({ badges }: UserBadgesProps) => {}
  if (!badges?.length) return null,

<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy;
export default UserBadges;
}
}
}
<<<<<<< HEAD



=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD:src-disabled/components/community/UserBadges.tsx
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/community/UserBadges.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
        return (
          <TooltipProvider key={badge.id}>
            <Tooltip>
              <TooltipTrigger asChild>

                  style={{ backgroundColor: badge.color + '20' }}
                  className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                >
                  <IconComponent;
                    style={{ color: badge.color }} "
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
;
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

export const UserBadges = ({ badges }: UserBadgesProps) => {;
  if (!badges?.length) return null,;
  return (;
    <div className="flex flex-wrap gap-2">;
      {badges.map((badge) => {;
        // Get the correct icon component based on the badge's icon name;

<<<<<<< HEAD

=======
<<<<<<< HEAD
export default UserBadges;
=======
<<<<<<< HEAD:src-disabled/components/community/UserBadges.tsx
export default UserBadges;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <div className="flex flex - wrap gap - 2">;
      {badges.map ((badge, ) => {
        // Get the correct icon component based on the badge's icon name;
        const IconComponent = icon_map[badge.icon as keyof typeof icon_map] || Trophy;
<<<<<<< HEAD

=======
<<<<<<< HEAD
export default UserBadges;
=======
export default UserBadges;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/community/UserBadges.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

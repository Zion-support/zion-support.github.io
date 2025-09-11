;
<<<<<<< HEAD

=======
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from 'lucide-react'
import { Badge } from "@/types/community",
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

interface UserBadgesProps {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from 'lucide-react'
import { Badge } from "@/types/community",
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",

<<<<<<< HEAD
interface UserBadgesProps {
  badges: Badge[]
}
const iconMap = {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Trophy
  Award
  BadgeCheck
  Star
  MessageSquare
}
export const UserBadges = ({ badges }: UserBadgesProps) => {
  if (!badges?.length) return null
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Trophy,
  Award,
  BadgeCheck,
  Star,
  MessageSquare
},

export const UserBadges = ({ badges }: UserBadgesProps) => {
  if (!badges?.length) return null,

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => {
        // Get the correct icon component based on the badge's icon name
<<<<<<< HEAD
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] |Trophy
export default UserBadges


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

  return (


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy;
export default UserBadges;
}
}
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,
        
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
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from 'lucide-react';
import { Badge } from "@/types/community",;
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",;

interface UserBadgesProps {;
  badges: Badge[];
}
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const iconMap = {;
  Trophy;
  Award;
  BadgeCheck;
  Star;
  MessageSquare;
};
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export const UserBadges = ({ badges }: UserBadgesProps) => {;
  if (!badges?.length) return null;
  return (
    <div className="flex flex-wrap gap-2">;
      {badges && badges.map((badge,) => {;
        // Get the correct icon component based on the badge's icon name;
        const IconComponent = iconMap[badge && badge.icon as keyof typeof iconMap] || Trophy;

    <div className="flex flex - wrap gap - 2">;
      {badges.map ((badge, ) => {
        // Get the correct icon component based on the badge's icon name;
        const IconComponent = icon_map[badge.icon as keyof typeof icon_map] || Trophy;
<<<<<<< HEAD
export default UserBadges;
=======
export default UserBadges;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

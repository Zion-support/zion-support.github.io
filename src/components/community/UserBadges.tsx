
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


;

>>>>>>> interface UserBadgesProps {
  badges: Badge[];
}
const iconMap = {
<<<<<<< HEAD

  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => {
        // Get the correct icon component based on the badge's icon name

        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,
=======
=======
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from 'lucide-react'
import { Badge } from "@/types/community",
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

interface UserBadgesProps {
  badges: Badge[]
}
const iconMap = {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Trophy
  Award
  BadgeCheck
  Star
  MessageSquare
}
export const UserBadges = ({ badges }: UserBadgesProps) => {
  if (!badges?.length) return null
<<<<<<< HEAD
>>>>>>>   return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => {
        // Get the correct icon component based on the badge's icon name
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] |Trophy
export default UserBadges

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
  return (

=======
=======
  Trophy,
  Award,
  BadgeCheck,
  Star,
  MessageSquare
},

export const UserBadges = ({ badges }: UserBadgesProps) => {
  if (!badges?.length) return null,

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => {
        // Get the correct icon component based on the badge's icon name
<<<<<<< HEAD
<<<<<<< HEAD
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] |Trophy
export default UserBadges

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy;
export default UserBadges;
}
}
}
<<<<<<< HEAD

>>>>>>>         const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        
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
<<<<<<< HEAD

interface UserBadgesProps {;
  badges: Badge[];
}

const iconMap = {;
  Trophy;
  Award;
  BadgeCheck;
  Star;
  MessageSquare;
};
export default UserBadges;
<<<<<<< HEAD

=======
>>>>>>> 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

import { Trophy, Award, BadgeCheck, Star, MessageSquare } from 'lucide-react'
import { Badge } from "@/types/community",
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",
=======
;

interface UserBadgesProps {
  badges: Badge[];
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

interface UserBadgesProps {
  badges: Badge[]
}

<<<<<<< HEAD
const iconMap = {
=======
}
const iconMap = {

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from 'lucide-react';
import { Badge } from '@/types/community';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,;
} from '@/components/ui/tooltip';

const iconMap = {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  Trophy,
=======


interface UserBadgesProps {
  badges: Badge[]
}  Trophy,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  Award,
  BadgeCheck,
  Star,
<<<<<<< HEAD
  MessageSquare
},

export const UserBadges = ({ badges }: UserBadgesProps) => {
  if (!badges?.length) return null,

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => {
        // Get the correct icon component based on the badge's icon name
=======

  return (

=======
  return (
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy;
export default UserBadges;
}
}
}

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,
=======
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => {
        // Get the correct icon component based on the badge's icon name        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        
=======
  MessageSquare,
};
export const UserBadges = ({;
  badges ;
}: UserBadgesProps) => {;
  if (!badges?.length) return null;

  return (
    <div className='flex flex-wrap gap-2'>
      {badges.map(badge => {
        // Get the correct icon component based on the badge's icon name
        const IconComponent =
          iconMap[badge.icon as keyof typeof iconMap] || Trophy;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
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
                  className='w-8 h-8 rounded-full flex items-center justify-center cursor-pointer'
                >
                  <IconComponent
                    style={{ color: badge.color }}
                    className='w-4 h-4'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
<<<<<<< HEAD
                <div className="text-center">
                  <div className="font-medium">{badge.name}</div>
                  <div className="text-xs text-gray-500">{badge.description}</div>
=======
                <div className='text-center'>
                  <div className='font-medium'>{badge.name}</div>
                  <div className='text-xs text-gray-500'>
                    {badge.description}
                  </div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
<<<<<<< HEAD
        )
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from 'lucide-react';
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
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export const UserBadges = ({ badges }: UserBadgesProps) => {;
  if (!badges?.length) return null,;
  return (;
    <div className="flex flex-wrap gap-2">;
      {badges.map((badge) => {;
        // Get the correct icon component based on the badge's icon name;
<<<<<<< HEAD
        const IconComponent = iconMap[badge && badge.icon as keyof typeof iconMap] || Trophy;

    <div className="flex flex - wrap gap - 2">;
      {badges.map ((badge, ) => {
        // Get the correct icon component based on the badge's icon name;
        const IconComponent = icon_map[badge.icon as keyof typeof icon_map] || Trophy;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
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
  )
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export default UserBadges;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
        );
      })}
    </div>
  );
};
export default UserBadges;
'"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

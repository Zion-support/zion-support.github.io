<<<<<<< HEAD
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from 'lucide-react';
import { Badge } from '@/types/community';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface UserBadgesProps {
  badges: Badge[];
}

const iconMap = {
  Trophy,
  Award,
  BadgeCheck,
  Star,
  MessageSquare,
=======
 interface UserBadgesProps {
  badges: Badge[] 
}const iconMap = {
  Trophy;
Award;
BadgeCheck;
Star;
MessageSquare 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
};
export const UserBadges = ({
  badges 
}: UserBadgesProps) => {
  if (!badges?.length) return null;
<<<<<<< HEAD

  return (
    <div className='flex flex-wrap gap-2'>
      {badges.map(badge => {
        // Get the correct icon component based on the badge's icon name
        const IconComponent =
          iconMap[badge.icon as keyof typeof iconMap] || Trophy;

        return (
          <TooltipProvider key={badge.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  style={{ backgroundColor: badge.color + '20' }}
                  className='w-8 h-8 rounded-full flex items-center justify-center cursor-pointer'
                >
                  <IconComponent
                    style={{ color: badge.color }}
                    className='w-4 h-4'
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <div className='text-center'>
                  <div className='font-medium'>{badge.name}</div>
                  <div className='text-xs text-gray-500'>
                    {badge.description}
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
=======
return (<div className="flex flex-wrap gap-2" > {
  badges.map ( (badge) => {
  //Get the correct icon component based on the badge's icon name const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy;
badge.id 
}> <Tooltip> <TooltipTrigger asChild> <div /> </div> </TooltipTrigger> <TooltipContent> </div> </TooltipContent> </Tooltip> </TooltipProvider>) 
}) 
}</div>) 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
};
export default UserBadges;

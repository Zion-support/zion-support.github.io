
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from 'lucide-react'
import { Badge } from &quot;@/types/community&quot;;
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from &quot;@/components/ui/tooltip&quot;;

interface UserBadgesProps {
  badges: Badge[];
}

const iconMap = {
  Trophy,
  Award,
  BadgeCheck,
  Star,
  MessageSquare
};

export const UserBadges = ({ badges }: UserBadgesProps) => {
  if (!badges?.length) return null;

  return (
    <div className=&quot;flex flex-wrap gap-2&quot;>
      {badges.map((badge) => {
        // Get the correct icon component based on the badge's icon name
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy;
        
        return (
          <TooltipProvider key={badge.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div 
                  style={{ backgroundColor: badge.color + '20' }}
                  className=&quot;w-8 h-8 rounded-full flex items-center justify-center cursor-pointer&quot;
                >
                  <IconComponent 
                    style={{ color: badge.color }} 
                    className=&quot;w-4 h-4&quot; 
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;font-medium&quot;>{badge.name}</div>
                  <div className=&quot;text-xs text-gray-500&quot;>{badge.description}</div>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};

export default UserBadges;

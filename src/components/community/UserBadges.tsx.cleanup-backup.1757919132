
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from 'lucide-react'
<<<<<<< HEAD
import { Badge } from "@/types/community",
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",

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
import { Badge } from "@/types/community";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface UserBadgesProps {
  badges: Badge[];
}

const iconMap = {
>>>>>>> origin/auto/autonomy-17186719616
  Trophy,
  Award,
  BadgeCheck,
  Star,
  MessageSquare
<<<<<<< HEAD
},

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
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,
=======
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy;
>>>>>>> origin/auto/autonomy-17186719616
        
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
<<<<<<< HEAD
        ),
      })}
    </div>
  ),
},

export default UserBadges,
=======
        );
      })}
    </div>
  );
};

export default UserBadges;
>>>>>>> origin/auto/autonomy-17186719616

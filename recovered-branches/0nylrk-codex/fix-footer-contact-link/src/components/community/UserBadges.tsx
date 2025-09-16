
}

const iconMap = {;


import { Trophy, Award, BadgeCheck, Star, MessageSquare } from "lucide-react";
import { Badge } from "@/types/community";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface UserBadgesProps {
  badges: Badge[];
}
  Trophy;
  Award;
  BadgeCheck;
  Star;


  MessageSquare;
};

export const UserBadges = ({ badges }: UserBadgesProps) => {;

const iconMap = {
  Trophy,
  Award,
  BadgeCheck,
  Star,
  MessageSquare

  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => {
        // Get the correct icon component based on the badge's icon name
        return (
          <TooltipProvider key={badge.id}>
            <Tooltip>
              <TooltipTrigger asChild>
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



export default UserBadges;

        );
      })}
    </div>
  );
};

export default UserBadges;

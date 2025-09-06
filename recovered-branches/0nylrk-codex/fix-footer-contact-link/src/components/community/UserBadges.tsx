

import { Trophy, Award, BadgeCheck, Star, MessageSquare } from "lucide-react",

interface UserBadgesProps {
  badges: Badge[]
}

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

export default UserBadges;


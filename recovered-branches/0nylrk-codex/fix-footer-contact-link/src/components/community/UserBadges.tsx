

import { Trophy, Award, BadgeCheck, Star, MessageSquare } from "lucide-react",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
interface UserBadgesProps {
  badges: Badge[];
}
const icon_map = {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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


        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,
        

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

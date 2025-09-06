

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662


;

interface UserBadgesProps {
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
=======
const iconMap = {

  Trophy,
  Award,
  BadgeCheck,
  Star,
  MessageSquare
},

export const UserBadges = ({ badges }: UserBadgesProps) => {
  if (!badges?.length) return null,


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

=======

        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy;
export default UserBadges;
}
}
}

=======
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

const iconMap = {;
  Trophy;
  Award;
  BadgeCheck;
  Star;
  MessageSquare;
};

export const UserBadges = ({ badges }: UserBadgesProps) => {;
  if (!badges?.length) return null;
  return (
    <div className="flex flex-wrap gap-2">;
      {badges && badges.map((badge,) => {;
        // Get the correct icon component based on the badge's icon name;
        const IconComponent = iconMap[badge && badge.icon as keyof typeof iconMap] || Trophy;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    <div className="flex flex - wrap gap - 2">;
      {badges.map ((badge, ) => {
        // Get the correct icon component based on the badge's icon name;
        const IconComponent = icon_map[badge.icon as keyof typeof icon_map] || Trophy;
export default UserBadges;


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

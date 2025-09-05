
<<<<<<< HEAD
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from 'lucide-react'
<<<<<<< HEAD
import { Badge } from "@/types/community",
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip",
=======
import { Badge } from &quot;@/types/community&quot;;
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from &quot;@/components/ui/tooltip&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface UserBadgesProps {
  badges: Badge[]
}

const iconMap = {
  Trophy,
  Award,
  BadgeCheck,
  Star,
  MessageSquare
},

export const UserBadges = ({ badges }: UserBadgesProps) => {
  if (!badges?.length) return null,

  return (
    <div className=&quot;flex flex-wrap gap-2&quot;>
      {badges.map((badge) => {
        // Get the correct icon component based on the badge's icon name
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy,
=======

interface UserBadgesProps {_badges: Badge[];}

const _iconMap = {_Trophy, _Award, _BadgeCheck, _Star, _MessageSquare};

export const _UserBadges = (_{_badges}: UserBadgesProps) => {_if (!badges?.length) return null;

  return (_<div className="flex flex-wrap gap-2">
      {badges.map((badge) => {
        // Get the correct icon component based on the badge's icon name
        const _IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
        return (
          <TooltipProvider key={badge.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div 
<<<<<<< HEAD
                  style={{ backgroundColor: badge.color + '20' }}
                  className=&quot;w-8 h-8 rounded-full flex items-center justify-center cursor-pointer&quot;
                >
                  <IconComponent 
                    style={{ color: badge.color }} 
                    className=&quot;w-4 h-4&quot; 
=======
                  style={_{ backgroundColor: badge.color + '20'}}
                  className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                >
                  <IconComponent 
                    style={_{ color: badge.color}} 
                    className="w-4 h-4" 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
<<<<<<< HEAD
                <div className=&quot;text-center&quot;>
                  <div className=&quot;font-medium&quot;>{badge.name}</div>
                  <div className=&quot;text-xs text-gray-500&quot;>{badge.description}</div>
=======
                <div className="text-center">
                  <div className="font-medium">{_badge.name}</div>
                  <div className="text-xs text-gray-500">{_badge.description}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
      })}
    </div>
  )
},

export default UserBadges,

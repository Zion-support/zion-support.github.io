
<<<<<<< HEAD
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from 'lucide-react'
import { Badge } from "@/types/community";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
interface UserBadgesProps {
  badges: Badge[]
}

const iconMap = null;
=======
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
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge,) => {
        // Get the correct icon component based on the badge's icon name
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] |Trophy
export default UserBadges
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5


<<<<<<< HEAD
=======
import { Trophy, Award, BadgeCheck, Star, MessageSquare } from 'lucide-react';
import { Badge } from "@/types/community";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
interface UserBadgesProps {
  badges: Badge[]
}

const iconMap = {
  Trophy;
  Award;
  BadgeCheck;
  Star;
  MessageSquare
};

<<<<<<< HEAD
export const UserBadges = ({ badges }: UserBadgesProps) => {
  if (!badges?.length) return null;
=======
export const UserBadges = ({ badges }: UserBadgesProps,) => {
  if (!badges?.length) return null,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge,) => {
        // Get the correct icon component based on the badge's icon name
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy;
        

export default UserBadges;
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

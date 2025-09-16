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
const iconMap = {
  Trophy
  Award
  BadgeCheck
  Star
  MessageSquare
}
export const UserBadges = ({ badges }: UserBadgesProps) => {
  if (!badges?.length) return null
  Trophy,
  Award,
  BadgeCheck,
  Star,
  MessageSquare
},

export const UserBadges = ({ badges }: UserBadgesProps) => {
  if (!badges?.length) return null,







  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => {
        // Get the correct icon component based on the badge's icon name










        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy;
export default UserBadges;
}
}
}







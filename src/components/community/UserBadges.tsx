
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

export const UserBadges = ({ badges }: UserBadgesProps) => {
  if (!badges?.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => {
        // Get the correct icon component based on the badge's icon name
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Trophy;
        

export default UserBadges;
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

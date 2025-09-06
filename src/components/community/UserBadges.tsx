

interface UserBadgesProps {
  badges: Badge[];
}
const iconMap = {
  Trophy
  Award
  BadgeCheck
  Star
  MessageSquare
}
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge,) => {
        // Get the correct icon component based on the badge's icon name
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] |Trophy
export default UserBadges

    <div className="flex flex - wrap gap - 2">;
      {badges.map ((badge, ) => {
        // Get the correct icon component based on the badge's icon name;
        const IconComponent = icon_map[badge.icon as keyof typeof icon_map] || Trophy;
export default UserBadges;

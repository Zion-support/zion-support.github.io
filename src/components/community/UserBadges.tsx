
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

  Trophy,
  Award,
  BadgeCheck,
  Star,
  MessageSquare
},

export const UserBadges = ({ badges }: UserBadgesProps) => {
  if (!badges?.length) return null,


  return (
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

    <div className="flex flex - wrap gap - 2">;
      {badges.map ((badge, ) => {
        // Get the correct icon component based on the badge's icon name;
        const IconComponent = icon_map[badge.icon as keyof typeof icon_map] || Trophy;
export default UserBadges;

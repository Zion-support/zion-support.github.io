<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

<<<<<<< HEAD

=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
interface UserBadgesProps {
  badges: Badge[];
}
<<<<<<< HEAD
const iconMap = {
  Trophy
  Award
  BadgeCheck
  Star
  MessageSquare
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
  return (
<<<<<<< HEAD
    <div className="flex flex-wrap gap-2">
      {badges.map((badge,) => {
        // Get the correct icon component based on the badge's icon name
        const IconComponent = iconMap[badge.icon as keyof typeof iconMap] |Trophy
export default UserBadges
=======
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

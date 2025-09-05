
import { LucideIcon, BadgeCheck, Award, Star, Trophy, BadgePlus, BadgeDollarSign } from 'lucide-react'

export type BadgeKey =
  | &quot;first_listing&quot;
  | &quot;top_contributor&quot;
  | &quot;profile_complete&quot;
  | &quot;featured_creator&quot;
  | &quot;first_action&quot;
  | &quot;monetized&quot;;

export interface BadgeMeta {
  key: BadgeKey;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bg: string;
}

export const badgeList: BadgeMeta[] = [
  {
    key: &quot;first_listing&quot;,
    name: &quot;First Listing&quot;,
    description: &quot;Published your first product, service, or listing.&quot;,
    icon: BadgeCheck,
    color: &quot;#8B5CF6&quot;,  // Vivid Purple
    bg: &quot;#E5DEFF&quot;,     // Soft Purple
  },
  {
    key: &quot;top_contributor&quot;,
    name: &quot;Top Contributor&quot;,
    description: &quot;Recognized as a top contributor in the community.&quot;,
    icon: Award,
    color: &quot;#F97316&quot;,  // Bright Orange
    bg: &quot;#FEF7CD&quot;,     // Soft Yellow
  },
  {
    key: &quot;profile_complete&quot;,
    name: &quot;Profile Complete&quot;,
    description: &quot;Completed all steps in your profile setup.&quot;,
    icon: Star,
    color: &quot;#FFD700&quot;, // Gold
    bg: &quot;#FFFBEA&quot;,   // Very light yellow
  },
  {
    key: &quot;featured_creator&quot;,
    name: &quot;Featured Creator&quot;,
    description: &quot;Featured on the Zion homepage.&quot;,
    icon: Trophy,
    color: &quot;#0EA5E9&quot;, // Ocean Blue
    bg: &quot;#D3E4FD&quot;,   // Soft Blue
  },
  {
    key: &quot;first_action&quot;,
    name: &quot;First Action&quot;,
    description: &quot;Took your first community, posting, or listing action.&quot;,
    icon: BadgePlus,
    color: &quot;#1EAEDB&quot;, // Bright Blue
    bg: &quot;#F3F3F3&quot;,   // Light Gray
  },
  {
    key: &quot;monetized&quot;,
    name: &quot;Monetized&quot;,
    description: &quot;Earned your first AI dollar in the marketplace.&quot;,
    icon: BadgeDollarSign,
    color: &quot;#22C55E&quot;, // Soft Green
    bg: &quot;#F2FCE2&quot;,    // Soft Green
  }];

export const getBadgeMeta = (key: BadgeKey) =>
  badgeList.find((b) => b.key === key);


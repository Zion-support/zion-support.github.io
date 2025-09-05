
<<<<<<< HEAD
import { LucideIcon, BadgeCheck, Award, Star, Trophy, BadgePlus, BadgeDollarSign } from 'lucide-react'

export type BadgeKey =
<<<<<<< HEAD
  | "first_listing"
  | "top_contributor"
  | "profile_complete"
  | "featured_creator"
  | "first_action"
  | "monetized",
=======
  | &quot;first_listing&quot;
  | &quot;top_contributor&quot;
  | &quot;profile_complete&quot;
  | &quot;featured_creator&quot;
  | &quot;first_action&quot;
  | &quot;monetized&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export interface BadgeMeta {
  key: BadgeKey,
  name: string,
  description: string,
  icon: LucideIcon,
  color: string,
  bg: string
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
<<<<<<< HEAD
    color: "#22C55E", // Soft Green
    bg: "#F2FCE2",    // Soft Green
  }],
=======
    color: &quot;#22C55E&quot;, // Soft Green
    bg: &quot;#F2FCE2&quot;,    // Soft Green
  }];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export const getBadgeMeta = (key: BadgeKey) =>
  badgeList.find((b) => b.key === key),

=======
import { LucideIcon, BadgeCheck, Award, Star, Trophy, BadgePlus, BadgeDollarSign } from 'lucide-react';
export type BadgeKey =;
  | "first_listing";
  | "top_contributor";
  | "profile_complete";
  | "featured_creator";
  | "first_action";
  | "monetized",;
export interface BadgeMeta {;
  key: BadgeKey,;
  name: string,;
  description: string,;
  icon: LucideIcon,;
  color: string,;
  bg: string;
}
;
export const badgeList: BadgeMeta[] = [;
  {;
    key: "first_listing",;
    name: "First Listing",;
    description: "Published your first product, service, or listing.",;
    icon: BadgeCheck,;
    color: "#8B5CF6",  // Vivid Purple;
    bg: "#E5DEFF",     // Soft Purple;
  },;
  {;
    key: "top_contributor",;
    name: "Top Contributor",;
    description: "Recognized as a top contributor in the community.",;
    icon: Award,;
    color: "#F97316",  // Bright Orange;
    bg: "#FEF7CD",     // Soft Yellow;
  },;
  {;
    key: "profile_complete",;
    name: "Profile Complete",;
    description: "Completed all steps in your profile setup.",;
    icon: Star,;
    color: "#FFD700", // Gold;
    bg: "#FFFBEA",   // Very light yellow;
  },;
  {;
    key: "featured_creator",;
    name: "Featured Creator",;
    description: "Featured on the Zion homepage.",;
    icon: Trophy,;
    color: "#0EA5E9", // Ocean Blue;
    bg: "#D3E4FD",   // Soft Blue;
  },;
  {;
    key: "first_action",;
    name: "First Action",;
    description: "Took your first community, posting, or listing action.",;
    icon: BadgePlus,;
    color: "#1EAEDB", // Bright Blue;
    bg: "#F3F3F3",   // Light Gray;
  },;
  {;
    key: "monetized",;
    name: "Monetized",;
    description: "Earned your first AI dollar in the marketplace.",;
    icon: BadgeDollarSign,;
    color: "#22C55E", // Soft Green;
    bg: "#F2FCE2",    // Soft Green;
  }];
export const getBadgeMeta = (key: BadgeKey) =>;
  badgeList.find((b) => b.key === key);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094

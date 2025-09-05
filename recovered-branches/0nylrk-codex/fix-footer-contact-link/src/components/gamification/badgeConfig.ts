
<<<<<<< HEAD
<<<<<<< HEAD
import { LucideIcon } from "lucide-react",
=======
import { LucideIcon } from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  BadgeCheck, // publishing a listing
  Award,      // top contributor
  Star,       // profile complete
  Trophy,     // featured creator
  BadgePlus,  // first action
  BadgeDollarSign // monetization
<<<<<<< HEAD
} from "lucide-react",
=======
import {_BadgeCheck, _// publishing a listing
  Award, _// top contributor
  Star, _// profile complete
  Trophy, _// featured creator
  BadgePlus, _// first action
  BadgeDollarSign // monetization} from "lucide-react";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type BadgeKey =
  | "first_listing"
  | "top_contributor"
  | "profile_complete"
  | "featured_creator"
  | "first_action"
  | "monetized",
=======
} from &quot;lucide-react&quot;;

export type BadgeKey =
  | &quot;first_listing&quot;
  | &quot;top_contributor&quot;
  | &quot;profile_complete&quot;
  | &quot;featured_creator&quot;
  | &quot;first_action&quot;
  | &quot;monetized&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
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
export interface BadgeMeta {_key: BadgeKey;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bg: string;}

export const badgeList: BadgeMeta[] = [
  {_key: "first_listing", _name: "First Listing", _description: "Published your first product, _service, _or listing.", _icon: BadgeCheck, _color: "#8B5CF6", _// Vivid Purple
    bg: "#E5DEFF", _// Soft Purple},
  {_key: "top_contributor", _name: "Top Contributor", _description: "Recognized as a top contributor in the community.", _icon: Award, _color: "#F97316", _// Bright Orange
    bg: "#FEF7CD", _// Soft Yellow},
  {_key: "profile_complete", _name: "Profile Complete", _description: "Completed all steps in your profile setup.", _icon: Star, _color: "#FFD700", _// Gold
    bg: "#FFFBEA", _// Very light yellow},
  {_key: "featured_creator", _name: "Featured Creator", _description: "Featured on the Zion homepage.", _icon: Trophy, _color: "#0EA5E9", _// Ocean Blue
    bg: "#D3E4FD", _// Soft Blue},
  {_key: "first_action", _name: "First Action", _description: "Took your first community, _posting, _or listing action.", _icon: BadgePlus, _color: "#1EAEDB", _// Bright Blue
    bg: "#F3F3F3", _// Light Gray},
  {_key: "monetized", _name: "Monetized", _description: "Earned your first AI dollar in the marketplace.", _icon: BadgeDollarSign, _color: "#22C55E", _// Soft Green
    bg: "#F2FCE2", _// Soft Green}];

export const _getBadgeMeta = (_key: BadgeKey) =>
  badgeList.find(_(b) => b.key === key);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13


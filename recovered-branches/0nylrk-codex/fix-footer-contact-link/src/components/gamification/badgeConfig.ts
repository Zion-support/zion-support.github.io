
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import {LucideIcon} from "lucide-react";
import {BadgeCheck, //, publishing, a, listing, Award, //, top, contributor, Star, //, profile, complete, Trophy, //, featured, creator, BadgePlus, //, first, action, BadgeDollarSign, //, monetization} from "lucide-react";

=======
import { LucideIcon } from "lucide-react",
import {
  BadgeCheck, // publishing a listing
  Award,      // top contributor
  Star,       // profile complete
  Trophy,     // featured creator
  BadgePlus,  // first action
  BadgeDollarSign // monetization
} from "lucide-react",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export type BadgeKey =
  | "first_listing"
  | "top_contributor"
  | "profile_complete"
  | "featured_creator"

export interface BadgeMeta {;
  key: BadgeKey;
  name: string;
  description: string;
  icon: LucideIcon;
=======
  | "first_action"
<<<<<<< HEAD
  | "monetized";
export interface BadgeMeta {
  key: BadgeKey;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string
=======
  | "monetized",

export interface BadgeMeta {
  key: BadgeKey,
  name: string,
  description: string,
  icon: LucideIcon,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  color: string,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  bg: string
}
export const badgeList: BadgeMeta[] = [
<<<<<<< HEAD
  {;
    key: "first_listing";
=======
  {
<<<<<<< HEAD
    key: "first_listing";
    name: "First Listing"
    description: "Published your first product, service, or listing.";
    icon: BadgeCheck
    color: "#8B5CF6",  // Vivid Purple
    bg: "#E5DEFF",     // Soft Purple
  }
  {
    key: "top_contributor";
    name: "Top Contributor";
    description: "Recognized as a top contributor in the community.";
    icon: Award
    color: "#F97316",  // Bright Orange
    bg: "#FEF7CD",     // Soft Yellow
  }
  {
    key: "profile_complete";
    name: "Profile Complete";
    description: "Completed all steps in your profile setup.";
    icon: Star
    color: "#FFD700", // Gold
    bg: "#FFFBEA",   // Very light yellow
  }
  {
    key: "featured_creator";
    name: "Featured Creator";
    description: "Featured on the Zion homepage.";
    icon: Trophy
    color: "#0EA5E9", // Ocean Blue
    bg: "#D3E4FD",   // Soft Blue
  }
  {
    key: "first_action";
    name: "First Action"
    description: "Took your first community, posting, or listing action.";
    icon: BadgePlus
    color: "#1EAEDB", // Bright Blue
    bg: "#F3F3F3",   // Light Gray
  }
  {
    key: "monetized";
    name: "Monetized";
    description: "Earned your first AI dollar in the marketplace.";
    icon: BadgeDollarSign
    color: "#22C55E", // Soft Green
    bg: "#F2FCE2",    // Soft Green
  }];
export const getBadgeMeta = (key: BadgeKey) =>
  badgeList.find((b) => b.key === key);

=======
    key: "first_listing",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    name: "First Listing",
    description: "Published your first product, service, or listing.",
    icon: BadgeCheck,
    color: "#8B5CF6",  // Vivid Purple
    bg: "#E5DEFF",     // Soft Purple
  },
  {
    key: "top_contributor",
    name: "Top Contributor",
    description: "Recognized as a top contributor in the community.",
    icon: Award,
    color: "#F97316",  // Bright Orange
    bg: "#FEF7CD",     // Soft Yellow
  },
  {
    key: "profile_complete",
    name: "Profile Complete",
    description: "Completed all steps in your profile setup.",
    icon: Star,
    color: "#FFD700", // Gold
    bg: "#FFFBEA",   // Very light yellow
  },
  {
    key: "featured_creator",
    name: "Featured Creator",
    description: "Featured on the Zion homepage.",
    icon: Trophy,
    color: "#0EA5E9", // Ocean Blue
    bg: "#D3E4FD",   // Soft Blue
  },
  {
    key: "first_action",
    name: "First Action",
    description: "Took your first community, posting, or listing action.",
    icon: BadgePlus,
    color: "#1EAEDB", // Bright Blue
    bg: "#F3F3F3",   // Light Gray
  },
  {
    key: "monetized",
    name: "Monetized",
    description: "Earned your first AI dollar in the marketplace.",
    icon: BadgeDollarSign,
    color: "#22C55E", // Soft Green
    bg: "#F2FCE2",    // Soft Green
  }],

export const getBadgeMeta = (key: BadgeKey) =>
  badgeList.find((b) => b.key === key),
<<<<<<< HEAD
=======
<<<<<<< HEAD
;
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import { LucideIcon } from "lucide-react",;
import {;
  BadgeCheck, // publishing a listing;
  Award,      // top contributor;
  Star,       // profile complete;
  Trophy,     // featured creator;
  BadgePlus,  // first action;
  BadgeDollarSign // monetization;
} from "lucide-react",;
export type BadgeKey =;
  | "first_listing";
  | "top_contributor";
  | "profile_complete";
  | "featured_creator";
  | "first_action";
  | "monetized";
;

export interface BadgeMeta {
  key: BadgeKey;
  name: string;
  description: string;
  icon: LucideIcon;

  color: string,
  bg: string;
}
export const badge_list: BadgeMeta[] = [;

  {
    key: "first_listing";
    name: "First Listing"
    description: "Published your first product, service, or listing.";

    icon: BadgeCheck,
    color: "#8B5CF6",  // Vivid Purple;
    bg: "#E5DEFF",     // Soft Purple;

  }
  {
    key: "top_contributor";
    name: "Top Contributor";
    description: "Recognized as a top contributor in the community.";

    icon: Award,
    color: "#F97316",  // Bright Orange;
    bg: "#FEF7CD",     // Soft Yellow;

  }
  {
    key: "profile_complete";
    name: "Profile Complete";
    description: "Completed all steps in your profile setup.";

    icon: Star,
    color: "#FFD700", // Gold;
    bg: "#FFFBEA",   // Very light yellow;

  }
  {
    key: "featured_creator";
    name: "Featured Creator";
    description: "Featured on the Zion homepage.";

    icon: Trophy,
    color: "#0EA5E9", // Ocean Blue;
    bg: "#D3E4FD",   // Soft Blue;

  }
  {
    key: "first_action";
    name: "First Action"
    description: "Took your first community, posting, or listing action.";

    icon: BadgePlus,
    color: "#1EAEDB", // Bright Blue;
    bg: "#F3F3F3",   // Light Gray;

  }
  {
    key: "monetized";
    name: "Monetized";
    description: "Earned your first AI dollar in the marketplace.";

  badgeList && badgeList.find((b) => b && b.key === key),


=======
    icon: BadgeDollarSign,
    color: "#22C55E", // Soft Green;
    bg: "#F2FCE2",    // Soft Green;
  }];
export const getBadgeMeta = (key: BadgeKey) =>;
  badgeList.find((b) => b.key === key);
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

<<<<<<< HEAD


import {LucideIcon} from "lucide-react";
import {BadgeCheck, //, publishing, a, listing, Award, //, top, contributor, Star, //, profile, complete, Trophy, //, featured, creator, BadgePlus, //, first, action, BadgeDollarSign, //, monetization} from "lucide-react";
export type BadgeKey =
  | "first_listing"
  | "top_contributor"
  | "profile_complete"
  | "featured_creator"
  | "first_action"
  | "monetized";
=======
import { LucideIcon } from './lucide-react';
import { BadgeCheck, //, publishing, a, listing, Award, //, top, contributor, Star, //, profile, complete, Trophy, //, featured, creator, BadgePlus, //, first, action, BadgeDollarSign, //, monetization } from './lucide-react';
;
export type BadgeKey =;
  | "first_listing";
  | "top_contributor";
  | "profile_complete";
  | "featured_creator";
  | "first_action";
  | "monetized";
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface BadgeMeta {
  key: BadgeKey;
  name: string;
  description: string;
  icon: LucideIcon;
<<<<<<< HEAD
  color: string
  bg: string
}
export const badgeList: BadgeMeta[] = [
=======
  color: string,
  bg: string;
}
export const badge_list: BadgeMeta[] = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    key: "first_listing";
    name: "First Listing"
    description: "Published your first product, service, or listing.";
<<<<<<< HEAD
    icon: BadgeCheck
    color: "#8B5CF6",  // Vivid Purple
    bg: "#E5DEFF",     // Soft Purple
=======
    icon: BadgeCheck,
    color: "#8B5CF6",  // Vivid Purple;
    bg: "#E5DEFF",     // Soft Purple;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
  {
    key: "top_contributor";
    name: "Top Contributor";
    description: "Recognized as a top contributor in the community.";
<<<<<<< HEAD
    icon: Award
    color: "#F97316",  // Bright Orange
    bg: "#FEF7CD",     // Soft Yellow
=======
    icon: Award,
    color: "#F97316",  // Bright Orange;
    bg: "#FEF7CD",     // Soft Yellow;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
  {
    key: "profile_complete";
    name: "Profile Complete";
    description: "Completed all steps in your profile setup.";
<<<<<<< HEAD
    icon: Star
    color: "#FFD700", // Gold
    bg: "#FFFBEA",   // Very light yellow
=======
    icon: Star,
    color: "#FFD700", // Gold;
    bg: "#FFFBEA",   // Very light yellow;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
  {
    key: "featured_creator";
    name: "Featured Creator";
    description: "Featured on the Zion homepage.";
<<<<<<< HEAD
    icon: Trophy
    color: "#0EA5E9", // Ocean Blue
    bg: "#D3E4FD",   // Soft Blue
=======
    icon: Trophy,
    color: "#0EA5E9", // Ocean Blue;
    bg: "#D3E4FD",   // Soft Blue;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
  {
    key: "first_action";
    name: "First Action"
    description: "Took your first community, posting, or listing action.";
<<<<<<< HEAD
    icon: BadgePlus
    color: "#1EAEDB", // Bright Blue
    bg: "#F3F3F3",   // Light Gray
=======
    icon: BadgePlus,
    color: "#1EAEDB", // Bright Blue;
    bg: "#F3F3F3",   // Light Gray;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
  {
    key: "monetized";
    name: "Monetized";
    description: "Earned your first AI dollar in the marketplace.";
<<<<<<< HEAD
    icon: BadgeDollarSign
    color: "#22C55E", // Soft Green
    bg: "#F2FCE2",    // Soft Green
  }];
export const getBadgeMeta = (key: BadgeKey) =>
<<<<<<< HEAD
  badgeList.find((b) => b.key === key);
=======
  badgeList && badgeList.find((b) => b && b.key === key),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
    icon: BadgeDollarSign,
    color: "#22C55E", // Soft Green;
    bg: "#F2FCE2",    // Soft Green;
  }];
;
export const getBadgeMeta = (key: BadgeKey) =>: any;
  badge_list.find ((b) => b.key === key),
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4

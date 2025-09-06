
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/badgeConfig.ts
import {LucideIcon} from "lucide-react";
import {BadgeCheck, //, publishing, a, listing, Award, //, top, contributor, Star, //, profile, complete, Trophy, //, featured, creator, BadgePlus, //, first, action, BadgeDollarSign, //, monetization} from "lucide-react";

=======



import {LucideIcon} from "lucide-react";
import {BadgeCheck, //, publishing, a, listing, Award, //, top, contributor, Star, //, profile, complete, Trophy, //, featured, creator, BadgePlus, //, first, action, BadgeDollarSign, //, monetization} from "lucide-react";

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import {LucideIcon} from "lucide-react";
import {BadgeCheck, //, publishing, a, listing, Award, //, top, contributor, Star, //, profile, complete, Trophy, //, featured, creator, BadgePlus, //, first, action, BadgeDollarSign, //, monetization} from "lucide-react";
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======




>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export type BadgeKey =
  | "first_listing"
  | "top_contributor"
  | "profile_complete"
  | "featured_creator"
<<<<<<< HEAD

<<<<<<< HEAD
  color: string,

  bg: string
}
export const badgeList: BadgeMeta[] = [

=======
<<<<<<< HEAD
  | "first_action";
  | "monetized";

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

import { LucideIcon } from "lucide-react",;
import {;
  BadgeCheck, // publishing a listing;
  Award,      // top contributor;
  Star,       // profile complete;
  Trophy,     // featured creator;
  BadgePlus,  // first action;
  BadgeDollarSign // monetization;
} from "lucide-react",;
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/badgeConfig.ts
import { LucideIcon } from './lucide-react';
import { BadgeCheck, //, publishing, a, listing, Award, //, top, contributor, Star, //, profile, complete, Trophy, //, featured, creator, BadgePlus, //, first, action, BadgeDollarSign, //, monetization } from './lucide-react';
=======

import { LucideIcon } from "lucide-react",;
import {;
  BadgeCheck, // publishing a listing;
  Award,      // top contributor;
  Star,       // profile complete;
  Trophy,     // featured creator;
  BadgePlus,  // first action;
  BadgeDollarSign // monetization;
} from "lucide-react",;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export type BadgeKey =;
  | "first_listing";
  | "top_contributor";
  | "profile_complete";
  | "featured_creator";
  | "first_action";
<<<<<<< HEAD
<<<<<<< HEAD
  | "monetized";
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/badgeConfig.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/badgeConfig.ts
export interface BadgeMeta {
  key: BadgeKey;
  name: string;
  description: string;
  icon: LucideIcon;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/badgeConfig.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/badgeConfig.ts
  color: string,
  bg: string;
}
export const badge_list: BadgeMeta[] = [;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/badgeConfig.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/badgeConfig.ts
  {
    key: "first_listing";
    name: "First Listing"
    description: "Published your first product, service, or listing.";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/badgeConfig.ts

    icon: BadgeCheck,
    color: "#8B5CF6",  // Vivid Purple;
    bg: "#E5DEFF",     // Soft Purple;

========
    icon: BadgeCheck,
    color: "#8B5CF6",  // Vivid Purple;
    bg: "#E5DEFF",     // Soft Purple;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/badgeConfig.ts
  }
  {
    key: "top_contributor";
    name: "Top Contributor";
    description: "Recognized as a top contributor in the community.";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/badgeConfig.ts

    icon: Award,
    color: "#F97316",  // Bright Orange;
    bg: "#FEF7CD",     // Soft Yellow;

========
    icon: Award,
    color: "#F97316",  // Bright Orange;
    bg: "#FEF7CD",     // Soft Yellow;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/badgeConfig.ts
  }
  {
    key: "profile_complete";
    name: "Profile Complete";
    description: "Completed all steps in your profile setup.";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/badgeConfig.ts

    icon: Star,
    color: "#FFD700", // Gold;
    bg: "#FFFBEA",   // Very light yellow;

========
    icon: Star,
    color: "#FFD700", // Gold;
    bg: "#FFFBEA",   // Very light yellow;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/badgeConfig.ts
  }
  {
    key: "featured_creator";
    name: "Featured Creator";
    description: "Featured on the Zion homepage.";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/badgeConfig.ts

    icon: Trophy,
    color: "#0EA5E9", // Ocean Blue;
    bg: "#D3E4FD",   // Soft Blue;

========
    icon: Trophy,
    color: "#0EA5E9", // Ocean Blue;
    bg: "#D3E4FD",   // Soft Blue;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/badgeConfig.ts
  }
  {
    key: "first_action";
    name: "First Action"
    description: "Took your first community, posting, or listing action.";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/badgeConfig.ts

    icon: BadgePlus,
    color: "#1EAEDB", // Bright Blue;
    bg: "#F3F3F3",   // Light Gray;

========
    icon: BadgePlus,
    color: "#1EAEDB", // Bright Blue;
    bg: "#F3F3F3",   // Light Gray;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/badgeConfig.ts
  }
  {
    key: "monetized";
    name: "Monetized";
    description: "Earned your first AI dollar in the marketplace.";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/badgeConfig.ts

  badgeList && badgeList.find((b) => b && b.key === key),


=======
========
  badgeList && badgeList.find((b) => b && b.key === key),
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/badgeConfig.ts
    icon: BadgeDollarSign,
    color: "#22C55E", // Soft Green;
    bg: "#F2FCE2",    // Soft Green;
  }];
<<<<<<< HEAD
export const getBadgeMeta = (key: BadgeKey) =>;
  badgeList.find((b) => b.key === key);

=======
;
export const getBadgeMeta = (key: BadgeKey) =>: any;
  badge_list.find ((b) => b.key === key),
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/badgeConfig.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  | "first_action"

  bg: string
}
export const badgeList: BadgeMeta[] = [

  {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  | "monetized",;
;
export interface BadgeMeta {;
  key:BadgeKey,;
  name:string,;
  description:string,;
  icon:LucideIcon,;
  color:string,;
  bg:string;
}
;
export const badgeList:BadgeMeta[] = [;
  {;
    key:"first_listing",;
    name:"First Listing",;
    description:"Published your first product, service, or listing.",;
    icon:BadgeCheck,;
    color:"#8B5CF6",  // Vivid Purple;
    bg:"#E5DEFF",     // Soft Purple;
  },;
  {;
    key:"top_contributor",;
    name:"Top Contributor",;
    description:"Recognized as a top contributor in the community.",;
    icon:Award,;
    color:"#F97316",  // Bright Orange;
    bg:"#FEF7CD",     // Soft Yellow;
  },;
  {;
    key:"profile_complete",;
    name:"Profile Complete",;
    description:"Completed all steps in your profile setup.",;
    icon:Star,;
    color:"#FFD700", // Gold;
    bg:"#FFFBEA",   // Very light yellow;
  },;
  {;
    key:"featured_creator",;
    name:"Featured Creator",;
    description:"Featured on the Zion homepage.",;
    icon:Trophy,;
    color:"#0EA5E9", // Ocean Blue;
    bg:"#D3E4FD",   // Soft Blue;
  },;
  {;
    key:"first_action",;
    name:"First Action",;
    description:"Took your first community, posting, or listing action.",;
    icon:BadgePlus,;
    color:"#1EAEDB", // Bright Blue;
    bg:"#F3F3F3",   // Light Gray;
  },;
  {;
    key:"monetized",;
    name:"Monetized",;
    description:"Earned your first AI dollar in the marketplace.",;
    icon:BadgeDollarSign,;
    color:"#22C55E", // Soft Green;
    bg:"#F2FCE2",    // Soft Green;
  }],;
;
export const getBadgeMeta = (key:BadgeKey) =>;
  badgeList.find((b) => b.key === key),;
; import {
  BadgeCheck, //publishing a listing Award, //top contributor Star, //profile complete Trophy, //featured creator BadgePlus, //first action BadgeDollarSign // monetization export type BadgeKey = | "first listing" | "top contributor" | "profile complete" | "featured creator" | "first action" | "monetized";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/gamification/badgeConfig.ts
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

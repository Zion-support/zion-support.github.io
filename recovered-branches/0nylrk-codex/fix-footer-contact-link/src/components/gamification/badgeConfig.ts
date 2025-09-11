
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



import {LucideIcon} from "lucide-react";
import {BadgeCheck, //, publishing, a, listing, Award, //, top, contributor, Star, //, profile, complete, Trophy, //, featured, creator, BadgePlus, //, first, action, BadgeDollarSign, //, monetization} from "lucide-react";
<<<<<<< HEAD

<<<<<<< HEAD

import {LucideIcon} from "lucide-react";
import {BadgeCheck, //, publishing, a, listing, Award, //, top, contributor, Star, //, profile, complete, Trophy, //, featured, creator, BadgePlus, //, first, action, BadgeDollarSign, //, monetization} from "lucide-react";
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export type BadgeKey =
  | "first_listing"
  | "top_contributor"
  | "profile_complete"
  | "featured_creator"
<<<<<<< HEAD
<<<<<<< HEAD
  | "first_action";
  | "monetized";

export interface BadgeMeta {;
  key: BadgeKey;
  name: string;
  description: string;
  icon: LucideIcon;
  | "first_action"
  | "monetized";
export interface BadgeMeta {
  key: BadgeKey;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string
  | "monetized",

export interface BadgeMeta {
  key: BadgeKey,
  name: string,
  description: string,
  icon: LucideIcon,
  color: string,
  bg: string
}
export const badgeList: BadgeMeta[] = [
  {;
    key: "first_listing";
  {
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

    key: "first_listing",
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
import { LucideIcon } from './lucide-react';
import { BadgeCheck, //, publishing, a, listing, Award, //, top, contributor, Star, //, profile, complete, Trophy, //, featured, creator, BadgePlus, //, first, action, BadgeDollarSign, //, monetization } from './lucide-react';

import { LucideIcon } from "lucide-react",;
import {;
  BadgeCheck, // publishing a listing;
  Award,      // top contributor;
  Star,       // profile complete;
  Trophy,     // featured creator;
  BadgePlus,  // first action;
  BadgeDollarSign // monetization;
} from "lucide-react",;
;
;
;

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

import { LucideIcon } from './lucide-react';
import { BadgeCheck, //, publishing, a, listing, Award, //, top, contributor, Star, //, profile, complete, Trophy, //, featured, creator, BadgePlus, //, first, action, BadgeDollarSign, //, monetization } from './lucide-react';
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  | "first_action";
  | "monetized";

import { LucideIcon } from './lucide-react';
import { BadgeCheck, //, publishing, a, listing, Award, //, top, contributor, Star, //, profile, complete, Trophy, //, featured, creator, BadgePlus, //, first, action, BadgeDollarSign, //, monetization } from './lucide-react';
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export type BadgeKey =;
  | "first_listing";
  | "top_contributor";
  | "profile_complete";
  | "featured_creator";
  | "first_action";
<<<<<<< HEAD
<<<<<<< HEAD
=======
  | "monetized";
;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  | "monetized";
;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export interface BadgeMeta {
  key: BadgeKey;
  name: string;
  description: string;
  icon: LucideIcon;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  color: string,
  bg: string;
}
export const badge_list: BadgeMeta[] = [;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    key: "first_listing";
    name: "First Listing"
    description: "Published your first product, service, or listing.";
<<<<<<< HEAD
<<<<<<< HEAD
    icon: BadgeCheck,
    color: "#8B5CF6",  // Vivid Purple;
    bg: "#E5DEFF",     // Soft Purple;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    icon: BadgeCheck,
    color: "#8B5CF6",  // Vivid Purple;
    bg: "#E5DEFF",     // Soft Purple;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  {
    key: "top_contributor";
    name: "Top Contributor";
    description: "Recognized as a top contributor in the community.";
<<<<<<< HEAD
<<<<<<< HEAD
    icon: Award,
    color: "#F97316",  // Bright Orange;
    bg: "#FEF7CD",     // Soft Yellow;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    icon: Award,
    color: "#F97316",  // Bright Orange;
    bg: "#FEF7CD",     // Soft Yellow;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  {
    key: "profile_complete";
    name: "Profile Complete";
    description: "Completed all steps in your profile setup.";
<<<<<<< HEAD
<<<<<<< HEAD
    icon: Star,
    color: "#FFD700", // Gold;
    bg: "#FFFBEA",   // Very light yellow;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    icon: Star,
    color: "#FFD700", // Gold;
    bg: "#FFFBEA",   // Very light yellow;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  {
    key: "featured_creator";
    name: "Featured Creator";
    description: "Featured on the Zion homepage.";
<<<<<<< HEAD
<<<<<<< HEAD
    icon: Trophy,
    color: "#0EA5E9", // Ocean Blue;
    bg: "#D3E4FD",   // Soft Blue;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    icon: Trophy,
    color: "#0EA5E9", // Ocean Blue;
    bg: "#D3E4FD",   // Soft Blue;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  {
    key: "first_action";
    name: "First Action"
    description: "Took your first community, posting, or listing action.";
<<<<<<< HEAD
<<<<<<< HEAD
    icon: BadgePlus,
    color: "#1EAEDB", // Bright Blue;
    bg: "#F3F3F3",   // Light Gray;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    icon: BadgePlus,
    color: "#1EAEDB", // Bright Blue;
    bg: "#F3F3F3",   // Light Gray;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  {
    key: "monetized";
    name: "Monetized";
    description: "Earned your first AI dollar in the marketplace.";
<<<<<<< HEAD
<<<<<<< HEAD
  badgeList && badgeList.find((b) => b && b.key === key),
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  badgeList && badgeList.find((b) => b && b.key === key),


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    icon: BadgeDollarSign,
    color: "#22C55E", // Soft Green;
    bg: "#F2FCE2",    // Soft Green;
  }];
;
export const getBadgeMeta = (key: BadgeKey) =>: any;
  badge_list.find ((b) => b.key === key),
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  | "first_action"

  bg: string
}
export const badgeList: BadgeMeta[] = [

  {

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

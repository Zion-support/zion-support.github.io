
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
import {LucideIcon} from "lucide-react";
import {BadgeCheck, //, publishing, a, listing, Award, //, top, contributor, Star, //, profile, complete, Trophy, //, featured, creator, BadgePlus, //, first, action, BadgeDollarSign, //, monetization} from "lucide-react";

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======



<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {LucideIcon} from "lucide-react";
=======

import {LucideIcon} from "lucide-react";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {BadgeCheck, //, publishing, a, listing, Award, //, top, contributor, Star, //, profile, complete, Trophy, //, featured, creator, BadgePlus, //, first, action, BadgeDollarSign, //, monetization} from "lucide-react";
"
import { LucideIcon } from "lucide-react",
import {};
  BadgeCheck, // publishing a listing;
  Award,      // top contributor;
  Star,       // profile complete;
  Trophy,     // featured creator;
  BadgePlus,  // first action;
  BadgeDollarSign // monetization"
} from "lucide-react",
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======






<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export type BadgeKey =
=======
import {LucideIcon} from "lucide-react";
import {BadgeCheck, //, publishing, a, listing, Award, //, top, contributor, Star, //, profile, complete, Trophy, //, featured, creator, BadgePlus, //, first, action, BadgeDollarSign, //, monetization} from "lucide-react";export type BadgeKey =
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======




=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {LucideIcon} from "lucide-react";
<<<<<<< HEAD
import {BadgeCheck, //, publishing, a, listing, Award, //, top, contributor, Star, //, profile, complete, Trophy, //, featured, creator, BadgePlus, //, first, action, BadgeDollarSign, //, monetization} from "lucide-react";export type BadgeKey =
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import {BadgeCheck, //, publishing, a, listing, Award, //, top, contributor, Star, //, profile, complete, Trophy, //, featured, creator, BadgePlus, //, first, action, BadgeDollarSign, //, monetization} from "lucide-react";

import {LucideIcon} from "lucide-react";
import {BadgeCheck, //, publishing, a, listing, Award, //, top, contributor, Star, //, profile, complete, Trophy, //, featured, creator, BadgePlus, //, first, action, BadgeDollarSign, //, monetization} from "lucide-react";
import {LucideIcon} from "lucide-react";
import {BadgeCheck, //, publishing, a, listing, Award, //, top, contributor, Star, //, profile, complete, Trophy, //, featured, creator, BadgePlus, //, first, action, BadgeDollarSign, //, monetization} from "lucide-react";
import {LucideIcon} from "lucide-react";
import {BadgeCheck, //, publishing, a, listing, Award, //, top, contributor, Star, //, profile, complete, Trophy, //, featured, creator, BadgePlus, //, first, action, BadgeDollarSign, //, monetization} from "lucide-react";
import { LucideIcon } from "lucide-react",
import {
  BadgeCheck, // publishing a listing
  Award,      // top contributor
  Star,       // profile complete
  Trophy,     // featured creator
  BadgePlus,  // first action
  BadgeDollarSign // monetization
} from "lucide-react",

export type BadgeKey =
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  | "first_listing"
  | "top_contributor"
  | "profile_complete"
  | "featured_creator"

import { LucideIcon } from './lucide-react';
import { BadgeCheck, //, publishing, a, listing, Award, //, top, contributor, Star, //, profile, complete, Trophy, //, featured, creator, BadgePlus, //, first, action, BadgeDollarSign, //, monetization } from './lucide-react';
;
;
;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
export interface BadgeMeta {;
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { LucideIcon } from "lucide-react",;
import {;
  BadgeCheck, // publishing a listing;
  Award,      // top contributor;
  Star,       // profile complete;
  Trophy,     // featured creator;
  BadgePlus,  // first action;
  BadgeDollarSign // monetization;
<<<<<<< HEAD
} from "lucide-react",;export interface BadgeMeta {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  key: BadgeKey;
  name: string,
<<<<<<< HEAD
  description: string,
  icon: LucideIcon,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  color: string,

  bg: string
}
export const badgeList: BadgeMeta[] = [

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
import { LucideIcon } from './lucide-react';
import { BadgeCheck, //, publishing, a, listing, Award, //, top, contributor, Star, //, profile, complete, Trophy, //, featured, creator, BadgePlus, //, first, action, BadgeDollarSign, //, monetization } from './lucide-react';

=======

export type BadgeKey ="
  | "first_listing""
  | "top_contributor""
  | "profile_complete""
  | "featured_creator"
;
;
;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { LucideIcon } from "lucide-react",;
import {;
  BadgeCheck, // publishing a listing;
  Award,      // top contributor;
  Star,       // profile complete;
  Trophy,     // featured creator;
  BadgePlus,  // first action;
  BadgeDollarSign // monetization;"
} from "lucide-react",;
<<<<<<< HEAD
;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import { LucideIcon } from "lucide-react",;
import {;
  BadgeCheck, // publishing a listing;
  Award,      // top contributor;
  Star,       // profile complete;
  Trophy,     // featured creator;
  BadgePlus,  // first action;
  BadgeDollarSign // monetization;
} from "lucide-react",;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import { LucideIcon } from './lucide-react';
import { BadgeCheck, //, publishing, a, listing, Award, //, top, contributor, Star, //, profile, complete, Trophy, //, featured, creator, BadgePlus, //, first, action, BadgeDollarSign, //, monetization } from './lucide-react';
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export type BadgeKey =;
  | "first_listing";
  | "top_contributor";
  | "profile_complete";
  | "featured_creator";
=======

export type BadgeKey =;"
  | "first_listing";"
  | "top_contributor";"
  | "profile_complete";"
  | "featured_creator";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  | "first_action";



export interface BadgeMeta {};
  key: BadgeKey;
  name: string;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  key: BadgeKey;
  name: string,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  description: string;
  icon: LucideIcon;
<<<<<<< HEAD
=======
} from "lucide-react",;
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
=======
  badgeList && badgeList.find((b) => b && b.key === key),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    icon: BadgeDollarSign,
    color: "#22C55E", // Soft Green;
=======

  color: string,
  bg: string;
}
export const badge_list: BadgeMeta[] = [;



  {"
    key: "first_listing";"
    name: "First Listing""
    description: "Published your first product, service, or listing.";



  }
  {"
    key: "top_contributor";"
    name: "Top Contributor";"
    description: "Recognized as a top contributor in the community.";



  }
  {"
    key: "profile_complete";"
    name: "Profile Complete";"
    description: "Completed all steps in your profile setup.";



  }
  {"
    key: "featured_creator";"
    name: "Featured Creator";"
    description: "Featured on the Zion homepage.";



  }
  {"
    key: "first_action";"
    name: "First Action""
    description: "Took your first community, posting, or listing action.";



  }
  {"
    key: "monetized";"
    name: "Monetized";"
    description: "Earned your first AI dollar in the marketplace.";



    icon: BadgeDollarSign,"
    color: "#22C55E", // Soft Green;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


    icon: BadgeDollarSign,
    color: "#22C55E", // Soft Green;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    bg: "#F2FCE2",    // Soft Green;
  }];
;
export const getBadgeMeta = (key: BadgeKey) =>: any;
  badge_list.find ((b) => b.key === key),
;

<<<<<<< HEAD


"
  | "first_action"

  bg: string;
}
<<<<<<< HEAD
=======
  | "first_action"

  bg: string
}
export const badgeList: BadgeMeta[] = [

  {

}
export const badgeList: BadgeMeta[] = [

  {

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export const badgeList: BadgeMeta[] = []
  {}
";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======



>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

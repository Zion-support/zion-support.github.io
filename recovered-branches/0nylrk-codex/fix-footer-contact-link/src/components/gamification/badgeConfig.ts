
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
;
export type BadgeKey =;
  | "first_listing";
  | "top_contributor";
  | "profile_complete";
  | "featured_creator";
  | "first_action";
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
;
=======
import { LucideIcon } from "lucide-react",import {
  BadgeCheck, // publishing a listing,
Award,      // top contributor,
Star,       // profile complete,
Trophy,     // featured creator,
BadgePlus,  // first action,
BadgeDollarSign // monetization
} from "lucide-react",
export type BadgeKey =
  | "firstlisting"
  | "topcontributor"
  | "profilecomplete"
  | "featuredcreator"
  | "firstaction"
  | "monetized"
} from &quot;lucide-react&quot;

export type BadgeKey =
  | &quot;firstlisting&quot;
  | &quot;topcontributor&quot;
  | &quot;profilecomplete&quot;
  | &quot;featuredcreator&quot;
  | &quot;firstaction&quot;
  | &quot;monetized&quot;

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
    key: &quot;firstlisting&quot;,
    name: &quot;First Listing&quot;,
    description: &quot;Published your first product, service, or listing.&quot;,
    icon: BadgeCheck,
    color: &quot;#8B5CF6&quot;,  // Vivid Purple,
bg: &quot;#E5DEFF&quot;,     // Soft Purple
  },
  {
    key: &quot;topcontributor&quot;,
    name: &quot;Top Contributor&quot;,
    description: &quot;Recognized as a top contributor in the community.&quot;,
    icon: Award,
    color: &quot;#F97316&quot;,  // Bright Orange,
bg: &quot;#FEF7CD&quot;,     // Soft Yellow
  },
  {
    key: &quot;profilecomplete&quot;,
    name: &quot;Profile Complete&quot;,
    description: &quot;Completed all steps in your profile setup.&quot;,
    icon: Star,
    color: &quot;#FFD700&quot;, // Gold,
bg: &quot;#FFFBEA&quot;,   // Very light yellow
  },
  {
    key: &quot;featuredcreator&quot;,
    name: &quot;Featured Creator&quot;,
    description: &quot;Featured on the Zion homepage.&quot;,
    icon: Trophy,
    color: &quot;#0EA5E9&quot;, // Ocean Blue,
bg: &quot;#D3E4FD&quot;,   // Soft Blue
  },
  {
    key: &quot;firstaction&quot;,
    name: &quot;First Action&quot;,
    description: &quot;Took your first community, posting, or listing action.&quot;,
    icon: BadgePlus,
    color: &quot;#1EAEDB&quot;, // Bright Blue,
bg: &quot;#F3F3F3&quot;,   // Light Gray
  },
  {
    key: &quot;monetized&quot;,
    name: &quot;Monetized&quot;,
    description: &quot;Earned your first AI dollar in the marketplace.&quot;,
    icon: BadgeDollarSign,
    color: "#22C55E", // Soft Green,
bg: "#F2FCE2",    // Soft Green
  }],
export const getBadgeMeta = (key: BadgeKey) =>
  badgeList.find((b) => b.key === key),
export interface BadgeMeta {key: BadgeKey,
  name: string,
  description: string,
  icon: LucideIcon,
  color: string,
  bg: string}

export const badgeList: BadgeMeta[] = [
  {key: "firstlisting", name: "First Listing", description: "Published your first product, service, or listing.", icon: BadgeCheck, color: "#8B5CF6", _// Vivid Purple,
bg: "#E5DEFF", _// Soft Purple},
  {key: "topcontributor", name: "Top Contributor", description: "Recognized as a top contributor in the community.", icon: Award, color: "#F97316", _// Bright Orange,
bg: "#FEF7CD", _// Soft Yellow},
  {key: "profilecomplete", name: "Profile Complete", description: "Completed all steps in your profile setup.", icon: Star, color: "#FFD700", _// Gold,
bg: "#FFFBEA", _// Very light yellow},
  {key: "featuredcreator", name: "Featured Creator", description: "Featured on the Zion homepage.", icon: Trophy, color: "#0EA5E9", _// Ocean Blue,
bg: "#D3E4FD", _// Soft Blue},
  {key: "firstaction", name: "First Action", description: "Took your first community, posting, or listing action.", icon: BadgePlus, color: "#1EAEDB", _// Bright Blue,
bg: "#F3F3F3", _// Light Gray},
  {key: "monetized", name: "Monetized", description: "Earned your first AI dollar in the marketplace.", icon: BadgeDollarSign, color: "#22C55E", _// Soft Green,
bg: "#F2FCE2", _// Soft Green}];

export const getBadgeMeta = (key: BadgeKey) =>
  badgeList.find(_(b) => b.key === key);

>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d

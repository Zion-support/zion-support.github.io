import {BadgeCheck, //, publishing, a, listing, Award, //, top, contributor, Star, //, profile, complete, Trophy, //, featured, creator, BadgePlus, //, first, action, BadgeDollarSign, //, monetization} from "lucide-react";export type BadgeKey =
  | "first_listing"
  | "top_contributor"
  | "profile_complete"
  | "featured_creator"
} from "lucide-react",;export interface BadgeMeta {
  key: BadgeKey;
  name: string,
  description: string;
  icon: LucideIcon;
  {
    key: "profile_complete";
    name: "Profile Complete",
  description: "Completed all steps in your profile setup.";

    icon: Star,
    color: "#FFD700", // Gold;
    bg: "#FFFBEA",   // Very light yellow;  }
  {
    key: "monetized";
    name: "Monetized",
  description: "Earned your first AI dollar in the marketplace.";

  badgeList && badgeList.find((b) => b && b.key === key),

<<<<<<< HEAD

import {
  LucideIcon
  BadgeCheck
  Award
  Star
  Trophy
  BadgePlus
  BadgeDollarSign
} from 'lucide-react'
xport type BadgeKey =
ursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
export type BadgeKey =
import {
  LucideIcon,
  BadgeCheck,
  Award,
  Star,
  Trophy,
  BadgePlus,
  BadgeDollarSign,;
} from 'lucide-react';




=======
import {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export type BadgeKey =
  | 'first_listing'
  | 'top_contributor'
  | 'profile_complete'
  | 'featured_creator'
  | 'first_action'
<<<<<<< HEAD
export const badgeList: BadgeMeta[] = [
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  {

  badgeList && badgeList.find(b => b && b.key === key);
export const getBadgeMeta = (key: BadgeKey) =>
  badgeList && badgeList.find((b) => b && b.key === key);


<<<<<<< HEAD
  | 'monetized'
export interface BadgeMeta {
  key: BadgeKey
  name: string
  description: string
  icon: LucideIcon
  color: string
  bg: string
export const badgeList: BadgeMeta[] = [
  {
    key: 'first_listing'
    name: 'First Listing'
    description: 'Published your first product, service, or listing.'
    icon: BadgeCheck
    color: '#8B5CF6', // Vivid Purple
    bg: '#E5DEFF', // Soft Purple
  }
  {
    key: 'top_contributor'
    name: 'Top Contributor'
    description: 'Recognized as a top contributor in the community.'
    icon: Award
    color: '#F97316', // Bright Orange
    bg: '#FEF7CD', // Soft Yellow
  }
  {
    key: 'profile_complete'
    name: 'Profile Complete'
    description: 'Completed all steps in your profile setup.'
    icon: Star
    color: '#FFD700', // Gold
    bg: '#FFFBEA', // Very light yellow
  }
  {
    key: 'featured_creator'
    name: 'Featured Creator'
    description: 'Featured on the Zion homepage.'
    icon: Trophy
    color: '#0EA5E9', // Ocean Blue
    bg: '#D3E4FD', // Soft Blue
  }
  {
    key: 'first_action'
    name: 'First Action'
    description: 'Took your first community, posting, or listing action.'
    icon: BadgePlus
    color: '#1EAEDB', // Bright Blue
    bg: '#F3F3F3', // Light Gray
  }
  {
    key: 'monetized'
    name: 'Monetized'
    description: 'Earned your first AI dollar in the marketplace.'
    icon: BadgeDollarSign
    color: '#22C55E', // Soft Green
    bg: '#F2FCE2', // Soft Green
  }
]
export const getBadgeMeta = (key: BadgeKey) =>
  badgeList.find(b => b.key === key)
export const getBadgeMeta = (key: BadgeKey) =>
  badgeList.find((b) => b.key === key)

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    key: 'first_listing',
    name: 'First Listing',
    description: 'Published your first product, service, or listing.',


<<<<<<< HEAD
<<<<<<< HEAD
xport const badgeList: BadgeMeta[] = [
  badge_list.find ((b) => b.key === key);
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  | 'monetized';

import { LucideIcon, BadgeCheck, Award, Star, Trophy, BadgePlus, BadgeDollarSign } from 'lucide-react'

export type BadgeKey =
  | "first_listing"
  | "top_contributor"
  | "profile_complete"
  | "featured_creator"
  | "first_action"
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
    key: "first_listing",
    name: "First Listing",
    description: "Published your first product, service, or listing.",
    icon: BadgeCheck,
    color: "#22C55E", // Soft Green
    bg: "#F2FCE2",    // Soft Green
  }],

export const getBadgeMeta = (key: BadgeKey) =>
  badgeList.find((b) => b.key === key),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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
<<<<<<< HEAD
<<<<<<< HEAD
=======

  badge_list.find ((b) => b.key === key);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

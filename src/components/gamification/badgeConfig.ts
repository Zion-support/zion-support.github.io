import {
  LucideIcon,
  BadgeCheck,
  Award,
  Star,
  Trophy,
  BadgePlus,
  BadgeDollarSign,;
} from 'lucide-react';




export type BadgeKey =
  | 'first_listing'
  | 'top_contributor'
  | 'profile_complete'
  | 'featured_creator'
  | 'first_action'
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

  badgeList && badgeList.find(b => b && b.key === key);
export const getBadgeMeta = (key: BadgeKey) =>
  badgeList && badgeList.find((b) => b && b.key === key);


    key: 'first_listing',
    name: 'First Listing',
    description: 'Published your first product, service, or listing.',


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

    color: '#22C55E', // Soft Green
    bg: '#F2FCE2', // Soft Green
  },
]
export const getBadgeMeta = (key: BadgeKey) =>
  badgeList.find(b => b.key === key);
export const getBadgeMeta = (key: BadgeKey) =>;
  badgeList.find((b) => b.key === key);
}
    color: "#22C55E", // Soft Green
    bg: "#F2FCE2",    // Soft Green
  }],

export const getBadgeMeta = (key: BadgeKey) =>: any;
  badge_list.find (boolean => b.key === key);
export const getBadgeMeta = (key: BadgeKey) =>: any;
  badge_list.find ((b) => b.key === key);

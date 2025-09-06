


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import React from "react";
import {BadgeCheck, Star, Clock, Award} from "lucide-react";
import {cn} from "@/lib/utils";
type BadgeType = 'verified' | 'featured' | 'new' | 'top-rated';
import React from "react",
import { BadgeCheck, Star, Clock, Award } from "lucide-react",
import { cn } from "@/lib/utils",
type BadgeType = 'verified' | 'featured' | 'new' | 'top-rated',


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
interface ProfileBadgeProps {
  type: BadgeType
  className?: string
}
export function ProfileBadge({ type, className }: ProfileBadgeProps) {
  const badgeConfig = {
    verified: {
      icon: BadgeCheck
      text: "Verified"
      colors: "bg-blue-500/20 text-blue-400"}
    featured: {
      icon: Star
      text: "Featured"
      colors: "bg-yellow-500/20 text-yellow-400"}
    new: {
      icon: Clock
      text: "New"
      colors: "bg-green-500/20 text-green-400"}
    "top-rated": {
      icon: Award
      text: "Top Rated"
      colors: "bg-purple-500/20 text-purple-400"}}
  const { icon: Icon, text, colors } = badgeConfig[type];
  return (
    <div className={cn(
      "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium";
      colors;

      icon: Award,
      text: "Top Rated",
      colors: "bg-purple-500/20 text-purple-400"}},
;
  const { icon: Icon, text, colors } = badgeConfig[type];

  const { icon: Icon, text, colors } = badgeConfig[type],

  return (
    <div className={cn(
      "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium",
      colors,
      className
    )}>
      <Icon className="w-3 h-3" />
      <span>{text}</span>
    </div>
  )


<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import React from "react",;
import { BadgeCheck, Star, Clock, Award } from "lucide-react",;
import { cn } from "@/lib/utils",;
type BadgeType = 'verified' | 'featured' | 'new' | 'top-rated',;

interface ProfileBadgeProps {;
  type: BadgeType,;
  className?: string;
}

export function ProfileBadge(): any ({ type, className }: ProfileBadgeProps) {;
  const badgeConfig = {;
    verified: {;
      icon: BadgeCheck,;
      text: "Verified",;
      colors: "bg-blue-500/20 text-blue-400"},;
    featured: {;
      icon: Star,;
      text: "Featured",;
      colors: "bg-yellow-500/20 text-yellow-400"},;
    new: {;
      icon: Clock,;
      text: "New",;
      colors: "bg-green-500/20 text-green-400"},;
    "top-rated": {;
      icon: Award,;
      text: "Top Rated",;
      colors: "bg-purple-500/20 text-purple-400"}},;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const { icon: Icon, text, colors } = badgeConfig[type];
  return (

    <divclassName={cn(
      "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium"
      colors
      className
    )}>;
      <Icon className="w-3 h-3" />;
      <span>{text}</span>;
    </div>;
  );

<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import React from './react';
import { BadgeCheck, Star, Clock, Award } from './lucide-react';
import { cn } from '@/lib / utils';
type BadgeType = 'verified' | 'featured' | 'new' | 'top - rated';
;


<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { BadgeCheck, Star, Clock, Award } from 'lucide-react'
import { cn } from "@/lib/utils",
type BadgeType = 'verified' | 'featured' | 'new' | 'top-rated',
=======
import React from &quot;react&quot;;
import { BadgeCheck, Star, Clock, Award } from 'lucide-react'
import { cn } from &quot;@/lib/utils&quot;;
=======
import React from "react";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

type BadgeType = 'verified' | 'featured' | 'new' | 'top-rated';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
interface ProfileBadgeProps {
  type: BadgeType,
  className?: string
}
=======
interface ProfileBadgeProps {_type: BadgeType;
  className?: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function ProfileBadge(_{_type, _className}: ProfileBadgeProps) {_const _badgeConfig = {
    verified: {
<<<<<<< HEAD
      icon: BadgeCheck,
      text: &quot;Verified&quot;,
      colors: &quot;bg-blue-500/20 text-blue-400&quot;},
    featured: {
      icon: Star,
      text: &quot;Featured&quot;,
      colors: &quot;bg-yellow-500/20 text-yellow-400&quot;},
    new: {
      icon: Clock,
      text: &quot;New&quot;,
      colors: &quot;bg-green-500/20 text-green-400&quot;},
    &quot;top-rated&quot;: {
      icon: Award,
<<<<<<< HEAD
      text: "Top Rated",
      colors: "bg-purple-500/20 text-purple-400"}},
=======
      text: &quot;Top Rated&quot;,
      colors: &quot;bg-purple-500/20 text-purple-400&quot;}};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const { icon: Icon, text, colors } = badgeConfig[type],

  return (
    <div className={cn(
      &quot;flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium&quot;,
      colors,
      className
    )}>
      <Icon className=&quot;w-3 h-3&quot; />
      <span>{text}</span>
=======
      icon: BadgeCheck, _text: "Verified", _colors: "bg-blue-500/20 text-blue-400"},
    featured: {_icon: Star, _text: "Featured", _colors: "bg-yellow-500/20 text-yellow-400"},
    new: {_icon: Clock, _text: "New", _colors: "bg-green-500/20 text-green-400"},
    "top-rated": {_icon: Award, _text: "Top Rated", _colors: "bg-purple-500/20 text-purple-400"}};

  const {_icon: Icon, _text, _colors} = badgeConfig[type];

  return (
    <div className={_cn(
      "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium", _colors, _className
    )}>
      <Icon className="w-3 h-3" />
      <span>{_text}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </div>
  )
}

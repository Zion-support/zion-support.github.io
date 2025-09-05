
import React from "react";

type BadgeType = 'verified' | 'featured' | 'new' | 'top-rated';

interface ProfileBadgeProps {_type: BadgeType;
  className?: string;}

export function ProfileBadge(_{_type, _className}: ProfileBadgeProps) {_const _badgeConfig = {
    verified: {
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
    </div>
  );
}

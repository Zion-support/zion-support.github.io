
import React from &quot;react&quot;;
import { BadgeCheck, Star, Clock, Award } from &quot;lucide-react&quot;;
import { cn } from &quot;@/lib/utils&quot;;

type BadgeType = 'verified' | 'featured' | 'new' | 'top-rated';

interface ProfileBadgeProps {
  type: BadgeType;
  className?: string;
}

export function ProfileBadge({ type, className }: ProfileBadgeProps) {
  const badgeConfig = {
    verified: {
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
      text: &quot;Top Rated&quot;,
      colors: &quot;bg-purple-500/20 text-purple-400&quot;}};

  const { icon: Icon, text, colors } = badgeConfig[type];

  return (
    <div className={cn(
      &quot;flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium&quot;,
      colors,
      className
    )}>
      <Icon className=&quot;w-3 h-3&quot; />
      <span>{text}</span>
    </div>
  );
}

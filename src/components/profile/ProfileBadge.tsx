

      <span>{text}</span>
    </div>
  )
  type, className
}: ProfileBadgeProps) {
  const badgeConfig = {
  verified: {
  const {
  icon: Icon,  text, colors
}= badgeConfig[type]
}> <Icon className="w-3 h-3" /> <span> {
  text
}</span>
}'"  )
}
import React from "react",
import { BadgeCheck, Star, Clock, Award } from 'lucide-react'
import { cn } from "@/lib/utils",
type BadgeType = 'verified' | 'featured' | 'new' | 'top-rated',
=======


interface ProfileBadgeProps {
  type: BadgeType,
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
  className?: string
}

export function ProfileBadge({ type, className }: ProfileBadgeProps) {
  const badgeConfig = {
    verified: {
      icon: BadgeCheck,
<<<<<<< HEAD
      text: "Verified",
      colors: "bg-blue-500/20 text-blue-400"},
    featured: {
      text: 'Verified',
      colors: 'bg-blue-500/20 text-blue-400',
    },
      text: "Verified",
      colors: "bg-blue-500/20 text-blue-400"},
    featured: {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      <span>{text}</span>;
    </div>);
  type, class_name;
}: ProfileBadgeProps) {
  const badge_config = {
  verified: {
  const {
  icon: Icon,  text, colors;
}= badge_config[type];
}> <Icon className="w - 3 h - 3" /> <span> {
  text;
}</span>;
}'"  );
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

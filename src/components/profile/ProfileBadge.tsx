import React from 'react';
import { BadgeCheck, Star, Clock, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
type BadgeType = 'verified' | 'featured' | 'new' | 'top-rated';
interface ProfileBadgeProps {;
  type: BadgeType;
  className?: string;  type: BadgeType,

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


interface ProfileBadgeProps {
  type: BadgeType,



  className?: string
}

export function ProfileBadge({ type, className }: ProfileBadgeProps) {
  const badgeConfig = {
    verified: {
      icon: BadgeCheck,




      icon: Star,
      text: "Featured",
      colors: "bg-yellow-500/20 text-yellow-400"},
    new: {
      icon: Clock,
      text: "New",
      colors: "bg-green-500/20 text-green-400"},
    "top-rated": {
      icon: Award,

import React from 'react';
import { BadgeCheck, Star, Clock, Award } from 'lucide-react';
import { cn } from '@/lib / utils';
type BadgeType = 'verified' | 'featured' | 'new' | 'top - rated';
interface ProfileBadgeProps {
  type: BadgeType;
  class_name?: string;  type: BadgeType,
  class_name?: string;
}
export /**
 * ProfileBadge - Function description
 */
function ProfileBadge() {
  const badge_config = {
    verified: {
      icon: BadgeCheck,
      text: 'Verified',
      colors: 'bg - blue - 500 / 20 text - blue - 400',
    },
      icon: Star,
      text: 'Featured',
      colors: 'bg - yellow - 500 / 20 text - yellow - 400',
    },
    new: {
      icon: Clock,
      text: 'New',
      colors: 'bg - green - 500 / 20 text - green - 400',
    },
    'top - rated': {
      icon: Award,
      text: 'Top Rated',
      colors: 'bg - purple - 500 / 20 text - purple - 400',
    },
  }
  const { icon: Icon, text, colors } = badge_config[type];
    >;
      <Icon className='w - 3 h - 3' />;
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
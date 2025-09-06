<<<<<<< HEAD


import React from 'react';
import { BadgeCheck, Star, Clock, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
type BadgeType = 'verified' | 'featured' | 'new' | 'top-rated';
interface ProfileBadgeProps {;
  type: BadgeType;
  className?: string;  type: BadgeType,;
  className?: string;
}
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
import React from 'react'
import { BadgeCheck, Star, Clock, Award } from 'lucide-react'
import { cn } from '@/lib/utils'
type BadgeType = 'verified' | 'featured' | 'new' | 'top-rated'
<<<<<<< HEAD
interface ProfileBadgeProps {
  type: BadgeType
  className?: string;  type: BadgeType
  className?: string
}
export function ProfileBadge({ type, className }: ProfileBadgeProps) {
  const badgeConfig = {
    verified: {
      icon: BadgeCheck
      text: 'Verified'
      colors: 'bg-blue-500/20 text-blue-400'
    }
      icon: Star
      text: 'Featured'
      colors: 'bg-yellow-500/20 text-yellow-400'
    }
    new: {
      icon: Clock
      text: 'New'
      colors: 'bg-green-500/20 text-green-400'
    }
    'top-rated': {
      icon: Award
      text: 'Top Rated'
      colors: 'bg-purple-500/20 text-purple-400'
    }
  }
  const { icon: Icon, text, colors } = badgeConfig[type]
    >
      <Icon className='w-3 h-3' />
=======
interface ProfileBadgeProps {;
  type: BadgeType;
  className?: string;  type: BadgeType,
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


=======
interface ProfileBadgeProps {
  type: BadgeType,
<<<<<<< HEAD



=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  className?: string
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

export function ProfileBadge({ type, className }: ProfileBadgeProps) {
  const badgeConfig = {
    verified: {
      icon: BadgeCheck,
<<<<<<< HEAD




=======
<<<<<<< HEAD
      text: "Verified",
      colors: "bg-blue-500/20 text-blue-400"},
    featured: {
=======
<<<<<<< HEAD
      text: 'Verified',
      colors: 'bg-blue-500/20 text-blue-400',
    },
=======
      text: "Verified",
      colors: "bg-blue-500/20 text-blue-400"},
    featured: {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      icon: Star,
      text: "Featured",
      colors: "bg-yellow-500/20 text-yellow-400"},
    new: {
      icon: Clock,
      text: "New",
      colors: "bg-green-500/20 text-green-400"},
    "top-rated": {
      icon: Award,
<<<<<<< HEAD

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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
<<<<<<< HEAD
}

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      text: "Top Rated",
      colors: "bg-purple-500/20 text-purple-400"}},

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
import React from "react",;
import { BadgeCheck, Star, Clock, Award } from 'lucide-react';
import { cn } from "@/lib/utils",;
type BadgeType = 'verified' | 'featured' | 'new' | 'top-rated',;
interface ProfileBadgeProps {;
  type: BadgeType,;
  className?: string;
}
;
export function ProfileBadge({ type, className }: ProfileBadgeProps) {;
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
  const { icon: Icon, text, colors } = badgeConfig[type],;
  return (;
    <div className={cn(;
      "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium";
      colors;
      className;
    )}>;
      <Icon className="w-3 h-3" />;
      <span>{text}</span>;
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import { BadgeCheck, Star, Clock, Award } from 'lucide-react'
import { cn } from '@/lib/utils'
type BadgeType = 'verified' | 'featured' | 'new' | 'top-rated'
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react';
import { BadgeCheck, Star, Clock, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
type BadgeType = 'verified' | 'featured' | 'new' | 'top-rated';
interface ProfileBadgeProps {;
  type: BadgeType;
<<<<<<< HEAD
<<<<<<< HEAD
  className?: string;  type: BadgeType,
interface ProfileBadgeProps {;
  type: BadgeType;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
import React from "react",
import { BadgeCheck, Star, Clock, Award } from 'lucide-react'
import { cn } from "@/lib/utils",
type BadgeType = 'verified' | 'featured' | 'new' | 'top-rated',
interface ProfileBadgeProps {
  type: BadgeType,
ursor/fix-website-loading-errors-and-merge-6662

interface ProfileBadgeProps {
  type: BadgeType,
=======
  className?: string;  type: BadgeType,;
  className?: string;
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


interface ProfileBadgeProps {
  type: BadgeType,



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  className?: string
}

export function ProfileBadge({ type, className }: ProfileBadgeProps) {
  const badgeConfig = {
    verified: {
      icon: BadgeCheck,
<<<<<<< HEAD
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
      text: 'Verified',
      colors: 'bg-blue-500/20 text-blue-400',
    },
      text: "Verified",
      colors: "bg-blue-500/20 text-blue-400"},
    featured: {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
ursor/fix-website-loading-errors-and-merge-6662
      text: 'Top Rated',
      colors: 'bg-purple-500/20 text-purple-400',
    },
  }
  const { icon: Icon, text, colors } = badgeConfig[type]
    >
      <Icon className='w-3 h-3' />
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
}'"  );
};
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
=======

import React from 'react';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
    </div>;
  );
}
;
}
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

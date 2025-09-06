<<<<<<< HEAD

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
interface ProfileBadgeProps {;
  type: BadgeType;
  className?: string;  type: BadgeType,
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",
import { BadgeCheck, Star, Clock, Award } from 'lucide-react'
import { cn } from "@/lib/utils",
type BadgeType = 'verified' | 'featured' | 'new' | 'top-rated',
<<<<<<< HEAD


interface ProfileBadgeProps {
  type: BadgeType,
<<<<<<< HEAD

  className?: string
}

=======
>>>>>>>   className?: string
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

interface ProfileBadgeProps {
  type: BadgeType,
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  className?: string
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function ProfileBadge({ type, className }: ProfileBadgeProps) {
  const badgeConfig = {
    verified: {
      icon: BadgeCheck,
<<<<<<< HEAD
<<<<<<< HEAD

      icon: Star,
=======
      text: "Verified",
      colors: "bg-blue-500/20 text-blue-400"},
    featured: {
      text: 'Verified',
      colors: 'bg-blue-500/20 text-blue-400',
    },
>>>>>>>       icon: Star,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
      icon: Star,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

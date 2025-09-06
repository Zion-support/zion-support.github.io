import React from 'react';
import { BadgeCheck, Star, Clock, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

<<<<<<< HEAD
type BadgeType = 'verified' | 'featured' | 'new' | 'top-rated';
=======
import React from "react";
import { BadgeCheck, Star, Clock, Award } from 'lucide-react';
import { cn } from "@/lib/utils";
type BadgeType = 'verified' | 'featured' | 'new' | 'top-rated',
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

interface ProfileBadgeProps {
  type: BadgeType;
  className?: string;
=======
  type: BadgeType,
  className?: string
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export function ProfileBadge({ type, className }: ProfileBadgeProps) {
  const badgeConfig = {
    verified: {
      icon: BadgeCheck,
      text: 'Verified',
      colors: 'bg-blue-500/20 text-blue-400',
    },
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    featured: {
      icon: Star,
      text: 'Featured',
      colors: 'bg-yellow-500/20 text-yellow-400',
    },
    new: {
      icon: Clock,
      text: 'New',
      colors: 'bg-green-500/20 text-green-400',
    },
    'top-rated': {
      icon: Award,
      text: 'Top Rated',
      colors: 'bg-purple-500/20 text-purple-400',
    },
  };

  const { icon: Icon, text, colors } = badgeConfig[type];

  
    >
      <Icon className='w-3 h-3' />
      <span>{text}</span>
    </div>
  );

  type, className ;
}: ProfileBadgeProps) {;
  const badgeConfig = {;
  verified: {;
  const {;
  icon: Icon,  text, colors ;
}= badgeConfig[type];

}> <Icon className="w-3 h-3" /> <span> {;
  text ;
}</span> ;
}'"
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

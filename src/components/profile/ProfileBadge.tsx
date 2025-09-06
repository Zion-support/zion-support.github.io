<<<<<<< HEAD
import React from 'react';
import { BadgeCheck, Star, Clock, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { BadgeCheck, Star, Clock, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

type BadgeType = 'verified' | 'featured' | 'new' | 'top-rated';

interface ProfileBadgeProps {
<<<<<<< HEAD
  type: BadgeType;
  className?: string;
=======
<<<<<<< HEAD
  type: BadgeType;
  className?: string;
=======

import React from "react";
import { BadgeCheck, Star, Clock, Award } from 'lucide-react'
import { cn } from "@/lib/utils";

type BadgeType = 'verified' | 'featured' | 'new' | 'top-rated',


interface ProfileBadgeProps {
  type: BadgeType,
  className?: string
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
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
<<<<<<< HEAD
      text: 'Verified',
      colors: 'bg-blue-500/20 text-blue-400',
    },
=======
<<<<<<< HEAD
<<<<<<< HEAD
      text: 'Verified',
      colors: 'bg-blue-500/20 text-blue-400',
    },
=======
      text: "Verified",
      colors: "bg-blue-500/20 text-blue-400"},
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
}'"
=======
}'"
=======
      text: "Verified",
      colors: "bg-blue-500/20 text-blue-400"},
    featured: {
      icon: Star,
      text: "Featured",
      colors: "bg-yellow-500/20 text-yellow-400"},
    new: {
      icon: Clock,
      text: "New",
      colors: "bg-green-500/20 text-green-400"},
    "top-rated": {
      icon: Award,
      text: "Top Rated",
      colors: "bg-purple-500/20 text-purple-400"}},


  const { icon: Icon, text, colors  } = badgeConfig[type],


  return (
    <div className = {cn(
      "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium",
      colors;
      className
    )}>
      <Icon className="w-3 h-3" />
      <span>{text}</span>
    </div>
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3


import React from 'react';
import { BadgeCheck, Star, Clock, Award  } from 'lucide-react';
import { cn  } from '@/lib/utils';

type BadgeType = 'verified' | 'featured' | 'new' | 'top-rated';

interface ProfileBadgeProps  {type: BadgeType;}
  className?: string;  type: BadgeType,className?: string;}
}

interface ProfileBadgeProps {
  type: BadgeType,className?: string;}
}
}

export function ProfileBadge() {const badgeConfig = {verified: {icon: BadgeCheck,icon: Star,text: "Featured",colors: "bg-yellow-500/20 text-yellow-400}"
},new: {icon: Clock,text: "New",colors: "bg-green-500/20 text-green-400}"
},"top-rated": {icon: Award,<span />{text}</span>;
    </div>)type, class_name;

type BadgeType = any;
      className;
    )}>;"
      <Icon className="w-3 h-3" />;
      <span />{text}</span>;
    </div>;
  )type, className;
}: ProfileBadgeProps) {const badge_config = {verified: ;}
  const {icon: Icon,  text, colors;}
}= badge_config[type];"
}> <Icon className="w - 3 h - 3" /> <span /> {text;}
}</span>;"
}'"  )}icon: Icon,  text, colors;
}= badgeConfig[type];"
}> <Icon className="w-3 h-3" /> <span /> {text;}
}</span>;"
}'"  )}"
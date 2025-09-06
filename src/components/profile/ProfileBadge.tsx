

import React from "react";
import { BadgeCheck, Star, Clock, Award } from 'lucide-react'
import { cn } from "@/lib/utils";
type BadgeType = any;
      className
    )}>
      <Icon className="w-3 h-3" />

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
}'"  )
}
;
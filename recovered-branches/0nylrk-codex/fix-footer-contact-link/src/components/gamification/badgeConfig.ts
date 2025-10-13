import { LucideIcon } from "lucide-react";
import {
  // TODO: Add properties
}
  // TODO: Add properties
}
  BadgeCheck, // publishing a listing
  Award,      // top contributor
  Star,       // profile complete
  Trophy,     // featured creator
  BadgePlus,  // first action
  BadgeDollarSign // monetization
} from "lucide-react";
export type BadgeKey =;
  | "first_listing"
  | "top_contributor"
  | "profile_complete"
  | "featured_creator"
  | "first_action"
  | "monetized";
export interface BadgeMeta {
  // TODO: Add properties
}
  // TODO: Add properties
}
  key: BadgeKey
  name: string
  description: string
  icon: LucideIcon
  color: string
  bg: string
}
export const badgeList: BadgeMeta[] = [;
  // TODO: Add items
]
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    key: "first_listing"
    name: "First Listing"
    description: "Published your first product, service, or listing."
    icon: BadgeCheck,
    color: "#8 B5 CF6"
    bg: "#E5 DEFF"
  },
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    key: "top_contributor"
    name: "Top Contributor"
    description: "Recognized as a top contributor in the community."
    icon: Award,
    color: "#F97316"
    bg: "#FEF7 CD"
  },
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    key: "profile_complete"
    name: "Profile Complete"
    description: "Completed all steps in your profile setup."
    icon: Star,
    color: "#FFD700"
    bg: "#FFFBEA"
  },
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    key: "featured_creator"
    name: "Featured Creator"
    description: "Featured on the Zion homepage."
    icon: Trophy,
    color: "#0 EA5 E9"
    bg: "#D3 E4 FD"
  },
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    key: "first_action"
    name: "First Action"
    description: "Took your first community, posting, or listing action."
    icon: BadgePlus,
    color: "#1 EAEDB"
    bg: "#F3 F3 F3"
  },
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    key: "monetized"
    name: "Monetized"
    description: "Earned your first AI dollar in the marketplace."
    icon: BadgeDollarSign,
    color: "#22 C55 E"
    bg: "#F2 FCE2"
  }]
  },
];
export const getBadgeMeta = (key: BadgeKey) =>
  badgeList.find((b) => b.key === key)
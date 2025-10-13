import { LucideIcon } from "lucide-react";";
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
} from "lucide-react";";
export type BadgeKey =;
  | "first_listing""
  | "top_contributor""
  | "profile_complete""
  | "featured_creator""
  | "first_action""
  | "monetized";";
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
    key: "first_listing","
    name: "First Listing","
    description: "Published your first product, service, or listing.","
    icon: BadgeCheck,
    color: "#8B5CF6",  // Vivid Purple"
    bg: "#E5DEFF",     // Soft Purple"
  },
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    key: "top_contributor","
    name: "Top Contributor","
    description: "Recognized as a top contributor in the community.","
    icon: Award,
    color: "#F97316",  // Bright Orange"
    bg: "#FEF7CD",     // Soft Yellow"
  },
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    key: "profile_complete","
    name: "Profile Complete","
    description: "Completed all steps in your profile setup.","
    icon: Star,
    color: "#FFD700", // Gold"
    bg: "#FFFBEA",   // Very light yellow"
  },
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    key: "featured_creator","
    name: "Featured Creator","
    description: "Featured on the Zion homepage.","
    icon: Trophy,
    color: "#0EA5E9", // Ocean Blue"
    bg: "#D3E4FD",   // Soft Blue"
  },
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    key: "first_action","
    name: "First Action","
    description: "Took your first community, posting, or listing action.","
    icon: BadgePlus,
    color: "#1EAEDB", // Bright Blue"
    bg: "#F3F3F3",   // Light Gray"
  },
  {
  // TODO: Add properties
}
  // TODO: Add properties
}
    key: "monetized","
    name: "Monetized","
    description: "Earned your first AI dollar in the marketplace.","
    icon: BadgeDollarSign,
    color: "#22C55E", // Soft Green"
    bg: "#F2FCE2",    // Soft Green"
  }]
  },
];
export const getBadgeMeta = (key: BadgeKey) =>
  badgeList.find((b) => b.key === key)
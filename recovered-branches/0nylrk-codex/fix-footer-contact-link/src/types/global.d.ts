import { ReactNode } from "react";
// Extend FeatureCardProps to include key for mapping"
declare module "@/components/FeatureCard" {}
  export interface FeatureCardProps {};
    title: string;
    description: string;
    icon: ReactNode;
    className?: string;
    key?: number | string;
  }
}
// Extend ListingScoreCardProps to include key for mapping;
declare module '@/components / ListingScoreCard' {}
    title: string;
    description: string;
    category: string;
    image?: string;
    tags?: string[];
    author?: string;


    author_image?: string;
    ai_score?: number;
    rating?: number;
  }
}

'"
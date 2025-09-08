import { ReactNode } from "react";
// Extend FeatureCardProps to include key for mapping
declare module "@/components/FeatureCard" {
  export interface FeatureCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    className?: string;
    key?: number | string;
  }
}
    title: string;,
  description: string;
    icon: ReactNode;

    className?: string;
    key?: number | string;

declare module '@/components / ListingScoreCard' {

// Extend ListingScoreCardProps to include key for mapping
declare module "@/components/ListingScoreCard" {
  export interface ListingScoreCardProps {

export interface ListingScoreCardProps {

import { ReactNode } from 'react';
import {ReactNode} from 'react';
// Extend FeatureCardProps to include key for mapping
declare module '@/components/FeatureCard' {
  export interface FeatureCardProps {;

>>>>>>> origin/cursor/delete-old-data-records-6bba
    title: string;
    description: string;

    category: string;
    image?: string;
    tags?: string[];
    author?: string;
<<<<<<< HEAD
<<<<<<< HEAD
    author_image?: string;
    ai_score?: number;
    rating?: number;
    reviewCount?: number;
    key?: string | number;
    variant?: string;
>>>>>>> origin/cursor/delete-old-data-records-6bba

  }
}

<<<<<<< HEAD
=======
    key?: string | number;

  }
}

    author_image?: string;
    ai_score?: number;
    rating?: number;
  }
}    author_image?: string;
    ai_score?: number;
    rating?: number;
  }
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

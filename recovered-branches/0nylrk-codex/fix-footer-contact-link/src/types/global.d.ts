
import {ReactNode} from 'react';

// Extend FeatureCardProps to include key for mapping
declare module '@/components/FeatureCard' {


import {ReactNode} from 'react';

// Extend FeatureCardProps to include key for mapping
declare module "@/components/FeatureCard" {

  export interface FeatureCardProps {

    title: string,
  description: string;
    icon: ReactNode;


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

    title: string;
    description: string;

    category: string;
    image?: string;
    tags?: string[];
    author?: string;


    review_count?: number;
    key?: string | number,

    variant?: string;

  }
}

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

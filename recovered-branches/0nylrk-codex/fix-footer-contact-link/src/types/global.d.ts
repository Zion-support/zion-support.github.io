<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {ReactNode} from 'react';

// Extend FeatureCardProps to include key for mapping
declare module '@/components/FeatureCard' {
<<<<<<< HEAD

=======
<<<<<<< HEAD
    class_name?: string,
    key?: number | string;
  }
}
// Extend ListingScoreCardProps to include key for mapping;
declare module '@/components / ListingScoreCard' {
  export interface ListingScoreCardProps {

import { ReactNode } from 'react';
import {ReactNode} from 'react';
// Extend FeatureCardProps to include key for mapping
declare module '@/components/FeatureCard' {
  export interface FeatureCardProps {;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {ReactNode} from 'react';

// Extend FeatureCardProps to include key for mapping
declare module "@/components/FeatureCard" {

  export interface FeatureCardProps {
<<<<<<< HEAD
    title: string,
  description: string;
    icon: ReactNode;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    title: string;
    description: string;
    icon: ReactNode;

<<<<<<< HEAD
    className?: string

    key?: number | string
  }
}
// Extend ListingScoreCardProps to include key for mapping
declare module '@/components/ListingScoreCard' {
  export interface ListingScoreCardProps {;
=======
    class_name?: string,
    key?: number | string;
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
export interface ListingScoreCardProps {

import { ReactNode } from 'react';
import {ReactNode} from 'react';
// Extend FeatureCardProps to include key for mapping
declare module '@/components/FeatureCard' {
  export interface FeatureCardProps {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    title: string;
    description: string;

    category: string;
    image?: string;
    tags?: string[];
    author?: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
    authorImage?: string;
    aiScore?: number;
    rating?: number;
    reviewCount?: number;
>>>>>>> merged-prs-20250907-203621

    key?: string | number

    variant?: string
  }
}
// Extend ChatMessageProps to include key for mapping
declare module '@/components/ChatAssistant/ChatMessage' {
  export interface ChatMessageProps {;
    role: 'user' | 'assistant';
    message: string;

    timestamp?: Date

    key?: string | number
  }
}
// Extend ProductListingCardProps to include key for mapping
declare module '@/components/ProductListingCard' {
<<<<<<< HEAD
  export interface ProductListingCardProps {
    listing: any,
    view: any,
    onRequestQuote: (listingId: string) => void,
    key?: string | number
=======
  export interface ProductListingCardProps {;
    listing: any;
    view: any;

    onRequestQuote: (listingId: string) => void

    key?: string | number
import { ReactNode } from 'react',;
// Extend FeatureCardProps to include key for mapping;
declare module '@/components/FeatureCard' {;
  export interface FeatureCardProps {;
    title: string,;
    description: string,;
    icon: ReactNode,;
    className?: string,;
    key?: number | string;
  }
}
;
// Extend ListingScoreCardProps to include key for mapping;
declare module '@/components/ListingScoreCard' {;
  export interface ListingScoreCardProps {;
    title: string,;
    description: string,;
    category: string,;
    image?: string,;
    tags?: string[],;
    author?: string,;
    authorImage?: string,;
    aiScore?: number,;
    rating?: number,;
    reviewCount?: number,;
    key?: string | number,;
    review_count?: number;
    key?: string | number,
    variant?: string;
  }
}
// Extend ChatMessageProps to include key for mapping;
declare module '@/components / ChatAssistant / ChatMessage' {
  export interface ChatMessageProps {
    role: 'user' | 'assistant';
    message: string;
    timestamp?: Date,
    key?: string | number;

import { ReactNode } from 'react',;
;
// Extend FeatureCardProps to include key for mapping;
declare module '@/components/FeatureCard' {;
  export interface FeatureCardProps {;
    title:string,;
    description:string,;
    icon:ReactNode,;
    className?:string,;
    key?:number | string;  }
}
;
// Extend ListingScoreCardProps to include key for mapping;
declare module '@/components/ListingScoreCard' {;
  export interface ListingScoreCardProps {;
    title:string,;
    description:string,;
    category:string,;
    image?:string,;
    tags?:string[],;
    author?:string,;
    authorImage?:string,;
    aiScore?:number,;
    rating?:number,;
    reviewCount?:number,;
    key?:string | number,;
    variant?:string;
  }
}
    variant?: string;
  }
}
;
// Extend ChatMessageProps to include key for mapping;
declare module '@/components/ChatAssistant/ChatMessage' {;
  export interface ChatMessageProps {;
    role: 'user' | 'assistant',;
    message: string,;
    timestamp?: Date,;
    key?: string | number;
  }
}
;
// Extend ProductListingCardProps to include key for mapping;
declare module '@/components/ProductListingCard' {;
  export interface ProductListingCardProps {;
  }
}
    listing: any,;
    view: any;
    onRequestQuote: (listingId: string) => void;
    key?: string | number;
  }
}
=======
    author_image?: string;
    ai_score?: number;
    rating?: number;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
>>>>>>> merged-prs-20250907-203621
  }
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

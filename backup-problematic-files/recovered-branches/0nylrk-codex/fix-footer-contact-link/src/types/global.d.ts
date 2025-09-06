<<<<<<< HEAD
import {ReactNode} from 'react';
// Extend FeatureCardProps to include key for mapping;
declare module '@/components / FeatureCard' {
  export interface FeatureCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    class_name?: string,
    key?: number | string;
  }
}
// Extend ListingScoreCardProps to include key for mapping;
declare module '@/components / ListingScoreCard' {
  export interface ListingScoreCardProps {
    title: string;
    description: string;
    category: string;
    image?: string;
    tags?: string[];
    author?: string;
    author_image?: string;
    ai_score?: number;
    rating?: number;
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
=======

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
;
// Extend ChatMessageProps to include key for mapping;
declare module '@/components/ChatAssistant/ChatMessage' {;
  export interface ChatMessageProps {;
    role:'user' | 'assistant',;
    message:string,;
    timestamp?:Date,;
    key?:string | number;
  }
}
;
// Extend ProductListingCardProps to include key for mapping;
declare module '@/components/ProductListingCard' {;
  export interface ProductListingCardProps {;
    listing:any,;
    view:any,;
    onRequestQuote:(listingId:string) => void,;
    key?:string | number;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
} 
}
<<<<<<< HEAD
// Extend ProductListingCardProps to include key for mapping;
declare module '@/components / ProductListingCard' {
  export interface ProductListingCardProps {
    listing: any;
    view: any;
    onRequestQuote: (listing_id: string) => void,
    key?: string | number;
  }
}
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {ReactNode} from 'react';


// Extend FeatureCardProps to include key for mapping
declare module '@/components/FeatureCard' {
import { ReactNode } from 'react';
import {ReactNode} from 'react';
// Extend FeatureCardProps to include key for mapping
declare module '@/components/FeatureCard' {
  export interface FeatureCardProps {;
=======
==============
import {ReactNode} from 'react';
// Extend FeatureCardProps to include key for mapping;
declare module '@/components / FeatureCard' {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  export interface FeatureCardProps {
    key?: number | string
  }
}
// Extend ListingScoreCardProps to include key for mapping
declare module '@/components/ListingScoreCard' {
  export interface ListingScoreCardProps {;
=======
=======    class_name?: string,
    key?: number | string;
  }
}
// Extend ListingScoreCardProps to include key for mapping;
declare module '@/components / ListingScoreCard' {

  export interface ListingScoreCardProps {
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
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

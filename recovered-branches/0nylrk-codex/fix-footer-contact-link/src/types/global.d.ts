
import { ReactNode } from 'react';
import {ReactNode} from 'react';
// Extend FeatureCardProps to include key for mapping
declare module '@/components/FeatureCard' {
import {ReactNode} from 'react';

// Extend FeatureCardProps to include key for mapping
declare module '@/components/FeatureCard' {
import {ReactNode} from 'react';
// Extend FeatureCardProps to include key for mapping
declare module '@/components/FeatureCard' {
// Extend FeatureCardProps to include key for mapping
declare module "@/components/FeatureCard" {
import { ReactNode } from "react";
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
title: string,
  description: string;
    className?: string;
    key?: number | string;
}
}
// Extend ListingScoreCardProps to include key for mapping;
declare module '@/components / ListingScoreCard' {}
    title: string;
    description: string;
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
    author_image?: string;
    ai_score?: number;
    rating?: number;
    reviewCount?: number;

    key?: string | number

    variant?: string
    review_count?: number;
    key?: string | number,
    variant?: string;
  }
}
// Extend ChatMessageProps to include key for mapping
declare module '@/components/ChatAssistant/ChatMessage' {
  export interface ChatMessageProps {;
    role: 'user' | 'assistant';
    message: string;
timestamp?: Date

    key?: string | number
    key?: string | number;
  }
}
// Extend ProductListingCardProps to include key for mapping
declare module '@/components/ProductListingCard' {
  export interface ProductListingCardProps {;
    listing: any;
    view: any;

    onRequestQuote: (listingId: string) => void

    key?: string | number

  }
}

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

    author_image?: string;
    ai_score?: number;
    rating?: number;
  }
}    author_image?: string;
    ai_score?: number;
    rating?: number;
  }
}

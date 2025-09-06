<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { ReactNode } from 'react';
import {ReactNode} from 'react';
// Extend FeatureCardProps to include key for mapping
declare module '@/components/FeatureCard' {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {ReactNode} from 'react';


// Extend FeatureCardProps to include key for mapping
declare module '@/components/FeatureCard' {
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
// Extend FeatureCardProps to include key for mapping
declare module '@/components/FeatureCard' {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {ReactNode} from 'react';
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
// Extend FeatureCardProps to include key for mapping
declare module '@/components/FeatureCard' {
=======
// Extend FeatureCardProps to include key for mapping;
declare module '@/components / FeatureCard' {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { ReactNode } from "react";
// Extend FeatureCardProps to include key for mapping
declare module "@/components/FeatureCard" {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
import { ReactNode } from "react";
// Extend FeatureCardProps to include key for mapping
declare module "@/components/FeatureCard" {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  export interface FeatureCardProps {
    title: string,
  description: string;
    icon: ReactNode;
    title: string,
  description: string;
=======
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    category: string;
    image?: string;
    tags?: string[];
    author?: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    author_image?: string;
    ai_score?: number;
    rating?: number;
    reviewCount?: number;
<<<<<<< HEAD

    key?: string | number

    variant?: string
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    review_count?: number;
    key?: string | number,
=======
    key?: string | number;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    variant?: string;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }
}
<<<<<<< HEAD
// Extend ChatMessageProps to include key for mapping
declare module '@/components/ChatAssistant/ChatMessage' {
  export interface ChatMessageProps {;
    role: 'user' | 'assistant';
    message: string;
<<<<<<< HEAD

    timestamp?: Date

    key?: string | number
=======
    timestamp?: Date,
=======

// Extend ChatMessageProps to include key for mapping
declare module "@/components/ChatAssistant/ChatMessage" {
  export interface ChatMessageProps {
    role: "user" | "assistant";
    message: string;
    timestamp?: Date;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    key?: string | number;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
<<<<<<< HEAD
// Extend ProductListingCardProps to include key for mapping
declare module '@/components/ProductListingCard' {
  export interface ProductListingCardProps {;
    listing: any;
    view: any;
<<<<<<< HEAD
<<<<<<< HEAD

    onRequestQuote: (listingId: string) => void

    key?: string | number

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
    onRequestQuote: (listing_id: string) => void,
    key?: string | number;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

// Extend ProductListingCardProps to include key for mapping
declare module "@/components/ProductListingCard" {
  export interface ProductListingCardProps {
    listing: any;
    view: any;
    onRequestQuote: (listingId: string) => void;
    key?: string | number;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  }
}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    author_image?: string;
    ai_score?: number;
    rating?: number;
  }
}    author_image?: string;
    ai_score?: number;
    rating?: number;
  }
}
<<<<<<< HEAD
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

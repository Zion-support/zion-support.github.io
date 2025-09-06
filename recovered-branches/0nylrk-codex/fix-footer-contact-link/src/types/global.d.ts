<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/global.d.ts


<<<<<<< HEAD
=======
import {ReactNode} from 'react';


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
// Extend FeatureCardProps to include key for mapping
declare module '@/components/FeatureCard' {
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/global.d.ts
import {ReactNode} from 'react';
// Extend FeatureCardProps to include key for mapping;
declare module '@/components / FeatureCard' {
  export interface FeatureCardProps {
    title: string;
    description: string;
    icon: ReactNode;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/global.d.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/global.d.ts
    class_name?: string,
    key?: number | string;
  }
}
// Extend ListingScoreCardProps to include key for mapping;
declare module '@/components / ListingScoreCard' {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/global.d.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/global.d.ts
  export interface ListingScoreCardProps {
=======

<<<<<<< HEAD
<<<<<<< HEAD
import { ReactNode } from 'react';
=======
import {ReactNode} from 'react';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// Extend FeatureCardProps to include key for mapping
declare module '@/components/FeatureCard' {
  export interface FeatureCardProps {;
    title: string;
    description: string;
    icon: ReactNode;

    className?: string

    key?: number | string
  }
}
// Extend ListingScoreCardProps to include key for mapping
declare module '@/components/ListingScoreCard' {
  export interface ListingScoreCardProps {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    title: string;
    description: string;
    category: string;
    image?: string;
    tags?: string[];
    author?: string;
<<<<<<< HEAD
    author_image?: string;
    ai_score?: number;
    rating?: number;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/global.d.ts

<<<<<<< HEAD
=======
    authorImage?: string;
    aiScore?: number;
    rating?: number;
    reviewCount?: number;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/global.d.ts
    review_count?: number;
    key?: string | number,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======
    variant?: string;
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
// Extend ChatMessageProps to include key for mapping;
declare module '@/components/ChatAssistant/ChatMessage' {;
  export interface ChatMessageProps {;
<<<<<<< HEAD
    role:'user' | 'assistant',;
    message:string,;
    timestamp?:Date,;
    key?:string | number;
=======
    role: 'user' | 'assistant',;
    message: string,;
    timestamp?: Date,;
    key?: string | number;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
}
;
// Extend ProductListingCardProps to include key for mapping;
declare module '@/components/ProductListingCard' {;
  export interface ProductListingCardProps {;
<<<<<<< HEAD
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/global.d.ts

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/global.d.ts
  }
}
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
    listing: any,;
    view: any;
    onRequestQuote: (listingId: string) => void;
    key?: string | number;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

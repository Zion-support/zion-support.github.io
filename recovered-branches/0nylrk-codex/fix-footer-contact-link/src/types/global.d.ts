
<<<<<<< HEAD

import {ReactNode} from 'react';


=======
<<<<<<< HEAD
<<<<<<< HEAD
import { ReactNode } from 'react';
=======
import {ReactNode} from 'react';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
// Extend FeatureCardProps to include key for mapping
declare module '@/components/FeatureCard' {
=======
import {ReactNode} from 'react';
// Extend FeatureCardProps to include key for mapping;
declare module '@/components / FeatureCard' {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
  }
}
// Extend ProductListingCardProps to include key for mapping;
declare module '@/components / ProductListingCard' {
  export interface ProductListingCardProps {
    listing: any;
    view: any;
    onRequestQuote: (listing_id: string) => void,
    key?: string | number;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  }
}
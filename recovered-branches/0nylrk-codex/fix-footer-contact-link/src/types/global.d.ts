
import { ReactNode } from 'react';
// Extend FeatureCardProps to include key for mapping
declare module '@/components/FeatureCard' {
  export interface FeatureCardProps {
    title: string;
    description: string;
    icon: ReactNode;
<<<<<<< HEAD
    className?: string;
=======
    className?: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    key?: number | string
  }
}
// Extend ListingScoreCardProps to include key for mapping
declare module '@/components/ListingScoreCard' {
  export interface ListingScoreCardProps {
    title: string;
    description: string;
    category: string;
    image?: string;
    tags?: string[];
    author?: string;
    authorImage?: string;
    aiScore?: number;
    rating?: number;
    reviewCount?: number;
<<<<<<< HEAD
    key?: string | number;
=======
    key?: string | number
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    variant?: string
  }
}
// Extend ChatMessageProps to include key for mapping
declare module '@/components/ChatAssistant/ChatMessage' {
  export interface ChatMessageProps {
    role: 'user' | 'assistant';
    message: string;
<<<<<<< HEAD
    timestamp?: Date;
=======
    timestamp?: Date
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    key?: string | number
  }
}
// Extend ProductListingCardProps to include key for mapping
declare module '@/components/ProductListingCard' {
  export interface ProductListingCardProps {
    listing: any;
    view: any;
<<<<<<< HEAD
    onRequestQuote: (listingId: string) => void;
=======
    onRequestQuote: (listingId: string) => void
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    key?: string | number
  }
}
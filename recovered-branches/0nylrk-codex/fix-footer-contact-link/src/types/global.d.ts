import { ReactNode } from "react";
// Extend FeatureCardProps to include key for mapping
declare module "@/components/FeatureCard" {
  export interface FeatureCardProps {
<<<<<<< HEAD
    title: string;
    description: string;
    icon: ReactNode;
    className?: string;
    key?: number | string;
  }
}
// Extend ListingScoreCardProps to include key for mapping;
declare module '@/components / ListingScoreCard' {

// Extend ListingScoreCardProps to include key for mapping
declare module "@/components/ListingScoreCard" {
  export interface ListingScoreCardProps {
    title: string;
    description: string;
=======
    title: string,
  description: string;
    icon: ReactNode;
    title: string,
  description: string;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    category: string;
    image?: string;
    tags?: string[];
    author?: string;
    author_image?: string;
    ai_score?: number;
    rating?: number;
<<<<<<< HEAD
    reviewCount?: number;
    key?: string | number;
    variant?: string;
  }
}

// Extend ChatMessageProps to include key for mapping
declare module "@/components/ChatAssistant/ChatMessage" {
  export interface ChatMessageProps {
    role: "user" | "assistant";
    message: string;
    timestamp?: Date;
    key?: string | number;
  }
}

// Extend ProductListingCardProps to include key for mapping
declare module "@/components/ProductListingCard" {
  export interface ProductListingCardProps {
    listing: any;
    view: any;
    onRequestQuote: (listingId: string) => void;
    key?: string | number;
  }
}
    author_image?: string;
=======
  }
}    author_image?: string;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    ai_score?: number;
    rating?: number;
  }
}

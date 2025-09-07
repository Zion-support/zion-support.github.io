<<<<<<< HEAD


import { ReactNode } from 'react';

=======
import { ReactNode } from "react";
>>>>>>> origin/main
// Extend FeatureCardProps to include key for mapping
declare module "@/components/FeatureCard" {
  export interface FeatureCardProps {
    title: string,
  description: string;
    icon: ReactNode;
<<<<<<< HEAD

    className?: string;

    key?: number | string
  }
=======
    title: string,
  description: string;
import { ReactNode } from "react";"
// Extend FeatureCardProps to include key for mapping;"
declare module "@/components/FeatureCard" {"
  export interface FeatureCardProps {
  // TODO: Implement
>>>>>>> origin/main
}
    title: string;,
  description: string;
    icon: ReactNode;
    className?: string;
    key?: number | string;
// Extend ListingScoreCardProps to include key for mapping;"
declare module '@/components / ListingScoreCard' {
// Extend ListingScoreCardProps to include key for mapping;
declare module "@/components/ListingScoreCard" {"
  export interface ListingScoreCardProps {
  // TODO: Implement
pr-12325
    category: string;
    image?: string;
    tags?: string[];
    author?: string;
    author_image?: string;
    ai_score?: number;
    rating?: number;
  }
}    author_image?: string;
    ai_score?: number;
    rating?: number;
  }
}
    reviewCount?: number;
<<<<<<< HEAD

    key?: string | number;

    variant?: string
  }
}
=======
    key?: string | number;
    variant?: string;
>>>>>>> origin/main

// Extend ChatMessageProps to include key for mapping;"
declare module "@/components/ChatAssistant/ChatMessage" {"
  export interface ChatMessageProps {
<<<<<<< HEAD
    role: 'user' | 'assistant';
    message: string;

    timestamp?: Date;

    key?: string | number
  }
}
=======
  // TODO: Implement
}"
    role: "user" | "assistant";",
  message: string;
    timestamp?: Date;
>>>>>>> origin/main

// Extend ProductListingCardProps to include key for mapping;"
declare module "@/components/ProductListingCard" {"
  export interface ProductListingCardProps {
<<<<<<< HEAD
    listing: any;
    view: any;

    onRequestQuote: (listingId: string) => void;

    key?: string | number
  }
}
=======
  // TODO: Implement
    listing: any;,
  view: any;
    onRequestQuote: (listingId: string) => void;
"
pr-12325
>>>>>>> origin/main

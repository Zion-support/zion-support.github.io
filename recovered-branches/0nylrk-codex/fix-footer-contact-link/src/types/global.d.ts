import { ReactNode } from "react";
// Extend FeatureCardProps to include key for mapping
declare module "@/components/FeatureCard" {
  export interface FeatureCardProps {
    title: string,
  description: string;
    icon: ReactNode;
    title: string,
  description: string;
import { ReactNode } from "react";"
// Extend FeatureCardProps to include key for mapping;"
declare module "@/components/FeatureCard" {"
  export interface FeatureCardProps {
  // TODO: Implement
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
    key?: string | number;
    variant?: string;

// Extend ChatMessageProps to include key for mapping;"
declare module "@/components/ChatAssistant/ChatMessage" {"
  export interface ChatMessageProps {
  // TODO: Implement
}"
    role: "user" | "assistant";",
  message: string;
    timestamp?: Date;

// Extend ProductListingCardProps to include key for mapping;"
declare module "@/components/ProductListingCard" {"
  export interface ProductListingCardProps {
  // TODO: Implement
    listing: any;,
  view: any;
    onRequestQuote: (listingId: string) => void;
"
pr-12325

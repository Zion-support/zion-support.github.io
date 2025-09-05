

// Extend FeatureCardProps to include key for mapping
declare module '@/components/FeatureCard' {_export interface FeatureCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    className?: string;
    key?: number | string;}
}

// Extend ListingScoreCardProps to include key for mapping
declare module '@/components/ListingScoreCard' {_export interface ListingScoreCardProps {
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
    key?: string | number;
    variant?: string;}
}

// Extend ChatMessageProps to include key for mapping
declare module '@/components/ChatAssistant/ChatMessage' {_export interface ChatMessageProps {
    role: 'user' | 'assistant';
    message: string;
    timestamp?: Date;
    key?: string | number;}
}

// Extend ProductListingCardProps to include key for mapping
declare module '@/components/ProductListingCard' {_export interface ProductListingCardProps {
    listing: unknown;
    view: unknown;
    onRequestQuote: (_listingId: string) => void;
    key?: string | number;}
}

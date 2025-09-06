  export interface FeatureCardProps {
    title: string;
    description: string;
    icon: ReactNode;
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
  }
}
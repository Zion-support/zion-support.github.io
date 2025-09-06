

  export interface FeatureCardProps {
    title: string;
    description: string;
    icon: ReactNode;



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

  export interface ChatMessageProps {
    role: "user" | "assistant";
    message: string;

    timestamp?: Date,
    key?: string | number;



export interface MatchResultItem {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  tags: string[];
  provider: {
    name: string;
    avatar?: string;
    verified: boolean;
  };
  matchScore: number;
}
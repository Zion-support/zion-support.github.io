export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  tags: string[];
export interface ListingFilter {
  category?: string;
  priceRange?: {
    min: number;
    max: number;  };
  location?: string;
export interface ListingSearchResult {
  listings: Listing[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface ListingFormData {
  title: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  tags: string[];
  images: File[];
  condition: string;
  specifications: Record<string, any>;
  shipping: {
    available: boolean;
    cost: number;
    method: string;
    estimatedDays: number;
  };
  returns: {
    allowed: boolean;
    days: number;
    cost: number;
  };
}

export interface ListingStats {
  totalListings: number;
  activeListings: number;
  totalViews: number;
  totalFavorites: number;
  averagePrice: number;
  categoryDistribution: Record<string, number>;  availability?: string;
  aiScore?: number;
  pricingTier?: string;
}
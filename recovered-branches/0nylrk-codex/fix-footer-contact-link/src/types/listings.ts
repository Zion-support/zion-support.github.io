

  id: string;
  name: string;

}

  id: string;
  title: string;
  description: string;

  category: string,
  subcategory?: string, // Adding optional subcategory field;

  price: number | null;
  currency: string;
  tags: string[];
  author: {
    name: string;
    id: string;

    avatar_url?: string,
    email?: string, // Added optional email property;
  }

  images: string[];
  created_at: string;
  rating?: number;

  review_count?: number;
  featured?: boolean,
  ai_score?: number, // Added ai_score as optional property;
  location?: string, // Adding location property to fix TypeScript errors;
  availability?: string, // Adding availability property to fix TypeScript errors;

}

  id: string;
  title: string;
  category: string;

  image?: string
  description?: string
}
export type ListingView = 'grid' | 'list';

export type ListingView = 'grid' | 'list';
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

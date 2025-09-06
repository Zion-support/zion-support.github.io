



  description: string,
  icon: string;

}
export interface ProductListing {

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

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



  image?: string,
  description?: string;
}



export interface ListingCategory {;



export type ListingView = 'grid' | 'list';

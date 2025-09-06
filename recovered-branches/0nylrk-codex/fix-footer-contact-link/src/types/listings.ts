export interface ListingCategory {
  id: string;
  name: string;
<<<<<<< HEAD

  description: string

  icon: string
=======
  description: string,
  icon: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface ProductListing {
  id: string;
  title: string;
  description: string;
<<<<<<< HEAD

  category: string

  subcategory?: string, // Adding optional subcategory field
=======
  category: string,
  subcategory?: string, // Adding optional subcategory field;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  price: number | null;
  currency: string;
  tags: string[];
  author: {
    name: string;
    id: string;
<<<<<<< HEAD

    avatarUrl?: string
    email?: string, // Added optional email property
  }

=======
    avatar_url?: string,
    email?: string, // Added optional email property;
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  images: string[];
  created_at: string;
  rating?: number;
<<<<<<< HEAD
  reviewCount?: number;

  featured?: boolean

  aiScore?: number, // Added aiScore as optional property
  location?: string, // Adding location property to fix TypeScript errors
  availability?: string, // Adding availability property to fix TypeScript errors
=======
  review_count?: number;
  featured?: boolean,
  ai_score?: number, // Added ai_score as optional property;
  location?: string, // Adding location property to fix TypeScript errors;
  availability?: string, // Adding availability property to fix TypeScript errors;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface ListingItem {
  id: string;
  title: string;
  category: string;
<<<<<<< HEAD

  image?: string
  description?: string
}
export type ListingView = 'grid' | 'list';

=======
  image?: string,
  description?: string;
}
export type ListingView = 'grid' | 'list';
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4

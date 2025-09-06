
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export interface ListingCategory {
=======
export interface ListingCategory {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  name: string;

  description: string

  icon: string
}
<<<<<<< HEAD
export interface ProductListing {
=======

export interface ProductListing {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  description: string,
  icon: string;

}
export interface ProductListing {
>>>>>>> main
  id: string;
  title: string;
  description: string;

<<<<<<< HEAD
  category: string

  subcategory?: string, // Adding optional subcategory field
=======
  category: string,
  subcategory?: string, // Adding optional subcategory field;

>>>>>>> main
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

  images: string[];
  createdAt: string;
  rating?: number;
  reviewCount?: number;

  featured?: boolean

  aiScore?: number, // Added aiScore as optional property
  location?: string, // Adding location property to fix TypeScript errors
  availability?: string, // Adding availability property to fix TypeScript errors
}
<<<<<<< HEAD
export interface ListingItem {
=======

export interface ListingItem {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
export interface ListingItem {
>>>>>>> main
  id: string;
  title: string;
  category: string;

<<<<<<< HEAD
  image?: string
  description?: string
}
export type ListingView = 'grid' | 'list';

=======
<<<<<<< HEAD
export interface ListingCategory {;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string,;
  name: string,;
  description: string,;
  icon: string;
}
;
export interface ProductListing {;
  id: string,;
  title: string,;
  description: string,;
  category: string,;
  subcategory?: string, // Adding optional subcategory field;
  price: number | null,;
  currency: string,;
  tags: string[],;
  author: {;
    name: string,;
    id: string,;
    avatarUrl?: string,;
    email?: string, // Added optional email property;
  },;
  images: string[],;
  createdAt: string,;
  rating?: number,;
  reviewCount?: number,;
  featured?: boolean,;
  aiScore?: number, // Added aiScore as optional property;
  location?: string, // Adding location property to fix TypeScript errors;
  availability?: string, // Adding availability property to fix TypeScript errors;
}
;
export interface ListingItem {;
  id: string,;
  title: string,;
  category: string,;
  image?: string,;
  description?: string;
}
;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export type ListingView = 'grid' | 'list';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
  image?: string,
  description?: string;
}
=======


export interface ListingCategory {;


export type ListingView = 'grid' | 'list';
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main

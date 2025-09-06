<<<<<<< HEAD
=======
export interface ListingCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

}
  description: string,
  icon: string;

export interface ProductListing {
  id: string;
  title: string;
  description: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD

  category: string,
  subcategory?: string, // Adding optional subcategory field;

=======
  category: string,
  subcategory?: string, // Adding optional subcategory field;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export interface ListingCategory {
export interface ListingCategory {;
  id: string;
  name: string;

}
export interface ProductListing {
  id: string;
  title: string;
  description: string;
<<<<<<< HEAD
=======
  category: string;
  subcategory?: string; // Adding optional subcategory field
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  price: number | null;
  currency: string;
  tags: string[];
  author: {
    name: string;
    id: string;
<<<<<<< HEAD
  id: string;
  title: string;
  category: string;

export interface ListingCategory {;
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
  image?: string,
=======
    avatarUrl?: string;
    email?: string; // Added optional email property
  };
  images: string[];
  createdAt: string;
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
  aiScore?: number; // Added aiScore as optional property
  location?: string; // Adding location property to fix TypeScript errors
  availability?: string; // Adding availability property to fix TypeScript errors
}

    avatar_url?: string,
    email?: string, // Added optional email property;
  }

  images: string[];
  created_at: string;
  rating?: number;

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
  id: string;
  title: string;
  category: string;
  image?: string;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  description?: string;
}


export interface ListingCategory {;


<<<<<<< HEAD
export type ListingView = 'grid' | 'list';
=======
export type ListingView = "grid" | "list";
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

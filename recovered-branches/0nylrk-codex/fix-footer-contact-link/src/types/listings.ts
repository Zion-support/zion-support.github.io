export interface ListingCategory {
  id: string;
<<<<<<< HEAD
  name: string;
=======
  name: string,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  description: string;
  icon: string;
}

<<<<<<< HEAD
}
  description: string,
  icon: string;

export interface ProductListing {
  id: string;
  title: string;
=======
}export interface ProductListing {
  id: string;
  title: string,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  description: string;

  category: string,
  subcategory?: string, // Adding optional subcategory field;
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export interface ListingCategory {
export interface ListingCategory {;
  id: string;
  name: string;

}
export interface ProductListing {
  id: string;
<<<<<<< HEAD
  title: string;
=======
  title: string,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  description: string;
  category: string;
  subcategory?: string; // Adding optional subcategory field
  price: number | null;
  currency: string;
  tags: string[];
  author: {
    name: string;
    id: string;
<<<<<<< HEAD
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
=======
  id: string;
  title: string;
  category: string;

export interface ListingCategory {;
  id: string,;
  name: string,,
  description: string,;
  icon: string;
}
;
export interface ProductListing {;
  id: string,;
  title: string,,
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
  image?: string,  review_count?: number;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  featured?: boolean,
  ai_score?: number, // Added ai_score as optional property;
  location?: string, // Adding location property to fix TypeScript errors;
  availability?: string, // Adding availability property to fix TypeScript errors;
<<<<<<< HEAD

}
export interface ListingItem {
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  id: string;
  title: string;
  category: string;
  image?: string;
  description?: string;
}

<<<<<<< HEAD

export interface ListingCategory {;


export type ListingView = "grid" | "list";
=======
export interface ListingCategory {;

export type ListingView = 'grid' | 'list';
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc


<<<<<<< HEAD


  id: string;
  name: string;

}

export interface ProductListing {

export interface ProductListing {;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
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
<<<<<<< HEAD


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
export interface ListingItem {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  id: string;
  title: string;
  category: string;

<<<<<<< HEAD

  image?: string
  description?: string
}
export type ListingView = 'grid' | 'list';


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

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  image?: string,
  description?: string;
}

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

export interface ListingCategory {;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
export type ListingView = 'grid' | 'list';

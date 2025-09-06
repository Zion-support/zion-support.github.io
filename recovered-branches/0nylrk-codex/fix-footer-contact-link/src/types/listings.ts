<<<<<<< HEAD

  description: string,
  icon: string;

}
=======
  description: string,
  icon: string;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export interface ProductListing {
  id: string;
  title: string;
  description: string;
<<<<<<< HEAD

  category: string,
  subcategory?: string, // Adding optional subcategory field;

=======
  category: string,
  subcategory?: string, // Adding optional subcategory field;

export interface ListingCategory {
export interface ListingCategory {;
  id: string;
  name: string;

  description: string

  icon: string
}
export interface ProductListing {

export interface ProductListing {;
  id: string;
  title: string;
  description: string;

  category: string

  subcategory?: string, // Adding optional subcategory field
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  price: number | null;
  currency: string;
  tags: string[];
  author: {
    name: string;
    id: string;
<<<<<<< HEAD

    avatar_url?: string,
    email?: string, // Added optional email property;
  }

  images: string[];
  created_at: string;
  rating?: number;

=======
    avatar_url?: string,
    email?: string, // Added optional email property;
  }
  images: string[];
  created_at: string;
  rating?: number;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  review_count?: number;
  featured?: boolean,
  ai_score?: number, // Added ai_score as optional property;
  location?: string, // Adding location property to fix TypeScript errors;
  availability?: string, // Adding availability property to fix TypeScript errors;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
export interface ListingItem {
  id: string;
  title: string;
  category: string;

<<<<<<< HEAD
=======
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
export interface ListingItem {

export interface ListingItem {;
  id: string;
  title: string;
  category: string;

  image?: string
  description?: string
}
export type ListingView = 'grid' | 'list';

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  image?: string,
  description?: string;
}


export interface ListingCategory {;


export type ListingView = 'grid' | 'list';
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

export interface ListingCategory {;
  id:string,;
  name:string,;
  description:string,;
  icon:string;
}
;
export interface ProductListing {;
  id:string,;
  title:string,;
  description:string,;
  category:string,;
  subcategory?:string, // Adding optional subcategory field;
  price:number | null,;
  currency:string,;
  tags:string[],;
  author:{;
    name:string,;
    id:string,;
    avatarUrl?:string,;
    email?:string, // Added optional email property;
  },;
  images:string[],;
  createdAt:string,;
  rating?:number,;
  reviewCount?:number,;
  featured?:boolean,;
  aiScore?:number, // Added aiScore as optional property;
  location?:string, // Adding location property to fix TypeScript errors;
  availability?:string, // Adding availability property to fix TypeScript errors;
}
;
export interface ListingItem {;
  id:string,;
  title:string,;
  category:string,;
  image?:string,;
  description?:string;
}
;
export type ListingView = 'grid' | 'list',; export type ListingView = 'grid' | 'list';
export type ListingView = 'grid' | 'list';
export type ListingView = 'grid' | 'list';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

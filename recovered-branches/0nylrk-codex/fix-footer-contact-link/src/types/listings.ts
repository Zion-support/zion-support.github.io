<<<<<<< HEAD
export interface ListingCategory {
<<<<<<< HEAD
  id: string,
  name: string,
  description: string,
  icon: string}

=======
  id: string;

}

}export interface ProductListing {
  id: string;
  title: string,
  description: string;

  icon: string;
}

}
=======
  description: string,
  icon: string;

export interface ProductListing {
  id: string;
  title: string;
  description: string;
  category: string,
  subcategory?: string, // Adding optional subcategory field;

<<<<<<< HEAD
export interface ListingCategory {
export interface ListingCategory {;
  id: string;
  name: string;

>>>>>>> merged-prs-20250907-203621
  description: string

  icon: string
}
export interface ProductListing {
<<<<<<< HEAD
  id: string,
  title: string,
  description: string,
  category: string,
  subcategory?: string, // Adding optional subcategory field
  price: number | null,
  currency: string,
  tags: string[],
  author: {
    name: string,
    id: string,
    avatarUrl?: string,
    email?: string, // Added optional email property
  },
  images: string[],
  createdAt: string,
  rating?: number,
  reviewCount?: number,
  featured?: boolean,
  aiScore?: number, // Added aiScore as optional property
  location?: string, // Adding location property to fix TypeScript errors
  availability?: string, // Adding availability property to fix TypeScript errors
=======

export interface ProductListing {;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  description: string,
  icon: string;

export interface ProductListing {
<<<<<<< HEAD
  // TODO: Implement
}
  id: string;,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  id: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  title: string;
  description: string;

<<<<<<< HEAD
  category: string

  subcategory?: string, // Adding optional subcategory field
=======
  category: string,
  subcategory?: string, // Adding optional subcategory field;

<<<<<<< HEAD
category: string,
  subcategory?: string, // Adding optional subcategory field;
  description: string;,

  category: string,
  subcategory?: string, // Adding optional subcategory field;
export interface ListingCategory {

export interface ListingCategory {;

  id: string;
  // TODO: Implement
}
export interface ListingCategory {;

  id: string;,
  name: string;

}

  id: string;
  title: string,
  description: string;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  price: number | null;
  currency: string;
  tags: string[];
  author: {}
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
export interface ListingItem {
  id: string;
  title: string;
  category: string;

<<<<<<< HEAD
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
=======
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
export interface ListingItem {

export interface ListingItem {;
=======
    avatar_url?: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    email?: string, // Added optional email property;

  featured?: boolean,
  ai_score?: number, // Added ai_score as optional property;
  location?: string, // Adding location property to fix TypeScript errors;
  availability?: string, // Adding availability property to fix TypeScript errors;

}
<<<<<<< HEAD

=======
export interface ListingItem {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  image?: string,
  description?: string;
}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export interface ListingCategory {;
  id: string,;
  name: string,;

  description: string,;
  icon: string;
}
;
<<<<<<< HEAD
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

  image?: string,

  featured?: boolean,
  ai_score?: number, // Added ai_score as optional property;
  location?: string, // Adding location property to fix TypeScript errors;
  availability?: string, // Adding availability property to fix TypeScript errors;

  id: string;
  title: string;
  category: string;

  image?: string;

  description?: string;
>>>>>>> merged-prs-20250907-203621
}
=======
<<<<<<< HEAD

<<<<<<< HEAD
  featured?: boolean

  aiScore?: number, // Added aiScore as optional property
  location?: string, // Adding location property to fix TypeScript errors
  availability?: string, // Adding availability property to fix TypeScript errors
}
export interface ListingItem {
  id: string,
  title: string,
  category: string,
  image?: string,
  description?: string
}

export type ListingView = $2;
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621

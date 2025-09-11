<<<<<<< HEAD
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

  description: string

  icon: string
}
export interface ProductListing {

export interface ProductListing {;
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  description: string,
  icon: string;

}
export interface ProductListing {
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  title: string;
  description: string;

<<<<<<< HEAD
<<<<<<< HEAD
  category: string

  subcategory?: string, // Adding optional subcategory field
=======
  category: string,
  subcategory?: string, // Adding optional subcategory field;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  category: string,
  subcategory?: string, // Adding optional subcategory field;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  title: string;
  category: string;

<<<<<<< HEAD
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


export interface ListingCategory {;


export type ListingView = 'grid' | 'list';
;
<<<<<<< HEAD

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
=======
  image?: string,
  description?: string;
}
=======


export interface ListingCategory {;


export type ListingView = 'grid' | 'list';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

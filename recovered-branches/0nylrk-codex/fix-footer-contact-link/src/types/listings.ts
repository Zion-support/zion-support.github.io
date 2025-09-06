
<<<<<<< HEAD
export interface ListingCategory {
export interface ListingCategory {;
  id: string;
  name: string;

}
<<<<<<< HEAD
export interface ProductListing {

export interface ProductListing {;
=======
  description: string,
  icon: string;

}
export interface ProductListing {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
export interface ListingItem {

export interface ListingItem {;
=======
export interface ListingItem {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  id: string;
  title: string;
  category: string;

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
  image?: string,
  description?: string;
}
=======


export interface ListingCategory {;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export type ListingView = 'grid' | 'list';

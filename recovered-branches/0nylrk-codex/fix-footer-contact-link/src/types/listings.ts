export interface ListingCategory {
  id: string;
  name: string,
  description: string;
  icon: string;
}

}export interface ProductListing {
  id: string;
  title: string,
  description: string;

  // TODO: Implement
}
  id: string;,
  name: string;
  description: string;,
  icon: string;
}

}
  description: string,
  icon: string;

export interface ProductListing {
  // TODO: Implement
}
  id: string;,
  title: string;
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
export interface ProductListing {
  id: string;
  title: string,
  description: string;
  category: string;
  subcategory?: string; // Adding optional subcategory field
  price: number | null;
  currency: string;
  tags: string[];
  author: {
    name: string;
    id: string;
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
  // TODO: Implement
}
  id: string;,
  name: string;
  description: string;,
  icon: string;

  description: string,

export interface ProductListing {
  // TODO: Implement
  title: string;
  category: string,
  subcategory?: string, // Adding optional subcategory field;

  // TODO: Implement
export interface ListingCategory {;

  // TODO: Implement
  category: string;
  subcategory?: string; // Adding optional subcategory field;
  price: number | null;,

  currency: string;
  tags: string[];,
  author: {

    name: string;,
  id: string;
    avatarUrl?: string;
    email?: string; // Added optional email property;
  };
  images: string[];,
  createdAt: string;
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
  aiScore?: number; // Added aiScore as optional property;
  location?: string; // Adding location property to fix TypeScript errors;
  availability?: string; // Adding availability property to fix TypeScript errors;

    avatar_url?: string,
    email?: string, // Added optional email property;

  created_at: string;

  review_count?: number;
pr-12325

  featured?: boolean,
  ai_score?: number, // Added ai_score as optional property;
  location?: string, // Adding location property to fix TypeScript errors;
  availability?: string, // Adding availability property to fix TypeScript errors;
  id: string;


}
export interface ListingItem {
  // TODO: Implement
}
  id: string;,

  title: string;
  category: string;
  image?: string;
  description?: string;
}

export interface ListingCategory {;

export type ListingView = 'grid' | 'list';


export interface ListingItem {
  // TODO: Implement
  image?: string;
  description?: string;




export type ListingView = "grid" | "list";""
pr-12325


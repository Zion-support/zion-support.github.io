
export interface ListingCategory {;
<<<<<<< HEAD
  id: string;
  name: string;

  description: string

  icon: string
}

export interface ProductListing {;
  id: string;
  title: string;
  description: string;

  category: string

  subcategory?: string, // Adding optional subcategory field
  price: number | null;
  currency: string;
  tags: string[];
  author: {
    name: string;
    id: string;

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

export interface ListingItem {;
  id: string;
  title: string;
  category: string;

  image?: string
  description?: string
}
export type ListingView = 'grid' | 'list';

=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
export type ListingView = 'grid' | 'list';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035


export interface ListingCategory {
  id: string;
  name: string;
<<<<<<< HEAD
  description: string;
=======
  description: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  icon: string
}
export interface ProductListing {
  id: string;
  title: string;
  description: string;
<<<<<<< HEAD
  category: string;
=======
  category: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  subcategory?: string, // Adding optional subcategory field
  price: number | null;
  currency: string;
  tags: string[];
  author: {
    name: string;
    id: string;
<<<<<<< HEAD
    avatarUrl?: string;
    email?: string, // Added optional email property
  },
=======
    avatarUrl?: string
    email?: string, // Added optional email property
  }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  images: string[];
  createdAt: string;
  rating?: number;
  reviewCount?: number;
<<<<<<< HEAD
  featured?: boolean;
=======
  featured?: boolean
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  aiScore?: number, // Added aiScore as optional property
  location?: string, // Adding location property to fix TypeScript errors
  availability?: string, // Adding availability property to fix TypeScript errors
}
export interface ListingItem {
  id: string;
  title: string;
  category: string;
<<<<<<< HEAD
  image?: string;
  description?: string
}

export type ListingView = any;
=======
  image?: string
  description?: string
}
export type ListingView = 'grid' | 'list';
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5

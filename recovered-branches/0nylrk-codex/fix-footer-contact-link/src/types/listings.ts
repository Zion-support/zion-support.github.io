<<<<<<< HEAD
<<<<<<< HEAD
export interface ListingCategory {
  id: string;

}

}export interface ProductListing {
  id: string;
  title: string,
  description: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
  description: string;

  category: string,
  subcategory?: string, // Adding optional subcategory field;

category: string,
  subcategory?: string, // Adding optional subcategory field;
  description: string;,

  category: string,
  subcategory?: string, // Adding optional subcategory field;
export interface ListingCategory {
export interface ListingCategory {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id: string;
  // TODO: Implement
}
export interface ListingCategory {;

  id: string;,
  name: string;

}
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export interface ProductListing {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  id: string;
  title: string,
  description: string;
category: string;
  subcategory?: string; // Adding optional subcategory field;
  price: number | null;
  currency: string;
  tags: string[];
  author: {}
    name: string;
    id: string;
<<<<<<< HEAD
  id: string;
  title: string;
  category: string;

export interface ListingCategory {;
  id: string,;
  name: string,,
<<<<<<< HEAD
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
  featured?: boolean,
  ai_score?: number, // Added ai_score as optional property;
  location?: string, // Adding location property to fix TypeScript errors;
  availability?: string, // Adding availability property to fix TypeScript errors;
<<<<<<< HEAD
<<<<<<< HEAD

}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

}
export interface ListingItem {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id: string;
  title: string;
  category: string;
image?: string
  description?: string
}
export type ListingView = 'grid' | 'list';

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export type ListingView = 'grid' | 'list';
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export interface ListingCategory {;
  id: string,;
  name: string,;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  image?: string,
=======
  image?: string,  review_count?: number;
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  featured?: boolean,
  ai_score?: number, // Added ai_score as optional property;
  location?: string, // Adding location property to fix TypeScript errors;
  availability?: string, // Adding availability property to fix TypeScript errors;

=======

}
export interface ListingItem {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  id: string;
  title: string;
  category: string;

  image?: string;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  description?: string;
}

export interface ListingCategory {;

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
export type ListingView = 'grid' | 'list';
<<<<<<< HEAD
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export type ListingView = "grid" | "list";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
export type ListingView = 'grid' | 'list';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

export type ListingView = "grid" | "list";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

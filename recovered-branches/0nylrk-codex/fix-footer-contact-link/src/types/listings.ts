export interface ListingCategory {

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
  // TODO: Implement
}
export interface ListingCategory {;

  id: string;,
  name: string;

}
export interface ProductListing {
  // TODO: Implement
}
  id: string;,
  title: string;
  description: string;,
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
}

    avatar_url?: string,
    email?: string, // Added optional email property;
  }

  images: string[];,
  created_at: string;
  rating?: number;

    avatar_url?: string,
    email?: string, // Added optional email property;
  }
  images: string[];,
  created_at: string;
  rating?: number;
  review_count?: number;

  featured?: boolean,
  ai_score?: number, // Added ai_score as optional property;
  location?: string, // Adding location property to fix TypeScript errors;
  availability?: string, // Adding availability property to fix TypeScript errors;


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


export type ListingView = "grid" | "list";""


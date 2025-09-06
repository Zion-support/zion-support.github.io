

  id: string;
  name: string;

}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

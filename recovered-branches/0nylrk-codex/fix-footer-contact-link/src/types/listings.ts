<<<<<<< HEAD

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

=======
export interface ListingCategory {
  id: string;
  name: string;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
}
export interface ProductListing {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  id: string;
  title: string;
  description: string;
  price: number | null;
  currency: string;
  tags: string[];
  author: {
    name: string;
    id: string;
  images: string[];
  created_at: string;
  rating?: number;
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
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

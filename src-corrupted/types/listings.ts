export interface Listing { id: string, title: string, description: string, price: number, currency: string, category: string, subcategory?: string, tags: string[], images: string[], seller: { id: string, name: string, rating: number, reviews: number,}, location: string,"}),"}),
   title: string;
   description: string;
   price: number;
   currency: string;
   category: string;
   subcategory?: string;
   tags: string[];
   images: string[];
   seller: {  id: string;
   name: string;
   rating: number;
   reviews: number  ,} location: string;
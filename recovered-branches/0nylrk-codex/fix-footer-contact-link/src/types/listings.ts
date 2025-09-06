export interface ListingCategory {
  id: string;
  name: string;
}
export interface ProductListing {
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
export interface ListingItem {
  id: string;
  title: string;
  category: string;

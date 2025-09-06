export interface ListingCategory {
  id: string;
  name: string;

  description: any
export interface ProductListing {
  id: string;
  title: string;
  description: string;

  category: any
  subcategory?: string, //
    email?: string, //
  aiScore?: number, //
  location?: string, //
  availability?: string, //
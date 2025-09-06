<<<<<<< HEAD
<<<<<<< HEAD
=======
// Listings utility
export const Listings = () => {
  // Implementation here
  return null;
};

export default Listings;
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/main
export interface Listing {;
  "id": string;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  subcategory?: string;
  tags: string[];
  images: string[];
seller: {;
    id: string;
    name: string;
    rating: number;
    reviews: number};
  "location": string;  createdAt: string;
  updatedAt: string;
  status: 'active' | 'inactive' | 'sold' | 'pending';
  views: number;
  likes: number;
  shares: number}
export interface ProductListing extends Listing {;
  brand?: string;
  model?: string;
  "condition": 'new' | 'used' | 'refurbished';
  warranty?: string;
  shipping: {;
    cost: number;
    method: string;
    estimatedDays: number}}
export interface ServiceListing extends Listing {;
  "serviceType": 'consulting' | 'development' | 'maintenance' | 'training' | 'support';
  duration?: string;
  availability: string[];
  experience: number;
  certifications: string[];
  portfolio?: string[]}
export interface TalentListing extends Listing {;
  "skills": string[];
  experience: number;
  education: string[];
  certifications: string[];
  languages: string[];
  availability: string[];
  hourlyRate: number;
  portfolio?: string[];
  references?: string[]}
export interface CartItem {;
  "id": string;
  title: string;
  price: number;
  quantity: number;
  type: 'product' | 'service' | 'talent';
  image?: string}
export interface WishlistItem {;
  "id": string;
  userId: string;
  listingId: string;
  type: 'product' | 'service' | 'talent';
  addedAt: string}
export interface Listing {; id: string; title: string; description: string; price: number; currency: string; category: string; subcategory?: string; tags: string[]; images: string[]; seller: {; id: string; name: string; rating: number; reviews: number} }; location: string; createdAt: string; updatedAt: string; status: 'active' | 'inactive' | 'sold' | 'pending'; views: number; likes: number; shares: number} export interface ProductListing extends Listing {; brand?: string; model?: string; condition: 'new' | 'used' | 'refurbished'; warranty?: string; shipping: {; cost: number; method: string; estimatedDays: number}} export interface ServiceListing extends Listing {; serviceType: 'consulting' | 'development' | 'maintenance' | 'training' | 'support'; duration?: string; availability: string[]; experience: number; certifications: string[]; portfolio?: string[]} export interface TalentListing extends Listing {; skills: 'string[]; experience: number; education: string[]; certifications: string[]; languages: string[]; availability: string[]; hourlyRate: number; portfolio?: string[]; references?: string[]'} export interface CartItem {; id: string; title: string; price: number; quantity: number; type: 'product' | 'service' | 'talent'} image?: string} export interface WishlistItem {; id: string; userId: string; listingId: string; type: 'product' | 'service' | 'talent'} addedAt: 'string'}
>>>>>>> main
>>>>>>> main
export interface Listing {; id: string; title: string; description: string; price: number; currency: string; category: string; subcategory?: string; tags: string[]; images: string[]; seller: {; id: string; name: string; rating: number; reviews: number}; location: string; createdAt: string; updatedAt: string; status: 'active' | 'inactive' | 'sold' | 'pending'; views: number; likes: number; shares: number} export interface ProductListing extends Listing {; brand?: string; model?: string; condition: 'new' | 'used' | 'refurbished'; warranty?: string; shipping: {; cost: number; method: string; estimatedDays: number}} export interface ServiceListing extends Listing {; serviceType: 'consulting' | 'development' | 'maintenance' | 'training' | 'support'; duration?: string; availability: string[]; experience: number; certifications: string[]; portfolio?: string[]} export interface TalentListing extends Listing {; skills: string[]; experience: number; education: string[]; certifications: string[]; languages: string[]; availability: string[]; hourlyRate: number; portfolio?: string[]; references?: string[]} export interface CartItem {; id: string; title: string; price: number; quantity: number; type: 'product' | 'service' | 'talent'; image?: string} export interface WishlistItem {; id: string; userId: string; listingId: string; type: 'product' | 'service' | 'talent'; addedAt: string}
>>>>>>> main
>>>>>>> origin/main
export interface Listing {; id: string; title: string; description: string; price: number; currency: string; category: string; subcategory?: string; tags: string[]; images: string[]; seller: {; id: string; name: string; rating: number; reviews: number}; location: string; createdAt: string; updatedAt: string; status: 'active' | 'inactive' | 'sold' | 'pending'; views: number; likes: number; shares: number} export interface ProductListing extends Listing {; brand?: string; model?: string; condition: 'new' | 'used' | 'refurbished'; warranty?: string; shipping: {; cost: number; method: string; estimatedDays: number}} export interface ServiceListing extends Listing {; serviceType: 'consulting' | 'development' | 'maintenance' | 'training' | 'support'; duration?: string; availability: string[]; experience: number; certifications: string[]; portfolio?: string[]} export interface TalentListing extends Listing {; skills: string[]; experience: number; education: string[]; certifications: string[]; languages: string[]; availability: string[]; hourlyRate: number; portfolio?: string[]; references?: string[]} export interface CartItem {; id: string; title: string; price: number; quantity: number; type: 'product' | 'service' | 'talent'; image?: string} export interface WishlistItem {; id: string; userId: string; listingId: string; type: 'product' | 'service' | 'talent'; addedAt: string}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
<<<<<<< HEAD
=======
// Listings utility
export const Listings = () => {
  // Implementation here
  return null;
};

export default Listings;
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358

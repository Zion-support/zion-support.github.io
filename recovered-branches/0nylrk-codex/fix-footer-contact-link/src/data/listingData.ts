

import { ProductListing } from "@/types/listings";
import { SearchSuggestion } from "@/types/search";
// Shared data source for marketplace listings
export const MARKETPLACE_LISTINGS: ProductListing[] = [
  {

    id: 'ai-model-1'
    title: 'GPT-4 API Integration Package'
    description:
      'Complete integration solution for GPT-4 API with ready-made templates, connectors, and usage optimization tools. Includes 10 hours of expert implementation support.'
    category: 'AI Models & APIs'
    price: 1999
    currency: '$'
    tags: ['GPT-4', 'API Integration', 'NLP']
    author: {
      name: 'AI Solutions Inc.'
      id: 'ai-solutions'
      avatarUrl:
    featured: true,
    location: 'Global',
    availability: 'Immediate',
    ai_score: 98,
  },
  {
    location: 'North America',
    availability: '4 - 6 Weeks',
    ai_score: 92,
  },
  {
    featured: true,
    location: 'Global',
    availability: '2 - 3 Weeks',
    ai_score: 95,
  },
  {
    location: 'Global',
    availability: 'Immediate',
    ai_score: 88,
  },
  {
    location: 'North America',
    availability: '1 - 2 Weeks',
    ai_score: 90,
  },
  {
    featured: true,
    location: 'Global',
    availability: 'Immediate',
    ai_score: 94,
  }, ];      name: "VisionTech AI";
      id: "visiontech";
    aiScore: 94
  }
];
// Generate search suggestions based on existing listings
export const generateSearchSuggestions = (): SearchSuggestion[] => {
  const suggestions = [



  // Extract unique categories, locations, and availability options from listings
const productTypes = [
    ...new Set(MARKETPLACE_LISTINGS.map(listing => listing.category)),
  ].sort();
  const locations = [
    ...new Set(
      MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(listing => listing && listing.location).filter(Boolean)
    ),
  ].sort();
  const availability = [
    ...new Set(
      MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(listing => listing && listing.availability).filter(Boolean)
    ),
  ].sort();

    productTypes: productTypes && productTypes.map(type => ({
      label: type,
      value: type,
    })),
    locations: locations && locations.map(location => ({
      label: location,
      value: location,
    })),
    availabilityOptions: availability && availability.map(item => ({
      label: item,
      value: item,
    })),
    ratingOptions: [1, 2, 3, 4, 5],
  };
};

export const MAX_PRICE = Math && Math.max(
  ...MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(listing => listing && listing.price || 0)
);
export const MIN_PRICE = Math && Math.min(
  ...MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(listing => listing && listing.price || 0)

);
reviewCount: 58;
featured: true;
location: "Global";
availability: "Immediate";
reviewCount: 18;
featured: true;
location: "Global";
availability: "2-3 Weeks";
reviewCount: 36;
featured: true;
location: "Global";
availability: "Immediate";
aiScore: 94
}];
//Generate search suggestions based on existing listings ];
  return {
ratingOptions: [1, 2, 3, 4, 5]
};export const MAX_PRICE = Math.max(...MARKETPLACE_LISTINGS.map(listing => listing.price |0));
export const MIN_PRICE = Math.min(...MARKETPLACE_LISTINGS.map(listing => listing.price |0));


};export const MAX_PRICE = Math && Math.max(...MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(listing => listing && listing.price || 0));
export const MIN_PRICE = Math && Math.min(...MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(listing => listing && listing.price || 0));


// Generate filter options for sidebar
export const generateFilterOptions = () => {
  // Extract unique categories, locations, and availability options from listings

      avatar_url: "https://images.unsplash.com / photo - 1600180758890 - 6b94519a8ba6?auto = format & fit = crop & w=100 & h=100"}
rating_options: [1, 2, 3, 4, 5];
}export const MAX_PRICE = Math.max (...MARKETPLACE_LISTINGS.map (listing => listing.price || 0));
export const MIN_PRICE = Math.min (...MARKETPLACE_LISTINGS.map (listing => listing.price || 0));
;



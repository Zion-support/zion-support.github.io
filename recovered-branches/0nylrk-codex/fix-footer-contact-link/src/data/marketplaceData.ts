import { ProductListing } from "@/types/listings";
import { SearchSuggestion, FilterOptions } from "@/types/search";
    description:
      'Complete integration solution for GPT-4 API with ready-made templates, connectors, and usage optimization tools. Includes 10 hours of expert implementation support.'
    category: 'AI Models & APIs'
    price: 1999
    currency: '$'
    tags: ['GPT-4', 'API Integration', 'NLP']
      name: 'AI Solutions Inc.'
      id: 'ai-solutions'
      avatarUrl:
    featured: true,
    location: 'Global',
    availability: 'Immediate',
    ai_score: 98,
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    location: 'North America',
    availability: '4 - 6 Weeks',
    ai_score: 92,
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    featured: true,
    location: 'Global',
    availability: '2 - 3 Weeks',
    ai_score: 95,
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    location: 'Global',
    availability: 'Immediate',
    ai_score: 88,
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    location: 'North America',
    availability: '1 - 2 Weeks',
    ai_score: 90,
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    featured: true,
    location: 'Global',
    availability: 'Immediate',
    ai_score: 94,
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    location: 'Europe',
    availability: '3 - 4 Weeks',
    ai_score: 91,
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    location: 'Global',
    availability: '1 - 2 Weeks',
    ai_score: 89,
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    featured: true,
    location: 'Global',
    availability: 'Immediate',
    ai_score: 97,
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    location: 'North America',
    availability: '4 - 6 Weeks',
    ai_score: 96,
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    location: 'Global',
    availability: 'Immediate',
    ai_score: 88,
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    featured: true,
    location: 'Asia',
    availability: '3 - 4 Weeks',
    ai_score: 93,
  },
  // Adding equipment listings so they're available in marketplace too
  {
    id: 'equipment-1'
    title: 'High-Performance AI Workstation'
    description:
      'Professional-grade workstation optimized for machine learning and AI model training with NVIDIA RTX GPUs.'
    category: 'Workstations'
    price: 4999
    currency: '$'
    tags: ['GPU', 'Machine Learning', 'Workstation']
    author: {
      name: 'TechGear Solutions'
      id: 'techgear'
      avatarUrl:
    featured: true,
    location: 'Global',
    availability: '1 - 2 Weeks',
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
    reviewCount: 18;
    featured: true;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    availability: "2-4 Weeks"
  }
];
// Generate search suggestions based on existing listings
export const generateSearchSuggestions = (): SearchSuggestion[] => {
  const suggestions = [
  ];
  // Convert strings to SearchSuggestion objects
    type: 'product', // Use a valid type from the updated SearchSuggestion interface
  }));};  ];
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  // Convert strings to SearchSuggestion objects
  return suggestions && suggestions.map(text => ({
    text;
    type: 'product' // Use a valid type from the updated SearchSuggestion interface
  }))
}) );
ratingOptions: [1, 2, 3, 4, 5] // Add rating options
};export const MAX_PRICE = Math.max(...MARKETPLACE_LISTINGS.map(listing => listing.price |0));
export const MIN_PRICE = Math.min(...MARKETPLACE_LISTINGS.map(listing => listing.price |0));

=======
};

// Generate filter options for sidebar
export const generateFilterOptions = (): FilterOptions => {
  // Extract unique categories, locations, and availability options from listings
  const productTypes = [...new Set(MARKETPLACE_LISTINGS.map(listing => listing.category))].sort();
  const locations = [...new Set(MARKETPLACE_LISTINGS.map(listing => listing.location).filter(Boolean))].sort();
  const availability = [...new Set(MARKETPLACE_LISTINGS.map(listing => listing.availability).filter(Boolean))].sort();
  
  return {
    productTypes: productTypes.map(type => ({
      label: type,
      value: type
    }));
    locations: locations.map(location => ({
      label: location,
      value: location
    }));
    availabilityOptions: availability.map(item => ({
      label: item,
      value: item
    }));
    ratingOptions: [1, 2, 3, 4, 5] // Add rating options
  }
};

export const MAX_PRICE = Math.max(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));
export const MIN_PRICE = Math.min(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    id: 'equipment - 2',
    title: 'Enterprise GPU Server Rack',
    description:;
      'Scalable server rack solution with multiple NVIDIA A100 GPUs ideal for large - scale AI model training and deployment.',
    category: 'Servers',
    price: 24999,
    currency: '$',
    tags: ['Server', 'Enterprise', 'GPU Cluster'],
    author: {
      name: 'ServerPro Systems',
      id: 'serverpro',
    },
    images: [;
      'https://images.unsplash.com / photo - 1558494949 - ef010cbdcc31?auto = format & fit = crop & w=800 & h=500',
    ],
    created_at: '2023 - 12 - 15T09:45:00.000Z',
    rating: 4.9,
    review_count: 18,
    featured: true,
    location: 'North America',
    availability: '2 - 4 Weeks',
  }, ];      name: "ServerPro Systems";
      id: "serverpro"}
    images: ["https://images.unsplash.com / photo - 1558494949 - ef010cbdcc31?auto = format & fit = crop & w=800 & h=500"];
    created_at: "2023 - 12 - 15T09:45:00.000Z";
    rating: 4.9;
    review_count: 18;
    featured: true;
    location: "North America",
    availability: "2 - 4 Weeks";
  }
];
;
// Generate search suggestions based on existing listings;
export const generateSearchSuggestions = (): SearchSuggestion[] => {
  const suggestions = [;
    'AI models',
    'GPT integration',
    'Machine learning',
    'Computer vision',
    'Speech recognition',
    'Data analysis',
    'Content generation',
    'Code assistant',
    'Virtual assistant',
    'Enterprise AI solutions',
    'Robotics',
    'AI workstation',
    'Business intelligence',
    'Custom model development',
    'Server rack',
    'GPU cluster',
    'Edge computing',
    'High performance storage',
  ];
;
  // Convert strings to SearchSuggestion objects;
  return suggestions.map (text => ({
    text,
    type: 'product', // Use a valid type from the updated SearchSuggestion interface;
  }));}  ];
;
  // Convert strings to SearchSuggestion objects;
  return suggestions.map (text => ({
    text;
    type: 'product' // Use a valid type from the updated SearchSuggestion interface;
  }));
}
;
// Generate filter options for sidebar;
export const generateFilterOptions = (): FilterOptions => {
  // Extract unique categories, locations, and availability options from listings;
  const product_types = [;
    ...new Set (MARKETPLACE_LISTINGS.map (listing => listing.category)),
  ].sort ();
  const locations = [;
    ...new Set (
      MARKETPLACE_LISTINGS.map (listing => listing.location).filter (Boolean)),
  ].sort ();
  const availability = [;
    ...new Set (
      MARKETPLACE_LISTINGS.map (listing => listing.availability).filter (Boolean)),
  ].sort ();
;
    product_types: product_types.map (type => ({
      label: type,
      value: type,
    })),
    locations: locations.map (location => ({
      label: location,
      value: location,
    })),
    availability_options: availability.map (item => ({
      label: item,
      value: item,
    })),
    rating_options: [1, 2, 3, 4, 5], // Add rating options;
  }
}
;
export const MAX_PRICE = Math.max (
  ...MARKETPLACE_LISTINGS.map (listing => listing.price || 0));
export const MIN_PRICE = Math.min (
  ...MARKETPLACE_LISTINGS.map (listing => listing.price || 0));
  return {
  product_types: product_types.map (type => ({
  label: type, value: type;
}) );
locations: locations.map (location => ({
  label: location, value: location;
}) );
availability_options: availability.map (item => ({
  label: item, value: item;
}) );
rating_options: [1, 2, 3, 4, 5] // Add rating options;
}export const MAX_PRICE = Math.max (...MARKETPLACE_LISTINGS.map (listing => listing.price || 0));
export const MIN_PRICE = Math.min (...MARKETPLACE_LISTINGS.map (listing => listing.price || 0));
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

    id: "ai-model-1";
    title: "GPT-4 API Integration Package";
    description: "Complete integration solution for GPT-4 API with ready-made templates, connectors, and usage optimization tools. Includes 10 hours of expert implementation support.",
    category: "AI Models & APIs";
    price: 1999;
    currency: "$";
    tags: ["GPT-4", "API Integration", "NLP"],
    author: {
      name: "AI Solutions Inc.";
      id: "ai-solutions";
      avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto;
];
// Generate search suggestions based on existing listings
export const generateSearchSuggestions = (): SearchSuggestion[] => {
  const suggestions = [
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
  ];
  return suggestions.map(text => ({
    text
    type: 'product', // Use a valid type from the SearchSuggestion interface
  }));
};

// Generate filter options for sidebar
export const generateFilterOptions = () => {
  // Extract unique categories, locations, and availability options from listings
const productTypes = [
    ...new Set(MARKETPLACE_LISTINGS.map(listing => listing.category)),
  ].sort();
  const locations = [
    ...new Set(
      MARKETPLACE_LISTINGS.map(listing => listing.location).filter(Boolean)
    )
  ].sort();
  const availability = [
    ...new Set(
      MARKETPLACE_LISTINGS.map(listing => listing.availability).filter(Boolean)
    )
  ].sort();
    productTypes: productTypes.map(type => ({
      label: type
      value: type
    }))
    locations: locations.map(location => ({
      label: location
      value: location
    }))
    availabilityOptions: availability.map(item => ({
      label: item
      value: item
    }))
    ratingOptions: [1, 2, 3, 4, 5]
  }
}
export const MAX_PRICE = Math.max(
  ...MARKETPLACE_LISTINGS.map(listing => listing.price |0)
);
export const MIN_PRICE = Math.min(
  ...MARKETPLACE_LISTINGS.map(listing => listing.price |0)
);
reviewCount: 58;
featured: true;
location: "Global";
availability: "Immediate";
aiScore: 98
}
rating: 4.8;
reviewCount: 32;
location: "North America";
availability: "4-6 Weeks";
aiScore: 92
}
rating: 4.7;
reviewCount: 18;
featured: true;
location: "Global";
availability: "2-3 Weeks";
aiScore: 95
}
rating: 4.6;
reviewCount: 124;
location: "Global";
availability: "Immediate";
aiScore: 88
}
rating: 4.5;
reviewCount: 47;
location: "North America";
availability: "1-2 Weeks";
aiScore: 90
}
rating: 4.8;
reviewCount: 36;
featured: true;
location: "Global";
availability: "Immediate";
aiScore: 94
}];
//Generate search suggestions based on existing listings ];
  return {
  productTypes: productTypes.map (type => ({
  label: type, value: type
}) );
locations: locations.map (location => ({
  label: location, value: location
}) );
availabilityOptions: availability.map (item => ({
  label: item, value: item
}) );
ratingOptions: [1, 2, 3, 4, 5] 

};

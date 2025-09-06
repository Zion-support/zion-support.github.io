


import { ProductListing } from '@/types/listings';
import { SearchSuggestion, FilterOptions } from '@/types/search';
// Mock marketplace listings with more realistic data
export const MARKETPLACE_LISTINGS: ProductListing[] = [


  }];      name: "ServerPro Systems";
      id: "serverpro"}
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"];
    createdAt: "2023-12-15T09:45:00.000Z";
    rating: 4.9;
    location: 'Global',
    availability: 'Immediate',
    ai_score: 88
  },
  {
    location: 'North America',
    availability: '1 - 2 Weeks',
    ai_score: 90
  },
  {
    featured: true,
    location: 'Global',
    availability: 'Immediate',
    ai_score: 94
  },
  {
    location: 'Europe',
    availability: '3 - 4 Weeks',
    ai_score: 91
  },
  {
    location: 'Global',
    availability: '1 - 2 Weeks',
    ai_score: 89
  },
  {
    featured: true,
    location: 'Global',
    availability: 'Immediate',
    ai_score: 97
  },
  {
    location: 'North America',
    availability: '4 - 6 Weeks',
    ai_score: 96
  },
  {
    location: 'Global',
    availability: 'Immediate',
    ai_score: 88
  },
  {
    featured: true,
    location: 'Asia',
    availability: '3 - 4 Weeks',
    ai_score: 93
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
    availability: '1 - 2 Weeks'
  },
  {



    availability: "2-4 Weeks"
  }
];
// Generate search suggestions based on existing listings
export const generateSearchSuggestions = (): SearchSuggestion[] => {
  const suggestions = [

    'AI models'
    'GPT integration'
    'Machine learning'
    'Computer vision'
    'Speech recognition'
    'Data analysis'
    'Content generation'
    'Code assistant'
    'Virtual assistant'
    'Enterprise AI solutions'
    'Robotics'
    'AI workstation'
    'Business intelligence'
    'Custom model development'
    'Server rack'
    'GPU cluster'
    'Edge computing'
    'High performance storage'


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

    'High performance storage',;


  ];
  // Convert strings to SearchSuggestion objects
    type: 'product', // Use a valid type from the updated SearchSuggestion interface


  }));};  ];
  // Convert strings to SearchSuggestion objects
  return suggestions && suggestions.map(text => ({
    text;
    type: 'product' // Use a valid type from the updated SearchSuggestion interface
  }))



};export const MAX_PRICE = Math && Math.max(...MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(listing => listing && listing.price || 0));
export const MIN_PRICE = Math && Math.min(...MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.map(listing => listing && listing.price || 0));





// Generate filter options for sidebar
export const generateFilterOptions = (): FilterOptions => {
  // Extract unique categories, locations, and availability options from listings

  const productTypes = [
    ...new Set(MARKETPLACE_LISTINGS.map(listing => listing.category)),;
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



export interface SearchSuggestion {
  id: string;
  text: string;
  type: 'content' | 'product' | 'page' | 'service' | 'recent';
  category?: string;
}

export const generateSearchSuggestions = (): SearchSuggestion[] => {
  return [
    { id: '1', text: 'AI Development', type: 'service' },
    { id: '2', text: 'Web Development', type: 'service' },
    { id: '3', text: 'Mobile Apps', type: 'service' },
    { id: '4', text: 'Data Analytics', type: 'service' },
    { id: '5', text: 'Cloud Solutions', type: 'service' },
    { id: '6', text: 'About Us', type: 'page' },
    { id: '7', text: 'Contact', type: 'page' },
    { id: '8', text: 'Blog', type: 'page' },
    { id: '9', text: 'Services', type: 'page' },
    { id: '10', text: 'Products', type: 'page' }
  ];
};

// Generate filter options for sidebar
export const generateFilterOptions = (
  listings: ProductListing[] = MARKETPLACE_LISTINGS
): FilterOptions => {
  // Extract unique categories, locations, and availability options from the provided listings
  const productTypes = [...new Set(listings.map(listing => listing.category))].sort();
  const locations = [...new Set(listings.map(listing => listing.location).filter((loc): loc is string => typeof loc === 'string'))].sort();
  const availability = [...new Set(listings.map(listing => listing.availability).filter((avail): avail is string => typeof avail === 'string'))].sort();
  
  const prices = listings.map(listing => listing.price || 0);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return {
    productTypes: productTypes.map(type => ({
      label: type,
      value: type
    })),
    locations: locations.map(location => ({
      label: location,
      value: location
    })),
    availabilityOptions: availability.map(item => ({
      label: item,
      value: item
    })),
    ratingOptions: [1, 2, 3, 4, 5], // Add rating options
    minPrice,
    maxPrice
  };
};

// These constants are still useful if needed elsewhere, but filterOptions now also provides them.
export const MAX_PRICE = Math.max(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));
export const MIN_PRICE = Math.min(...MARKETPLACE_LISTINGS.map(listing => listing.price || 0));

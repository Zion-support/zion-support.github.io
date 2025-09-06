
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState, useMemo} from "react";
import {ProductListing} from "@/types/listings";
import {SearchSuggestion, FilterOptions} from "@/types/search";
import {generateSearchSuggestions, generateFilterOptions, MARKETPLACE_LISTINGS} from "@/data/marketplaceData";
export function useMarketplaceSearch() {
  // Search state;
  const [searchQuery, setSearchQuery] = useState("");
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useState, useMemo } from "react",
import { ProductListing } from "@/types/listings",
import { SearchSuggestion, FilterOptions } from "@/types/search";
import { generateSearchSuggestions, generateFilterOptions, MARKETPLACE_LISTINGS } from "@/data/marketplaceData";
export function useMarketplaceSearch() {
  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  // Filter states
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  // Generate search suggestions and filter options
  const searchSuggestions: SearchSuggestion[] = useMemo(
    () => generateSearchSuggestions();
    [];
  );

  const filterOptions: FilterOptions = useMemo(
    () => generateFilterOptions();
    [];
<<<<<<< HEAD
<<<<<<< HEAD
  );
<<<<<<< HEAD
import { SearchSuggestion, FilterOptions } from "@/types/search",
import { generateSearchSuggestions, generateFilterOptions, MARKETPLACE_LISTINGS } from "@/data/marketplaceData",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

export function useMarketplaceSearch() {
  // Search state
  const [searchQuery, setSearchQuery] = useState(""),
  
  // Filter states
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]),
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]),
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]),
  const [selectedRating, setSelectedRating] = useState<number | null>(null),
  
  // Generate search suggestions and filter options
  const searchSuggestions: SearchSuggestion[] = useMemo(
    () => generateSearchSuggestions(),
    []),
  const filterOptions: FilterOptions = useMemo(
    () => generateFilterOptions(),
    []),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Filter listings based on current search query and filters
  const filteredListings = useMemo(() => {
    return MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.filter(listing => {
      // Search query filter
<<<<<<< HEAD

=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
  
  // Filter listings based on current search query and filters
  const filteredListings = useMemo(() => {
    return MARKETPLACE_LISTINGS.filter(listing => {
      // Search query filter
      const matchesSearch = !searchQuery |
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) |
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) |
        listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      // Product type filter
      const matchesProductType = selectedProductTypes.length === 0 |
        selectedProductTypes.includes(listing.category);
      // Location filter
      const matchesLocation = selectedLocations.length === 0 |
        (listing.location && selectedLocations.includes(listing.location));
      // Availability filter
<<<<<<< HEAD
      const matchesAvailability = selectedAvailability.length === 0 |
        (listing.availability && selectedAvailability.includes(listing.availability));
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      const matchesSearch = !searchQuery || 
=======
  );      const matchesSearch = !searchQuery || 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  );      const matchesSearch = !searchQuery || 
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      
      // Product type filter
      const matchesProductType = selectedProductTypes.length === 0 || 
        selectedProductTypes.includes(listing.category),
      
      // Location filter
      const matchesLocation = selectedLocations.length === 0 || 
        (listing.location && selectedLocations.includes(listing.location)),
      
      // Availability filter
      const matchesAvailability = selectedAvailability.length === 0 || 
        (listing.availability && selectedAvailability.includes(listing.availability)),
      
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  }, [searchQuery, selectedProductTypes, selectedLocations, selectedAvailability, selectedRating]);
  }, [searchQuery, selectedProductTypes, selectedLocations, selectedAvailability, selectedRating]),
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      // Rating filter
      const matchesRating = selectedRating === null |
        (listing.rating !== undefined && listing.rating >= selectedRating)
      return matchesSearch &&
        matchesProductType &&
        matchesLocation &&
        matchesAvailability &&        listing && listing.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||
        listing && listing.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||
        listing && listing.tags.some(tag => tag && tag.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()));
      // Product type filter
      const matchesProductType = selectedProductTypes && selectedProductTypes.length === 0 || 
        selectedProductTypes && selectedProductTypes.includes(listing && listing.category);
      // Location filter
      const matchesLocation = selectedLocations && selectedLocations.length === 0 || 
        (listing && listing.location && selectedLocations && selectedLocations.includes(listing && listing.location));
      // Availability filter
      const matchesAvailability = selectedAvailability && selectedAvailability.length === 0 || 
        (listing && listing.availability && selectedAvailability && selectedAvailability.includes(listing && listing.availability));
      return matchesSearch && 
        matchesProductType && 
        matchesLocation && 
        matchesAvailability && 
        matchesRating
    })

  }, [searchQuery, selectedProductTypes, selectedLocations, selectedAvailability, selectedRating]),
  

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
        matchesRating
    })
  }, [searchQuery, selectedProductTypes, selectedLocations, selectedAvailability, selectedRating]);
  }, [searchQuery, selectedProductTypes, selectedLocations, selectedAvailability, selectedRating]),
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  // Handle filter changes
  const handleFilterChange = (filterType: string, value: string) => {
    switch (filterType) {
      case 'productTypes':
        setSelectedProductTypes((prev: string[]) =>import { useState, useMemo } from './react';
import { ProductListing } from '@/types / listings';
import { SearchSuggestion, FilterOptions } from '@/types / search';
import { generateSearchSuggestions, generateFilterOptions, MARKETPLACE_LISTINGS } from '@/data / marketplace_data';
export /**
 * useMarketplaceSearch - Function description
 */
function useMarketplaceSearch() {
  // Search state;
  const [search_query, setSearchQuery] = useState ("");
;
  // Filter states;
  const [selectedProductTypes, setSelectedProductTypes] = useState < string[]>([]);
  const [selected_locations, setSelectedLocations] = useState < string[]>([]);
  const [selected_availability, setSelectedAvailability] = useState < string[]>([]);
  const [selected_rating, setSelectedRating] = useState < number | null>(null);
;
  // Generate search suggestions and filter options;
  const search_suggestions: SearchSuggestion[] = useMemo (
    () => generateSearchSuggestions ();
    []);
  const filter_options: FilterOptions = useMemo (
    () => generateFilterOptions ();
    []);
;
  // Filter listings based on current search query and filters;
  const filtered_listings = useMemo (() => {
    return MARKETPLACE_LISTINGS.filter (listing => {
      // Search query filter;
      const matches_search = !search_query ||;
        listing.title.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        listing.description.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        listing.tags.some (tag => tag.toLowerCase ().includes (search_query.toLowerCase ()));
;
      // Product type filter;
      const matchesProductType = selectedProductTypes.length === 0 ||;
        selectedProductTypes.includes (listing.category);
;
      // Location filter;
      const matches_location = selected_locations.length === 0 ||;
        (listing.location && selected_locations.includes (listing.location));
;
      // Availability filter;
      const matches_availability = selected_availability.length === 0 ||;
        (listing.availability && selected_availability.includes (listing.availability));
;
      // Rating filter;
      const matches_rating = selected_rating === null ||;
        (listing.rating !== undefined && listing.rating >= selected_rating),
      return matches_search &&;
        matchesProductType &&;
        matches_location &&;
        matches_availability &&;
        matches_rating;
    });
  }, [search_query, selectedProductTypes, selected_locations, selected_availability, selected_rating]);
;
  // Handle filter changes;
  const handleFilterChange = (filter_type: string, value: string) =>: any {
    switch (filter_type) {
      case 'product_types':;
        setSelectedProductTypes ((prev: string[]) =>;
          prev.includes (value) ? prev.filter (t => t !== value) : [...prev, value]);
        break;
      case 'locations':;
        setSelectedLocations ((prev: string[]) =>;
          prev.includes (value) ? prev.filter (l => l !== value) : [...prev, value]);
        break;
      case 'availability':;
        setSelectedAvailability ((prev: string[]) =>;
          prev.includes (value) ? prev.filter (array => a !== value) : [...prev, value]);
        break;
      default: break;
    }
  }  return {
    search_query;
    setSearchQuery;
    search_suggestions;
    selectedProductTypes;
    selected_locations;
    selected_availability;
    selected_rating;
    setSelectedRating;
    filtered_listings;
    handleFilterChange;
    clearAllFilters;

    filter_options;
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
          prev.includes(value) ? prev.filter(t => t !== value) : [...prev, value]
        ),
        break,
      case 'locations':
        setSelectedLocations((prev: string[]) =>
          prev.includes(value) ? prev.filter(l => l !== value) : [...prev, value]
        ),
        break,
      case 'availability':
        setSelectedAvailability((prev: string[]) =>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          prev.includes(value) ? prev.filter(a => a !== value) : [...prev, value]
        ),
        break,
      default: break
    }

  },
  
<<<<<<< HEAD
<<<<<<< HEAD

=======
  },
  

  }
  },
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  // Clear all filters
  const clearAllFilters = () => {
    setSearchQuery(""),
    setSelectedProductTypes([]),
    setSelectedLocations([]),
    setSelectedAvailability([]),
    setSelectedRating(null)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  }
  return {
    searchQuery;
    setSearchQuery;
    searchSuggestions;
    selectedProductTypes;
    selectedLocations;
    selectedAvailability;
    selectedRating;
    setSelectedRating;
    filteredListings;
    handleFilterChange;
    clearAllFilters;

=======
    filterOptions
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  },
  
  return {
    searchQuery,
    setSearchQuery,
    searchSuggestions,
    selectedProductTypes,
    selectedLocations,
    selectedAvailability,
    selectedRating,
    setSelectedRating,
    filteredListings,
    handleFilterChange,
    clearAllFilters,
    filterOptions
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

  }
<<<<<<< HEAD
}
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState, useMemo } from "react",;
=======
}import { useState, useMemo } from "react",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

  }
}import { useState, useMemo } from "react",;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { ProductListing } from "@/types/listings",;
import { SearchSuggestion, FilterOptions } from "@/types/search",;
import { generateSearchSuggestions, generateFilterOptions, MARKETPLACE_LISTINGS } from "@/data/marketplaceData",;
export function useMarketplaceSearch() {;
  // Search state;
  const [searchQuery, setSearchQuery] = useState(""),;
  // Filter states;
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]),;
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]),;
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]),;
  const [selectedRating, setSelectedRating] = useState<number | null>(null),;
  // Generate search suggestions and filter options;
  const searchSuggestions: SearchSuggestion[] = useMemo(;
    () => generateSearchSuggestions(),;
    []),;
  const filterOptions: FilterOptions = useMemo(;
    () => generateFilterOptions(),;
    []),;
  // Filter listings based on current search query and filters;
  const filteredListings = useMemo(() => {;
    return MARKETPLACE_LISTINGS.filter(listing => {;
      // Search query filter;
      const matchesSearch = !searchQuery ||;
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())),;
      // Product type filter;
      const matchesProductType = selectedProductTypes.length === 0 ||;
        selectedProductTypes.includes(listing.category),;
      // Location filter;
      const matchesLocation = selectedLocations.length === 0 ||;
        (listing.location && selectedLocations.includes(listing.location)),;
      // Availability filter;
      const matchesAvailability = selectedAvailability.length === 0 ||;
        (listing.availability && selectedAvailability.includes(listing.availability)),;
      // Rating filter;
      const matchesRating = selectedRating === null ||;
        (listing.rating !== undefined && listing.rating >= selectedRating),;
      return matchesSearch &&;
        matchesProductType &&;
        matchesLocation &&;
        matchesAvailability &&;
        matchesRating;
    });
  }, [searchQuery, selectedProductTypes, selectedLocations, selectedAvailability, selectedRating]),;
  // Handle filter changes;
  const handleFilterChange = (filterType: string, value: string) => {;
    switch (filterType) {;
      case 'productTypes':;
        setSelectedProductTypes((prev: string[]) =>;
          prev.includes(value) ? prev.filter(t => t !== value) : [...prev, value];
        ),;
        break,;
      case 'locations':;
        setSelectedLocations((prev: string[]) =>;
          prev.includes(value) ? prev.filter(l => l !== value) : [...prev, value];
        ),;
        break,;
      case 'availability':;
        setSelectedAvailability((prev: string[]) =>;
          prev.includes(value) ? prev.filter(a => a !== value) : [...prev, value];
        ),;
        break,;
      default: break;
    }
  },;
  // Clear all filters;
  const clearAllFilters = () => {;
    setSearchQuery(""),;
    setSelectedProductTypes([]),;
    setSelectedLocations([]),;
    setSelectedAvailability([]),;
    setSelectedRating(null);
  },;
  return {;
    searchQuery,;
    setSearchQuery,;
    searchSuggestions,;
    selectedProductTypes,;
    selectedLocations,;
    selectedAvailability,;
    selectedRating,;
    setSelectedRating,;
    filteredListings,;
    handleFilterChange;
    clearAllFilters;
    filterOptions;
<<<<<<< HEAD
<<<<<<< HEAD

  }
}
;
<<<<<<< HEAD
  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
}
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  }
}
;
  }
}
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

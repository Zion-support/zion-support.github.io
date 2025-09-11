
<<<<<<< HEAD
<<<<<<< HEAD
import {useState, useMemo} from "react";
import {ProductListing} from "@/types/listings";
import {SearchSuggestion, FilterOptions} from "@/types/search";
import {generateSearchSuggestions, generateFilterOptions, MARKETPLACE_LISTINGS} from "@/data/marketplaceData";
export function useMarketplaceSearch() {
  // Search state;
  const [searchQuery, setSearchQuery] = useState("");
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const filterOptions: FilterOptions = useMemo(
    () => generateFilterOptions();
    [];
  );
import { SearchSuggestion, FilterOptions } from "@/types/search",
import { generateSearchSuggestions, generateFilterOptions, MARKETPLACE_LISTINGS } from "@/data/marketplaceData",

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
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



  // Filter listings based on current search query and filters
  const filteredListings = useMemo(() => {
    return MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.filter(listing => {
      // Search query filter


<<<<<<< HEAD
  
  // Filter listings based on current search query and filters
  const filteredListings = useMemo(() => {
    return MARKETPLACE_LISTINGS.filter(listing => {
=======
  
  // Filter listings based on current search query and filters
  const filteredListings = useMemo(() => {
    return MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.filter(listing => {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Search query filter
      const matchesSearch = !searchQuery |
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) |
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) |
        listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      // Product type filter
      const matchesProductType = selectedProductTypes.length === 0 |
        selectedProductTypes.includes(listing.category);
      // Location filter
      const matchesLocation = selectedLocations.length === 0 |
        (listing.location && selectedLocations.includes(listing.location));
      // Availability filter
      const matchesAvailability = selectedAvailability.length === 0 |
        (listing.availability && selectedAvailability.includes(listing.availability));
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const matchesSearch = !searchQuery || 
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Rating filter
      const matchesRating = selectedRating === null |
        (listing.rating !== undefined && listing.rating >= selectedRating)
      return matchesSearch &&
        matchesProductType &&
        matchesLocation &&
        matchesAvailability &&
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const matchesSearch = !searchQuery || 
const matchesSearch = !searchQuery || 
        listing && listing.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||
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
      // Rating filter
      const matchesRating = selectedRating === null || 
        (listing && listing.rating !== undefined && listing && listing.rating >= selectedRating),
=======
=======
      const matchesSearch = !searchQuery || 
        listing && listing.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||
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
      
      // Rating filter
      const matchesRating = selectedRating === null || 
        (listing && listing.rating !== undefined && listing && listing.rating >= selectedRating),
      
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return matchesSearch && 
        matchesProductType && 
        matchesLocation && 
        matchesAvailability && 
<<<<<<< HEAD
        matchesRating
    })


  }, [searchQuery, selectedProductTypes, selectedLocations, selectedAvailability, selectedRating]),
  


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        matchesRating
    })
  }, [searchQuery, selectedProductTypes, selectedLocations, selectedAvailability, selectedRating]);
  }, [searchQuery, selectedProductTypes, selectedLocations, selectedAvailability, selectedRating]),
  
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Handle filter changes
  const handleFilterChange = (filterType: string, value: string) => {
    switch (filterType) {
      case 'productTypes':
        setSelectedProductTypes((prev: string[]) =>
<<<<<<< HEAD
<<<<<<< HEAD
          prev && prev.includes(value) ? prev && prev.filter(a => a !== value) : [...prev, value]
=======
          prev && prev.includes(value) ? prev && prev.filter(t => t !== value) : [...prev, value]
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        );
=======
          prev && prev.includes(value) ? prev && prev.filter(t => t !== value) : [...prev, value]
        );
        break;
      case 'locations':
        setSelectedLocations((prev: string[]) =>
          prev && prev.includes(value) ? prev && prev.filter(l => l !== value) : [...prev, value]
        );
        break;
      case 'availability':
        setSelectedAvailability((prev: string[]) =>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState, useMemo } from './react';
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        break;
      default: break;
    }
  }
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
  // Clear all filters;
  const clearAllFilters = () =>: any {
    setSearchQuery ("");
    setSelectedProductTypes ([]);
    setSelectedLocations ([]);
    setSelectedAvailability ([]);
    setSelectedRating (null);
  }
;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return {
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    filter_options;

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          prev.includes(value) ? prev.filter(a => a !== value) : [...prev, value]
        ),
        break,
      default: break
    }
<<<<<<< HEAD
<<<<<<< HEAD
  },
  

  }
  },
  
=======

  },
  

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Clear all filters
  const clearAllFilters = () => {
    setSearchQuery(""),
    setSelectedProductTypes([]),
    setSelectedLocations([]),
    setSelectedAvailability([]),
    setSelectedRating(null)
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

    filterOptions
  }
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
import { useState, useMemo } from "react",;
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

  }
}
    filter_options;
  }

import { useState, useMemo } from "react",;
import { ProductListing } from "@/types/listings",;
import { SearchSuggestion, FilterOptions } from "@/types/search",;
import { generateSearchSuggestions, generateFilterOptions, MARKETPLACE_LISTINGS } from "@/data/marketplaceData",;
;
export function useMarketplaceSearch() {;
  // Search state;
  const [searchQuery, setSearchQuery] = useState(""),;
  ;
  // Filter states;
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]),;
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]),;
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]),;
  const [selectedRating, setSelectedRating] = useState<number | null>(null),;
  ;
  // Generate search suggestions and filter options;
  const searchSuggestions:SearchSuggestion[] = useMemo(;
    () => generateSearchSuggestions(),;
    []),;
  const filterOptions:FilterOptions = useMemo(;
    () => generateFilterOptions(),;
    []),;
  ;
  // Filter listings based on current search query and filters;
  const filteredListings = useMemo(() => {;
    return MARKETPLACE_LISTINGS.filter(listing => {;
      // Search query filter;
      const matchesSearch = !searchQuery || ;
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())),;
      ;
      // Product type filter;
      const matchesProductType = selectedProductTypes.length === 0 || ;
        selectedProductTypes.includes(listing.category),;
      ;
      // Location filter;
      const matchesLocation = selectedLocations.length === 0 || ;
        (listing.location && selectedLocations.includes(listing.location)),;
      ;
      // Availability filter;
      const matchesAvailability = selectedAvailability.length === 0 || ;
        (listing.availability && selectedAvailability.includes(listing.availability)),;
      ;
      // Rating filter;
      const matchesRating = selectedRating === null || ;
        (listing.rating !== undefined && listing.rating >= selectedRating),;
      ;
      return matchesSearch && ;
        matchesProductType && ;
        matchesLocation && ;
        matchesAvailability && ;
        matchesRating,;
    }),;
  }, [searchQuery, selectedProductTypes, selectedLocations, selectedAvailability, selectedRating]),;
  ;
  // Handle filter changes;
  const handleFilterChange = (filterType:string, value:string) => {;
    switch (filterType) {;
      case 'productTypes':;
        setSelectedProductTypes((prev:string[]) =>;
          prev.includes(value) ? prev.filter(t => t !== value) :[...prev, value];
        ),;
        break,;
      case 'locations':;
        setSelectedLocations((prev:string[]) =>;
          prev.includes(value) ? prev.filter(l => l !== value) :[...prev, value];
        ),;
        break,;
      case 'availability':;
        setSelectedAvailability((prev:string[]) =>;
          prev.includes(value) ? prev.filter(a => a !== value) :[...prev, value];
        ),;
        break,;
      default:break;
    }
  },;
  ;
  // Clear all filters;
  const clearAllFilters = () => {;
    setSearchQuery(""),;
    setSelectedProductTypes([]),;
    setSelectedLocations([]),;
    setSelectedAvailability([]),;
    setSelectedRating(null),;
  },;
  ;
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
    handleFilterChange,;
    clearAllFilters,;
    filterOptions;
  },; //Filter states const [selectedProductTypes, setSelectedProductTypes] = useState<string[]> ([]);
const [selectedLocations, setSelectedLocations] = useState<string[]> ([]);
const [selectedAvailability, setSelectedAvailability] = useState<string[]> ([]);
const [selectedRating, setSelectedRating] = useState<number | null> (null);
//Generate search suggestions and filter options const searchSuggestions: SearchSuggestion[] = useMemo ( () => generateSearchSuggestions ();
[]);
const filterOptions: FilterOptions = useMemo ( () => generateFilterOptions ();
[]);
return MARKETPLACE LISTINGS.filter (listing => {
  //Search query filter const matchesSearch = !searchQuery || listing.title.toLowerCase () .includes (searchQuery.toLowerCase () ) || listing.description.toLowerCase () .includes (searchQuery.toLowerCase () ) || listing.tags.some (tag => tag.toLowerCase () .includes (searchQuery.toLowerCase () ) );
//Product type filter return matchesSearch && matchesProductType && matchesLocation && matchesAvailability && // Handle filter changes const handleFilterChange = (filterType: string, value: string) => {
  switch (filterType) {
  case 'productTypes': return {
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
filterOptions 
}
}
  }
}
;
  }
}
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

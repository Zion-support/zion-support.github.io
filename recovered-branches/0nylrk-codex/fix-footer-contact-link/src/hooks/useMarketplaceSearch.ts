
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {useState, useMemo} from "react";
import {ProductListing} from "@/types/listings";
import {SearchSuggestion, FilterOptions} from "@/types/search";
import {generateSearchSuggestions, generateFilterOptions, MARKETPLACE_LISTINGS} from "@/data/marketplaceData";
export function useMarketplaceSearch() {
  // Search state;
  const [searchQuery, setSearchQuery] = useState("");
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState, useMemo } from "react",
import { ProductListing } from "@/types/listings",
<<<<<<< HEAD
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
  );
=======
import { SearchSuggestion, FilterOptions } from "@/types/search",
import { generateSearchSuggestions, generateFilterOptions, MARKETPLACE_LISTINGS } from "@/data/marketplaceData",

export function useMarketplaceSearch() {
  // Search state
  const [searchQuery, setSearchQuery] = useState(""),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
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
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Filter listings based on current search query and filters
  const filteredListings = useMemo(() => {
    return MARKETPLACE_LISTINGS.filter(listing => {
      // Search query filter
<<<<<<< HEAD
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
=======
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
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      // Rating filter
      const matchesRating = selectedRating === null |
        (listing.rating !== undefined && listing.rating >= selectedRating)
      return matchesSearch &&
        matchesProductType &&
        matchesLocation &&
        matchesAvailability &&
        matchesRating
    })
<<<<<<< HEAD
  }, [searchQuery, selectedProductTypes, selectedLocations, selectedAvailability, selectedRating]);
=======
  }, [searchQuery, selectedProductTypes, selectedLocations, selectedAvailability, selectedRating]),
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Handle filter changes
  const handleFilterChange = (filterType: string, value: string) => {
    switch (filterType) {
      case 'productTypes':
        setSelectedProductTypes((prev: string[]) =>
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
          prev.includes(value) ? prev.filter(a => a !== value) : [...prev, value]
        ),
        break,
      default: break
    }
<<<<<<< HEAD
  }
=======
  },
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Clear all filters
  const clearAllFilters = () => {
    setSearchQuery(""),
    setSelectedProductTypes([]),
    setSelectedLocations([]),
    setSelectedAvailability([]),
    setSelectedRating(null)
<<<<<<< HEAD
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
=======
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
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

import { useState, useMemo } from "react",
import { ProductListing } from "@/types/listings",

import { SearchSuggestion, FilterOptions } from "@/types/search";

import { generateSearchSuggestions, generateFilterOptions, MARKETPLACE_LISTINGS } from "@/data/marketplaceData";
export function useMarketplaceSearch() {}
  // Search state";
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  // Generate search suggestions and filter options;
  const searchSuggestions: SearchSuggestion[] = useMemo(
    () => generateSearchSuggestions();
    [];
  );

  const filterOptions: FilterOptions = useMemo(
    () => generateFilterOptions();
    [];
  );      const matchesSearch = !searchQuery || 
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
      

      // Rating filter

      const matchesRating = selectedRating === null |
        (listing.rating !== undefined && listing.rating >= selectedRating)
      return matchesSearch &&
        matchesProductType &&
        matchesLocation &&
        matchesAvailability &&        listing && listing.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||
        listing && listing.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||
        listing && listing.tags.some(tag => tag && tag.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()));
      // Product type filter;
      const matchesProductType = selectedProductTypes && selectedProductTypes.length === 0 || 
        selectedProductTypes && selectedProductTypes.includes(listing && listing.category);
      // Location filter;
      const matchesLocation = selectedLocations && selectedLocations.length === 0 || 
        (listing && listing.location && selectedLocations && selectedLocations.includes(listing && listing.location));
      // Availability filter;
      const matchesAvailability = selectedAvailability && selectedAvailability.length === 0 || 
        (listing && listing.availability && selectedAvailability && selectedAvailability.includes(listing && listing.availability));

      return matchesSearch && 
        matchesProductType && 
        matchesLocation && 
        matchesAvailability && 


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
}import { useState, useMemo } from "react",;
import { ProductListing } from "@/types/listings",;
import { SearchSuggestion, FilterOptions } from "@/types/search",;
import { generateSearchSuggestions, generateFilterOptions, MARKETPLACE_LISTINGS } from "@/data/marketplaceData",;
export function useMarketplaceSearch() {;
  // Search state;
  }
  const [searchQuery, setSearchQuery] = useState(""),;"
  // Filter states;
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]),;
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]),;
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]),;
  const [selectedRating, setSelectedRating] = useState<number | null>(null),;
  // Generate search suggestions and filter options;
    () => generateSearchSuggestions(),;
    []),;
    () => generateFilterOptions(),;
    []),;
  // Filter listings based on current search query and filters;
  const filteredListings = useMemo(() => {;
    }
    return MARKETPLACE_LISTINGS.filter((listing) => {;
      // Search query filter;
      }
      const matchesSearch = !searchQuery ||;
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        listing.tags.some(tag => { return tag.toLowerCase().includes(searchQuery.toLowerCase())),; }
      // Product type filter;
        selectedProductTypes.includes(listing.category),;
      // Location filter;
        (listing.location && selectedLocations.includes(listing.location)),;
      // Availability filter;
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
  const handleFilterChange = ("filterType": string, "value": string) => {;
    }
    switch (filterType) {;
      }
      case 'productTypes':;'
        setSelectedProductTypes(("prev": string[]) =>;
          prev.includes(value) ? prev.filter(t => { return t !== value) : [...prev, value]; }
        ),;
        break,;
      default: break;) => {
  return $3;}
}
    }
  },;
  // Clear all filters;

    setSelectedProductTypes([]),;
    setSelectedLocations([]),;
    setSelectedAvailability([]),;
    setSelectedRating(null);) => {
  return $3;}
}
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


  }
}
    filter_options;
  }

  }
}



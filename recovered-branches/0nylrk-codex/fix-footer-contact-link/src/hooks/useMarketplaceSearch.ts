
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useMemo } from "react",
import { ProductListing } from "@/types/listings",
import { SearchSuggestion, FilterOptions } from "@/types/search",
import { generateSearchSuggestions, generateFilterOptions, MARKETPLACE_LISTINGS } from "@/data/marketplaceData",

export function useMarketplaceSearch() {
  // Search state
  const [searchQuery, setSearchQuery] = useState(""),
=======
import { useState, useMemo } from &quot;react&quot;;
import { ProductListing } from &quot;@/types/listings&quot;;
import { SearchSuggestion, FilterOptions } from &quot;@/types/search&quot;;
import { generateSearchSuggestions, generateFilterOptions, MARKETPLACE_LISTINGS } from &quot;@/data/marketplaceData&quot;;

export function useMarketplaceSearch() {
  // Search state
  const [searchQuery, setSearchQuery] = useState("&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
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
=======

export function useMarketplaceSearch() {_// Search state
  const [searchQuery, _setSearchQuery] = useState("");
  
  // Filter states
  const [selectedProductTypes, _setSelectedProductTypes] = useState<string[]>([]);
  const [selectedLocations, _setSelectedLocations] = useState<string[]>([]);
  const [selectedAvailability, _setSelectedAvailability] = useState<string[]>([]);
  const [selectedRating, _setSelectedRating] = useState<number | null>(null);
  
  // Generate search suggestions and filter options
  const searchSuggestions: SearchSuggestion[] = useMemo(_() => generateSearchSuggestions(), _[], _);
  const filterOptions: FilterOptions = useMemo(_() => generateFilterOptions(), _[], _);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Filter listings based on current search query and filters
  const _filteredListings = useMemo__(() => {
    return MARKETPLACE_LISTINGS.filter(listing => {
      // Search query filter
      const _matchesSearch = !searchQuery || 
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      
      // Product type filter
<<<<<<< HEAD
      const matchesProductType = selectedProductTypes.length === 0 || 
        selectedProductTypes.includes(listing.category),
      
      // Location filter
      const matchesLocation = selectedLocations.length === 0 || 
        (listing.location && selectedLocations.includes(listing.location)),
      
      // Availability filter
      const matchesAvailability = selectedAvailability.length === 0 || 
        (listing.availability && selectedAvailability.includes(listing.availability)),
      
      // Rating filter
      const matchesRating = selectedRating === null || 
        (listing.rating !== undefined && listing.rating >= selectedRating),
=======
      const _matchesProductType = selectedProductTypes.length === 0 || 
        selectedProductTypes.includes(listing.category);
      
      // Location filter
      const _matchesLocation = selectedLocations.length === 0 || 
        (listing.location && selectedLocations.includes(listing.location));
      
      // Availability filter
      const _matchesAvailability = selectedAvailability.length === 0 || 
        (listing.availability && selectedAvailability.includes(listing.availability));
      
      // Rating filter
      const _matchesRating = selectedRating === null || 
        (listing.rating !== undefined && listing.rating >= selectedRating);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      return matchesSearch && 
        matchesProductType && 
        matchesLocation && 
        matchesAvailability && 
<<<<<<< HEAD
        matchesRating
    })
  }, [searchQuery, selectedProductTypes, selectedLocations, selectedAvailability, selectedRating]),
=======
        matchesRating;});
  }, [searchQuery, selectedProductTypes, selectedLocations, selectedAvailability, selectedRating]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Handle filter changes
  const _handleFilterChange = (_filterType: string, _value: string) => {_switch (filterType) {
      case 'productTypes':
<<<<<<< HEAD
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
  },
  
  // Clear all filters
  const clearAllFilters = () => {
<<<<<<< HEAD
    setSearchQuery(""),
    setSelectedProductTypes([]),
    setSelectedLocations([]),
    setSelectedAvailability([]),
    setSelectedRating(null)
  },
=======
    setSearchQuery("&quot;);
    setSelectedProductTypes([]);
    setSelectedLocations([]);
    setSelectedAvailability([]);
    setSelectedRating(null);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
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
=======
        setSelectedProductTypes(_(prev: string[]) =>
          prev.includes(value) ? prev.filter(t => t !== value) : [...prev, _value]
        );
        break;
      case 'locations':
        setSelectedLocations(_(prev: string[]) =>
          prev.includes(value) ? prev.filter(l => l !== value) : [...prev, _value]
        );
        break;
      case 'availability':
        setSelectedAvailability(_(prev: string[]) =>
          prev.includes(value) ? prev.filter(a => a !== value) : [...prev, _value]
        );
        break;
      default:
        break;}
  };
  
  // Clear all filters
  const _clearAllFilters = () => {_setSearchQuery("");
    setSelectedProductTypes([]);
    setSelectedLocations([]);
    setSelectedAvailability([]);
    setSelectedRating(null);};
  
  return {_searchQuery, _setSearchQuery, _searchSuggestions, _selectedProductTypes, _selectedLocations, _selectedAvailability, _selectedRating, _setSelectedRating, _filteredListings, _handleFilterChange, _clearAllFilters, _filterOptions};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

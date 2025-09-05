
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { X } from "lucide-react",
=======
import React from &quot;react&quot;;
import { ClickableBadge } from &quot;@/components/ui/clickable-badge&quot;;
import { X } from &quot;lucide-react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ActiveFiltersBarProps {
  selectedProductTypes: string[],
  selectedLocations: string[],
  selectedAvailability: string[],
  selectedRating: number | null,
  searchQuery: string,
  onRemoveFilter: (filterType: string, value: string) => void,
  onRemoveRating: () => void,
  onClearSearch: () => void
}
=======
import React from "react";

interface ActiveFiltersBarProps {_selectedProductTypes: string[];
  selectedLocations: string[];
  selectedAvailability: string[];
  selectedRating: number | null;
  searchQuery: string;
  onRemoveFilter: (_filterType: string, _value: string) => void;
  onRemoveRating: () => void;
  onClearSearch: () => void;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function ActiveFiltersBar(_{_selectedProductTypes, _selectedLocations, _selectedAvailability, _selectedRating, _searchQuery, _onRemoveFilter, _onRemoveRating, _onClearSearch}: ActiveFiltersBarProps) {_const _hasActiveFilters = 
    selectedProductTypes.length > 0 || 
    selectedLocations.length > 0 || 
    selectedAvailability.length > 0 || 
    selectedRating !== null ||
    !!searchQuery,
    
  if (!hasActiveFilters) return null,
  
  return (
    <div className=&quot;flex flex-wrap gap-2 items-center mb-4&quot;>
      <span className=&quot;text-sm text-zion-slate-light&quot;>Active filters:</span>
      
      {searchQuery && (
        <ClickableBadge 
          className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2&quot;
          onClick={onClearSearch}
        >
<<<<<<< HEAD
          Search: {searchQuery}
          <X className=&quot;h-3 w-3&quot; />
=======
          Search: {_searchQuery}
          <X className="h-3 w-3" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </ClickableBadge>
      )}
      
      {_selectedProductTypes.map(_type => (
        <ClickableBadge 
          key={`type-${type}`}
<<<<<<< HEAD
          className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2&quot;
          onClick={() => onRemoveFilter('productTypes', type)}
        >
          {type}
          <X className=&quot;h-3 w-3&quot; />
=======
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={_() => onRemoveFilter('productTypes', _type)}
        >
          {_type}
          <X className="h-3 w-3" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </ClickableBadge>
      ))}
      
      {_selectedLocations.map(_location => (
        <ClickableBadge 
          key={`location-${location}`}
<<<<<<< HEAD
          className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2&quot;
          onClick={() => onRemoveFilter('locations', location)}
        >
          {location}
          <X className=&quot;h-3 w-3&quot; />
=======
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={_() => onRemoveFilter('locations', _location)}
        >
          {_location}
          <X className="h-3 w-3" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </ClickableBadge>
      ))}
      
      {_selectedAvailability.map(_availability => (
        <ClickableBadge 
          key={`availability-${availability}`}
<<<<<<< HEAD
          className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2&quot;
          onClick={() => onRemoveFilter('availability', availability)}
        >
          {availability}
          <X className=&quot;h-3 w-3&quot; />
=======
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={_() => onRemoveFilter('availability', _availability)}
        >
          {_availability}
          <X className="h-3 w-3" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </ClickableBadge>
      ))}
      
      {_selectedRating !== null && (
        <ClickableBadge 
          className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2&quot;
          onClick={onRemoveRating}
        >
<<<<<<< HEAD
          {selectedRating}+ Stars
          <X className=&quot;h-3 w-3&quot; />
=======
          {_selectedRating}+ Stars
          <X className="h-3 w-3" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </ClickableBadge>
      )}
    </div>
  )
}

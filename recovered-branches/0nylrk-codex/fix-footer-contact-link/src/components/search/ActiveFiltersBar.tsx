
<<<<<<< HEAD
import React from "react",;
import { ClickableBadge } from "@/components/ui/clickable-badge",;
import { X } from "lucide-react",;
;
interface ActiveFiltersBarProps {;
  selectedProductTypes:string[],;
  selectedLocations:string[],;
  selectedAvailability:string[],;
  selectedRating:number | null,;
  searchQuery:string,;
  onRemoveFilter:(filterType:string, value:string) => void,;
  onRemoveRating:() => void,;
  onClearSearch:() => void;
}
;
export function ActiveFiltersBar({;
  selectedProductTypes,;
  selectedLocations,;
  selectedAvailability,;
  selectedRating,;
  searchQuery,;
  onRemoveFilter,;
  onRemoveRating,;
  onClearSearch;
} ActiveFiltersBarProps) {;
  const hasActiveFilters = ;
    selectedProductTypes.length > 0 || ;
    selectedLocations.length > 0 || ;
    selectedAvailability.length > 0 || ;
    selectedRating !== null ||;
    !!searchQuery,;
    ;
  if (!hasActiveFilters) return null,;
  ;
  return (;
    <div className="flex flex-wrap gap-2 items-center mb-4">;
      <span className="text-sm text-zion-slate-light">Active filters:</span>;
      ;
      {searchQuery && (;
        <ClickableBadge ;
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
          onClick={onClearSearch}
        >;
          Search:{searchQuery}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}
      ;
      {selectedProductTypes.map(type => (;
        <ClickableBadge ;
          key={`type-${type}`}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
=======
import React from "react",
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { X } from "lucide-react",interface ActiveFiltersBarProps {
  selectedProductTypes: string[],
  selectedLocations: string[],
  selectedAvailability: string[],
  selectedRating: number | null,
  searchQuery: string,
  onRemoveFilter: (filterType: string, value: string) => void,
  onRemoveRating: () => void,
  onClearSearch: () => void
}
import React from "react";

interface ActiveFiltersBarProps {_selectedProductTypes: string[];
  selectedLocations: string[];
  selectedAvailability: string[];
  selectedRating: number | null;
  searchQuery: string;
  onRemoveFilter: (_filterType: string, _value: string) => void;
  onRemoveRating: () => void;
  onClearSearch: () => void;}

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
          Search: {searchQuery}
          <X className=&quot;h-3 w-3&quot; />        </ClickableBadge>
      )}
      
      {_selectedProductTypes.map(_type => (
        <ClickableBadge 
          key={`type-${type}`}
          className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2&quot;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          onClick={() => onRemoveFilter('productTypes', type)}
        >;
          {type}
<<<<<<< HEAD
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}
      ;
      {selectedLocations.map(location => (;
        <ClickableBadge ;
          key={`location-${location}`}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
=======
          <X className=&quot;h-3 w-3&quot; />        </ClickableBadge>
      ))}
      
      {_selectedLocations.map(_location => (
        <ClickableBadge 
          key={`location-${location}`}
          className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2&quot;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          onClick={() => onRemoveFilter('locations', location)}
        >;
          {location}
<<<<<<< HEAD
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}
      ;
      {selectedAvailability.map(availability => (;
        <ClickableBadge ;
          key={`availability-${availability}`}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
=======
          <X className=&quot;h-3 w-3&quot; />        </ClickableBadge>
      ))}
      
      {_selectedAvailability.map(_availability => (
        <ClickableBadge 
          key={`availability-${availability}`}
          className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2&quot;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          onClick={() => onRemoveFilter('availability', availability)}
        >;
          {availability}
<<<<<<< HEAD
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}
      ;
      {selectedRating !== null && (;
        <ClickableBadge ;
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
          onClick={onRemoveRating}
        >;
          {selectedRating}+ Stars;
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}
    </div>;
  ),;
=======
          <X className=&quot;h-3 w-3&quot; />        </ClickableBadge>
      ))}
      
      {_selectedRating !== null && (
        <ClickableBadge 
          className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2&quot;
          onClick={onRemoveRating}
        >
          {selectedRating}+ Stars
          <X className=&quot;h-3 w-3&quot; />        </ClickableBadge>
      )}
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}

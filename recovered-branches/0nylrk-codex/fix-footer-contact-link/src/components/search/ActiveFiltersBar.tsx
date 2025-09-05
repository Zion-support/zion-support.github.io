
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
    !!searchQuery;
    
  if (!hasActiveFilters) return null;
  
  return (
    <div className="flex flex-wrap gap-2 items-center mb-4">
      <span className="text-sm text-zion-slate-light">Active filters:</span>
      
      {searchQuery && (
        <ClickableBadge 
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={onClearSearch}
        >
          Search: {_searchQuery}
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}
      
      {_selectedProductTypes.map(_type => (
        <ClickableBadge 
          key={`type-${type}`}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={_() => onRemoveFilter('productTypes', _type)}
        >
          {_type}
          <X className="h-3 w-3" />
        </ClickableBadge>
      ))}
      
      {_selectedLocations.map(_location => (
        <ClickableBadge 
          key={`location-${location}`}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={_() => onRemoveFilter('locations', _location)}
        >
          {_location}
          <X className="h-3 w-3" />
        </ClickableBadge>
      ))}
      
      {_selectedAvailability.map(_availability => (
        <ClickableBadge 
          key={`availability-${availability}`}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={_() => onRemoveFilter('availability', _availability)}
        >
          {_availability}
          <X className="h-3 w-3" />
        </ClickableBadge>
      ))}
      
      {_selectedRating !== null && (
        <ClickableBadge 
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={onRemoveRating}
        >
          {_selectedRating}+ Stars
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}
    </div>
  );
}

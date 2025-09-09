import React from 'react';
import { X, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ActiveFiltersBar({
  selectedProductTypes,
  selectedLocations,
  selectedAvailability,
  selectedRating,
  searchQuery,
  onRemoveFilter,
  onRemoveRating,
  onClearSearch
}) {
  const hasActiveFilters = selectedProductTypes.length > 0 || 
                          selectedLocations.length > 0 || 
                          selectedAvailability.length > 0 || 
                          selectedRating || 
                          searchQuery;

  if (!hasActiveFilters) {
    return null;
  }

  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 mb-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-zion-slate-light mr-2">Active Filters:</span>
        
        {/* Search Query */}
        {searchQuery && (
          <div className="flex items-center gap-2 bg-zion-purple/20 border border-zion-purple rounded-full px-3 py-1">
            <span className="text-sm text-zion-purple">"{searchQuery}"</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onClearSearch()}
              className="h-5 w-5 p-0 hover:bg-zion-purple/30 text-zion-purple"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        )}

        {/* Product Types */}
        {selectedProductTypes.map((type) => (
          <div key={`type-${type}`} className="flex items-center gap-2 bg-zion-blue-light/20 border border-zion-blue-light rounded-full px-3 py-1">
            <span className="text-sm text-zion-slate-light">{type}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRemoveFilter('productTypes', type)}
              className="h-5 w-5 p-0 hover:bg-zion-blue-light/30 text-zion-slate-light"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        ))}

        {/* Locations */}
        {selectedLocations.map((location) => (
          <div key={`location-${location}`} className="flex items-center gap-2 bg-zion-blue-light/20 border border-zion-blue-light rounded-full px-3 py-1">
            <span className="text-sm text-zion-slate-light">{location}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRemoveFilter('locations', location)}
              className="h-5 w-5 p-0 hover:bg-zion-blue-light/30 text-zion-slate-light"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        ))}

        {/* Availability */}
        {selectedAvailability.map((availability) => (
          <div key={`availability-${availability}`} className="flex items-center gap-2 bg-zion-blue-light/20 border border-zion-blue-light rounded-full px-3 py-1">
            <span className="text-sm text-zion-slate-light">{availability}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRemoveFilter('availability', availability)}
              className="h-5 w-5 p-0 hover:bg-zion-blue-light/30 text-zion-slate-light"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        ))}

        {/* Rating */}
        {selectedRating && (
          <div className="flex items-center gap-2 bg-zion-blue-light/20 border border-zion-blue-light rounded-full px-3 py-1">
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
            <span className="text-sm text-zion-slate-light">{selectedRating}+ stars</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRemoveRating()}
              className="h-5 w-5 p-0 hover:bg-zion-blue-light/30 text-zion-slate-light"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        )}

        {/* Clear All Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            onClearSearch();
            onRemoveRating();
            // Clear all other filters
            selectedProductTypes.forEach(type => onRemoveFilter('productTypes', type));
            selectedLocations.forEach(location => onRemoveFilter('locations', location));
            selectedAvailability.forEach(availability => onRemoveFilter('availability', availability));
          }}
          className="text-zion-slate-light hover:text-white hover:bg-zion-blue-light/30 ml-2"
        >
          Clear All
        </Button>
      </div>
    </div>
  );
}
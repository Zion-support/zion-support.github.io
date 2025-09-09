import React from 'react';
import { X } from 'lucide-react';

interface ActiveFiltersBarProps {
  selectedProductTypes: string[];
  selectedLocations: string[];
  selectedAvailability: string[];
  selectedRating: number | null;
  searchQuery: string;
  onRemoveFilter: (filterType: string, value: string) => void;
  onRemoveRating: () => void;
  onClearSearch: () => void;
}

export function ActiveFiltersBar({
  selectedProductTypes,
  selectedLocations,
  selectedAvailability,
  selectedRating,
  searchQuery,
  onRemoveFilter,
  onRemoveRating,
  onClearSearch
}: ActiveFiltersBarProps) {
  const hasActiveFilters = 
    selectedProductTypes.length > 0 || 
    selectedLocations.length > 0 || 
    selectedAvailability.length > 0 || 
    selectedRating !== null || 
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
          <div className="flex items-center gap-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full px-3 py-1">
            <span className="text-sm text-zion-cyan">"{searchQuery}"</span>
            <button
              onClick={onClearSearch}
              className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Product Types */}
        {selectedProductTypes.map((type) => (
          <div key={`type-${type}`} className="flex items-center gap-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full px-3 py-1">
            <span className="text-sm text-zion-cyan">{type}</span>
            <button
              onClick={() => onRemoveFilter('selectedProductTypes', type)}
              className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}

        {/* Locations */}
        {selectedLocations.map((location) => (
          <div key={`location-${location}`} className="flex items-center gap-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full px-3 py-1">
            <span className="text-sm text-zion-purple">{location}</span>
            <button
              onClick={() => onRemoveFilter('selectedLocations', location)}
              className="text-zion-purple hover:text-zion-purple-light transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}

        {/* Availability */}
        {selectedAvailability.map((availability) => (
          <div key={`availability-${availability}`} className="flex items-center gap-2 bg-zion-blue/20 border border-zion-blue/30 rounded-full px-3 py-1">
            <span className="text-sm text-zion-blue">{availability}</span>
            <button
              onClick={() => onRemoveFilter('selectedAvailability', availability)}
              className="text-zion-blue hover:text-zion-blue-light transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}

        {/* Rating */}
        {selectedRating && (
          <div className="flex items-center gap-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full px-3 py-1">
            <span className="text-sm text-zion-cyan">{selectedRating}+ Rating</span>
            <button
              onClick={onRemoveRating}
              className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
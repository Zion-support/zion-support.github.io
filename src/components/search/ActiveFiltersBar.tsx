import React from 'react';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

interface ActiveFiltersBarProps {
  selectedProductTypes: string[];
  selectedLocations: string[];
  selectedAvailability: string[];
  selectedRating: number | null;
  onFilterChange: (filterType: string, value: string) => void;
  onRatingChange: (rating: number | null) => void;
  onClearAll: () => void;
}

export function ActiveFiltersBar({
  selectedProductTypes,
  selectedLocations,
  selectedAvailability,
  selectedRating,
  onFilterChange,
  onRatingChange,
  onClearAll
}: ActiveFiltersBarProps) {
  const hasActiveFilters = selectedProductTypes.length > 0 || 
                          selectedLocations.length > 0 || 
                          selectedAvailability.length > 0 || 
                          selectedRating !== null;

  if (!hasActiveFilters) {
    return null;
  }

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10 mb-6">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-medium text-gray-300">Active Filters</h4>
        <button
          onClick={onClearAll}
          className="text-sm text-blue-400 hover:text-blue-300 underline"
        >
          Clear All
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {selectedProductTypes.map((type) => (
          <Badge key={type} variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/30">
            Product: {type}
            <button
              onClick={() => onFilterChange('productTypes', type)}
              className="ml-1 hover:text-red-400 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </Badge>
        ))}
        
        {selectedLocations.map((location) => (
          <Badge key={location} variant="secondary" className="bg-green-600/20 text-green-300 border-green-500/30">
            Location: {location}
            <button
              onClick={() => onFilterChange('locations', location)}
              className="ml-1 hover:text-red-400 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </Badge>
        ))}
        
        {selectedAvailability.map((availability) => (
          <Badge key={availability} variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30">
            {availability}
            <button
              onClick={() => onFilterChange('availability', availability)}
              className="ml-1 hover:text-red-400 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </Badge>
        ))}
        
        {selectedRating && (
          <Badge variant="secondary" className="bg-yellow-600/20 text-yellow-300 border-yellow-500/30">
            {selectedRating}+ stars
            <button
              onClick={() => onRatingChange(null)}
              className="ml-1 hover:text-red-400 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </Badge>
        )}
      </div>
    </div>
  );
}
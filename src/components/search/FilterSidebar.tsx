import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X } from 'lucide-react';

interface FilterSidebarProps {
  filterOptions: {
    productTypes: string[];
    locations: string[];
    availability: string[];
  };
  selectedProductTypes: string[];
  selectedLocations: string[];
  selectedAvailability: string[];
  selectedRating: number | null;
  onFilterChange: (filterType: string, value: string) => void;
  onRatingChange: (rating: number | null) => void;
  onClearAll: () => void;
}

export function FilterSidebar({
  filterOptions,
  selectedProductTypes,
  selectedLocations,
  selectedAvailability,
  selectedRating,
  onFilterChange,
  onRatingChange,
  onClearAll
}: FilterSidebarProps) {
  const hasActiveFilters = selectedProductTypes.length > 0 || 
                          selectedLocations.length > 0 || 
                          selectedAvailability.length > 0 || 
                          selectedRating !== null;

  return (
    <div className="w-64 bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Filters</h3>
        {hasActiveFilters && (
          <Button
            onClick={onClearAll}
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white"
          >
            Clear All
          </Button>
        )}
      </div>

      {/* Product Types */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-300 mb-3">Product Types</h4>
        <div className="space-y-2">
          {filterOptions.productTypes.map((type) => (
            <label key={type} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedProductTypes.includes(type)}
                onChange={() => onFilterChange('productTypes', type)}
                className="rounded border-gray-600 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-300">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Locations */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-300 mb-3">Locations</h4>
        <div className="space-y-2">
          {filterOptions.locations.map((location) => (
            <label key={location} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedLocations.includes(location)}
                onChange={() => onFilterChange('locations', location)}
                className="rounded border-gray-600 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-300">{location}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-300 mb-3">Availability</h4>
        <div className="space-y-2">
          {filterOptions.availability.map((availability) => (
            <label key={availability} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedAvailability.includes(availability)}
                onChange={() => onFilterChange('availability', availability)}
                className="rounded border-gray-600 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-300">{availability}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-300 mb-3">Minimum Rating</h4>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="rating"
                checked={selectedRating === rating}
                onChange={() => onRatingChange(rating)}
                className="border-gray-600 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-300">
                {rating}+ stars
              </span>
            </label>
          ))}
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="rating"
              checked={selectedRating === null}
              onChange={() => onRatingChange(null)}
              className="border-gray-600 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-300">Any rating</span>
          </label>
        </div>
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="pt-4 border-t border-white/10">
          <h4 className="text-sm font-medium text-gray-300 mb-3">Active Filters</h4>
          <div className="space-y-2">
            {selectedProductTypes.map((type) => (
              <Badge key={type} variant="secondary" className="mr-2 mb-2">
                {type}
                <button
                  onClick={() => onFilterChange('productTypes', type)}
                  className="ml-1 hover:text-red-400"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
            {selectedLocations.map((location) => (
              <Badge key={location} variant="secondary" className="mr-2 mb-2">
                {location}
                <button
                  onClick={() => onFilterChange('locations', location)}
                  className="ml-1 hover:text-red-400"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
            {selectedAvailability.map((availability) => (
              <Badge key={availability} variant="secondary" className="mr-2 mb-2">
                {availability}
                <button
                  onClick={() => onFilterChange('availability', availability)}
                  className="ml-1 hover:text-red-400"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
            {selectedRating && (
              <Badge variant="secondary" className="mr-2 mb-2">
                {selectedRating}+ stars
                <button
                  onClick={() => onRatingChange(null)}
                  className="ml-1 hover:text-red-400"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
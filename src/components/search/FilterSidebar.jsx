import React from 'react';
import { Filter, Star, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FilterSidebar({
  filters,
  filterOptions,
  onFilterChange,
  onRatingChange,
  onClearFilters
}) {
  const { selectedProductTypes, selectedLocations, selectedAvailability, selectedRating } = filters;
  const { productTypes, locations, availability } = filterOptions;

  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <Filter className="h-5 w-5" />
          Filters
        </h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearFilters}
          className="text-zion-slate-light hover:text-white hover:bg-zion-blue-light/30"
        >
          Clear All
        </Button>
      </div>

      {/* Product Types Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-zion-slate-light mb-3">Product Types</h4>
        <div className="space-y-2">
          {productTypes.map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedProductTypes.includes(type)}
                onChange={() => onFilterChange('productTypes', type)}
                className="rounded border-zion-blue-light text-zion-purple focus:ring-zion-purple focus:ring-offset-zion-blue-dark"
              />
              <span className="text-sm text-zion-slate-light">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Locations Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-zion-slate-light mb-3">Locations</h4>
        <div className="space-y-2">
          {locations.map((location) => (
            <label key={location} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedLocations.includes(location)}
                onChange={() => onFilterChange('locations', location)}
                className="rounded border-zion-blue-light text-zion-purple focus:ring-zion-purple focus:ring-offset-zion-blue-dark"
              />
              <span className="text-sm text-zion-slate-light">{location}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-zion-slate-light mb-3">Availability</h4>
        <div className="space-y-2">
          {availability.map((avail) => (
            <label key={avail} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedAvailability.includes(avail)}
                onChange={() => onFilterChange('availability', avail)}
                className="rounded border-zion-blue-light text-zion-purple focus:ring-zion-purple focus:ring-offset-zion-blue-dark"
              />
              <span className="text-sm text-zion-slate-light">{avail}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-zion-slate-light mb-3">Minimum Rating</h4>
        <div className="space-y-2">
          {[4.5, 4.0, 3.5, 3.0].map((rating) => (
            <label key={rating} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="rating"
                checked={selectedRating === rating}
                onChange={() => onRatingChange(rating)}
                className="border-zion-blue-light text-zion-purple focus:ring-zion-purple focus:ring-offset-zion-blue-dark"
              />
              <div className="flex items-center gap-1">
                <span className="text-sm text-zion-slate-light">{rating}+</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < Math.floor(rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-zion-slate-light'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </label>
          ))}
          {selectedRating && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRatingChange(null)}
              className="text-zion-slate-light hover:text-white hover:bg-zion-blue-light/30 mt-2"
            >
              <X className="h-3 w-3 mr-1" />
              Clear Rating
            </Button>
          )}
        </div>
      </div>

      {/* Active Filters Summary */}
      {(selectedProductTypes.length > 0 || selectedLocations.length > 0 || selectedAvailability.length > 0 || selectedRating) && (
        <div className="pt-4 border-t border-zion-blue-light">
          <h4 className="text-sm font-medium text-zion-slate-light mb-2">Active Filters:</h4>
          <div className="text-xs text-zion-slate-light space-y-1">
            {selectedProductTypes.length > 0 && (
              <div>Product Types: {selectedProductTypes.join(', ')}</div>
            )}
            {selectedLocations.length > 0 && (
              <div>Locations: {selectedLocations.join(', ')}</div>
            )}
            {selectedAvailability.length > 0 && (
              <div>Availability: {selectedAvailability.join(', ')}</div>
            )}
            {selectedRating && (
              <div>Rating: {selectedRating}+ stars</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
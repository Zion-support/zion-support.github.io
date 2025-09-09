import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Filter } from 'lucide-react';

export function FilterSidebar({ 
  filters, 
  filterOptions, 
  onFilterChange, 
  onRatingChange, 
  onClearFilters 
}) {
  const { selectedProductTypes, selectedLocations, selectedAvailability, selectedRating } = filters;

  const handleFilterToggle = (filterType, value) => {
    const currentFilters = filters[filterType] || [];
    const newFilters = currentFilters.includes(value)
      ? currentFilters.filter(item => item !== value)
      : [...currentFilters, value];
    
    onFilterChange(filterType, newFilters);
  };

  const handleRatingChange = (rating) => {
    onRatingChange(rating === selectedRating ? null : rating);
  };

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
          className="text-zion-slate-light hover:text-white"
        >
          <X className="h-4 w-4 mr-1" />
          Clear
        </Button>
      </div>

      {/* Product Types */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-zion-slate-light mb-3">Product Types</h4>
        <div className="space-y-2">
          {filterOptions?.productTypes?.map((type) => (
            <label key={type} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedProductTypes.includes(type)}
                onChange={() => handleFilterToggle('selectedProductTypes', type)}
                className="rounded border-zion-cyan text-zion-cyan focus:ring-zion-cyan"
              />
              <span className="text-sm text-white">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Locations */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-zion-slate-light mb-3">Locations</h4>
        <div className="space-y-2">
          {filterOptions?.locations?.map((location) => (
            <label key={location} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedLocations.includes(location)}
                onChange={() => handleFilterToggle('selectedLocations', location)}
                className="rounded border-zion-cyan text-zion-cyan focus:ring-zion-cyan"
              />
              <span className="text-sm text-white">{location}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-zion-slate-light mb-3">Availability</h4>
        <div className="space-y-2">
          {filterOptions?.availability?.map((availability) => (
            <label key={availability} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedAvailability.includes(availability)}
                onChange={() => handleFilterToggle('selectedAvailability', availability)}
                className="rounded border-zion-cyan text-zion-cyan focus:ring-zion-cyan"
              />
              <span className="text-sm text-white">{availability}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-zion-slate-light mb-3">Minimum Rating</h4>
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((rating) => (
            <Button
              key={rating}
              variant={selectedRating === rating ? "default" : "outline"}
              size="sm"
              onClick={() => handleRatingChange(rating)}
              className={`${
                selectedRating === rating
                  ? 'bg-zion-cyan text-white'
                  : 'border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
              }`}
            >
              {rating}+
            </Button>
          ))}
        </div>
      </div>

      {/* Active Filters Summary */}
      {(selectedProductTypes.length > 0 || selectedLocations.length > 0 || 
        selectedAvailability.length > 0 || selectedRating) && (
        <div className="pt-4 border-t border-zion-blue-light">
          <h4 className="text-sm font-medium text-zion-slate-light mb-3">Active Filters</h4>
          <div className="flex flex-wrap gap-2">
            {selectedProductTypes.map((type) => (
              <Badge key={type} variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                {type}
              </Badge>
            ))}
            {selectedLocations.map((location) => (
              <Badge key={location} variant="secondary" className="bg-zion-purple/20 text-zion-purple border-zion-purple/30">
                {location}
              </Badge>
            ))}
            {selectedAvailability.map((availability) => (
              <Badge key={availability} variant="secondary" className="bg-zion-blue/20 text-zion-blue border-zion-blue/30">
                {availability}
              </Badge>
            ))}
            {selectedRating && (
              <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                {selectedRating}+ Rating
              </Badge>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
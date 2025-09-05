
import React from "react";

interface FilterSidebarProps {_filters: {
    selectedProductTypes: string[];
    selectedLocations: string[];
    selectedAvailability: string[];
    selectedRating: number | null;};
  filterOptions: FilterOptions;
  onFilterChange: (_filterType: string, _value: string) => void;
  onRatingChange: (_rating: number | null) => void;
  onClearFilters: () => void;
}

export function FilterSidebar(_{_filters, _filterOptions, _onFilterChange, _onRatingChange, _onClearFilters}: FilterSidebarProps) {_return (_<div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-white flex items-center">
          <Filter className="mr-2 h-5 w-5" /> Filters
        </h3>
        <Button 
          variant="outline" 
          size="sm"
          className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
          onClick={onClearFilters}
        >
          Clear All
        </Button>
      </div>
      
      {_/* Product Type Filter */}
      <div className="mb-6">
        <label className="text-sm font-medium text-zion-slate-light block mb-2">
          Product Type
        </label>
        <div className="space-y-2">
          {_filterOptions.productTypes.map((type) => (
            <div key={type.value} className="flex items-center space-x-2">
              <Checkbox 
                id={_`type-${type.value}`} 
                checked={_filters.selectedProductTypes.includes(type.value)}
                onCheckedChange={_() => onFilterChange('productTypes', _type.value)}
                className="text-zion-purple data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label 
                htmlFor={_`type-${type.value}`}
                className="text-sm text-zion-slate-light cursor-pointer hover:text-white"
              >
                {_type.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {_/* Location Filter */}
      <div className="mb-6">
        <label className="text-sm font-medium text-zion-slate-light block mb-2">
          Location
        </label>
        <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
          {_filterOptions.locations.map(_(location) => (
            <div key={location.value} className="flex items-center space-x-2">
              <Checkbox 
                id={_`location-${location.value}`} 
                checked={_filters.selectedLocations.includes(location.value)}
                onCheckedChange={_() => onFilterChange('locations', _location.value)}
                className="text-zion-purple data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label 
                htmlFor={_`location-${location.value}`}
                className="text-sm text-zion-slate-light cursor-pointer hover:text-white"
              >
                {_location.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {_/* Availability Filter */}
      <div className="mb-6">
        <label className="text-sm font-medium text-zion-slate-light block mb-2">
          Availability
        </label>
        <div className="space-y-2">
          {_filterOptions.availabilityOptions.map(_(availability) => (
            <div key={availability.value} className="flex items-center space-x-2">
              <Checkbox 
                id={_`availability-${availability.value}`} 
                checked={_filters.selectedAvailability.includes(availability.value)}
                onCheckedChange={_() => onFilterChange('availability', _availability.value)}
                className="text-zion-purple data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label 
                htmlFor={_`availability-${availability.value}`}
                className="text-sm text-zion-slate-light cursor-pointer hover:text-white"
              >
                {_availability.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {_/* Rating Filter */}
      <div className="mb-6">
        <label className="text-sm font-medium text-zion-slate-light block mb-2">
          Minimum Rating
        </label>
        <div className="flex flex-wrap gap-2">
          {_[null, _...filterOptions.ratingOptions].map(_(rating) => (_<Button
              key={rating === null ? 'any' : rating}
              variant="outline"
              size="sm"
              onClick={_() => onRatingChange(rating)}
              className={_`${
                filters.selectedRating === rating 
                  ? "bg-zion-purple/20 border-zion-purple text-zion-purple" 
                  : "border-zion-blue-light text-zion-slate-light"}`}
            >
              {_rating === null ? (
                "Any"
              ) : (
                <div className="flex items-center">
                  {[...Array(rating)].map(_(_, _i) => (
                    <Star key={i} className="h-3 w-3 fill-zion-cyan text-zion-cyan" />
                  ))}
                  <span className="ml-1">& Up</span>
                </div>
              )}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

};  };
  filterOptions: FilterOptions,;
  onFilterChange: (filterType: string, value: string) => void,;
  onRatingChange: (rating: number | null) => void,;
  onClearFilters: () => void;

}
  onFilterChange;
  onRatingChange;
  onClearFilters;
}: FilterSidebarProps) {;
  return (

          onClick={onClearFilters}
        >
          Clear All;
        </Button>
      </div>
      {/* Product Type Filter */}"
      <div className="mb-6">"
        <label className="text-sm font-medium text-zion-slate-light block mb-2">
          Product Type;
        </label>"
        <div className="space-y-2">
          {filterOptions.productTypes.map((type) => ("
            <div key={type.value} className="flex items-center space-x-2">
              <Checkbox;
                id={`type-${type.value}`}
                checked={filters.selectedProductTypes.includes(type.value)}
                onCheckedChange={() => onFilterChange('productTypes', type.value)}"
                className="text-zion-purple data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label;`
                htmlFor={`type-${type.value}`}"
                className="text-sm text-zion-slate-light cursor-pointer hover:text-white"
              >
                {type.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* Location Filter */}"
      <div className="mb-6">"
        <label className="text-sm font-medium text-zion-slate-light block mb-2">
          Location;
        </label>"
        <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
          {filterOptions.locations.map((location) => ("
            <div key={location.value} className="flex items-center space-x-2">
              <Checkbox;`
                id={`location-${location.value}`}
                checked={filters.selectedLocations.includes(location.value)}'
                onCheckedChange={() => onFilterChange('locations', location.value)}"
                className="text-zion-purple data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label;`
                htmlFor={`location-${location.value}`}"
                className="text-sm text-zion-slate-light cursor-pointer hover:text-white"
              >
                {location.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* Availability Filter */}"
      <div className="mb-6">"
        <label className="text-sm font-medium text-zion-slate-light block mb-2">
          Availability;
        </label>"
        <div className="space-y-2">
          {filterOptions.availabilityOptions.map((availability) => ("
            <div key={availability.value} className="flex items-center space-x-2">
              <Checkbox;`
                id={`availability-${availability.value}`}
                checked={filters.selectedAvailability.includes(availability.value)}'
                onCheckedChange={() => onFilterChange('availability', availability.value)}"
                className="text-zion-purple data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label;`
                htmlFor={`availability-${availability.value}`}"
                className="text-sm text-zion-slate-light cursor-pointer hover:text-white"
              >
                {availability.label}
              </label>
            </div>
          ))}
        </div>
      </div>      <div className="mb-6">;
          {[null, ...filterOptions && filterOptions.ratingOptions].map((rating) => (;          {[null, ...filterOptions && filterOptions.ratingOptions].map((rating) => (;
            <Button
              key={rating === null ? 'any' : rating}
              variant="outline"
              size="sm"
              onClick={() => onRatingChange(rating)}              }`}
            >;
              {rating === null ? (;"
                "Any";
              ) : (;                <div className="flex items-center">;
                  {[...Array(rating)].map((_, i) => (;

                    <Star key={i} className="h-3 w-3 fill-zion-cyan text-zion-cyan" />;
                  ))}"
                  <span className="ml-1">& Up</span>;
                </div>;
              )}
            </Button>;
          ))}

        </div>;
      </div>;
    </div>;
  );
}

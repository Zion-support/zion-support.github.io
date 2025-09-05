
<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",
import { Checkbox } from "@/components/ui/checkbox",
import { Filter, X, Star } from "lucide-react",
import { FilterOptions } from "@/types/search",
=======
import React from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Checkbox } from &quot;@/components/ui/checkbox&quot;;
import { Filter, X, Star } from &quot;lucide-react&quot;;
import { FilterOptions } from &quot;@/types/search&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface FilterSidebarProps {
  filters: {
    selectedProductTypes: string[],
    selectedLocations: string[],
    selectedAvailability: string[],
    selectedRating: number | null
  },
  filterOptions: FilterOptions,
  onFilterChange: (filterType: string, value: string) => void,
  onRatingChange: (rating: number | null) => void,
  onClearFilters: () => void
}

export function FilterSidebar({
  filters,
  filterOptions,
  onFilterChange,
  onRatingChange,
  onClearFilters
}: FilterSidebarProps) {
  return (
    <div className=&quot;bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4&quot;>
      <div className=&quot;flex items-center justify-between mb-4&quot;>
        <h3 className=&quot;text-lg font-medium text-white flex items-center&quot;>
          <Filter className=&quot;mr-2 h-5 w-5&quot; /> Filters
        </h3>
        <Button 
          variant=&quot;outline&quot; 
          size=&quot;sm&quot;
          className=&quot;border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot;
          onClick={onClearFilters}
        >
          Clear All
        </Button>
      </div>
      
      {/* Product Type Filter */}
      <div className=&quot;mb-6&quot;>
        <label className=&quot;text-sm font-medium text-zion-slate-light block mb-2&quot;>
          Product Type
        </label>
        <div className=&quot;space-y-2&quot;>
          {filterOptions.productTypes.map((type) => (
            <div key={type.value} className=&quot;flex items-center space-x-2&quot;>
              <Checkbox 
                id={`type-${type.value}`} 
                checked={filters.selectedProductTypes.includes(type.value)}
                onCheckedChange={() => onFilterChange('productTypes', type.value)}
                className=&quot;text-zion-purple data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple&quot;
              />
              <label 
                htmlFor={`type-${type.value}`}
                className=&quot;text-sm text-zion-slate-light cursor-pointer hover:text-white&quot;
              >
                {type.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Location Filter */}
      <div className=&quot;mb-6&quot;>
        <label className=&quot;text-sm font-medium text-zion-slate-light block mb-2&quot;>
          Location
        </label>
        <div className=&quot;space-y-2 max-h-40 overflow-y-auto pr-2&quot;>
          {filterOptions.locations.map((location) => (
            <div key={location.value} className=&quot;flex items-center space-x-2&quot;>
              <Checkbox 
                id={`location-${location.value}`} 
                checked={filters.selectedLocations.includes(location.value)}
                onCheckedChange={() => onFilterChange('locations', location.value)}
                className=&quot;text-zion-purple data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple&quot;
              />
              <label 
                htmlFor={`location-${location.value}`}
                className=&quot;text-sm text-zion-slate-light cursor-pointer hover:text-white&quot;
              >
                {location.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Availability Filter */}
      <div className=&quot;mb-6&quot;>
        <label className=&quot;text-sm font-medium text-zion-slate-light block mb-2&quot;>
          Availability
        </label>
        <div className=&quot;space-y-2&quot;>
          {filterOptions.availabilityOptions.map((availability) => (
            <div key={availability.value} className=&quot;flex items-center space-x-2&quot;>
              <Checkbox 
                id={`availability-${availability.value}`} 
                checked={filters.selectedAvailability.includes(availability.value)}
                onCheckedChange={() => onFilterChange('availability', availability.value)}
                className=&quot;text-zion-purple data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple&quot;
              />
              <label 
                htmlFor={`availability-${availability.value}`}
                className=&quot;text-sm text-zion-slate-light cursor-pointer hover:text-white&quot;
              >
                {availability.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Rating Filter */}
      <div className=&quot;mb-6&quot;>
        <label className=&quot;text-sm font-medium text-zion-slate-light block mb-2&quot;>
          Minimum Rating
        </label>
        <div className=&quot;flex flex-wrap gap-2&quot;>
          {[null, ...filterOptions.ratingOptions].map((rating) => (
            <Button
              key={rating === null ? 'any' : rating}
              variant=&quot;outline&quot;
              size=&quot;sm&quot;
              onClick={() => onRatingChange(rating)}
              className={`${
                filters.selectedRating === rating 
                  ? &quot;bg-zion-purple/20 border-zion-purple text-zion-purple&quot; 
                  : &quot;border-zion-blue-light text-zion-slate-light&quot;
              }`}
            >
              {rating === null ? (
                &quot;Any&quot;
              ) : (
                <div className=&quot;flex items-center&quot;>
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className=&quot;h-3 w-3 fill-zion-cyan text-zion-cyan&quot; />
                  ))}
                  <span className=&quot;ml-1&quot;>& Up</span>
                </div>
              )}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

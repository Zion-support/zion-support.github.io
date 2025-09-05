
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
      
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                {_type.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                {_location.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                {_availability.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

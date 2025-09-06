
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {Filter, X, Star} from "lucide-react";
import {FilterOptions} from "@/types/search";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
import { Button } from "@/components/ui/button",
import { Checkbox } from "@/components/ui/checkbox",
<<<<<<< HEAD
import { Filter, X, Star } from "lucide-react";
import { FilterOptions } from "@/types/search";
=======
import { Filter, X, Star } from "lucide-react",
import { FilterOptions } from "@/types/search",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
interface FilterSidebarProps {
  filters: {

    selectedProductTypes: string[]
    selectedLocations: string[]
    selectedAvailability: string[]
    selectedRating: number | null
<<<<<<< HEAD
<<<<<<< HEAD
  }
  filterOptions: FilterOptions
  onFilterChange: (filterType: string, value: string) => void
  onRatingChange: (rating: number | null) => void

=======
  },
  filterOptions: FilterOptions,
  onFilterChange: (filterType: string, value: string) => void,
  onRatingChange: (rating: number | null) => void,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  onClearFilters: () => void
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
export function FilterSidebar({;
  filters;
  filterOptions;
  onFilterChange;
  onRatingChange;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function FilterSidebar({
  filters,
  filterOptions,
  onFilterChange,
  onRatingChange,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  onClearFilters
}: FilterSidebarProps) {
  return (
    <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-white flex items-center">
          <Filter className="mr-2 h-5 w-5" /> Filters
        </h3>
<<<<<<< HEAD
        <Button
          variant="outline"
          size="sm"
          className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
=======
        <Button 
          variant="outline" 
          size="sm"
          className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Checkbox } from "@/components/ui/checkbox",;
import { Filter, X, Star } from "lucide-react",;
import { FilterOptions } from "@/types/search",;
=======

import React from "react";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {Filter, X, Star} from "lucide-react";
import {FilterOptions} from "@/types/search";
>>>>>>> main
interface FilterSidebarProps {;
  filters: {;
    selectedProductTypes: string[],;
    selectedLocations: string[],;
    selectedAvailability: string[],;
    selectedRating: number | null;
<<<<<<< HEAD
  },;
=======
  };
>>>>>>> main
  filterOptions: FilterOptions,;
  onFilterChange: (filterType: string, value: string) => void,;
  onRatingChange: (rating: number | null) => void,;
  onClearFilters: () => void;
}
<<<<<<< HEAD
;
export function FilterSidebar({;
  filters,;
  filterOptions,;
=======

export function FilterSidebar(): any ({;

  filters;
  filterOptions;
>>>>>>> main
  onFilterChange;
  onRatingChange;
  onClearFilters;
}: FilterSidebarProps) {;
<<<<<<< HEAD
  return (;
    <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4">;
      <div className="flex items-center justify-between mb-4">;
        <h3 className="text-lg font-medium text-white flex items-center">;
          <Filter className="mr-2 h-5 w-5" /> Filters;
        </h3>;
        <Button;
          variant="outline";
          size="sm";
          className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  return (


  },
  filterOptions: FilterOptions,
  onFilterChange: (filterType: string, value: string) => void,
  onRatingChange: (rating: number | null) => void,

  onClearFilters: () => void
}



  onClearFilters
}: FilterSidebarProps) {
  return (

    <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-white flex items-center">
          <Filter className="mr-2 h-5 w-5" /> Filters
        </h3>


        <Button 
          variant="outline" 
          size="sm"
          className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"


>>>>>>> main
          onClick={onClearFilters}
        >
          Clear All
        </Button>
      </div>
      {/* Product Type Filter */}
      <div className="mb-6">
        <label className="text-sm font-medium text-zion-slate-light block mb-2">
          Product Type
        </label>
        <div className="space-y-2">
          {filterOptions.productTypes.map((type) => (
            <div key={type.value} className="flex items-center space-x-2">
              <Checkbox
                id={`type-${type.value}`}
                checked={filters.selectedProductTypes.includes(type.value)}
                onCheckedChange={() => onFilterChange('productTypes', type.value)}
                className="text-zion-purple data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label
                htmlFor={`type-${type.value}`}
                className="text-sm text-zion-slate-light cursor-pointer hover:text-white"
              >
                {type.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* Location Filter */}
      <div className="mb-6">
        <label className="text-sm font-medium text-zion-slate-light block mb-2">
          Location
        </label>
        <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
          {filterOptions.locations.map((location) => (
            <div key={location.value} className="flex items-center space-x-2">
              <Checkbox
                id={`location-${location.value}`}
                checked={filters.selectedLocations.includes(location.value)}
                onCheckedChange={() => onFilterChange('locations', location.value)}
                className="text-zion-purple data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label
                htmlFor={`location-${location.value}`}
                className="text-sm text-zion-slate-light cursor-pointer hover:text-white"
              >
                {location.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* Availability Filter */}
      <div className="mb-6">
        <label className="text-sm font-medium text-zion-slate-light block mb-2">
          Availability
        </label>
        <div className="space-y-2">
          {filterOptions.availabilityOptions.map((availability) => (
            <div key={availability.value} className="flex items-center space-x-2">
              <Checkbox
                id={`availability-${availability.value}`}
                checked={filters.selectedAvailability.includes(availability.value)}
                onCheckedChange={() => onFilterChange('availability', availability.value)}
                className="text-zion-purple data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
              />
              <label
                htmlFor={`availability-${availability.value}`}
                className="text-sm text-zion-slate-light cursor-pointer hover:text-white"
              >
                {availability.label}
              </label>
            </div>
          ))}
        </div>
      </div>
<<<<<<< HEAD
      {/* Rating Filter */}
      <div className="mb-6">
        <label className="text-sm font-medium text-zion-slate-light block mb-2">
          Minimum Rating
        </label>
        <div className="flex flex-wrap gap-2">
          {[null, ...filterOptions.ratingOptions].map((rating) => (
=======
=======
    <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4">;
      <div className="flex items-center justify-between mb-4">;
        <h3 className="text-lg font-medium text-white flex items-center">;
          <Filter className="mr-2 h-5 w-5" /> Filters;
        </h3>;
        <Button
          variant="outline" 
          size="sm"
          className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
          onClick={onClearFilters}>;
          Clear All;
        </Button>;
      </div>;

      {/* Product Type Filter */}
      <div className="mb-6">;
        <label className="text-sm font-medium text-zion-slate-light block mb-2">;
          Product Type;
        </label>;
        <div className="space-y-2">;
          {filterOptions && filterOptions.productTypes.map((type) => (;
            <div key={type && type.value} className="flex items-center space-x-2">;
              <Checkbox
                id={`type-${type && type.value}`} 
                checked={filters && filters.selectedProductTypes.includes(type && type.value)}
                onCheckedChange={() => onFilterChange('productTypes', type && type.value)}
                className="text-zion-purple data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
              />;
              <label
                htmlFor={`type-${type && type.value}`}
                className="text-sm text-zion-slate-light cursor-pointer hover:text-white">;
                {type && type.label}
              </label>;
            </div>;
          ))}
        </div>;
      </div>;

      {/* Location Filter */}
      <div className="mb-6">;
        <label className="text-sm font-medium text-zion-slate-light block mb-2">;
          Location;
        </label>;
        <div className="space-y-2 max-h-40 overflow-y-auto pr-2">;
          {filterOptions && filterOptions.locations.map((location) => (;
            <div key={location && location.value} className="flex items-center space-x-2">;
              <Checkbox
                id={`location-${location && location.value}`} 
                checked={filters && filters.selectedLocations.includes(location && location.value)}
                onCheckedChange={() => onFilterChange('locations', location && location.value)}
                className="text-zion-purple data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
              />;
              <label
                htmlFor={`location-${location && location.value}`}
                className="text-sm text-zion-slate-light cursor-pointer hover:text-white">;
                {location && location.label}
              </label>;
            </div>;
          ))}
        </div>;
      </div>;

      {/* Availability Filter */}
      <div className="mb-6">;
        <label className="text-sm font-medium text-zion-slate-light block mb-2">;
          Availability;
        </label>;
        <div className="space-y-2">;
          {filterOptions && filterOptions.availabilityOptions.map((availability) => (;
            <div key={availability && availability.value} className="flex items-center space-x-2">;
              <Checkbox
                id={`availability-${availability && availability.value}`} 
                checked={filters && filters.selectedAvailability.includes(availability && availability.value)}
                onCheckedChange={() => onFilterChange('availability', availability && availability.value)}
                className="text-zion-purple data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
              />;
              <label
                htmlFor={`availability-${availability && availability.value}`}
                className="text-sm text-zion-slate-light cursor-pointer hover:text-white">;
                {availability && availability.label}
              </label>;
            </div>;
          ))}
        </div>;
      </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Rating Filter */}
      <div className="mb-6">;
        <label className="text-sm font-medium text-zion-slate-light block mb-2">;
          Minimum Rating;
        </label>;
        <div className="flex flex-wrap gap-2">;
          {[null, ...filterOptions && filterOptions.ratingOptions].map((rating) => (;
>>>>>>> main
            <Button
              key={rating === null ? 'any' : rating}
              variant="outline"
              size="sm"
              onClick={() => onRatingChange(rating)}
<<<<<<< HEAD
              className={`${
                filters.selectedRating === rating
                  ? "bg-zion-purple/20 border-zion-purple text-zion-purple"
                  : "border-zion-blue-light text-zion-slate-light"
              }`}
            >
              {rating === null ? (
                "Any"
              ) : (
                <div className="flex items-center">
                  {[...Array(rating)].map((_, i) => (
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
  )
}
=======

              className={`${;
                filters && filters.selectedRating === rating ;
                  ? "bg-zion-purple/20 border-zion-purple text-zion-purple" ;
                  : "border-zion-blue-light text-zion-slate-light";

              }`}
            >;
              {rating === null ? (;
                "Any";
              ) : (;
                <div className="flex items-center">;
                  {[...Array(rating)].map((_, i) => (;
                    <Star key={i} className="h-3 w-3 fill-zion-cyan text-zion-cyan" />;
                  ))}
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

=======
import React from './react';
import { Button } from '@/components / ui / button';
import { Checkbox } from '@/components / ui / checkbox';
import { Filter, X, Star } from './lucide-react';
import { FilterOptions } from '@/types / search';
interface FilterSidebarProps {
  filters: {
    selectedProductTypes: string[],
    selected_locations: string[],
    selected_availability: string[],
    selected_rating: number | null;
  }
  filter_options: FilterOptions,
  onFilterChange: (filter_type: string, value: string) => void,
  onRatingChange: (rating: number | null) => void,
  onClearFilters: () => void;
}
export /**
 * FilterSidebar - Function description
 */
function FilterSidebar() {
  return (
    <div className="bg - zion - blue - dark rounded - lg border border - zion - blue - light p - 4">;
      <div className="flex items - center justify - between mb - 4">;
        <h3 className="text - lg font - medium text - white flex items - center">;
          <Filter className="mr - 2 h - 5 w - 5" /> Filters;
        </h3>;
        <Button;
          variant="outline";
          size="sm";
          className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
          on_click={onClearFilters}
        >;
          Clear All;
        </Button>;
      </div>;
      {/* Product Type Filter */}
      <div className="mb - 6">;
        <label className="text - sm font - medium text - zion - slate - light block mb - 2">;
          Product Type;
        </label>;
        <div className="space - y-2">;
          {filter_options.product_types.map ((type) => (
            <div key={type.value} className="flex items - center space - x-2">;
              <Checkbox;
                id={`type-${type.value}`}
                checked={filters.selectedProductTypes.includes (type.value)}
                onCheckedChange={() => onFilterChange ('product_types', type.value)}
                className="text - zion - purple data-[state = checked]:bg - zion - purple data-[state = checked]:border - zion - purple";
              />;
              <label;
                html_for={`type-${type.value}`}
                className="text - sm text - zion - slate - light cursor - pointer hover:text - white";
              >;
                {type.label}
              </label>;
            </div>))}
        </div>;
      </div>;
      {/* Location Filter */}
      <div className="mb - 6">;
        <label className="text - sm font - medium text - zion - slate - light block mb - 2">;
          Location;
        </label>;
        <div className="space - y-2 max - h-40 overflow - y-auto pr - 2">;
          {filter_options.locations.map ((location) => (
            <div key={location.value} className="flex items - center space - x-2">;
              <Checkbox;
                id={`location-${location.value}`}
                checked={filters.selected_locations.includes (location.value)}
                onCheckedChange={() => onFilterChange ('locations', location.value)}
                className="text - zion - purple data-[state = checked]:bg - zion - purple data-[state = checked]:border - zion - purple";
              />;
              <label;
                html_for={`location-${location.value}`}
                className="text - sm text - zion - slate - light cursor - pointer hover:text - white";
              >;
                {location.label}
              </label>;
            </div>))}
        </div>;
      </div>;
      {/* Availability Filter */}
      <div className="mb - 6">;
        <label className="text - sm font - medium text - zion - slate - light block mb - 2">;
          Availability;
        </label>;
        <div className="space - y-2">;
          {filter_options.availability_options.map ((availability) => (
            <div key={availability.value} className="flex items - center space - x-2">;
              <Checkbox;
                id={`availability-${availability.value}`}
                checked={filters.selected_availability.includes (availability.value)}
                onCheckedChange={() => onFilterChange ('availability', availability.value)}
                className="text - zion - purple data-[state = checked]:bg - zion - purple data-[state = checked]:border - zion - purple";
              />;
              <label;
                html_for={`availability-${availability.value}`}
                className="text - sm text - zion - slate - light cursor - pointer hover:text - white";
              >;
                {availability.label}
              </label>;
            </div>))}
        </div>;
      </div>;
      {/* Rating Filter */}
      <div className="mb - 6">;
        <label className="text - sm font - medium text - zion - slate - light block mb - 2">;
          Minimum Rating;
        </label>;
        <div className="flex flex - wrap gap - 2">;
          {[null, ...filter_options.rating_options].map ((rating) => (
            <Button;
              key={rating === null ? 'any' : rating}
              variant="outline";
              size="sm";
              on_click={() => onRatingChange (rating)}
              className={`${
                filters.selected_rating === rating;
                  ? "bg - zion - purple / 20 border - zion - purple text - zion - purple";
                  : "border - zion - blue - light text - zion - slate - light";
              }`}
            >;
              {rating === null ? (
                "Any") : (
                <div className="flex items - center">;
                  {[...Array (rating)].map ((_, i) => (
                    <Star key={i} className="h - 3 w - 3 fill - zion - cyan text - zion - cyan" />))}
                  <span className="ml - 1">& Up</span>;
                </div>)}
            </Button>))}
        </div>;
      </div>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main

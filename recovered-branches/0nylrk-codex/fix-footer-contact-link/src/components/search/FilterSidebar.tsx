


<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {Filter, X, Star} from "lucide-react";
import {FilterOptions} from "@/types/search";
import React from "react",
import { Button } from "@/components/ui/button",
import { Checkbox } from "@/components/ui/checkbox",
import { Filter, X, Star } from "lucide-react";
import { FilterOptions } from "@/types/search";
import { Filter, X, Star } from "lucide-react",
import { FilterOptions } from "@/types/search",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface FilterSidebarProps {
  filters: {

    selectedProductTypes: string[]
    selectedLocations: string[]
    selectedAvailability: string[]
    selectedRating: number | null
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  filterOptions: FilterOptions
  onFilterChange: (filterType: string, value: string) => void
  onRatingChange: (rating: number | null) => void

<<<<<<< HEAD
  },
  filterOptions: FilterOptions,
  onFilterChange: (filterType: string, value: string) => void,
  onRatingChange: (rating: number | null) => void,
  onClearFilters: () => void
}

export function FilterSidebar({;
  filters;
  filterOptions;
  onFilterChange;
  onRatingChange;
export function FilterSidebar({
  filters,
  filterOptions,
  onFilterChange,
  onRatingChange,
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
        <Button 
          variant="outline" 
          size="sm"
          className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Checkbox } from "@/components/ui/checkbox",;
import { Filter, X, Star } from "lucide-react",;
import { FilterOptions } from "@/types/search",;
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {Filter, X, Star} from "lucide-react";
import {FilterOptions} from "@/types/search";
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface FilterSidebarProps {;
  filters: {;
    selectedProductTypes: string[],;
    selectedLocations: string[],;
    selectedAvailability: string[],;
    selectedRating: number | null;
<<<<<<< HEAD
<<<<<<< HEAD
  },;
=======
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  filterOptions: FilterOptions,;
  onFilterChange: (filterType: string, value: string) => void,;
  onRatingChange: (rating: number | null) => void,;
  onClearFilters: () => void;
}
<<<<<<< HEAD
<<<<<<< HEAD
  filters;
  filterOptions;
;
export function FilterSidebar({;
  filters,;
  filterOptions,;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function FilterSidebar(): any ({;

  filters;
  filterOptions;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  onFilterChange;
  onRatingChange;
  onClearFilters;
}: FilterSidebarProps) {;
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  return (
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Checkbox } from "@/components/ui/checkbox",;
import { Filter, X, Star } from "lucide-react",;
import { FilterOptions } from "@/types/search",;
;
interface FilterSidebarProps {;
  filters:{;
    selectedProductTypes:string[],;
    selectedLocations:string[],;
    selectedAvailability:string[],;
    selectedRating:number | null;
  },;
  filterOptions:FilterOptions,;
  onFilterChange:(filterType:string, value:string) => void,;
  onRatingChange:(rating:number | null) => void,;
  onClearFilters:() => void;
}
;
export function FilterSidebar({;
  filters,;
  filterOptions,;
  onFilterChange,;
  onRatingChange,;
  onClearFilters;
} FilterSidebarProps) {;
  return (;
    <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4">;
      <div className="flex items-center justify-between mb-4">;
        <h3 className="text-lg font-medium text-white flex items-center">;
          <Filter className="mr-2 h-5 w-5" /> Filters;
        </h3>;
        <Button ;
          variant="outline" ;
          size="sm";
          className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";  filters: {
  selectedProductTypes: string[];
selectedLocations: string[];
selectedAvailability: string[];
selectedRating: number | null 
};
filterOptions: FilterOptions;
onFilterChange: (filterType: string, value: string) => void;
onRatingChange: (rating: number | null) => void;
onClearFilters: () => void 
}export function FilterSidebar ({
  filters;
filterOptions;
onFilterChange;
onRatingChange;
onClearFilters 
}: FilterSidebarProps) {
  return (
    <div className=&quot;bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4&quot;>
      <div className=&quot;flex items-center justify-between mb-4&quot;>
        <h3 className=&quot;text-lg font-medium text-white flex items-center&quot;>
          <Filter className=&quot;mr-2 h-5 w-5&quot; /> Filters
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
          variant=&quot;outline&quot; 
          size=&quot;sm&quot;
          className=&quot;border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot;
          onClick={onClearFilters}
        >;
          Clear All;
        </Button>;
      </div>;
      ;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Product Type Filter */}
      <div className="mb-6">;
        <label className="text-sm font-medium text-zion-slate-light block mb-2">;
          Product Type;
        </label>;
        <div className="space-y-2">;
<<<<<<< HEAD
          {filterOptions.productTypes.map((type) => (;
            <div key={type.value} className="flex items-center space-x-2">;
              <Checkbox ;
                id={`type-${type.value}`} ;
                checked={filters.selectedProductTypes.includes(type.value)}
                onCheckedChange={() => onFilterChange('productTypes', type.value)}
                className="text-zion-purple data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
              />;
              <label ;
                htmlFor={`type-${type.value}`}
                className="text-sm text-zion-slate-light cursor-pointer hover:text-white";
              >;
                {type.label}
              </label>;
            </div>;          ))}
        </div>;
      </div>;
      ;
=======
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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Location Filter */}
      <div className="mb-6">;
        <label className="text-sm font-medium text-zion-slate-light block mb-2">;
          Location;
        </label>;
        <div className="space-y-2 max-h-40 overflow-y-auto pr-2">;
<<<<<<< HEAD
          {filterOptions.locations.map((location) => (;
            <div key={location.value} className="flex items-center space-x-2">;
              <Checkbox ;
                id={`location-${location.value}`} ;
                checked={filters.selectedLocations.includes(location.value)}
                onCheckedChange={() => onFilterChange('locations', location.value)}
                className="text-zion-purple data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
              />;
              <label ;
                htmlFor={`location-${location.value}`}
                className="text-sm text-zion-slate-light cursor-pointer hover:text-white";
              >;
                {location.label}
              </label>;
            </div>;          ))}
        </div>;
      </div>;
      ;
=======
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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Availability Filter */}
      <div className="mb-6">;
        <label className="text-sm font-medium text-zion-slate-light block mb-2">;
          Availability;
        </label>;
        <div className="space-y-2">;
<<<<<<< HEAD
          {filterOptions.availabilityOptions.map((availability) => (;
            <div key={availability.value} className="flex items-center space-x-2">;
              <Checkbox ;
                id={`availability-${availability.value}`} ;
                checked={filters.selectedAvailability.includes(availability.value)}
                onCheckedChange={() => onFilterChange('availability', availability.value)}
                className="text-zion-purple data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
              />;
              <label ;
                htmlFor={`availability-${availability.value}`}
                className="text-sm text-zion-slate-light cursor-pointer hover:text-white";
              >;
                {availability.label}
              </label>;
            </div>;          ))}
        </div>;
      </div>;
      ;
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Rating Filter */}
      <div className="mb-6">;
        <label className="text-sm font-medium text-zion-slate-light block mb-2">;
          Minimum Rating;
        </label>;
        <div className="flex flex-wrap gap-2">;
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Rating Filter */}
      <div className="mb-6">
        <label className="text-sm font-medium text-zion-slate-light block mb-2">
          Minimum Rating
        </label>
        <div className="flex flex-wrap gap-2">
          {[null, ...filterOptions.ratingOptions].map((rating) => (
=======
          {[null, ...filterOptions && filterOptions.ratingOptions].map((rating) => (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          {[null, ...filterOptions && filterOptions.ratingOptions].map((rating) => (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button
              key={rating === null ? 'any' : rating}
              variant="outline"
              size="sm"
              onClick={() => onRatingChange(rating)}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className={`${;
                filters && filters.selectedRating === rating ;
                  ? "bg-zion-purple/20 border-zion-purple text-zion-purple" ;
                  : "border-zion-blue-light text-zion-slate-light";
<<<<<<< HEAD
          {[null, ...filterOptions.ratingOptions].map((rating) => (;
            <Button;
              key={rating === null ? 'any' :rating}
              variant="outline";
              size="sm";
              onClick={() => onRatingChange(rating)}
              className={`${;
                filters.selectedRating === rating ;
                  ? "bg-zion-purple/20 border-zion-purple text-zion-purple" ;
                  :"border-zion-blue-light text-zion-slate-light";
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              }`}
            >;
              {rating === null ? (;
                "Any";
<<<<<<< HEAD
              ) :(;
=======
              ) : (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="flex items-center">;
                  {[...Array(rating)].map((_, i) => (;
                    <Star key={i} className="h-3 w-3 fill-zion-cyan text-zion-cyan" />;
                  ))}
                  <span className="ml-1">& Up</span>;
<<<<<<< HEAD
                </div>;              )}
            </Button>;
          ))}
        </div>;
      </div>;
    </div>;
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
  ),;}
  return (<div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4" > <div className="flex items-center justify-between mb-4" > <h3 className="text-lg font-medium text-white flex items-center" > <Filter className="mr-2 h-5 w-5" /> Filters outline"size=" sm"className=" border-zion-purple text-zion-purple hover:bg-zion-purple/10"onClick= {
  onClearFilters 
}> Clear All </Button> </div> > {
  type.label 
}</label> </div>) ) 
}</div> </div> > {
  location.label 
}</label> </div>) ) 
}</div> </div> > {
  availability.label 
}</label> </div>) ) 
}</div> </div>) ) 
}<span className=" ml-1" >& Up</span> </div>) 
}</Button>) ) 
}</div> </div> </div>) 
}
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

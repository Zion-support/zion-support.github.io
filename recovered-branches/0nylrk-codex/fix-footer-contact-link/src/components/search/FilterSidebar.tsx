
<<<<<<< HEAD




interface FilterSidebarProps {
  filters: {

    selectedProductTypes: string[]
    selectedLocations: string[]
    selectedAvailability: string[]
    selectedRating: number | null



import React from "react";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {Filter, X, Star} from "lucide-react";
import {FilterOptions} from "@/types/search";


interface FilterSidebarProps {;
  filters: {;
    selectedProductTypes: string[],;
    selectedLocations: string[],;
    selectedAvailability: string[],;
    selectedRating: number | null;


=======
import React from "react";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {Filter, X, Star} from "lucide-react";
import {FilterOptions} from "@/types/search";

  };
>>>>>>> origin/cursor/delete-old-data-records-6bba
  filterOptions: FilterOptions,;
  onFilterChange: (filterType: string, value: string) => void,;
  onRatingChange: (rating: number | null) => void,;
  onClearFilters: () => void;

}

<<<<<<< HEAD
=======
export function FilterSidebar(): any ({;

  filters;
  filterOptions;
>>>>>>> origin/cursor/delete-old-data-records-6bba


  filterOptions: FilterOptions
  onFilterChange: (filterType: string, value: string) => void
  onRatingChange: (rating: number | null) => void

export function FilterSidebar({

export function FilterSidebar({;
  filters;
  filterOptions;
<<<<<<< HEAD

  onFilterChange;
  onRatingChange;

  onClearFilters;
}: FilterSidebarProps) {;
=======
  onFilterChange;
  onRatingChange;
>>>>>>> origin/cursor/delete-old-data-records-6bba


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

import React from "react",;
import { Button } from "@/components/ui/button",;
import { Checkbox } from "@/components/ui/checkbox",;
import { Filter, X, Star } from "lucide-react",;
import { FilterOptions } from "@/types/search",;

import React from "react";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {Filter, X, Star} from "lucide-react";
import {FilterOptions} from "@/types/search";

interface FilterSidebarProps {;
  filters: {;

    selectedProductTypes: string[],;
    selectedLocations: string[],;
    selectedAvailability: string[],;

  filterOptions: FilterOptions,;
  onFilterChange: (filterType: string, value: string) => void,;
  onRatingChange: (rating: number | null) => void,;
  onClearFilters: () => void;

}

export function FilterSidebar(): any ({;

  filters;
  filterOptions;

  onFilterChange;
  onRatingChange;
  onClearFilters;
}: FilterSidebarProps) {;

    <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4">;
      <div className="flex items-center justify-between mb-4">;
        <h3 className="text-lg font-medium text-white flex items-center">;
          <Filter className="mr-2 h-5 w-5" /> Filters;
        </h3>;
        <Button;
          variant="outline";
          size="sm";
          className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";

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


    <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4">;
      <div className="flex items-center justify-between mb-4">;
        <h3 className="text-lg font-medium text-white flex items-center">;

          <Filter className="mr-2 h-5 w-5" /> Filters;
        </h3>;
        <Button"
          variant="outline" "
          size="sm""

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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

};
filterOptions: FilterOptions;
onFilterChange: (filterType: string, value: string) => void;
onRatingChange: (rating: number | null) => void;

<<<<<<< HEAD
onClearFilters: () => void 
}export function FilterSidebar ({
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  filters;
filterOptions;
onFilterChange;
onRatingChange;

<<<<<<< HEAD
onClearFilters 
}: FilterSidebarProps) {
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  return (
    <div className=&quot;bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4&quot;>
      <div className=&quot;flex items-center justify-between mb-4&quot;>
        <h3 className=&quot;text-lg font-medium text-white flex items-center&quot;>

<<<<<<< HEAD
          <Filter className=&quot;mr-2 h-5 w-5&quot; /> Filters
import React from "react";

interface FilterSidebarProps {_filters: {

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
    selectedProductTypes: string[];
    selectedLocations: string[];
    selectedAvailability: string[];
    selectedRating: number | null;};
  filterOptions: FilterOptions;
  onFilterChange: (_filterType: string, _value: string) => void;
  onRatingChange: (_rating: number | null) => void;
<<<<<<< HEAD

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
      {/* Product Type Filter */}
      <div className="mb-6">;
        <label className="text-sm font-medium text-zion-slate-light block mb-2">;
          Product Type;
        </label>;
        <div className="space-y-2">;
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
      {/* Location Filter */}
      <div className="mb-6">;
        <label className="text-sm font-medium text-zion-slate-light block mb-2">;
          Location;
        </label>;
        <div className="space-y-2 max-h-40 overflow-y-auto pr-2">;
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
      {/* Availability Filter */}
      <div className="mb-6">;
        <label className="text-sm font-medium text-zion-slate-light block mb-2">;
          Availability;
        </label>;
        <div className="space-y-2">;
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
      {/* Rating Filter */}
      <div className="mb-6">;
        <label className="text-sm font-medium text-zion-slate-light block mb-2">;
          Minimum Rating;
        </label>;
        <div className="flex flex-wrap gap-2">;

=======

          {[null, ...filterOptions && filterOptions.ratingOptions].map((rating) => (;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <Button
              key={rating === null ? 'any' : rating}
              variant="outline"
              size="sm"
<<<<<<< HEAD
              onClick={() => onRatingChange(rating)}


=======

              className={`${;
                filters && filters.selectedRating === rating ;
                  ? "bg-zion-purple/20 border-zion-purple text-zion-purple" ;
                  : "border-zion-blue-light text-zion-slate-light";
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
              }`}
            >;
              {rating === null ? (;"
                "Any";

                  {[...Array(rating)].map((_, i) => (;

                    <Star key={i} className="h-3 w-3 fill-zion-cyan text-zion-cyan" />;
                  ))}"
                  <span className="ml-1">& Up</span>;

            </Button>;
          ))}
        </div>;
      </div>;
    </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  onClearFilters: () => void;
}

          onClick={onClearFilters}
        >;
          Clear All;
        </Button>;
      </div>;
      ;

                className="text-sm text-zion-slate-light cursor-pointer hover:text-white";
              >;
                {type.label}
              </label>;
            </div>;          ))}
        </div>;
      </div>;
      ;

                className="text-sm text-zion-slate-light cursor-pointer hover:text-white";
              >;
                {location.label}
              </label>;
            </div>;          ))}
        </div>;
      </div>;
      ;

                className="text-sm text-zion-slate-light cursor-pointer hover:text-white";
              >;
                {availability.label}
              </label>;
            </div>;          ))}
        </div>;
      </div>;

      {/* Rating Filter */}
      <div className="mb-6">;

            <Button
              key={rating === null ? 'any' : rating}
              variant="outline"
              size="sm"

            >;
              {rating === null ? (;"
                "Any";

                  {[...Array(rating)].map((_, i) => (;

                    <Star key={i} className="h-3 w-3 fill-zion-cyan text-zion-cyan" />;
                  ))}"
                  <span className="ml-1">& Up</span>;

            </Button>;
          ))}
        </div>;
      </div>;

<<<<<<< HEAD
    </div>);
}



=======
  filters: {}
>>>>>>> origin/cursor/delete-old-data-records-6bba

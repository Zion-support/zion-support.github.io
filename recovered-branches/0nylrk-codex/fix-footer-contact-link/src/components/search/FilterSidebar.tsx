<<<<<<< HEAD
=======
<<<<<<< HEAD
=======



<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from "react";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {Filter, X, Star} from "lucide-react";
import {FilterOptions} from "@/types/search";
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from "react",
import { Button } from "@/components/ui/button",
import { Checkbox } from "@/components/ui/checkbox",
import { Filter, X, Star } from "lucide-react";
import { FilterOptions } from "@/types/search";
import { Filter, X, Star } from "lucide-react",
<<<<<<< HEAD

interface FilterSidebarProps {
  filters: {

interface FilterSidebarProps {}
  filters: {}
    selectedProductTypes: string[]
    selectedLocations: string[]
    selectedAvailability: string[];
    selectedRating: number | null;
  }

  filterOptions: FilterOptions
  onFilterChange: (filterType: string, value: string) => void
  onRatingChange: (rating: number | null) => void

export function FilterSidebar({

=======
import { FilterOptions } from "@/types/search",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface FilterSidebarProps {
  filters: {

    selectedProductTypes: string[]
    selectedLocations: string[]
    selectedAvailability: string[]
    selectedRating: number | null
<<<<<<< HEAD
  }
  filterOptions: FilterOptions
  onFilterChange: (filterType: string, value: string) => void
  onRatingChange: (rating: number | null) => void

  },
  filterOptions: FilterOptions,
  onFilterChange: (filterType: string, value: string) => void,
  onRatingChange: (rating: number | null) => void,
  onClearFilters: () => void
}

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function FilterSidebar({;
  filters;
  filterOptions;
  onFilterChange;
  onRatingChange;

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
<<<<<<< HEAD

=======
        <Button
          variant="outline"
          size="sm"
          className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
        <Button 
          variant="outline" 
          size="sm"
          className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Checkbox } from "@/components/ui/checkbox",;
import { Filter, X, Star } from "lucide-react",;
import { FilterOptions } from "@/types/search",;
<<<<<<< HEAD

=======
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from "react";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {Filter, X, Star} from "lucide-react";
import {FilterOptions} from "@/types/search";
<<<<<<< HEAD

=======
<<<<<<< HEAD

import React from "react",
import { Button } from "@/components/ui/button",
import { Checkbox } from "@/components/ui/checkbox",
import { Filter, X, Star } from "lucide-react";
import { FilterOptions } from "@/types/search";
import { Filter, X, Star } from "lucide-react",

interface FilterSidebarProps {
  filters: {

interface FilterSidebarProps {}
  filters: {}
    selectedProductTypes: string[]
    selectedLocations: string[]
    selectedAvailability: string[];
    selectedRating: number | null;
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface FilterSidebarProps {;
  filters: {;

    selectedProductTypes: string[],;
    selectedLocations: string[],;
    selectedAvailability: string[],;
<<<<<<< HEAD

=======
    selectedRating: number | null;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  },;
=======
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  filterOptions: FilterOptions,;
  onFilterChange: (filterType: string, value: string) => void,;
  onRatingChange: (rating: number | null) => void,;
  onClearFilters: () => void;

}
<<<<<<< HEAD

export function FilterSidebar(): any ({;

  filters;
  filterOptions;

=======
<<<<<<< HEAD
  filters;
  filterOptions;
;
export function FilterSidebar({;
  filters,;
  filterOptions,;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  filterOptions: FilterOptions
  onFilterChange: (filterType: string, value: string) => void
  onRatingChange: (rating: number | null) => void

export function FilterSidebar({

export function FilterSidebar({;
  filters;
  filterOptions;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  onFilterChange;
  onRatingChange;
<<<<<<< HEAD
=======
  onClearFilters;
}: FilterSidebarProps) {;
<<<<<<< HEAD

=======
<<<<<<< HEAD
  return (;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (


  },
  filterOptions: FilterOptions,
  onFilterChange: (filterType: string, value: string) => void,
  onRatingChange: (rating: number | null) => void,

  onClearFilters: () => void
}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD

=======
<<<<<<< HEAD
      </div>
=======
<<<<<<< HEAD

=======
      </div>
<<<<<<< HEAD
  return (
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
=======
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Checkbox } from "@/components/ui/checkbox",;
import { Filter, X, Star } from "lucide-react",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

=======
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
};
filterOptions: FilterOptions;
onFilterChange: (filterType: string, value: string) => void;
onRatingChange: (rating: number | null) => void;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
onClearFilters: () => void 
}export function FilterSidebar ({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  filters;
filterOptions;
onFilterChange;
onRatingChange;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
onClearFilters 
}: FilterSidebarProps) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
    <div className=&quot;bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4&quot;>
      <div className=&quot;flex items-center justify-between mb-4&quot;>
        <h3 className=&quot;text-lg font-medium text-white flex items-center&quot;>
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
          <Filter className=&quot;mr-2 h-5 w-5&quot; /> Filters
import React from "react";

interface FilterSidebarProps {_filters: {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

=======
<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          onClick={onClearFilters}
        >;
          Clear All;
        </Button>;
      </div>;
      ;
<<<<<<< HEAD

=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                className="text-sm text-zion-slate-light cursor-pointer hover:text-white";
              >;
                {type.label}
              </label>;
            </div>;          ))}
        </div>;
      </div>;
      ;
<<<<<<< HEAD

=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                className="text-sm text-zion-slate-light cursor-pointer hover:text-white";
              >;
                {location.label}
              </label>;
            </div>;          ))}
        </div>;
      </div>;
      ;
<<<<<<< HEAD

=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                className="text-sm text-zion-slate-light cursor-pointer hover:text-white";
              >;
                {availability.label}
              </label>;
            </div>;          ))}
        </div>;
      </div>;
<<<<<<< HEAD

      {/* Rating Filter */}
      <div className="mb-6">;

=======
      ;
      {/* Rating Filter */}
      <div className="mb-6">;
        <label className="text-sm font-medium text-zion-slate-light block mb-2">;
          Minimum Rating;
        </label>;
        <div className="flex flex-wrap gap-2">;
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <Button
              key={rating === null ? 'any' : rating}
              variant="outline"
              size="sm"
<<<<<<< HEAD

=======
              onClick={() => onRatingChange(rating)}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            >;
              {rating === null ? (;"
                "Any";
<<<<<<< HEAD

=======
              ) :(;
                <div className="flex items-center">;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  {[...Array(rating)].map((_, i) => (;

                    <Star key={i} className="h-3 w-3 fill-zion-cyan text-zion-cyan" />;
                  ))}"
                  <span className="ml-1">& Up</span>;
<<<<<<< HEAD

=======
                </div>;              )}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </Button>;
          ))}
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
    </div>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import React from './react';
import { Button } from '@/components / ui / button';
import { Checkbox } from '@/components / ui / checkbox';
import { Filter, X, Star } from './lucide-react';

import { FilterOptions } from '@/types / search';
interface FilterSidebarProps {}
<<<<<<< HEAD
  filters: {}
=======
  filters: {}
=======
    </div>);
}
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
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

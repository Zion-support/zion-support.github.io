
import React from "react";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {Filter, X, Star} from "lucide-react";
import {FilterOptions} from "@/types/search";

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
interface FilterSidebarProps {
  filters: {
import React from "react","
import { Button } from "@/components/ui/button","
import { Checkbox } from "@/components/ui/checkbox",";
import { Filter, X, Star } from "lucide-react";"
import { FilterOptions } from "@/types/search";"
import { Filter, X, Star } from "lucide-react","
import { FilterOptions } from "@/types/search",

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

  onClearFilters: () => void
}

export function FilterSidebar({
export function FilterSidebar({;
  filters;
  filterOptions;
  onFilterChange;
  onRatingChange;
export function FilterSidebar({}
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
import { FilterOptions } from "@/types/search",  filters: {;
import { FilterOptions } from "@/types/search",  filters: {;
    selectedProductTypes: string[],;
    selectedLocations: string[],;
    selectedAvailability: string[],;
selectedRating: number | null
};  };
interface FilterSidebarProps {;
  filters: {;
    selectedProductTypes: string[],;
    selectedLocations: string[],;
    selectedAvailability: string[],;
    selectedRating: number | null;
  };
  };
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
      </div>
    <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4">;
      <div className="flex items-center justify-between mb-4">;
        <h3 className="text-lg font-medium text-white flex items-center">;

"
    <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4">;"
      <div className="flex items-center justify-between mb-4">;"
        <h3 className="text-lg font-medium text-white flex items-center">;"
          <Filter className="mr-2 h-5 w-5" /> Filters;
        </h3>;
        <Button"
          variant="outline" "
          size="sm""
      </div>
return (
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

"
import React from "react",;"
import { Button } from "@/components/ui/button",;"
import { Checkbox } from "@/components/ui/checkbox",;"
import { Filter, X, Star } from "lucide-react",;"
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
export function FilterSidebar() { return null; }
          className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";  filters: {}
  selectedProductTypes: string[];
selectedLocations: string[];
selectedAvailability: string[];
selectedRating: number | null;
};
filterOptions: FilterOptions;
onFilterChange: (filterType: string, value: string) => void;
onRatingChange: (rating: number | null) => void;
onClearFilters: () => void;
}export function FilterSidebar ({};
  filters;
filterOptions;
onFilterChange;
onRatingChange;
onClearFilters;
}: FilterSidebarProps) {}
  return (
    <div className=&quot;bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4&quot;>
      <div className=&quot;flex items-center justify-between mb-4&quot;>
        <h3 className=&quot;text-lg font-medium text-white flex items-center&quot;>
<Filter className=&quot;mr-2 h-5 w-5&quot; /> Filters"
import React from "react";

interface FilterSidebarProps {_filters: {}
    selectedProductTypes: string[];
    selectedLocations: string[];
    selectedAvailability: string[];
    selectedRating: number | null;};
  filterOptions: FilterOptions;
  onFilterChange: (_filterType: string, _value: string) => void;
  onRatingChange: (_rating: number | null) => void;
  onClearFilters: () => void;
}
"
export function FilterSidebar() { return null; }
          onClick={onClearFilters}
        >;
          Clear All;
        </Button>;
      </div>;
      ;
{/* Product Type Filter */}"
      <div className="mb-6">;"
        <label className="text-sm font-medium text-zion-slate-light block mb-2">;
          Product Type;
        </label>;"
        <div className="space-y-2">;

          {filterOptions.productTypes.map((type) => (;"
            <div key={type.value} className="flex items-center space-x-2">;
              <Checkbox ;`
                id={`type-${type.value}`} ;
                checked={filters.selectedProductTypes.includes(type.value)}'
                onCheckedChange={() => onFilterChange('productTypes', type.value)}"
                className="text-zion-purple data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
              />;
              <label ;`
                htmlFor={`type-${type.value}`}"
                className="text-sm text-zion-slate-light cursor-pointer hover:text-white";
              >;
                {type.label}
              </label>;
            </div>;          ))}
        </div>;
      </div>;
      ;
{/* Location Filter */}"
      <div className="mb-6">;"
        <label className="text-sm font-medium text-zion-slate-light block mb-2">;
          Location;
        </label>;"
        <div className="space-y-2 max-h-40 overflow-y-auto pr-2">;

          {filterOptions.locations.map((location) => (;"
            <div key={location.value} className="flex items-center space-x-2">;
              <Checkbox ;`
                id={`location-${location.value}`} ;
                checked={filters.selectedLocations.includes(location.value)}'
                onCheckedChange={() => onFilterChange('locations', location.value)}"
                className="text-zion-purple data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
              />;
              <label ;`
                htmlFor={`location-${location.value}`}"
                className="text-sm text-zion-slate-light cursor-pointer hover:text-white";
              >;
                {location.label}
              </label>;
            </div>;          ))}
        </div>;
      </div>;
      ;
{/* Availability Filter */}"
      <div className="mb-6">;"
        <label className="text-sm font-medium text-zion-slate-light block mb-2">;
          Availability;
        </label>;"
        <div className="space-y-2">;

          {filterOptions.availabilityOptions.map((availability) => (;"
            <div key={availability.value} className="flex items-center space-x-2">;
              <Checkbox ;`
                id={`availability-${availability.value}`} ;
                checked={filters.selectedAvailability.includes(availability.value)}'
                onCheckedChange={() => onFilterChange('availability', availability.value)}"
                className="text-zion-purple data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
              />;
              <label ;`
                htmlFor={`availability-${availability.value}`}"
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
      </div>      <div className="mb-6">;

      {/* Rating Filter */}"
      <div className="mb-6">;"
      ;
      {/* Rating Filter */}
      <div className="mb-6">;
        <label className="text-sm font-medium text-zion-slate-light block mb-2">;
          Minimum Rating;
        </label>;"
        <div className="flex flex-wrap gap-2">;
{[null, ...filterOptions && filterOptions.ratingOptions].map((rating) => (;          {[null, ...filterOptions && filterOptions.ratingOptions].map((rating) => (;
            <Button
              key={rating === null ? 'any' : rating}
              variant="outline"
              size="sm"
onClick={() => onRatingChange(rating)}              }`}
              onClick={() => onRatingChange(rating)}

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
) : (;                <div className="flex items-center">;
                  {[...Array(rating)].map((_, i) => (;

"
                <div className="flex items-center">;
                  {[...Array(rating)].map((_, i) => (;"
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

            </Button>;
          ))}
        </div>;
      </div>;
    </div>;
import React from './react';
import { Button } from '@/components / ui / button';
import { Checkbox } from '@/components / ui / checkbox';
import { Filter, X, Star } from './lucide-react';

import { FilterOptions } from '@/types / search';
interface FilterSidebarProps {}
  filters: {}
import { FilterOptions } from '@/types / search';

import React from "react";""
import {Button} from "@/components/ui/button";""
import {Checkbox} from "@/components/ui/checkbox";""
import {Filter, X, Star} from "lucide-react";""
import {FilterOptions} from "@/types/search";""
import React from "react",""
import { Button } from "@/components/ui/button",""
import { Checkbox } from "@/components/ui/checkbox",""
import { Filter, X, Star } from "lucide-react";""
import { FilterOptions } from "@/types/search";""
import { Filter, X, Star } from "lucide-react",""
import { FilterOptions } from "@/types/search","
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
export /**;
 * FilterSidebar - Function description;
 */
function FilterSidebar() {}
  return ("
    <div className="bg - zion - blue - dark rounded - lg border border - zion - blue - light p - 4">;"
      <div className="flex items - center justify - between mb - 4">;"
        <h3 className="text - lg font - medium text - white flex items - center">;"
          <Filter className="mr - 2 h - 5 w - 5" /> Filters;
        </h3>;
        <Button;"
          variant="outline";"
          size="sm";"
          className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
          on_click={onClearFilters}
        >;
          Clear All;
        </Button>;
      </div>;
{/* Product Type Filter */}"
      <div className="mb - 6">;"
        <label className="text - sm font - medium text - zion - slate - light block mb - 2">;
          Product Type;
        </label>;"
        <div className="space - y-2">;
          {filter_options.product_types.map ((type) => ("
            <div key={type.value} className="flex items - center space - x-2">;
              <Checkbox;`
                id={`type-${type.value}`}
                checked={filters.selectedProductTypes.includes (type.value)}'
                onCheckedChange={() => onFilterChange ('product_types', type.value)}"
                className="text - zion - purple data-[state = checked]:bg - zion - purple data-[state = checked]:border - zion - purple";
              />;
              <label;`
                html_for={`type-${type.value}`}"
                className="text - sm text - zion - slate - light cursor - pointer hover:text - white";
              >;
                {type.label}
              </label>;
            </div>))}
        </div>;
      </div>;
{/* Location Filter */}"
      <div className="mb - 6">;"
        <label className="text - sm font - medium text - zion - slate - light block mb - 2">;
          Location;
        </label>;"
        <div className="space - y-2 max - h-40 overflow - y-auto pr - 2">;
          {filter_options.locations.map ((location) => ("
            <div key={location.value} className="flex items - center space - x-2">;
              <Checkbox;`
                id={`location-${location.value}`}
                checked={filters.selected_locations.includes (location.value)}'
                onCheckedChange={() => onFilterChange ('locations', location.value)}"
                className="text - zion - purple data-[state = checked]:bg - zion - purple data-[state = checked]:border - zion - purple";
              />;
              <label;`
                html_for={`location-${location.value}`}"
              <Checkbox;
                id={`type-${type.value}`})
                checked={filters.selectedProductTypes.includes(type.value)}"
                onCheckedChange={() => onFilterChange('productTypes', type.value)}

              <label;`;
                htmlFor={`type-${type.value}`}
                className="text-sm text-zion-slate-light cursor-pointer hover:text-white""
              >
        <div className="space-y-2 max-h-40 overflow-y-auto pr-2">"
            <div key={location.value} className="flex items-center space-x-2">"
              <Checkbox;`;
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
      {/* Availability Filter */}"
      <div className="mb - 6">;"
        <label className="text - sm font - medium text - zion - slate - light block mb - 2">;
          Availability;
        </label>;"
        <div className="space - y-2">;
          {filter_options.availability_options.map ((availability) => ("
            <div key={availability.value} className="flex items - center space - x-2">;
              <Checkbox;`
                id={`availability-${availability.value}`}
                checked={filters.selected_availability.includes (availability.value)}'
                onCheckedChange={() => onFilterChange ('availability', availability.value)}"
                className="text - zion - purple data-[state = checked]:bg - zion - purple data-[state = checked]:border - zion - purple";
              />;
              <label;`
                html_for={`availability-${availability.value}`}"
                className="text - sm text - zion - slate - light cursor - pointer hover:text - white";
              >;
                {availability.label}
              </label>;
            </div>))}
        </div>;
      </div>;
{/* Rating Filter */}"
      <div className="mb - 6">;"
        <label className="text - sm font - medium text - zion - slate - light block mb - 2">;
          Minimum Rating;
        </label>;"
        <div className="flex flex - wrap gap - 2">;
          {[null, ...filter_options.rating_options].map ((rating) => (
            <Button;'
              key={rating === null ? 'any' : rating}"
              variant="outline";"
              size="sm";
              on_click={() => onRatingChange (rating)}`
              className={`${}
                filters.selected_rating === rating;"
                  ? "bg - zion - purple / 20 border - zion - purple text - zion - purple";"
                  : "border - zion - blue - light text - zion - slate - light";`
              }`}
            >;
              {rating === null ? ("
                "Any") : ("
                <div className="flex items - center">;
                  {[...Array (rating)].map ((_, i) => ("
                    <Star key={i} className="h - 3 w - 3 fill - zion - cyan text - zion - cyan" />))}"
              key={rating === null ? 'any' : rating}
              size="sm""
              onClick={() => onRatingChange(rating)}
                <div className="flex items-center">;"
                    <Star key={i} className="h-3 w-3 fill-zion-cyan text-zion-cyan" />;"
                  <span className="ml-1">& Up</span>;"
    <div className="bg - zion - blue - dark rounded - lg border border - zion - blue - light p - 4">;"
      <div className="flex items - center justify - between mb - 4">;"
        <h3 className="text - lg font - medium text - white flex items - center">;"
          <Filter className="mr - 2 h - 5 w - 5" /> Filters;"

          variant="outline";""
          className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";"
          on_click={onClearFilters}

      <div className="mb - 6">;"
        <label className="text - sm font - medium text - zion - slate - light block mb - 2">;"
        <div className="space - y-2">;"
            <div key={type.value} className="flex items - center space - x-2">;"
                id={`type-${type.value}`}
                checked={filters.selectedProductTypes.includes (type.value)}"
                onCheckedChange={() => onFilterChange ('product_types', type.value)}

                html_for={`type-${type.value}`}
                className="text - sm text - zion - slate - light cursor - pointer hover:text - white";"
            </div>))}
        <div className="space - y-2 max - h-40 overflow - y-auto pr - 2">;"
            <div key={location.value} className="flex items - center space - x-2">;"
                checked={filters.selected_locations.includes (location.value)}"
                onCheckedChange={() => onFilterChange ('locations', location.value)}

                html_for={`location-${location.value}`}
            <div key={availability.value} className="flex items - center space - x-2">;"
                checked={filters.selected_availability.includes (availability.value)}"
                onCheckedChange={() => onFilterChange ('availability', availability.value)}

                html_for={`availability-${availability.value}`}
        <div className="flex flex - wrap gap - 2">;"
              size="sm";"
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
}

'"`
            ))}
    </div>);"
  return (<div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4" > <div className="flex items-center justify-between mb-4" > <h3 className="text-lg font-medium text-white flex items-center" > <Filter className="mr-2 h-5 w-5" /> Filters outline"size=" sm"className=" border-zion-purple text-zion-purple hover:bg-zion-purple/10"onClick= {"
}> Clear All  </div> > {)
}</label> </div>) ) 
}</div> </div> > {
}</div> </div>) ) "
}<span className=" ml-1" >& Up</span> </div>)"
}) ) 
}</div> </div> </div>) "
                <div className="flex items-center">"
                    <Star key={i} className="h-3 w-3 fill-zion-cyan text-zion-cyan" />"
                  <span className="ml-1">& Up</span>"
    </div>"`;
pr-12325

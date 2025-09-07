<<<<<<< HEAD

=======
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      {/* Product Type Filter */}
      <div className="mb-6">;
        <label className="text-sm font-medium text-zion-slate-light block mb-2">;
          Product Type;
        </label>;
        <div className="space-y-2">;
<<<<<<< HEAD

      {/* Location Filter */}
      <div className="mb-6">;
        <label className="text-sm font-medium text-zion-slate-light block mb-2">;
          Location;
        </label>;
        <div className="space-y-2 max-h-40 overflow-y-auto pr-2">;

      {/* Availability Filter */}
      <div className="mb-6">;
        <label className="text-sm font-medium text-zion-slate-light block mb-2">;
          Availability;
        </label>;
        <div className="space-y-2">;

      {/* Rating Filter */}
      <div className="mb-6">;
        <label className="text-sm font-medium text-zion-slate-light block mb-2">;
          Minimum Rating;
        </label>;
        <div className="flex flex-wrap gap-2">;

              }`}
            >;
              {rating === null ? (;
                "Any";

                <div className="flex items-center">;
                  {[...Array(rating)].map((_, i) => (;
                    <Star key={i} className="h-3 w-3 fill-zion-cyan text-zion-cyan" />;
                  ))}
                  <span className="ml-1">& Up</span>;

            </Button>;
          ))}
        </div>;
      </div>;
    </div>;

=======
import React from 'react',;
;
interface FilterSidebarProps {;
  className?:string,;
  children?:React.ReactNode,;
}
;
export const FilterSidebar:React.FC<FilterSidebarProps> = ({ ;
  className,;
  children ;
}) => {;
  return (;
    <div className={`filter-sidebar ${className || ''}`}>;
      {children}
    </div>;
  ),;
},;
;export default FilterSidebar,
 export const FilterSidebar: React.FC<FilterSidebarProps> = ({;
  className, children ;
}) => {;
  return (<div className= {;
  `filter-sidebar $ {;
  className || '' ;
}` ;
}>{;
  children ;
}</div>) ;
};
export default FilterSidebar;
'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

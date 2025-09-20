
<<<<<<< HEAD
import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter, X, Star } from "lucide-react";
import { FilterOptions } from "@/types/search";

interface FilterSidebarProps {
  filters: {
    selectedProductTypes: string[];
    selectedLocations: string[];
    selectedAvailability: string[];
    selectedRating: number | null;
  };
  filterOptions: FilterOptions;
  onFilterChange: (filterType: string, value: string) => void;
  onRatingChange: (rating: number | null) => void;
  onClearFilters: () => void;
}

interface FilterGroup {
  title: string;
  key: string;
  options: FilterOption[];
  type: 'checkbox' | 'radio' | 'range'}

interface FilterSidebarProps extends React.PropsWithChildren<{}> {

  filters: FilterGroup[];
  selectedFilters: Record<string, any>;
  onFilterChange: key: string, value: string, checked: boolean void;
  onClearFilters: : unknown void;
  isOpen: boolean;
  onClose: ()  => void}

export function FilterSidebar({

  filters,
  selectedFilters,
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
"
        <div className="p-4 space-y-6">
          {/* Clear all button */}"
          <div className="flex justify-between items-center">"
            <span className="text-sm text-zion-slate-light">Active filters</span>
            <button
              onClick={onClearFilters}"
              className="text-sm text-zion-cyan hover: text-zion-cyan-light transition-colors underline"
            >
              Clear all
            </button>
          </div>

          {/* Filter groups */}
          {filters.map((group) => (;"
            <div key={group.key} className="space-y-3">;"
              <h4 className="font-medium text-white">{group.title}</h4>;
              ;"
              <div className="space-y-2">;
                {group.options.map((option: unknown {;
                  
                  return ("                    <label key = {option.value} className="flex items-center gap-3 cursor-pointer">
                      <input'
                        type={group.type === 'radio' ? 'radio' : 'checkbox'}
                        name={group.key}
                        value={option.value}
                        checked={isSelected}
                        onChange = {

  (e) => onFilterChange(group.key, option.value,
  e.target.checked)

}
                        className="w-4 h-4 text-zion-cyan bg-zion-blue-dark border-zion-blue-light/30 rounded focus: ring-zion-cyan focus: ring-2"
                      />
=======
}"
                        className="w-4 h-4 text-zion-cyan bg-zion-blue-dark border-zion-blue-light/30 rounded focus:ring-zion-cyan focus:ring-2"
                      />"
                      <span className="text-sm text-zion-slate-light">
                        {option.label}
                        {option.count && ("
                          <span className="ml-2 text-zion-slate-light/60">
                            ({option.count});
                          </span>;
                        )};
                      </span>;
                    </label>;
                  )})}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )}
'"`
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1

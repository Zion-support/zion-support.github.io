<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/ActiveFiltersBar.tsx

=======
import React from "react",;
import { ClickableBadge } from "@/components/ui/clickable-badge",;
import { X } from "lucide-react",;
;
interface ActiveFiltersBarProps {;
  selectedProductTypes:string[],;
  selectedLocations:string[],;
  selectedAvailability:string[],;
  selectedRating:number | null,;
  searchQuery:string,;
  onRemoveFilter:(filterType:string, value:string) => void,;
  onRemoveRating:() => void,;
  onClearSearch:() => void;
}
;
export function ActiveFiltersBar({;
  selectedProductTypes,;
  selectedLocations,;
  selectedAvailability,;
  selectedRating,;
  searchQuery,;
  onRemoveFilter,;
  onRemoveRating,;
  onClearSearch;
} ActiveFiltersBarProps) {;
  const hasActiveFilters = ;
    selectedProductTypes.length > 0 || ;
    selectedLocations.length > 0 || ;
    selectedAvailability.length > 0 || ;
    selectedRating !== null ||;
    !!searchQuery,;
    ;
  if (!hasActiveFilters) return null,;
  ;
  return (;
    <div className="flex flex-wrap gap-2 items-center mb-4">;
      <span className="text-sm text-zion-slate-light">Active filters:</span>;
      ;
      {searchQuery && (;
        <ClickableBadge ;
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
          onClick={onClearSearch}
        >;
          Search:{searchQuery}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}
      ;
      {selectedProductTypes.map(type => (;
        <ClickableBadge ;
          key={`type-${type}`}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";          onClick={() => onRemoveFilter('productTypes', type)}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        >;
          {type}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}

        >;
          {location}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}

        >;
          {availability}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}

          {selectedRating}+ Stars;
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}
    </div>;

=======
import React from 'react',;
=======
import React from 'react';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
;
interface SearchFilters {;
  types: string[];,;
  category: string;,;
  minPrice: number;,;
  maxPrice: number;,;
  minRating: number;,;
  sort:string;}
interface ActiveFiltersBarProps {;
  filters: SearchFilters;,;
  onFiltersChange: (filters:SearchFilters) => void;,;
  onClearAll: () => void;,;
  className?:string;
}
export const ActiveFiltersBar:React.FC<ActiveFiltersBarProps> = ({;

  const activeFilters: Array<{ key:string;, label: string;, value: string ;}> = [],;
  // Add type filters;
  filters.types.forEach(type => {;
    const labels:Record<string string> = {;
</string>)
  if (filters.minPrice > 0 || filters.maxPrice < 10000) {;
    activeFilters.push({;
      key: 'price';,;
      label: 'Price';,;
      value: `$${filters.minPrice;} - $${filters.maxPrice}`;)
    }),;
  // Add rating filter;
  if (filters.minRating > 0) {;
      key: 'rating';,;
      label: 'Rating';,;`;
      value: `${filters.minRating;}+ stars`;)
  // Add sort filter (only if not default);
  if (filters.sort !== 'relevance') {;
    const sortLabels:Record<string string> = {;
</string>`;
    <div className={`flex items-center gap-2 flex-wrap ${className}`}>;
</div>
      <span className="text-sm font-medium text-muted-foreground">Active filters:</span>;"
        <Badge ;
          key={filter.key} ;"
          variant="secondary" ;""
          className="flex items-center gap-1 pl-2 pr-1";"
        >;
"
          <span className="text-xs">;"
</span>
          </span>;
          <Button;"
            variant="ghost";""
            size="sm";""
            className="h-4 w-4 p-0 hover:bg-transparent";"
            onClick={() => removeFilter(filter.key)}
            <X className="h-3 w-3" />;"

        size="sm";"
        onClick={onClearAll}"
        className="text-xs h-6 px-2";"

    </div>;
  activeFilters.map (filter => (<Badge key= {;
  filter.key ;
}variant="secondary" className="flex items-center gap-1 pl-2 pr-1" > > <X className="h-3 w-3" /> </Button> </Badge>) ) ;
}<Button > Clear all </Button> </div>) 
};
:temp_broken_files/search/ActiveFiltersBar.tsx
export default ActiveFiltersBar;"'"
export default ActiveFiltersBar;
'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/search/ActiveFiltersBar.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  filter.key ;)"
}variant="secondary" className="flex items-center gap-1 pl-2 pr-1" > > <X className="h-3 w-3" />  ) ) ;"
}<Button > Clear all  </div>) ;"`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

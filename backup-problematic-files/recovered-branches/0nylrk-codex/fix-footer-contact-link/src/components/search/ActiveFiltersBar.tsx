
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
<<<<<<< HEAD

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


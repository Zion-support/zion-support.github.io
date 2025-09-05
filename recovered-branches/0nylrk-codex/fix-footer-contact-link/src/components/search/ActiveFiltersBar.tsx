
<<<<<<< HEAD
import React from "react",
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { X } from "lucide-react",
=======
import React from &quot;react&quot;;
import { ClickableBadge } from &quot;@/components/ui/clickable-badge&quot;;
import { X } from &quot;lucide-react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ActiveFiltersBarProps {
  selectedProductTypes: string[],
  selectedLocations: string[],
  selectedAvailability: string[],
  selectedRating: number | null,
  searchQuery: string,
  onRemoveFilter: (filterType: string, value: string) => void,
  onRemoveRating: () => void,
  onClearSearch: () => void
}

export function ActiveFiltersBar({
  selectedProductTypes,
  selectedLocations,
  selectedAvailability,
  selectedRating,
  searchQuery,
  onRemoveFilter,
  onRemoveRating,
  onClearSearch
}: ActiveFiltersBarProps) {
  const hasActiveFilters = 
    selectedProductTypes.length > 0 || 
    selectedLocations.length > 0 || 
    selectedAvailability.length > 0 || 
    selectedRating !== null ||
    !!searchQuery,
    
  if (!hasActiveFilters) return null,
  
  return (
    <div className=&quot;flex flex-wrap gap-2 items-center mb-4&quot;>
      <span className=&quot;text-sm text-zion-slate-light&quot;>Active filters:</span>
      
      {searchQuery && (
        <ClickableBadge 
          className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2&quot;
          onClick={onClearSearch}
        >
          Search: {searchQuery}
          <X className=&quot;h-3 w-3&quot; />
        </ClickableBadge>
      )}
      
      {selectedProductTypes.map(type => (
        <ClickableBadge 
          key={`type-${type}`}
          className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2&quot;
          onClick={() => onRemoveFilter('productTypes', type)}
        >
          {type}
          <X className=&quot;h-3 w-3&quot; />
        </ClickableBadge>
      ))}
      
      {selectedLocations.map(location => (
        <ClickableBadge 
          key={`location-${location}`}
          className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2&quot;
          onClick={() => onRemoveFilter('locations', location)}
        >
          {location}
          <X className=&quot;h-3 w-3&quot; />
        </ClickableBadge>
      ))}
      
      {selectedAvailability.map(availability => (
        <ClickableBadge 
          key={`availability-${availability}`}
          className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2&quot;
          onClick={() => onRemoveFilter('availability', availability)}
        >
          {availability}
          <X className=&quot;h-3 w-3&quot; />
        </ClickableBadge>
      ))}
      
      {selectedRating !== null && (
        <ClickableBadge 
          className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2&quot;
          onClick={onRemoveRating}
        >
          {selectedRating}+ Stars
          <X className=&quot;h-3 w-3&quot; />
        </ClickableBadge>
      )}
    </div>
  )
}


<<<<<<< HEAD
import React from "react",
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { Button } from "@/components/ui/button",
import { X } from "lucide-react",
=======
import React from &quot;react&quot;;
import { ClickableBadge } from &quot;@/components/ui/clickable-badge&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { X } from &quot;lucide-react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ActiveFiltersProps {
  selectedSkills: string[],
  toggleSkill: (skill: string) => void,
  selectedAvailability: string[],
  toggleAvailability: (status: string) => void,
  selectedRegions: string[],
  toggleRegion: (region: string) => void,
  priceRange: [number, number],
  setPriceRange: (range: [number, number]) => void,
  experienceRange: [number, number],
  setExperienceRange: (range: [number, number]) => void,
  clearFilters: () => void
}

export function ActiveFilters({
  selectedSkills,
  toggleSkill,
  selectedAvailability,
  toggleAvailability,
  selectedRegions,
  toggleRegion,
  priceRange,
  setPriceRange,
  experienceRange,
  setExperienceRange,
  clearFilters
}: ActiveFiltersProps) {
  // Check if any filters are active
  const hasActiveFilters = 
    selectedSkills.length > 0 || 
    selectedAvailability.length > 0 || 
    selectedRegions.length > 0 ||
    experienceRange[0] !== 0 ||
    experienceRange[1] !== 15 ||
    priceRange[0] !== 50 ||
    priceRange[1] !== 200,
  
  if (!hasActiveFilters) return null,

  return (
    <div className=&quot;mb-6 flex flex-wrap gap-2 items-center&quot;>
      <span className=&quot;text-zion-slate-light text-sm&quot;>Active filters:</span>
      
      {selectedSkills.map(skill => (
        <ClickableBadge 
          key={skill}
          className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2&quot;
          onClick={() => toggleSkill(skill)}
        >
          {skill}
          <X className=&quot;h-3 w-3&quot; />
        </ClickableBadge>
      ))}
      
      {selectedAvailability.map(status => (
        <ClickableBadge 
          key={status}
          className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2&quot;
          onClick={() => toggleAvailability(status)}
        >
          {status === 'full-time' ? 'Full-time' :
           status === 'part-time' ? 'Part-time' :
           'Project-based'}
          <X className=&quot;h-3 w-3&quot; />
        </ClickableBadge>
      ))}
      
      {selectedRegions.map(region => (
        <ClickableBadge 
          key={region}
          className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2&quot;
          onClick={() => toggleRegion(region)}
        >
          {region}
          <X className=&quot;h-3 w-3&quot; />
        </ClickableBadge>
      ))}
      
      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (
        <ClickableBadge 
          className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2&quot;
          onClick={() => setPriceRange([50, 200])}
        >
          ${priceRange[0]}-${priceRange[1]}/hr
          <X className=&quot;h-3 w-3&quot; />
        </ClickableBadge>
      )}
      
      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (
        <ClickableBadge 
          className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2&quot;
          onClick={() => setExperienceRange([0, 15])}
        >
          {experienceRange[0]}-{experienceRange[1]} years
          <X className=&quot;h-3 w-3&quot; />
        </ClickableBadge>
      )}
      
      <Button 
        variant=&quot;ghost&quot; 
        size=&quot;sm&quot; 
        onClick={clearFilters}
<<<<<<< HEAD
        className="h-7 text-xs text-zion-purple hover: text-zion-purple-light hover:bg-transparent"
=======
        className=&quot;h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      >
        Clear All
      </Button>
    </div>
  )
}

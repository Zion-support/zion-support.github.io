
import React from "react",
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { Button } from "@/components/ui/button",
import { X } from "lucide-react",interface ActiveFiltersProps {
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
import React from "react";

interface ActiveFiltersProps {_selectedSkills: string[];
  toggleSkill: (_skill: string) => void;
  selectedAvailability: string[];
  toggleAvailability: (_status: string) => void;
  selectedRegions: string[];
  toggleRegion: (_region: string) => void;
  priceRange: [number, _number];
  setPriceRange: (_range: [number, _number]) => void;
  experienceRange: [number, _number];
  setExperienceRange: (_range: [number, _number]) => void;
  clearFilters: () => void;}

export function ActiveFilters(_{_selectedSkills, _toggleSkill, _selectedAvailability, _toggleAvailability, _selectedRegions, _toggleRegion, _priceRange, _setPriceRange, _experienceRange, _setExperienceRange, _clearFilters}: ActiveFiltersProps) {_// Check if any filters are active
  const _hasActiveFilters = 
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
          <X className=&quot;h-3 w-3&quot; />        </ClickableBadge>
      ))}
      
      {_selectedAvailability.map(_status => (
        <ClickableBadge 
          key={status}
          className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2&quot;
          onClick={() => toggleAvailability(status)}        >
          {_status === 'full-time' ? 'Full-time' :
           status === 'part-time' ? 'Part-time' :
           'Project-based'}
          <X className=&quot;h-3 w-3&quot; />
        </ClickableBadge>
      ))}
      
      {_selectedRegions.map(_region => (
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
          <X className=&quot;h-3 w-3&quot; />        </ClickableBadge>
      )}
      
      <Button 
        variant=&quot;ghost&quot; 
        size=&quot;sm&quot; 
        onClick={clearFilters}
        className="h-7 text-xs text-zion-purple hover: text-zion-purple-light hover:bg-transparent"        variant="ghost" 
        size="sm" 
        onClick={_clearFilters}
        className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent"
      >
        Clear All
      </Button>
    </div>
  )
}

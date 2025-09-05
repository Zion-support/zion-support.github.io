
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { Button } from "@/components/ui/button",
=======
import React from &quot;react&quot;;
import { ClickableBadge } from &quot;@/components/ui/clickable-badge&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { X } from 'lucide-react'

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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

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

<<<<<<< HEAD
  return (
    <div className=&quot;mb-6 flex flex-wrap gap-2 items-center&quot;>
      <span className=&quot;text-zion-slate-light text-sm&quot;>Active filters:</span>
=======
  return (_<div className="mb-6 flex flex-wrap gap-2 items-center">
      <span className="text-zion-slate-light text-sm">Active filters:</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      {selectedSkills.map(skill => (
        <ClickableBadge 
          key={skill}
<<<<<<< HEAD
          className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2&quot;
          onClick={() => toggleSkill(skill)}
        >
          {skill}
          <X className=&quot;h-3 w-3&quot; />
=======
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={_() => toggleSkill(skill)}
        >
          {_skill}
          <X className="h-3 w-3" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </ClickableBadge>
      ))}
      
      {_selectedAvailability.map(_status => (
        <ClickableBadge 
          key={status}
<<<<<<< HEAD
          className=&quot;bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2&quot;
          onClick={() => toggleAvailability(status)}
=======
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={_() => toggleAvailability(status)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          {_status === 'full-time' ? 'Full-time' :
           status === 'part-time' ? 'Part-time' :
           'Project-based'}
          <X className=&quot;h-3 w-3&quot; />
        </ClickableBadge>
      ))}
      
      {_selectedRegions.map(_region => (
        <ClickableBadge 
          key={region}
<<<<<<< HEAD
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
=======
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={_() => toggleRegion(region)}
        >
          {_region}
          <X className="h-3 w-3" />
        </ClickableBadge>
      ))}
      
      {_(priceRange[0] !== 50 || priceRange[1] !== 200) && (_<ClickableBadge 
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => setPriceRange([50, _200])}
        >
          ${_priceRange[0]}-${_priceRange[1]}/hr
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}
      
      {_(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (_<ClickableBadge 
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => setExperienceRange([0, _15])}
        >
          {_experienceRange[0]}-{_experienceRange[1]} years
          <X className="h-3 w-3" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </ClickableBadge>
      )}
      
      <Button 
<<<<<<< HEAD
        variant=&quot;ghost&quot; 
        size=&quot;sm&quot; 
        onClick={clearFilters}
<<<<<<< HEAD
        className="h-7 text-xs text-zion-purple hover: text-zion-purple-light hover:bg-transparent"
=======
        className=&quot;h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
        variant="ghost" 
        size="sm" 
        onClick={_clearFilters}
        className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      >
        Clear All
      </Button>
    </div>
  )
}

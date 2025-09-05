
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
    priceRange[1] !== 200;
  
  if (!hasActiveFilters) return null;

  return (_<div className="mb-6 flex flex-wrap gap-2 items-center">
      <span className="text-zion-slate-light text-sm">Active filters:</span>
      
      {selectedSkills.map(skill => (
        <ClickableBadge 
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={_() => toggleSkill(skill)}
        >
          {_skill}
          <X className="h-3 w-3" />
        </ClickableBadge>
      ))}
      
      {_selectedAvailability.map(_status => (
        <ClickableBadge 
          key={status}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={_() => toggleAvailability(status)}
        >
          {_status === 'full-time' ? 'Full-time' :
           status === 'part-time' ? 'Part-time' :
           'Project-based'}
          <X className="h-3 w-3" />
        </ClickableBadge>
      ))}
      
      {_selectedRegions.map(_region => (
        <ClickableBadge 
          key={region}
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
        </ClickableBadge>
      )}
      
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={_clearFilters}
        className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent"
      >
        Clear All
      </Button>
    </div>
  );
}

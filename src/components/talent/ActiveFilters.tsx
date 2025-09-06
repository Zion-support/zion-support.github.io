<<<<<<< HEAD
import React from 'react';
import { ClickableBadge } from '@/components/ui/clickable-badge';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface ActiveFiltersProps {
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  selectedAvailability: string[];
  toggleAvailability: (status: string) => void;
  selectedRegions: string[];
  toggleRegion: (region: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  experienceRange: [number, number];
  setExperienceRange: (range: [number, number]) => void;
  clearFilters: () => void;
=======

import React from "react";
import { ClickableBadge } from "@/components/ui/clickable-badge";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';
interface ActiveFiltersProps {
  selectedSkills: string[],
  toggleSkill: (skill: string,) => void,
  selectedAvailability: string[],
  toggleAvailability: (status: string,) => void,
  selectedRegions: string[],
  toggleRegion: (region: string,) => void,
  priceRange: [number, number],
  setPriceRange: (range: [number, number],) => void,
  experienceRange: [number, number],
  setExperienceRange: (range: [number, number],) => void,
  clearFilters: () => void
}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

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
  clearFilters,
}: ActiveFiltersProps) {
  // Check if any filters are active
  const hasActiveFilters =
    selectedSkills.length > 0 ||
    selectedAvailability.length > 0 ||
    selectedRegions.length > 0 ||
    experienceRange[0] !== 0 ||
    experienceRange[1] !== 15 ||
    priceRange[0] !== 50 ||
    priceRange[1] !== 200;

  if (!hasActiveFilters) return null;

  return (
    <div className='mb-6 flex flex-wrap gap-2 items-center'>
      <span className='text-zion-slate-light text-sm'>Active filters:</span>

      {selectedSkills.map(skill => (
<<<<<<< HEAD
        <ClickableBadge
          key={skill}
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => toggleSkill(skill)}
=======
        <ClickableBadge 
          key = {skill,}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick = {(,) => toggleSkill(skill),}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
        >
          {skill}
          <X className='h-3 w-3' />
        </ClickableBadge>
      ))}

      {selectedAvailability.map(status => (
<<<<<<< HEAD
        <ClickableBadge
          key={status}
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => toggleAvailability(status)}
=======
        <ClickableBadge 
          key = {status,}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick = {(,) => toggleAvailability(status),}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
        >
          {status === 'full-time'
            ? 'Full-time'
            : status === 'part-time'
              ? 'Part-time'
              : 'Project-based'}
          <X className='h-3 w-3' />
        </ClickableBadge>
      ))}

      {selectedRegions.map(region => (
<<<<<<< HEAD
        <ClickableBadge
          key={region}
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => toggleRegion(region)}
=======
        <ClickableBadge 
          key = {region,}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick = {(,) => toggleRegion(region),}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
        >
          {region}
          <X className='h-3 w-3' />
        </ClickableBadge>
      ))}

      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (
<<<<<<< HEAD
        <ClickableBadge
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => setPriceRange([50, 200])}
=======
        <ClickableBadge 
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick = {(,) => setPriceRange([50, 200]),}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
        >
          ${priceRange[0]}-${priceRange[1]}/hr
          <X className='h-3 w-3' />
        </ClickableBadge>
      )}

      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (
<<<<<<< HEAD
        <ClickableBadge
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => setExperienceRange([0, 15])}
=======
        <ClickableBadge 
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick = {(,) => setExperienceRange([0, 15]),}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
        >
          {experienceRange[0]}-{experienceRange[1]} years
          <X className='h-3 w-3' />
        </ClickableBadge>
      )}
<<<<<<< HEAD

      <Button
        variant='ghost'
        size='sm'
        onClick={clearFilters}
        className='h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent'
=======
      
      <Button 
        variant="ghost" 
        size="sm" 
        onClick = {clearFilters,}
        className="h-7 text-xs text-zion-purple hover: text-zion-purple-light hover:bg-transparent"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
      >
        Clear All
      </Button>
    </div>
  );
=======
}
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

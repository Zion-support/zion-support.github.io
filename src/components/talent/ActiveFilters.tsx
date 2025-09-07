import { X } from 'lucide-react'
interface ActiveFiltersProps {

  selectedSkills: string[]
  toggleSkill: (skill: string) => void
  selectedAvailability: string[]
  toggleAvailability: (status: string) => void
  selectedRegions: string[]
  toggleRegion: (region: string) => void
  priceRange: [number, number]
  setPriceRange: (range: [number, number]) => void
  experienceRange: [number, number];
  setExperienceRange: (range: [number, number]) => void;
  clearFilters: () => void;interface ActiveFiltersProps {
  toggleSkill: (skill: string,) => void
  toggleAvailability: (status: string,) => void
  toggleRegion: (region: string,) => void
  setPriceRange: (range: [number, number],) => void
  experienceRange: [number, number]
  setExperienceRange: (range: [number, number],) => void

  clearFilters: () => void
}

  const hasActiveFilters = null;
    selectedSkills.length > 0 ||
    selectedAvailability.length > 0 ||

    selectedRegions.length > 0 ||
    experienceRange[0] !== 0 ||
    experienceRange[1] !== 15 ||
    priceRange[0] !== 50 ||

    priceRange[1] !== 200,

  if (!hasActiveFilters) return null,

  return (
    <div className="mb-6 flex flex-wrap gap-2 items-center">
      <span className="text-zion-slate-light text-sm">Active filters:</span>

      {selectedSkills.map(skill => (
        <ClickableBadge 
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
import React from "react",;
import { ClickableBadge } from "@/components/ui/clickable-badge",;
import { Button } from "@/components/ui/button",;
import { X } from 'lucide-react';

interface ActiveFiltersProps {;
  selectedSkills: string[],;
  toggleSkill: (skill: string) => void,;
  selectedAvailability: string[],;
  toggleAvailability: (status: string) => void,;
  selectedRegions: string[],;
  toggleRegion: (region: string) => void,;
  priceRange: [number, number],;
  setPriceRange: (range: [number, number]) => void,;
  experienceRange: [number, number],;
  setExperienceRange: (range: [number, number]) => void,;
  clearFilters: () => void;
;
export function ActiveFilters({;
  selectedSkills,;
  toggleSkill,;
  selectedAvailability,;
  toggleAvailability,;
  selectedRegions,;
  toggleRegion,;
  priceRange,;
  setPriceRange,;
  experienceRange,;
  setExperienceRange,;
  clearFilters;
}: ActiveFiltersProps) {;
  // Check if any filters are active;
  const hasActiveFilters =;
    selectedSkills.length > 0 ||;
    selectedAvailability.length > 0 ||;
    selectedRegions.length > 0 ||;
    experienceRange[0] !== 0 ||;
    experienceRange[1] !== 15 ||;
    priceRange[0] !== 50 ||;
    priceRange[1] !== 200;
  if (!hasActiveFilters) return null;

    <div className='mb-6 flex flex-wrap gap-2 items-center'>;
      <span className='text-zion-slate-light text-sm'>Active filters:</span>;

      {selectedSkills && selectedSkills.map(skill => (;
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
          onClick={() => toggleSkill(skill)}
        >;
          {skill}
          <X className="h-3 w-3" />
        </ClickableBadge>
      ))}

      {selectedAvailability && selectedAvailability.map(status => (;

          key={status}
          onClick={() => toggleAvailability(status)}
          {status === 'full-time' ? 'Full-time' :;
           status === 'part-time' ? 'Part-time' :;
           'Project-based'}

      {selectedRegions && selectedRegions.map(region => (;

          key={region}
          onClick={() => toggleRegion(region)}
          {region}

          {experienceRange[0]}-{experienceRange[1]} years
      )}

      <Button
        variant='ghost'
        size='sm'
        onClick={clearFilters}

        Clear All
      </Button>
    </div>
  );
};

        variant="ghost" 
        size="sm" 
        className="h-7 text-xs text-zion-purple hover: text-zion-purple-light hover:bg-transparent"
      >

  )

        className='h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent'>;

          <X className="h-3 w-3" />;
        </ClickableBadge>;
      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (;
        <ClickableBadge;
          onClick={() => setPriceRange([50, 200])}
          ${priceRange[0]}-${priceRange[1]}/hr;
      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (;
          onClick={() => setExperienceRange([0, 15])}
          {experienceRange[0]}-{experienceRange[1]} years;
      <Button;
        variant="ghost";
        size="sm";
        className="h-7 text-xs text-zion-purple hover: text-zion-purple-light hover:bg-transparent";

        Clear All;
      </Button>;
    </div>;

import React from 'react';
import { ClickableBadge } from '@/components / ui / clickable - badge';
import { Button } from '@/components / ui / button';
  selected_skills: string[];
  toggle_skill: (skill: string) => void;
  selected_availability: string[];
  toggle_availability: (status: string) => void;
  selected_regions: string[];
  toggle_region: (region: string) => void;
  price_range: [number, number];
  setPriceRange: (range: [number, number]) => void;
  experience_range: [number, number];
  clear_filters: () => void;interface ActiveFiltersProps {
  selected_skills: string[],
  toggle_skill: (skill: string, ) => void,
  selected_availability: string[],
  toggle_availability: (status: string, ) => void,
  selected_regions: string[],
  toggle_region: (region: string, ) => void,
  price_range: [number, number],
  setPriceRange: (range: [number, number], ) => void,
  experience_range: [number, number],
  setExperienceRange: (range: [number, number], ) => void,
  clear_filters: () => void;
export /**
 * ActiveFilters - Function description
 */
function ActiveFilters() {
    selected_skills.length > 0 ||;
    selected_availability.length > 0 ||;
    selected_regions.length > 0 ||;
    experience_range[0] !== 0 ||;
    experience_range[1] !== 15 ||;
    price_range[0] !== 50 ||;
    price_range[1] !== 200;
  // Check condition
if (return null) {
  $2
    <div className='mb - 6 flex flex - wrap gap - 2 items - center'>;
      <span className='text - zion - slate - light text - sm'>Active filters:</span>;
      {selected_skills.map (skill => (
          className='bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2';
          on_click={() => toggle_skill (skill)}        >;
          <X className='h - 3 w - 3' />;
        </ClickableBadge>))}
      {selected_availability.map (status => (
          on_click={() => toggle_availability (status)}        >;
          {status === 'full - time';
            ? 'Full - time';
            : status === 'part - time';
              ? 'Part - time';
              : 'Project - based'}
      {selected_regions.map (region => (
          on_click={() => toggle_region (region)}        >;
      {(price_range[0] !== 50 || price_range[1] !== 200) && (
          on_click={() => setPriceRange ([50, 200])}        >;
          ${price_range[0]}-${price_range[1]}/hr;
        </ClickableBadge>)}
      {(experience_range[0] !== 0 || experience_range[1] !== 15) && (
          on_click={() => setExperienceRange ([0, 15])}        >;
          {experience_range[0]}-{experience_range[1]} years;
        variant='ghost';
        size='sm';
        on_click={clear_filters}
        className='h - 7 text - xs text - zion - purple hover:text - zion - purple - light hover:bg - transparent'      >;
    </div>);
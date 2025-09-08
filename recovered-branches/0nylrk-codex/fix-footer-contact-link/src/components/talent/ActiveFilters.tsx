
<<<<<<< HEAD

=======
interface ActiveFiltersProps {;
  selectedSkills: string[],;
  toggleSkill: (skill: string) => void,;
  selectedAvailability: string[],;
  toggleAvailability: (status: string) => void,;
  selectedRegions: string[],;
  toggleRegion: (region: string) => void,;


>>>>>>> origin/cursor/delete-old-data-records-6bba
  setPriceRange: (range: [number, number]) => void;
  experienceRange: [number, number],

  setExperienceRange: (range: [number, number]) => void;
  clearFilters: () => void;
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


export function ActiveFilters(): any ({;
  selectedSkills;
  toggleSkill;
  selectedAvailability;
  toggleAvailability;
  selectedRegions;
  toggleRegion;
  priceRange;
  setPriceRange;
  experienceRange;
  setExperienceRange;

<<<<<<< HEAD
=======
import React from "react",
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
interface ActiveFiltersProps {
>>>>>>> origin/cursor/delete-old-data-records-6bba

  selectedSkills: string[]
  toggleSkill: (skill: string) => void
  selectedAvailability: string[]
  toggleAvailability: (status: string) => void
  selectedRegions: string[]
  toggleRegion: (region: string) => void
  priceRange: [number, number];

<<<<<<< HEAD
=======
  setPriceRange: (range: [number, number]) => void;
  experienceRange: [number, number],
  setExperienceRange: (range: [number, number]) => void;
import { Button } from "@/components/ui/button",
import { X } from "lucide-react",
>>>>>>> origin/cursor/delete-old-data-records-6bba

interface ActiveFiltersProps {
  selectedSkills: string[],

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
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
export function ActiveFilters({}
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
  const hasActiveFilters = $2;
  if (!hasActiveFilters) return null,



  clearFilters: () => void
}

export function ActiveFilters({}
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


>>>>>>> origin/cursor/delete-old-data-records-6bba
  clearFilters
}: ActiveFiltersProps) {
  // Check if any filters are active

  clearFilters
}: ActiveFiltersProps) {
  // Check if any filters are active

  const hasActiveFilters =
    selectedSkills.length > 0 |
    selectedAvailability.length > 0 |
    selectedRegions.length > 0 |
    experienceRange[0] !== 0 |
    experienceRange[1] !== 15 |
    priceRange[0] !== 50 |
    priceRange[1] !== 200;
  if (!hasActiveFilters) return null;

<<<<<<< HEAD

=======
  clearFilters
}: ActiveFiltersProps) {
  // Check if any filters are active

  const hasActiveFilters =
    selectedSkills.length > 0 |
    selectedAvailability.length > 0 |
    selectedRegions.length > 0 |
    experienceRange[0] !== 0 |
    experienceRange[1] !== 15 |
    priceRange[0] !== 50 |
    priceRange[1] !== 200;
  if (!hasActiveFilters) return null;
  const hasActiveFilters = 

  clearFilters
}: ActiveFiltersProps) {
  // Check if any filters are active

  const hasActiveFilters =
    selectedSkills.length > 0 |
    selectedAvailability.length > 0 |
    selectedRegions.length > 0 |
    experienceRange[0] !== 0 |
    experienceRange[1] !== 15 |
    priceRange[0] !== 50 |
    priceRange[1] !== 200;
  if (!hasActiveFilters) return null;
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const hasActiveFilters = 

    selectedSkills.length > 0 || 
    selectedAvailability.length > 0 || 
    selectedRegions.length > 0 ||
    experienceRange[0] !== 0 ||
    experienceRange[1] !== 15 ||
    priceRange[0] !== 50 ||
    priceRange[1] !== 200,
  
  if (!hasActiveFilters) return null,
<<<<<<< HEAD


import React from "react",;
import { ClickableBadge } from "@/components/ui/clickable-badge",;
import { Button } from "@/components/ui/button",;

=======
import { X } from "lucide-react",;
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
}
;
export function ActiveFilters() { return null; }
          key={skill}
"
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
        >;
          {skill}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}

>>>>>>> origin/cursor/delete-old-data-records-6bba

  return (
    <div className="mb-6 flex flex-wrap gap-2 items-center">
      <span className="text-zion-slate-light text-sm">Active filters:</span>
      {selectedSkills.map(skill => (
<<<<<<< HEAD

        <ClickableBadge
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"

          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}
;
      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (;

          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}
;
      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (;

          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}
;

      <Button;
        variant="ghost";
        size="sm";
=======

<ClickableBadge
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"

        <ClickableBadge
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
        <ClickableBadge
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
import React from "react",;
import { ClickableBadge } from "@/components/ui/clickable-badge",;
import { Button } from "@/components/ui/button",;
import { X } from "lucide-react",;
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
}
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
  const hasActiveFilters = ;
    selectedSkills && selectedSkills.length > 0 || ;
    selectedAvailability && selectedAvailability.length > 0 || ;
    selectedRegions && selectedRegions.length > 0 ||;
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

  return (
    <div className="mb-6 flex flex-wrap gap-2 items-center">;
      <span className="text-zion-slate-light text-sm">Active filters:</span>;

      {selectedSkills && selectedSkills.map(skill => (;
        <ClickableBadge
          key={skill}

          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";

          onClick={() => toggleSkill(skill)}
if (!hasActiveFilters) return null;

import React from "react",;
import { ClickableBadge } from "@/components/ui/clickable-badge",;
import { Button } from "@/components/ui/button",;
import { X } from "lucide-react",;
;
interface ActiveFiltersProps {;
  selectedSkills:string[],;
  toggleSkill:(skill:string) => void,;
  selectedAvailability:string[],;
  toggleAvailability:(status:string) => void,;
  selectedRegions:string[],;
  toggleRegion:(region:string) => void,;
  priceRange:[number, number],;
  setPriceRange:(range:[number, number]) => void,;
  experienceRange:[number, number],;
  setExperienceRange:(range:[number, number]) => void,;
  clearFilters:() => void;
}
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
} ActiveFiltersProps) {;
  // Check if any filters are active;
  const hasActiveFilters = ;
    selectedSkills.length > 0 || ;
    selectedAvailability.length > 0 || ;
    selectedRegions.length > 0 ||;
    experienceRange[0] !== 0 ||;
    experienceRange[1] !== 15 ||;
    priceRange[0] !== 50 ||;
    priceRange[1] !== 200,;
  ;
  if (!hasActiveFilters) return null,;
;
  return (;
    <div className="mb-6 flex flex-wrap gap-2 items-center">;
      <span className="text-zion-slate-light text-sm">Active filters:</span>;
      ;
      {selectedSkills.map(skill => (;
        <ClickableBadge ;
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";          onClick={() => toggleSkill(skill)}
        <ClickableBadge
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => toggleSkill(skill)}
        >;
          {skill}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}

      {selectedAvailability && selectedAvailability.map(status => (;

        <ClickableBadge
;
      {selectedAvailability.map(status => (;
        <ClickableBadge ;
        <ClickableBadge

          key={status}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"

<ClickableBadge
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"

        <ClickableBadge
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
        <ClickableBadge
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"

<ClickableBadge
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"

        <ClickableBadge
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
        <ClickableBadge
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
import React from "react",;
import { ClickableBadge } from "@/components/ui/clickable-badge",;
import { Button } from "@/components/ui/button",;
import { X } from "lucide-react",;
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
}
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
  const hasActiveFilters = ;
    selectedSkills && selectedSkills.length > 0 || ;
    selectedAvailability && selectedAvailability.length > 0 || ;
    selectedRegions && selectedRegions.length > 0 ||;

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

import React from "react",;
import { ClickableBadge } from "@/components/ui/clickable-badge",;
import { Button } from "@/components/ui/button",;
import { X } from "lucide-react",;
;
interface ActiveFiltersProps {;
  selectedSkills:string[],;
  toggleSkill:(skill:string) => void,;
  selectedAvailability:string[],;
  toggleAvailability:(status:string) => void,;
  selectedRegions:string[],;
  toggleRegion:(region:string) => void,;
  priceRange:[number, number],;
  setPriceRange:(range:[number, number]) => void,;
  experienceRange:[number, number],;
  setExperienceRange:(range:[number, number]) => void,;
  clearFilters:() => void;
}
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
} ActiveFiltersProps) {;
  // Check if any filters are active;
  const hasActiveFilters = ;
    selectedSkills.length > 0 || ;
    selectedAvailability.length > 0 || ;
    selectedRegions.length > 0 ||;
    experienceRange[0] !== 0 ||;
    experienceRange[1] !== 15 ||;
    priceRange[0] !== 50 ||;
    priceRange[1] !== 200,;
  ;
  if (!hasActiveFilters) return null,;
;
  return (;
    <div className="mb-6 flex flex-wrap gap-2 items-center">;
      <span className="text-zion-slate-light text-sm">Active filters:</span>;
      ;
      {selectedSkills.map(skill => (;
        <ClickableBadge ;
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";          onClick={() => toggleSkill(skill)}
        >;
          {skill}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}
      ;
      {selectedAvailability.map(status => (;
        <ClickableBadge ;
          key={status}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
          onClick={() => toggleAvailability(status)}
        >;
          {status === 'full-time' ? 'Full-time' :;
           status === 'part-time' ? 'Part-time' :;
           'Project-based'}


  if (!hasActiveFilters) return null;

  return (
    <div className="mb-6 flex flex-wrap gap-2 items-center">;
      <span className="text-zion-slate-light text-sm">Active filters:</span>;

      {selectedSkills && selectedSkills.map(skill => (;
        <ClickableBadge
          key={skill}

          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";

          onClick={() => toggleSkill(skill)}
if (!hasActiveFilters) return null;

import React from "react",;
import { ClickableBadge } from "@/components/ui/clickable-badge",;
import { Button } from "@/components/ui/button",;
import { X } from "lucide-react",;
;
interface ActiveFiltersProps {;
  selectedSkills:string[],;
  toggleSkill:(skill:string) => void,;
  selectedAvailability:string[],;
  toggleAvailability:(status:string) => void,;
  selectedRegions:string[],;
  toggleRegion:(region:string) => void,;
  priceRange:[number, number],;
  setPriceRange:(range:[number, number]) => void,;
  experienceRange:[number, number],;
  setExperienceRange:(range:[number, number]) => void,;
  clearFilters:() => void;
}
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
} ActiveFiltersProps) {;
  // Check if any filters are active;
  const hasActiveFilters = ;
    selectedSkills.length > 0 || ;
    selectedAvailability.length > 0 || ;
    selectedRegions.length > 0 ||;
    experienceRange[0] !== 0 ||;
    experienceRange[1] !== 15 ||;
    priceRange[0] !== 50 ||;
    priceRange[1] !== 200,;
  ;
  if (!hasActiveFilters) return null,;
;
  return (;
    <div className="mb-6 flex flex-wrap gap-2 items-center">;
      <span className="text-zion-slate-light text-sm">Active filters:</span>;
      ;
      {selectedSkills.map(skill => (;
        <ClickableBadge ;
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";          onClick={() => toggleSkill(skill)}
        <ClickableBadge
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => toggleSkill(skill)}
        >;
          {skill}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}

      {selectedAvailability && selectedAvailability.map(status => (;

        <ClickableBadge
;
      {selectedAvailability.map(status => (;
        <ClickableBadge ;
        <ClickableBadge

          key={status}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => toggleAvailability(status)}
        >
          {status === 'full-time' ? 'Full-time' :
           status === 'part-time' ? 'Part-time' :
           'Project-based'}
          <X className="h-3 w-3" />
        </ClickableBadge>
      ))}
      {selectedRegions.map(region => (
        <ClickableBadge
          key={region}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => toggleRegion(region)}
          onClick={() => setPriceRange([50, 200])}
        >;
          ${priceRange[0]}-${priceRange[1]}/hr;"
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}

          onClick={() => setExperienceRange([0, 15])}
        >;
          {experienceRange[0]}-{experienceRange[1]} years;"
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}

          {region}
          <X className="h-3 w-3" />
        </ClickableBadge>
      ))}

      {(priceRange[0] !== 50 |priceRange[1] !== 200) && (
        <ClickableBadge
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => setPriceRange([50, 200])}
        >
          ${priceRange[0]}-${priceRange[1]}/hr
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}

      {(experienceRange[0] !== 0 |experienceRange[1] !== 15) && (
        <ClickableBadge
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => setExperienceRange([0, 15])}
        >
          {experienceRange[0]}-{experienceRange[1]} years
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}
      <Button


        variant="ghost"
        size="sm"
        onClick={clearFilters}
        className="h-7 text-xs text-zion-purple hover: text-zion-purple-light hover:bg-transparent"
      >
        Clear All
      </Button>
    </div>
  )


        variant="ghost" 
        size="sm" 
>>>>>>> origin/cursor/delete-old-data-records-6bba


import React from './react';
import { ClickableBadge } from '@/components / ui / clickable - badge';
import { Button } from '@/components / ui / button';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { X } from './lucide-react';
interface ActiveFiltersProps {}
  selected_skills: string[],
  toggle_skill: (skill: string) => void,
  selected_availability: string[],
  toggle_availability: (status: string) => void,
  selected_regions: string[],
  toggle_region: (region: string) => void,
  price_range: [number, number];
  setPriceRange: (range: [number, number]) => void;
  experience_range: [number, number];
  setExperienceRange: (range: [number, number]) => void;
  clear_filters: () => void;
}
export /**;
 * ActiveFilters - Function description;
 */
function ActiveFilters() {}
  // Check if any filters are active;
  const hasActiveFilters =;
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
}
  return (
    <div className="mb - 6 flex flex - wrap gap - 2 items - center">;
      <span className="text - zion - slate - light text - sm">Active filters:</span>;
      {selected_skills.map (skill => (

  return ("
    <div className="mb-6 flex flex-wrap gap-2 items-center">"
</div>"
      <span className="text-zion-slate-light text-sm">Active filters:</span>""
    <div className="mb-6 flex flex-wrap gap-2 items-center">;"
      <span className="text-zion-slate-light text-sm">Active filters:</span>;"
        <ClickableBadge;
          key={skill}
"
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";")
          onClick={() => toggleSkill(skill)}
        <ClickableBadge ;
          key={skill}"
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";          onClick={() => toggleSkill(skill)}"

          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2""
          <X className="h-3 w-3" />;"

        ;
          key={status}"
          onClick={() => toggleAvailability(status)}

          key={region}"
          onClick={() => toggleRegion(region)}

        <ClickableBadge;"
          onClick={() => setPriceRange([50, 200])}

          onClick={() => setExperienceRange([0, 15])}

      <Button;"
        variant="ghost"""
        size="sm"""

          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";"

        variant="ghost";""
        size="sm";"
        onClick={clearFilters}"
        className="h-7 text-xs text-zion-purple hover: text-zion-purple-light hover:bg-transparent">;"

    </div>;"
    <div className="mb - 6 flex flex - wrap gap - 2 items - center">;"
      <span className="text - zion - slate - light text - sm">Active filters:</span>;"
          className="bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2";"
          on_click={() => toggle_skill (skill)}
          <X className="h - 3 w - 3" />;"

        ))}
          on_click={() => toggle_availability (status)}

          on_click={() => toggle_region (region)}

          on_click={() => setPriceRange ([50, 200])}

        )}
          on_click={() => setExperienceRange ([0, 15])}

        on_click={clear_filters}"
        className="h - 7 text - xs text - zion - purple hover: text - zion - purple - light hover:bg - transparent";"
      >;

    </div>);
}

      ;
      <Button ;
        variant="ghost" ;
        size="sm" ;
        onClick={clearFilters}
        className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent";
      >;
        Clear All;
      </Button>;
      <Button ;"
        variant="ghost" ;""
        size="sm" ;"
        className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent";"

    </div>;
  selectedSkills.map (skill => (<ClickableBadge key= {
  skill;)
}) ) 
  selectedAvailability.map (status => (<ClickableBadge key= {
  status;
}> {
)"
}<X className="h-3 w-3" /> ) )"

  selectedRegions.map (region => (<ClickableBadge key= {
  region 
}</ClickableBadge>) 
}<Button 
}

<<<<<<< HEAD



=======
;
>>>>>>> origin/cursor/delete-old-data-records-6bba

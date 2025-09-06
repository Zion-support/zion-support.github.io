<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx

<<<<<<< HEAD

import React from "react",
import { ClickableBadge } from "@/components/ui/clickable-badge",

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react";
import {ClickableBadge} from "@/components/ui/clickable-badge";
import {Button} from "@/components/ui/button";
import {X} from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD
interface ActiveFiltersProps {;
  selectedSkills: string[],;
  toggleSkill: (skill: string) => void,;
  selectedAvailability: string[],;
  toggleAvailability: (status: string) => void,;
  selectedRegions: string[],;
  toggleRegion: (region: string) => void,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  experienceRange: [number, number],
  setExperienceRange: (range: [number, number]) => void;
  clearFilters: () => void;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx


export function ActiveFilters(): any ({;

========
export function ActiveFilters(): any ({;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
interface ActiveFiltersProps {

  selectedSkills: string[]
  toggleSkill: (skill: string) => void
  selectedAvailability: string[]
  toggleAvailability: (status: string) => void
  selectedRegions: string[]
  toggleRegion: (region: string) => void
  priceRange: [number, number];

  setPriceRange: (range: [number, number]) => void;
  experienceRange: [number, number],
  setExperienceRange: (range: [number, number]) => void;
import { Button } from "@/components/ui/button",
import { X } from "lucide-react",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

  clearFilters: () => void
}

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  clearFilters: () => void
}

export function ActiveFilters({;
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

  clearFilters
}: ActiveFiltersProps) {
  // Check if any filters are active
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  clearFilters
}: ActiveFiltersProps) {
  // Check if any filters are active


=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  return (
    <div className="mb-6 flex flex-wrap gap-2 items-center">
      <span className="text-zion-slate-light text-sm">Active filters:</span>
      {selectedSkills.map(skill => (
<<<<<<< HEAD

=======
        <ClickableBadge
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
<<<<<<< HEAD

=======
        <ClickableBadge
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx
  clearFilters;
}: ActiveFiltersProps) {;
  // Check if any filters are active;
  const hasActiveFilters = ;
    selectedSkills && selectedSkills.length > 0 || ;
    selectedAvailability && selectedAvailability.length > 0 || ;
    selectedRegions && selectedRegions.length > 0 ||;
=======
  clearFilters;
}: ActiveFiltersProps) {;
  // Check if any filters are active;
  const hasActiveFilters =;
    selectedSkills.length > 0 ||;
    selectedAvailability.length > 0 ||;
    selectedRegions.length > 0 ||;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    experienceRange[0] !== 0 ||;
    experienceRange[1] !== 15 ||;
    priceRange[0] !== 50 ||;
    priceRange[1] !== 200;
  if (!hasActiveFilters) return null;
<<<<<<< HEAD
  return (
    <div className="mb-6 flex flex-wrap gap-2 items-center">;
      <span className="text-zion-slate-light text-sm">Active filters:</span>;
      {selectedSkills && selectedSkills.map(skill => (;
        <ClickableBadge
          key={skill}

          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          onClick={() => toggleSkill(skill)}
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        >;
          {skill}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx


      {selectedAvailability && selectedAvailability.map(status => (;

========
<<<<<<< HEAD
      {selectedAvailability && selectedAvailability.map(status => (;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx
        <ClickableBadge
=======
      ;
      {selectedAvailability.map(status => (;
        <ClickableBadge ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          key={status}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
          onClick={() => toggleAvailability(status)}
        >;
          {status === 'full-time' ? 'Full-time' :;
           status === 'part-time' ? 'Part-time' :;
           'Project-based'}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx


      {selectedRegions && selectedRegions.map(region => (;

========
<<<<<<< HEAD
      {selectedRegions && selectedRegions.map(region => (;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx
=======
  return (;
    <div className="mb-6 flex flex-wrap gap-2 items-center">;
      <span className="text-zion-slate-light text-sm">Active filters:</span>;
      {selectedSkills.map(skill => (;
        <ClickableBadge;
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
          onClick={() => toggleSkill(skill)}
        >
          {skill}
          <X className="h-3 w-3" />
        </ClickableBadge>
      ))}
      {selectedAvailability.map(status => (
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <ClickableBadge
          key={region}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => toggleRegion(region)}
<<<<<<< HEAD
=======
      ;
      {selectedRegions.map(region => (;
        <ClickableBadge ;
          key={region}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";          onClick={() => toggleRegion(region)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        >;
          {region}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx


      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (;

========
<<<<<<< HEAD
      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx
        <ClickableBadge
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
=======
      ;
      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (;
        <ClickableBadge ;
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          onClick={() => setPriceRange([50, 200])}
        >;
          ${priceRange[0]}-${priceRange[1]}/hr;
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx


      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (;

========
<<<<<<< HEAD
      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx
        <ClickableBadge
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
=======
      ;
      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (;
        <ClickableBadge ;
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          onClick={() => setExperienceRange([0, 15])}
        >;
          {experienceRange[0]}-{experienceRange[1]} years;
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}


      <Button
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx
<<<<<<< HEAD
=======
        >
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        variant="ghost"
        size="sm"
        onClick={clearFilters}
        className="h-7 text-xs text-zion-purple hover: text-zion-purple-light hover:bg-transparent"
      >
        Clear All
      </Button>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx
        variant="ghost" 
        size="sm" 
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}
;
      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (;
        <ClickableBadge;
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
          onClick={() => setPriceRange([50, 200])}
        >;
          ${priceRange[0]}-${priceRange[1]}/hr;
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}
;
      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (;
        <ClickableBadge;
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
          onClick={() => setExperienceRange([0, 15])}
        >;
          {experienceRange[0]}-{experienceRange[1]} years;
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}
;
      <Button;
        variant="ghost";
        size="sm";
<<<<<<< HEAD

        onClick={clearFilters}
        className="h-7 text-xs text-zion-purple hover: text-zion-purple-light hover:bg-transparent">;
=======
        onClick={clearFilters}
        className="h-7 text-xs text-zion-purple hover: text-zion-purple-light hover:bg-transparent";
      >;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        Clear All;
      </Button>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
import React from './react';
import { ClickableBadge } from '@/components / ui / clickable - badge';
import { Button } from '@/components / ui / button';
import { X } from './lucide-react';
interface ActiveFiltersProps {
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
export /**
 * ActiveFilters - Function description
 */
function ActiveFilters() {
  // Check if any filters are active;
  const hasActiveFilters =;
    selected_skills.length > 0 ||;
    selected_availability.length > 0 ||;
    selected_regions.length > 0 ||;
    experience_range[0] !== 0 ||;
    experience_range[1] !== 15 ||;
    price_range[0] !== 50 ||;
    price_range[1] !== 200;
;
<<<<<<< HEAD

=======
  // Check condition
if (return null) {
  $2
}
  return (
    <div className="mb - 6 flex flex - wrap gap - 2 items - center">;
      <span className="text - zion - slate - light text - sm">Active filters:</span>;
      {selected_skills.map (skill => (
        <ClickableBadge;
          key={skill}
          className="bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2";
          on_click={() => toggle_skill (skill)}
        >;
          {skill}
          <X className="h - 3 w - 3" />;
        </ClickableBadge>))}
      {selected_availability.map (status => (
        <ClickableBadge;
          key={status}
          className="bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2";
          on_click={() => toggle_availability (status)}
        >;
          {status === 'full - time' ? 'Full - time' :;
          status === 'part - time' ? 'Part - time' :;
          'Project - based'}
          <X className="h - 3 w - 3" />;
        </ClickableBadge>))}
      {selected_regions.map (region => (
        <ClickableBadge;
          key={region}
          className="bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2";
          on_click={() => toggle_region (region)}
        >;
          {region}
          <X className="h - 3 w - 3" />;
        </ClickableBadge>))}
      {(price_range[0] !== 50 || price_range[1] !== 200) && (
        <ClickableBadge;
          className="bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2";
          on_click={() => setPriceRange ([50, 200])}
        >;
          ${price_range[0]}-${price_range[1]}/hr;
          <X className="h - 3 w - 3" />;
        </ClickableBadge>)}
      {(experience_range[0] !== 0 || experience_range[1] !== 15) && (
        <ClickableBadge;
          className="bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2";
          on_click={() => setExperienceRange ([0, 15])}
        >;
          {experience_range[0]}-{experience_range[1]} years;
          <X className="h - 3 w - 3" />;
        </ClickableBadge>)}
      <Button;
        variant="ghost";
        size="sm";
        on_click={clear_filters}
        className="h - 7 text - xs text - zion - purple hover: text - zion - purple - light hover:bg - transparent";
      >;
        Clear All;
      </Button>;
    </div>);
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
      ;
      <Button ;
        variant="ghost" ;
        size="sm" ;
        onClick={clearFilters}
        className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent";
      >;
        Clear All;
      </Button>;
    </div>;
  );}
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
clearFilters: () => void 
}selectedSkills, toggleSkill, selectedAvailability, toggleAvailability, selectedRegions, toggleRegion, priceRange, setPriceRange, experienceRange, setExperienceRange, clearFilters 
}: ActiveFiltersProps) {
  //Check if any filters are active const hasActiveFilters = selectedSkills.length > 0 || selectedAvailability.length > 0 || selectedRegions.length > 0 || experienceRange[0] !== 0 || experienceRange[1] !== 15 || priceRange[0] !== 50 || priceRange[1] !== 200;
if (!hasActiveFilters) return null;
{
  selectedSkills.map (skill => (<ClickableBadge key= {
  skill 
}</ClickableBadge>) ) 
}{
  selectedAvailability.map (status => (<ClickableBadge key= {
  status 
}> {
  status === 'full-time' ? 'Full-time' : status === 'part-time' ? 'Part-time' : 'Project-based' 
}<X className="h-3 w-3" /> </ClickableBadge>) ) 
}{
  selectedRegions.map (region => (<ClickableBadge key= {
  region 
}</ClickableBadge>) 
}<Button 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

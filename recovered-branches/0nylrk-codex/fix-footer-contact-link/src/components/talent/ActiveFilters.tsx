import React from "react";
import {ClickableBadge} from "@/components/ui/clickable-badge";
import {Button} from "@/components/ui/button";
import {X} from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from "react",
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
interface ActiveFiltersProps {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface ActiveFiltersProps {;
  selectedSkills: string[],;
  toggleSkill: (skill: string) => void,;
  selectedAvailability: string[],;
  toggleAvailability: (status: string) => void,;
  selectedRegions: string[],;
  toggleRegion: (region: string) => void,;

  priceRange: [number, number];
<<<<<<< HEAD

=======
  priceRange: [number, number];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  setPriceRange: (range: [number, number]) => void;
  experienceRange: [number, number],
  setExperienceRange: (range: [number, number]) => void;
  clearFilters: () => void;
}
<<<<<<< HEAD
<<<<<<< HEAD


export function ActiveFilters(): any ({;

=======
export function ActiveFilters(): any ({;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD



=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  clearFilters: () => void
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  clearFilters
}: ActiveFiltersProps) {
  // Check if any filters are active


<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <div className="mb-6 flex flex-wrap gap-2 items-center">
      <span className="text-zion-slate-light text-sm">Active filters:</span>
      {selectedSkills.map(skill => (
<<<<<<< HEAD
<<<<<<< HEAD

=======
        <ClickableBadge
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"

=======
        <ClickableBadge
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
        <ClickableBadge
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  clearFilters;
}: ActiveFiltersProps) {;
  // Check if any filters are active;
  const hasActiveFilters = ;
    selectedSkills && selectedSkills.length > 0 || ;
    selectedAvailability && selectedAvailability.length > 0 || ;
    selectedRegions && selectedRegions.length > 0 ||;
<<<<<<< HEAD
=======
  clearFilters;
}: ActiveFiltersProps) {;
  // Check if any filters are active;
  const hasActiveFilters =;
    selectedSkills.length > 0 ||;
    selectedAvailability.length > 0 ||;
    selectedRegions.length > 0 ||;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    experienceRange[0] !== 0 ||;
    experienceRange[1] !== 15 ||;
    priceRange[0] !== 50 ||;
    priceRange[1] !== 200;
<<<<<<< HEAD

  if (!hasActiveFilters) return null;

  return (
    <div className="mb-6 flex flex-wrap gap-2 items-center">;
      <span className="text-zion-slate-light text-sm">Active filters:</span>;

      {selectedSkills && selectedSkills.map(skill => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <ClickableBadge
          key={skill}

          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          onClick={() => toggleSkill(skill)}
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        <ClickableBadge
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => toggleSkill(skill)}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        >;
          {skill}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}
<<<<<<< HEAD
<<<<<<< HEAD


      {selectedAvailability && selectedAvailability.map(status => (;

        <ClickableBadge
=======
      ;
      {selectedAvailability.map(status => (;
        <ClickableBadge ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        <ClickableBadge
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          key={status}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => toggleAvailability(status)}
        >;
          {status === 'full-time' ? 'Full-time' :;
           status === 'part-time' ? 'Part-time' :;
           'Project-based'}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}
<<<<<<< HEAD
<<<<<<< HEAD


      {selectedRegions && selectedRegions.map(region => (;

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <ClickableBadge
          key={region}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => toggleRegion(region)}
<<<<<<< HEAD
<<<<<<< HEAD
=======
      ;
      {selectedRegions.map(region => (;
        <ClickableBadge ;
          key={region}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";          onClick={() => toggleRegion(region)}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        >;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          {region}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}
<<<<<<< HEAD
<<<<<<< HEAD


      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (;

        <ClickableBadge
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
=======
      ;
      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (;
        <ClickableBadge ;
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        <ClickableBadge
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          onClick={() => setPriceRange([50, 200])}
        >;
          ${priceRange[0]}-${priceRange[1]}/hr;
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD


      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (;

        <ClickableBadge
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
=======
      ;
      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (;
        <ClickableBadge ;
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        <ClickableBadge
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          onClick={() => setExperienceRange([0, 15])}
        >;
          {experienceRange[0]}-{experienceRange[1]} years;
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}
<<<<<<< HEAD


      <Button
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
        variant="ghost"
        size="sm"
        onClick={clearFilters}
        className="h-7 text-xs text-zion-purple hover: text-zion-purple-light hover:bg-transparent"
      >
        Clear All
      </Button>
    </div>
  )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        variant="ghost" 
        size="sm" 


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

        onClick={clearFilters}
        className="h-7 text-xs text-zion-purple hover: text-zion-purple-light hover:bg-transparent">;
=======
        onClick={clearFilters}
        className="h-7 text-xs text-zion-purple hover: text-zion-purple-light hover:bg-transparent";
      >;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        Clear All;
      </Button>;
    </div>;
  );




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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
}
;
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

<<<<<<< HEAD


import React from "react",

import { X } from 'lucide-react'
=======
import React from 'react'
import { ClickableBadge } from '@/components/ui/clickable-badge'
import { Button } from '@/components/ui/button'

import React from "react",
import { ClickableBadge } from "@/components/ui/clickable-badge";
import { Button } from "@/components/ui/button";
>>>>>>> import { X } from 'lucide-react'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface ActiveFiltersProps {

  selectedSkills: string[]
  toggleSkill: (skill: string) => void
  selectedAvailability: string[]
  toggleAvailability: (status: string) => void
  selectedRegions: string[]
  toggleRegion: (region: string) => void
  priceRange: [number, number]
  setPriceRange: (range: [number, number]) => void
  experienceRange: [number, number]
  setExperienceRange: (range: [number, number]) => void
  clearFilters: () => void;interface ActiveFiltersProps {
  selectedSkills: string[]
  toggleSkill: (skill: string,) => void
  selectedAvailability: string[]
  toggleAvailability: (status: string,) => void
  selectedRegions: string[]
  toggleRegion: (region: string,) => void
  priceRange: [number, number]
  setPriceRange: (range: [number, number],) => void
  experienceRange: [number, number]
  setExperienceRange: (range: [number, number],) => void

  clearFilters: () => void
}
<<<<<<< HEAD
=======
  const hasActiveFilters =
    selectedSkills.length > 0 |
    selectedAvailability.length > 0 |
    selectedRegions.length > 0 |
    experienceRange[0] !== 0 |
    experienceRange[1] !== 15 |
    priceRange[0] !== 50 |
    priceRange[1] !== 200
  if (!hasActiveFilters) return null
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    selectedRegions.length > 0 ||
    experienceRange[0] !== 0 ||
    experienceRange[1] !== 15 ||
    priceRange[0] !== 50 ||
<<<<<<< HEAD

=======
        </ClickableBadge>
      ))}
      {(priceRange[0] !== 50 |priceRange[1] !== 200) && (
        <ClickableBadge
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => setPriceRange([50, 200])}        >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
  clearFilters: () => void;interface ActiveFiltersProps {;
  selectedSkills: string[],;
  toggleSkill: (skill: string,) => void,;
  selectedAvailability: string[],;
  toggleAvailability: (status: string,) => void,;
  selectedRegions: string[],;
  toggleRegion: (region: string,) => void,;
  priceRange: [number, number],;
  setPriceRange: (range: [number, number],) => void,;
  experienceRange: [number, number],;
  setExperienceRange: (range: [number, number],) => void,;
  clearFilters: () => void;
}

export function ActiveFilters(): any ({;
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
  clearFilters,;
}: ActiveFiltersProps) {;
  // Check if any filters are active;
  const hasActiveFilters =;
    selectedSkills && selectedSkills.length > 0 ||;
    selectedAvailability && selectedAvailability.length > 0 ||;
    selectedRegions && selectedRegions.length > 0 ||;
    experienceRange[0] !== 0 ||;
    experienceRange[1] !== 15 ||;
    priceRange[0] !== 50 ||;
    priceRange[1] !== 200;

  if (!hasActiveFilters) return null;

  return (
    <div className='mb-6 flex flex-wrap gap-2 items-center'>;
      <span className='text-zion-slate-light text-sm'>Active filters:</span>;

      {selectedSkills && selectedSkills.map(skill => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <ClickableBadge
          key={skill}
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => toggleSkill(skill)}        >;
          {skill}
          <X className='h-3 w-3' />;
        </ClickableBadge>;
      ))}


      {selectedAvailability && selectedAvailability.map(status => (;

        <ClickableBadge
          key={status}
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => toggleAvailability(status)}        >;
          {status === 'full-time';
            ? 'Full-time';
            : status === 'part-time';
              ? 'Part-time';
              : 'Project-based'}
          <X className='h-3 w-3' />;
        </ClickableBadge>;
      ))}


      {selectedRegions && selectedRegions.map(region => (;

        <ClickableBadge
          key={region}
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => toggleRegion(region)}        >;
          {region}
          <X className="h-3 w-3" />
<<<<<<< HEAD

        </ClickableBadge>
      ))}
      
      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (

=======
>>>>>>>         </ClickableBadge>
      ))}
      
      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (
        <ClickableBadge
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => setPriceRange([50, 200])}        >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <ClickableBadge 
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => setPriceRange([50, 200])}
        >
<<<<<<< HEAD

          ${priceRange[0]}-${priceRange[1]}/hr
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}

        <ClickableBadge
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => setExperienceRange([0, 15])}        >

=======
>>>>>>>           ${priceRange[0]}-${priceRange[1]}/hr
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}
      {(experienceRange[0] !== 0 |experienceRange[1] !== 15) && (
        <ClickableBadge
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => setExperienceRange([0, 15])}        >
      
      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <ClickableBadge 
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => setExperienceRange([0, 15])}
        >
<<<<<<< HEAD
=======
>>>>>>>           {experienceRange[0]}-{experienceRange[1]} years
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}
        </ClickableBadge>
      ))}
      
      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (


          ${priceRange[0]}-${priceRange[1]}/hr
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}

      
      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

          {experienceRange[0]}-{experienceRange[1]} years
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}

<<<<<<< HEAD
      <Button
=======


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>       <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        variant='ghost'
        size='sm'
        onClick={clearFilters}
        className='h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent'      >
<<<<<<< HEAD

=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={clearFilters}
        className="h-7 text-xs text-zion-purple hover: text-zion-purple-light hover:bg-transparent"
      >
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        Clear All
      </Button>
    </div>
  )
<<<<<<< HEAD

=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
        onClick={clearFilters}
        className="h-7 text-xs text-zion-purple hover: text-zion-purple-light hover:bg-transparent";
      >;

        Clear All;
      </Button>;
    </div>;
  );

}
;
<<<<<<< HEAD

=======
>>>>>>> 
;


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

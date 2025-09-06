<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


import React from "react",

=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { X } from 'lucide-react'
=======
import React from 'react'
import { ClickableBadge } from '@/components/ui/clickable-badge'
import { Button } from '@/components/ui/button'

=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react'
import { ClickableBadge } from '@/components/ui/clickable-badge'
import { Button } from '@/components/ui/button'

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",
import { ClickableBadge } from "@/components/ui/clickable-badge";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> import { X } from 'lucide-react'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { Button } from "@/components/ui/button",
import { X } from 'lucide-react'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

export function ActiveFilters({

  selectedSkills
  toggleSkill
  selectedAvailability
  toggleAvailability
  selectedRegions
  toggleRegion
  priceRange
  setPriceRange
  experienceRange
  setExperienceRange
  clearFilters
}: ActiveFiltersProps) {
  // Check if any filters are active
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

  const hasActiveFilters = null;
    selectedSkills.length > 0 ||
    selectedAvailability.length > 0 ||
<<<<<<< HEAD
    selectedRegions.length > 0 ||
    experienceRange[0] !== 0 ||
    experienceRange[1] !== 15 ||
    priceRange[0] !== 50 ||
    priceRange[1] !== 200
  if (!hasActiveFilters) return null
  return (
    <div className="mb-6 flex flex-wrap gap-2 items-center">
      <span className="text-zion-slate-light text-sm">Active filters:</span>
      
      {selectedSkills.map(skill => (
<<<<<<< HEAD
=======
        <ClickableBadge
          key={skill}
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => toggleSkill(skill)}        >
          {skill}
          <X className='h-3 w-3' />
        </ClickableBadge>
      ))}
      {selectedAvailability.map(status => (
        <ClickableBadge
          key={status}
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => toggleAvailability(status)}        >
          {status === 'full-time'
            ? 'Full-time'
            : status === 'part-time'
              ? 'Part-time'
              : 'Project-based'}
          <X className='h-3 w-3' />
        </ClickableBadge>
      ))}
      {selectedRegions.map(region => (
        <ClickableBadge
          key={region}
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => toggleRegion(region)}        >
          {region}
          <X className='h-3 w-3' />
        </ClickableBadge>
      ))}
      {(priceRange[0] !== 50 |priceRange[1] !== 200) && (
        <ClickableBadge
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => setPriceRange([50, 200])}        >
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

    selectedRegions.length > 0 ||
    experienceRange[0] !== 0 ||
    experienceRange[1] !== 15 ||
    priceRange[0] !== 50 ||
<<<<<<< HEAD
=======


    selectedRegions.length > 0 ||
    experienceRange[0] !== 0 ||
    experienceRange[1] !== 15 ||
    priceRange[0] !== 50 ||

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    priceRange[1] !== 200,
  
  if (!hasActiveFilters) return null,

  return (
    <div className="mb-6 flex flex-wrap gap-2 items-center">
      <span className="text-zion-slate-light text-sm">Active filters:</span>
      
      {selectedSkills.map(skill => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <ClickableBadge 
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
import React from "react",;
import { ClickableBadge } from "@/components/ui/clickable-badge",;
import { Button } from "@/components/ui/button",;
import { X } from 'lucide-react';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
  const hasActiveFilters =;
    selectedSkills.length > 0 ||;
    selectedAvailability.length > 0 ||;
    selectedRegions.length > 0 ||;
    experienceRange[0] !== 0 ||;
    experienceRange[1] !== 15 ||;
    priceRange[0] !== 50 ||;
    priceRange[1] !== 200;
  if (!hasActiveFilters) return null;
<<<<<<< HEAD
  return (;
    <div className="mb-6 flex flex-wrap gap-2 items-center">;
      <span className="text-zion-slate-light text-sm">Active filters:</span>;
      {selectedSkills.map(skill => (;
        <ClickableBadge;
=======

  return (
    <div className='mb-6 flex flex-wrap gap-2 items-center'>;
      <span className='text-zion-slate-light text-sm'>Active filters:</span>;

      {selectedSkills && selectedSkills.map(skill => (;
        <ClickableBadge
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
          onClick={() => toggleSkill(skill)}
        >;
          {skill}
          <X className="h-3 w-3" />
        </ClickableBadge>
      ))}
<<<<<<< HEAD


      {selectedAvailability && selectedAvailability.map(status => (;

        <ClickableBadge
=======
;
      {selectedAvailability.map(status => (;
        <ClickableBadge;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          key={status}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => toggleAvailability(status)}
        >;
          {status === 'full-time' ? 'Full-time' :;
           status === 'part-time' ? 'Part-time' :;
           'Project-based'}
          <X className="h-3 w-3" />
        </ClickableBadge>
      ))}
<<<<<<< HEAD


      {selectedRegions && selectedRegions.map(region => (;

        <ClickableBadge
<<<<<<< HEAD
=======
;
      {selectedRegions.map(region => (;
        <ClickableBadge;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          key={region}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => toggleRegion(region)}
        >;
          {region}
=======
          key={region}
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => toggleRegion(region)}        >;
          {region}


      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (;

        <ClickableBadge
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => setPriceRange([50, 200])}        >;
          ${priceRange[0]}-${priceRange[1]}/hr;
          <X className='h-3 w-3' />;
        </ClickableBadge>;
      )}


      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (;

        <ClickableBadge
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => setExperienceRange([0, 15])}        >;
          {experienceRange[0]}-{experienceRange[1]} years;
          <X className='h-3 w-3' />;
        </ClickableBadge>;
      )}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          <X className="h-3 w-3" />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        </ClickableBadge>
      ))}
      
      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>         </ClickableBadge>
      ))}
      
      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (
        <ClickableBadge
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => setPriceRange([50, 200])}        >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <ClickableBadge
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => setPriceRange([50, 200])}        >
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        <ClickableBadge
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => setPriceRange([50, 200])}        >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <ClickableBadge 
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => setPriceRange([50, 200])}
        >
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          ${priceRange[0]}-${priceRange[1]}/hr
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}
      {(experienceRange[0] !== 0 |experienceRange[1] !== 15) && (
      
      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (
        <ClickableBadge
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => setExperienceRange([0, 15])}        >
      
      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <ClickableBadge 
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => setExperienceRange([0, 15])}
        >
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>>           {experienceRange[0]}-{experienceRange[1]} years
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          {experienceRange[0]}-{experienceRange[1]} years
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        Clear All
      </Button>
    </div>
  );
};
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={clearFilters}
        className="h-7 text-xs text-zion-purple hover: text-zion-purple-light hover:bg-transparent"
      >
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        Clear All
      </Button>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

        className='h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent'>;


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        Clear All;
      </Button>;
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 
;


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


import React from 'react';
import { ClickableBadge } from '@/components / ui / clickable - badge';
import { Button } from '@/components / ui / button';
import { X } from 'lucide-react';
interface ActiveFiltersProps {
  selected_skills: string[];
  toggle_skill: (skill: string) => void;
  selected_availability: string[];
  toggle_availability: (status: string) => void;
  selected_regions: string[];
  toggle_region: (region: string) => void;
  price_range: [number, number];
  setPriceRange: (range: [number, number]) => void;
  experience_range: [number, number];
  setExperienceRange: (range: [number, number]) => void;
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
  // Check condition
if (return null) {
  $2
}
  return (
    <div className='mb - 6 flex flex - wrap gap - 2 items - center'>;
      <span className='text - zion - slate - light text - sm'>Active filters:</span>;
      {selected_skills.map (skill => (
        <ClickableBadge;
          key={skill}
          className='bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2';
          on_click={() => toggle_skill (skill)}        >;
          {skill}
          <X className='h - 3 w - 3' />;
        </ClickableBadge>))}
      {selected_availability.map (status => (
        <ClickableBadge;
          key={status}
          className='bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2';
          on_click={() => toggle_availability (status)}        >;
          {status === 'full - time';
            ? 'Full - time';
            : status === 'part - time';
              ? 'Part - time';
              : 'Project - based'}
          <X className='h - 3 w - 3' />;
        </ClickableBadge>))}
      {selected_regions.map (region => (
        <ClickableBadge;
          key={region}
          className='bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2';
          on_click={() => toggle_region (region)}        >;
          {region}
          <X className='h - 3 w - 3' />;
        </ClickableBadge>))}
      {(price_range[0] !== 50 || price_range[1] !== 200) && (
        <ClickableBadge;
          className='bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2';
          on_click={() => setPriceRange ([50, 200])}        >;
          ${price_range[0]}-${price_range[1]}/hr;
          <X className='h - 3 w - 3' />;
        </ClickableBadge>)}
      {(experience_range[0] !== 0 || experience_range[1] !== 15) && (
        <ClickableBadge;
          className='bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2';
          on_click={() => setExperienceRange ([0, 15])}        >;
          {experience_range[0]}-{experience_range[1]} years;
          <X className='h - 3 w - 3' />;
        </ClickableBadge>)}
      <Button;
        variant='ghost';
        size='sm';
        on_click={clear_filters}
        className='h - 7 text - xs text - zion - purple hover:text - zion - purple - light hover:bg - transparent'      >;
        Clear All;
      </Button>;
    </div>);
}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

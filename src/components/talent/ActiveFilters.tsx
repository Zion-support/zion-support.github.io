<<<<<<< HEAD
<<<<<<< HEAD


import React from "react",

import { X } from 'lucide-react'
=======
import React from 'react'
import { ClickableBadge } from '@/components/ui/clickable-badge'
import { Button } from '@/components/ui/button'

=======
=======
<<<<<<< HEAD
import React from 'react'
import { ClickableBadge } from '@/components/ui/clickable-badge'
import { Button } from '@/components/ui/button'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",
<<<<<<< HEAD
import { ClickableBadge } from "@/components/ui/clickable-badge";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
>>>>>>> import { X } from 'lucide-react'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
  const hasActiveFilters = null;
    selectedSkills.length > 0 ||
    selectedAvailability.length > 0 ||
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    selectedRegions.length > 0 ||
    experienceRange[0] !== 0 ||
    experienceRange[1] !== 15 ||
    priceRange[0] !== 50 ||
<<<<<<< HEAD
    priceRange[1] !== 200
  if (!hasActiveFilters) return null
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
        </ClickableBadge>
      ))}
      {(priceRange[0] !== 50 |priceRange[1] !== 200) && (
        <ClickableBadge
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => setPriceRange([50, 200])}        >
=======

    selectedRegions.length > 0 ||
    experienceRange[0] !== 0 ||
    experienceRange[1] !== 15 ||
    priceRange[0] !== 50 ||
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  return (;
    <div className="mb-6 flex flex-wrap gap-2 items-center">;
      <span className="text-zion-slate-light text-sm">Active filters:</span>;
      {selectedSkills.map(skill => (;
        <ClickableBadge;
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
          <X className="h-3 w-3" />
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </ClickableBadge>
      ))}
      
      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (
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
        <ClickableBadge 
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => setPriceRange([50, 200])}
        >
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
          ${priceRange[0]}-${priceRange[1]}/hr
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}
<<<<<<< HEAD
<<<<<<< HEAD
      {(experienceRange[0] !== 0 |experienceRange[1] !== 15) && (
=======
      
      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <ClickableBadge
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => setExperienceRange([0, 15])}        >
=======
<<<<<<< HEAD
      
      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <ClickableBadge 
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => setExperienceRange([0, 15])}
        >
<<<<<<< HEAD
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
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {experienceRange[0]}-{experienceRange[1]} years
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
        Clear All
      </Button>
    </div>
  );
};
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={clearFilters}
        className="h-7 text-xs text-zion-purple hover: text-zion-purple-light hover:bg-transparent"
      >
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        Clear All
      </Button>
    </div>
  )
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

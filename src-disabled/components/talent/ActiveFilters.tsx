<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD:src-disabled/components/talent/ActiveFilters.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
:src/components/talent/ActiveFilters.tsx
import React from "react",
import { ClickableBadge } from "@/components/ui/clickable-badge";
import { Button } from "@/components/ui/button";
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { X } from 'lucide-react'
import React from 'react'
import { ClickableBadge } from '@/components/ui/clickable-badge'
import { Button } from '@/components/ui/button'

import React from 'react'
import { ClickableBadge } from '@/components/ui/clickable-badge'
import { Button } from '@/components/ui/button'

import React from "react",
import { ClickableBadge } from "@/components/ui/clickable-badge";
import { Button } from "@/components/ui/button";
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { Button } from "@/components/ui/button",

import { X } from 'lucide-react'
interface ActiveFiltersProps {
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  selectedAvailability: string[];
  toggleAvailability: (status: string) => void;
  selectedRegions: string[];
  toggleRegion: (region: string) => void;
  priceRange: [number, number],
  setPriceRange: (range: [number, number]) => void;
  experienceRange: [number, number],
  setExperienceRange: (range: [number, number]) => void;


  selectedAvailability: string[]
  toggleAvailability: (status: string) => void;
  selectedRegions: string[]
  toggleRegion: (region: string) => void;
  priceRange: [number, number]

  selectedSkills: string[]
  toggleSkill: (skill: string,) => void;
  selectedAvailability: string[]
  toggleAvailability: (status: string,) => void;
  selectedRegions: string[]
  toggleRegion: (region: string,) => void;
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


}
<<<<<<< HEAD
=======

  const hasActiveFilters = null;
    selectedSkills.length > 0 ||
    selectedAvailability.length > 0 ||

    selectedRegions.length > 0 ||
    experienceRange[0] !== 0 ||
    experienceRange[1] !== 15 ||
    priceRange[0] !== 50 ||

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
    priceRange[1] !== 200,
  
  if (!hasActiveFilters) return null,


  const hasActiveFilters = null;
    selectedSkills.length > 0 ||
    selectedAvailability.length > 0 ||
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

=======
  const hasActiveFilters = null;
    selectedSkills.length > 0 ||
    selectedAvailability.length > 0 ||
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    selectedRegions.length > 0 ||
    experienceRange[0] !== 0 ||
    experienceRange[1] !== 15 ||
    priceRange[0] !== 50 ||
<<<<<<< HEAD
>>>>>>> origin/cursor/delete-old-data-records-6bba

    selectedRegions.length > 0 ||
    experienceRange[0] !== 0 ||
    experienceRange[1] !== 15 ||
    priceRange[0] !== 50 ||


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

export function ActiveFilters(): any ({;  selectedSkills,;
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
    selectedRegions && selectedRegions.length > 0 ||;    experienceRange[0] !== 0 ||;
    experienceRange[1] !== 15 ||;
    priceRange[0] !== 50 ||;
    priceRange[1] !== 200;
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
        </ClickableBadge>;      ))}

      {selectedRegions && selectedRegions.map(region => (;

        <ClickableBadge
          key={region}
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => toggleRegion(region)}        >;          {region}

          {region}

      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (;

        <ClickableBadge'
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'



          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => setPriceRange([50, 200])}
        >
          ${priceRange[0]}-${priceRange[1]}/hr"
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}

      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (;



        </ClickableBadge>
      ))}
      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (

          ${priceRange[0]}-${priceRange[1]}/hr
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}

      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (

          {experienceRange[0]}-{experienceRange[1]} years"
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}


          {experienceRange[0]}-{experienceRange[1]} years
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}

      <Button


        variant='ghost'
        size='sm'
        onClick={clearFilters}

        Clear All
      </Button>
    </div>
  )
};
}

      
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

        className='h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent'>;

          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}
;
      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (;
        <ClickableBadge;"
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
          onClick={() => setPriceRange([50, 200])}
        >;
          ${priceRange[0]}-${priceRange[1]}/hr;"
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}
;
      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (;
        <ClickableBadge;"
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
          onClick={() => setExperienceRange([0, 15])}
        >;
          {experienceRange[0]}-{experienceRange[1]} years;"
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}
;
      <Button;"
        variant="ghost";"
        size="sm";
        onClick={clearFilters}"
        className="h-7 text-xs text-zion-purple hover: text-zion-purple-light hover:bg-transparent";
      >;


        Clear All;
      </Button>;
    </div>;
  );

}

import React from 'react';
import { ClickableBadge } from '@/components / ui / clickable - badge';
import { Button } from '@/components / ui / button';

interface ActiveFiltersProps {}
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
  clear_filters: () => void;interface ActiveFiltersProps {}

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
export /**;
 * ActiveFilters - Function description;
 */
function ActiveFilters() {}
  // Check if any filters are active;
  const hasActiveFilters =;
    selected_skills.length > 0 ||;
    selected_availability.length > 0 ||;
    selected_regions.length > 0 ||;,
    experience_range[0] !== 0 ||;,
    experience_range[1] !== 15 ||;,
    price_range[0] !== 50 ||;,
    price_range[1] !== 200;

}
  return ('
    <div className='mb - 6 flex flex - wrap gap - 2 items - center'>;'
      <span className='text - zion - slate - light text - sm'>Active filters:</span>;
      {selected_skills.map (skill => (
        <ClickableBadge;

          on_click={() => toggle_skill (skill)}        >;
          {skill}'
          <X className='h - 3 w - 3' />;
        </ClickableBadge>))}
      {selected_availability.map (status => (
        <ClickableBadge;

              : 'Project - based'}'
          <X className='h - 3 w - 3' />;
        </ClickableBadge>))}
      {selected_regions.map (region => (
        <ClickableBadge;

          on_click={() => toggle_region (region)}        >;
          {region}'
          <X className='h - 3 w - 3' />;
        </ClickableBadge>))}

        Clear All;
      </Button>;
    </div>);
<<<<<<< HEAD

}

=======
<<<<<<< HEAD
}
=======
<<<<<<< HEAD:src-disabled/components/talent/ActiveFilters.tsx
}
=======
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/talent/ActiveFilters.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

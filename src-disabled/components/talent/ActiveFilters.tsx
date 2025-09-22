:src_backup/components/talent/ActiveFilters.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import { X } from 'lucide-react'
:src_backup/components/talent/ActiveFilters.tsx
interface ActiveFiltersProps {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
import React from "react",
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { Button } from "@/components/ui/button",
import { X } from 'lucide-react'
  selectedAvailability: string[]
  toggleAvailability: (status: string) => void;
  selectedRegions: string[]
  toggleRegion: (region: string) => void;
  priceRange: [number, number]
:src_backup/components/talent/ActiveFilters.tsx
  setPriceRange: (range: [number, number]) => void
  experienceRange: [number, number]
  setExperienceRange: (range: [number, number]) => void
  clearFilters: () => void;interface ActiveFiltersProps {
  selectedSkills: string[]
  toggleSkill: (skill: string,) => void;
  selectedAvailability: string[]
  toggleAvailability: (status: string,) => void;
  selectedRegions: string[]
  toggleRegion: (region: string,) => void;
  priceRange: [number, number]
  setPriceRange: (range: [number, number],) => void;
  experienceRange: [number, number]
:src_backup/components/talent/ActiveFilters.tsx
  setExperienceRange: (range: [number, number],) => void
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

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
  clearFilters: () => void
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
  clearFilters
}: ActiveFiltersProps) {
  // Check if any filters are active
  const hasActiveFilters = 
    selectedSkills.length > 0 || 
    selectedAvailability.length > 0 ||
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const hasActiveFilters = null;
    selectedSkills.length > 0 ||
    selectedAvailability.length > 0 ||

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    selectedRegions.length > 0 ||
    experienceRange[0] !== 0 ||
    experienceRange[1] !== 15 ||
    priceRange[0] !== 50 ||
<<<<<<< HEAD

    selectedRegions.length > 0 ||
    experienceRange[0] !== 0 ||
    experienceRange[1] !== 15 ||
    priceRange[0] !== 50 ||

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    priceRange[1] !== 200,

  if (!hasActiveFilters) return null,

import React from 'react';
import { ClickableBadge } from '@/components/ui/clickable-badge';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

import React from "react",
import { ClickableBadge } from "@/components/ui/clickable-badge";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react'
=======

interface ActiveFiltersProps {
  selectedSkills: string[],
  toggleSkill: (skill:,  string) => void,
  selectedAvailability: string[],
  toggleAvailability: (status:,  string) => void,
  selectedRegions: string[],
  toggleRegion: (region:,  string) => void,
  priceRange: [number, number],
  setPriceRange: (range: [number, number]) => void,
  experienceRange: [number, number];,
  setExperienceRange: (range: [number, number]) => void;
  clearFilters: () => void;interface ActiveFiltersProps {,
  selectedSkills: string[],
  toggleSkill: (skill: string,) => void,
  selectedAvailability: string[],
  toggleAvailability: (status: string,) => void,
  selectedRegions: string[],
  toggleRegion: (region: string,) => void,
  priceRange: [number, number],
  setPriceRange: (range: [number, number],) => void,
  experienceRange: [number, number],

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/talent/ActiveFilters.tsx
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

  clearFilters: () => void
}
export function ActiveFilters({

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
  clearFilters
}: ActiveFiltersProps) {
  // Check if any filters are active
  const hasActiveFilters = null;
:src_backup/components/talent/ActiveFilters.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <div className="mb-6 flex flex-wrap gap-2 items-center">"
      <span className="text-zion-slate-light text-sm">Active filters:</span>

      {selectedSkills.map(skill => (
        <ClickableBadge;
          key={skill}"
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2""
import React from "react",;"
import { ClickableBadge } from "@/components/ui/clickable-badge",;"
import { Button } from "@/components/ui/button",;'
import { X } from 'lucide-react';
interface ActiveFiltersProps {;
:src/components/talent/ActiveFilters.tsx

export function ActiveFilters(): any ({;  selectedSkills,;
  selectedSkills,;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  toggleSkill,;
  selectedAvailability,;
  toggleAvailability,;
  selectedRegions,;
  toggleRegion,;
  priceRange,;
  setPriceRange,;
  experienceRange,;
  setExperienceRange,;
:src/components/talent/ActiveFilters.tsx
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/ActiveFilters.tsx

    experienceRange[0] !== 0 ||;
    experienceRange[1] !== 15 ||;
    priceRange[0] !== 50 ||;
    priceRange[1] !== 200;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  if (!hasActiveFilters) return null;
  return (;
    <div className="mb-6 flex flex-wrap gap-2 items-center">;
      <span className="text-zion-slate-light text-sm">Active filters:</span>;
      {selectedSkills.map(skill => (;
        <ClickableBadge;
          key={skill}
:src/components/talent/ActiveFilters.tsx
<<<<<<< HEAD
=======

          key={skill}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/talent/ActiveFilters.tsx
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
          onClick={() => toggleSkill(skill)}
        >;
          {skill}"
          <X className="h-3 w-3" />
        </ClickableBadge>
:src_backup/components/talent/ActiveFilters.tsx
))}
;
      {selectedAvailability.map(status => (;
        <ClickableBadge;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/ActiveFilters.tsx

      ))}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

      ))}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      {selectedAvailability && selectedAvailability.map(status => (;

:src_backup/components/talent/ActiveFilters.tsx
        <ClickableBadge
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          key={status}
<<<<<<< HEAD:src/components/talent/ActiveFilters.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => toggleAvailability(status)}
        >;'
          {status === 'full-time' ? 'Full-time' :;'
           status === 'part-time' ? 'Part-time' :;'
           'Project-based'}"
          <X className="h-3 w-3" />
        </ClickableBadge>
:src/components/talent/ActiveFilters.tsx
      ))}
;
      {selectedRegions.map(region => (;
        <ClickableBadge;
          key={region}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => toggleRegion(region)}
        >;
          {region}
<X className="h-3 w-3" />
        </ClickableBadge>
      ))}

      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/ActiveFilters.tsx

      ))}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

      ))}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      {selectedRegions && selectedRegions.map(region => (;

        <ClickableBadge
          key={region}
:src_backup/components/talent/ActiveFilters.tsx
<<<<<<< HEAD
<<<<<<< HEAD
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => toggleRegion(region)}        >;          {region}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/ActiveFilters.tsx

          {region}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

          {region}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (;

        <ClickableBadge'
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => setPriceRange([50, 200])}        >
:src_backup/components/talent/ActiveFilters.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <ClickableBadge
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => setPriceRange([50, 200])}
        >
          ${priceRange[0]}-${priceRange[1]}/hr"
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}
:src_backup/components/talent/ActiveFilters.tsx
<<<<<<< HEAD
<<<<<<< HEAD

      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (
=======
      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/talent/ActiveFilters.tsx

      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (;

        <ClickableBadge'
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => setExperienceRange([0, 15])}        >
:src_backup/components/talent/ActiveFilters.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <ClickableBadge
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => setExperienceRange([0, 15])}
        >
          {experienceRange[0]}-{experienceRange[1]} years"
          <X className="h-3 w-3" />
        </ClickableBadge>
:src_backup/components/talent/ActiveFilters.tsx
      )}
<X className="h-3 w-3" />

        </ClickableBadge>
      ))}
      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (

:src_backup/components/talent/ActiveFilters.tsx
          ${priceRange[0]}-${priceRange[1]}/hr
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}

      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (

          {experienceRange[0]}-{experienceRange[1]} years"
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}

:src_backup/components/talent/ActiveFilters.tsx
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

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
      <Button 
        variant="ghost" 
=======
      <Button "
        variant="ghost" "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/ActiveFilters.tsx
        size="sm" 
        onClick={clearFilters}"
        className="h-7 text-xs text-zion-purple hover: text-zion-purple-light hover:bg-transparent"
      >

:src_backup/components/talent/ActiveFilters.tsx
        Clear All
      </Button>
    </div>
:src_backup/components/talent/ActiveFilters.tsx
<<<<<<< HEAD
  )
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
<<<<<<< HEAD

:src/components/talent/ActiveFilters.tsx
        className='h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent'>;
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}
;,
      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (;,
        <ClickableBadge;
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";",
          onClick={() => setPriceRange([50, 200])}
        >;
          ${priceRange[0]}-${priceRange[1]}/hr;,
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}
;,
      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (;,
        <ClickableBadge;
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";",
          onClick={() => setExperienceRange([0, 15])}
        >;
          {experienceRange[0]}-{experienceRange[1]} years;,

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'
        className='h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent'>;

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/ActiveFilters.tsx
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
:src_backup/components/talent/ActiveFilters.tsx
<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react';
import { ClickableBadge } from '@/components / ui / clickable - badge';
import { Button } from '@/components / ui / button';
:src_backup/components/talent/ActiveFilters.tsx
import { X } from 'lucide-react';
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
=======
import { X } from 'lucide-react';
interface ActiveFiltersProps {,
  selected_skills: string[];,
  toggle_skill: (skill:,  string) => void;,
  selected_availability: string[];,
  toggle_availability: (status:,  string) => void;,
  selected_regions: string[];,
  toggle_region: (region:,  string) => void;,
  price_range: [number, number];,
  setPriceRange: (range: [number, number]) => void;,
  experience_range: [number, number];,
  setExperienceRange: (range: [number, number]) => void;
  clear_filters: () => void;interface ActiveFiltersProps {,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/talent/ActiveFilters.tsx
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
:src_backup/components/talent/ActiveFilters.tsx
  // Check condition;
if (return null) {}
  $2;
}
  return ('
    <div className='mb - 6 flex flex - wrap gap - 2 items - center'>;'
      <span className='text - zion - slate - light text - sm'>Active filters:</span>;
      {selected_skills.map (skill => (
        <ClickableBadge;
:src_backup/components/talent/ActiveFilters.tsx
          key={skill}'
          className='bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2';
          on_click={() => toggle_skill (skill)}        >;
          {skill}'
          <X className='h - 3 w - 3' />;
        </ClickableBadge>))}
      {selected_availability.map (status => (
        <ClickableBadge;
:src_backup/components/talent/ActiveFilters.tsx
          key={status}'
          className='bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2';
          on_click={() => toggle_availability (status)}        >;'
          {status === 'full - time';'
            ? 'Full - time';'
            : status === 'part - time';'
              ? 'Part - time';'
              : 'Project - based'}'
          <X className='h - 3 w - 3' />;
        </ClickableBadge>))}
      {selected_regions.map (region => (
        <ClickableBadge;
:src_backup/components/talent/ActiveFilters.tsx
          key={region}'
          className='bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2';
          on_click={() => toggle_region (region)}        >;
          {region}'
          <X className='h - 3 w - 3' />;
        </ClickableBadge>))}
:src_backup/components/talent/ActiveFilters.tsx
      {(price_range[0] !== 50 || price_range[1] !== 200) && (
        <ClickableBadge;'
          className='bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2';
          on_click={() => setPriceRange ([50, 200])}        >;
          ${price_range[0]}-${price_range[1]}/hr;'
          <X className='h - 3 w - 3' />;
        </ClickableBadge>)}
      {(experience_range[0] !== 0 || experience_range[1] !== 15) && (
        <ClickableBadge;'
          className='bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2';
          on_click={() => setExperienceRange ([0, 15])}        >;
          {experience_range[0]}-{experience_range[1]} years;'
          <X className='h - 3 w - 3' />;
        </ClickableBadge>)}
      <Button;'
        variant='ghost';'
        size='sm';
        on_click={clear_filters}'
        className='h - 7 text - xs text - zion - purple hover:text - zion - purple - light hover:bg - transparent'      >;
        Clear All;
      </Button>;
    </div>);
}
:src_backup/components/talent/ActiveFilters.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

    </div>);
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/talent/ActiveFilters.tsx

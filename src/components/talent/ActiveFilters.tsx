<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
<<<<<<< HEAD:src/components/talent/ActiveFilters.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { X } from 'lucide-react'
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
interface ActiveFiltersProps {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
import React from "react",
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { Button } from "@/components/ui/button",
import { X } from 'lucide-react'
=======
  selectedSkills: string[]
  toggleSkill: (skill: string) => void
=======
interface ActiveFiltersProps {}
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/ActiveFilters.tsx
  selectedAvailability: string[]
  toggleAvailability: (status: string) => void;
  selectedRegions: string[]
  toggleRegion: (region: string) => void;
  priceRange: [number, number]
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
  setPriceRange: (range: [number, number]) => void
  experienceRange: [number, number]
  setExperienceRange: (range: [number, number]) => void
  clearFilters: () => void;interface ActiveFiltersProps {
=======
  setPriceRange: (range: [number, number]) => void;
  experienceRange: [number, number];
  setExperienceRange: (range: [number, number]) => void;
  clearFilters: () => void;interface ActiveFiltersProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/ActiveFilters.tsx
  selectedSkills: string[]
  toggleSkill: (skill: string,) => void;
  selectedAvailability: string[]
  toggleAvailability: (status: string,) => void;
  selectedRegions: string[]
  toggleRegion: (region: string,) => void;
  priceRange: [number, number]
  setPriceRange: (range: [number, number],) => void;
  experienceRange: [number, number]
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
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
=======
  setExperienceRange: (range: [number, number],) => void;
  clearFilters: () => void;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/ActiveFilters.tsx
}

<<<<<<< HEAD
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




=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

    selectedRegions.length > 0 ||
    experienceRange[0] !== 0 ||
    experienceRange[1] !== 15 ||
    priceRange[0] !== 50 ||

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    priceRange[1] !== 200,
  
  if (!hasActiveFilters) return null,

<<<<<<< HEAD
=======
  const hasActiveFilters = null;
    selectedSkills.length > 0 ||
    selectedAvailability.length > 0 ||
    selectedRegions.length > 0 ||
    experienceRange[0] !== 0 ||
    experienceRange[1] !== 15 ||
    priceRange[0] !== 50 ||
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308:src_backup/components/talent/ActiveFilters.tsx
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
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
<<<<<<< HEAD:src/components/talent/ActiveFilters.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/ActiveFilters.tsx
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
<<<<<<< HEAD:src/components/talent/ActiveFilters.tsx
=======
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
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
export function ActiveFilters({;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308:src_backup/components/talent/ActiveFilters.tsx

<<<<<<< HEAD
export function ActiveFilters(): any ({;  selectedSkills,;
=======

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD:src/components/talent/ActiveFilters.tsx
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
=======
=======
<<<<<<< HEAD:src/components/talent/ActiveFilters.tsx
=======
  clearFilters;
}: ActiveFiltersProps) {;
  // Check if any filters are active;
  const hasActiveFilters =;
    selectedSkills.length > 0 ||;
    selectedAvailability.length > 0 ||;
    selectedRegions.length > 0 ||;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308:src_backup/components/talent/ActiveFilters.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/ActiveFilters.tsx

    experienceRange[0] !== 0 ||;
    experienceRange[1] !== 15 ||;
    priceRange[0] !== 50 ||;
    priceRange[1] !== 200;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

    experienceRange[0] !== 0 ||;
    experienceRange[1] !== 15 ||;
    priceRange[0] !== 50 ||;
    priceRange[1] !== 200;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  if (!hasActiveFilters) return null;
  return (;
    <div className="mb-6 flex flex-wrap gap-2 items-center">;
      <span className="text-zion-slate-light text-sm">Active filters:</span>;
      {selectedSkills.map(skill => (;
        <ClickableBadge;
          key={skill}
<<<<<<< HEAD:src/components/talent/ActiveFilters.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD:src/components/talent/ActiveFilters.tsx
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/ActiveFilters.tsx
=======
export function ActiveFilters() { return null; }
          key={skill}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/ActiveFilters.tsx
=======

          key={skill}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/talent/ActiveFilters.tsx
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
          onClick={() => toggleSkill(skill)}
        >;
          {skill}"
          <X className="h-3 w-3" />
        </ClickableBadge>
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
<<<<<<< HEAD:src/components/talent/ActiveFilters.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      ))}
<<<<<<< HEAD
;
      {selectedAvailability.map(status => (;
        <ClickableBadge;
=======
=======
=======

      ))}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308:src_backup/components/talent/ActiveFilters.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/ActiveFilters.tsx
=======
      ))}
;
      {selectedAvailability.map(status => (;
        <ClickableBadge;
          key={status}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => toggleAvailability(status)}
        >;
          {status === 'full-time' ? 'Full-time' :;
           status === 'part-time' ? 'Part-time' :;
           'Project-based'}'
          <X className="h-3 w-3" />"
        </ClickableBadge>
      ))}
      {selectedRegions && selectedRegions.map(region => (;
        <ClickableBadge
          key={region}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"",
          onClick={() => toggleRegion(region)}
        >;
          {region},
      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (;,
        <ClickableBadge
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'',
          onClick={() => setPriceRange([50, 200])}        >
        <ClickableBadge
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"",
          onClick={() => setPriceRange([50, 200])}
        >
          ${priceRange[0]}-${priceRange[1]}/hr,
          <X className="h-3 w-3" />"
        </ClickableBadge>
      )}
      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (;,
        <ClickableBadge
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'',
          onClick={() => setExperienceRange([0, 15])}        >
        <ClickableBadge
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"",
          onClick={() => setExperienceRange([0, 15])}
        >
          {experienceRange[0]}-{experienceRange[1]} years,
          <X className="h-3 w-3" />"
        </ClickableBadge>
      )}
          <X className="h-3 w-3" />"
        </ClickableBadge>
      ))},
      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (,
          ${priceRange[0]}-${priceRange[1]}/hr,
          <X className="h-3 w-3" />"
        </ClickableBadge>
      )}
      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (,
          {experienceRange[0]}-{experienceRange[1]} years,
          <X className="h-3 w-3" />"
        </ClickableBadge>
      )}
      <Button
        variant='ghost''
        size='sm''
        onClick={clearFilters}
        Clear All
      </Button>
    </div>
  );
};
}
      <Button
        variant="ghost" "
        size="sm" "
        onClick={clearFilters}
        className="h-7 text-xs text-zion-purple hover: text-zion-purple-light hover:bg-transparent""
           'Project-based'}
          <X className="h-3 w-3" />
        </ClickableBadge>
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/talent/ActiveFilters.tsx

      ))}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

      ))}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      {selectedAvailability && selectedAvailability.map(status => (;

<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
        <ClickableBadge
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          key={status}
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
<<<<<<< HEAD:src/components/talent/ActiveFilters.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD:src/components/talent/ActiveFilters.tsx
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/ActiveFilters.tsx
=======
        <ClickableBadge;
          key={status}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/ActiveFilters.tsx
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => toggleAvailability(status)}
        >;'
          {status === 'full-time' ? 'Full-time' :;'
           status === 'part-time' ? 'Part-time' :;'
           'Project-based'}"
          <X className="h-3 w-3" />
        </ClickableBadge>
<<<<<<< HEAD:src/components/talent/ActiveFilters.tsx
      ))}
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
;
      {selectedRegions.map(region => (;
        <ClickableBadge;
          key={region}
=======


      {selectedRegions && selectedRegions.map(region => (;

        <ClickableBadge;
          key={region}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/ActiveFilters.tsx
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => toggleRegion(region)}
        >;
          {region}
<<<<<<< HEAD
          <X className="h-3 w-3" />
        </ClickableBadge>
      ))}
      
      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (
=======

=======
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => toggleAvailability(status)}        >;
          {status === 'full-time';
            ? 'Full-time';
            : status === 'part-time';
              ? 'Part-time';
              : 'Project-based'}
          <X className='h-3 w-3' />;
        </ClickableBadge>;      ))}
=======
=======

      ))}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308:src_backup/components/talent/ActiveFilters.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/ActiveFilters.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/talent/ActiveFilters.tsx

      ))}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

      ))}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      {selectedRegions && selectedRegions.map(region => (;

        <ClickableBadge
          key={region}
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
<<<<<<< HEAD:src/components/talent/ActiveFilters.tsx
<<<<<<< HEAD
<<<<<<< HEAD
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => toggleRegion(region)}        >;          {region}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
<<<<<<< HEAD:src/components/talent/ActiveFilters.tsx
=======
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => toggleRegion(region)}
        >;

          {region}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308:src_backup/components/talent/ActiveFilters.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/ActiveFilters.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/talent/ActiveFilters.tsx

          {region}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

          {region}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (;

        <ClickableBadge'
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => setPriceRange([50, 200])}        >
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <ClickableBadge 
=======
        <ClickableBadge "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/ActiveFilters.tsx
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => setPriceRange([50, 200])}
        >
          ${priceRange[0]}-${priceRange[1]}/hr"
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      
      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/talent/ActiveFilters.tsx

      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (;

        <ClickableBadge'
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2'
          onClick={() => setExperienceRange([0, 15])}        >
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <ClickableBadge 
=======
        <ClickableBadge "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/ActiveFilters.tsx
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => setExperienceRange([0, 15])}
        >
          {experienceRange[0]}-{experienceRange[1]} years"
          <X className="h-3 w-3" />
        </ClickableBadge>
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
      )}
<<<<<<< HEAD
=======
=======
      )}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/ActiveFilters.tsx
          <X className="h-3 w-3" />

        </ClickableBadge>
      ))}
      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (

<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
          ${priceRange[0]}-${priceRange[1]}/hr
=======

          ${priceRange[0]}-${priceRange[1]}/hr"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/ActiveFilters.tsx
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}

      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (

          {experienceRange[0]}-{experienceRange[1]} years"
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}

<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
      <Button
        variant='ghost'
        size='sm'
        onClick={clearFilters}

        Clear All
=======


      <Button'
        variant='ghost''
        size='sm'
        onClick={clearFilters}


        Clear All;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/ActiveFilters.tsx
      </Button>
    </div>
  )
};
}

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
        Clear All
=======


        Clear All;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/ActiveFilters.tsx
      </Button>
    </div>
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
<<<<<<< HEAD:src/components/talent/ActiveFilters.tsx
<<<<<<< HEAD
  )
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/ActiveFilters.tsx

<<<<<<< HEAD:src/components/talent/ActiveFilters.tsx
=======
  )
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/talent/ActiveFilters.tsx
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
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

import React from 'react';
import { ClickableBadge } from '@/components / ui / clickable - badge';
import { Button } from '@/components / ui / button';
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
=======



'
import React from 'react';'
import { ClickableBadge } from '@/components / ui / clickable - badge';'
import { Button } from '@/components / ui / button';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/ActiveFilters.tsx
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
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
  // Check condition;
if (return null) {}
  $2;
=======
  // Check condition
if (return,  null) {
  $2
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/talent/ActiveFilters.tsx
}
  return ('
    <div className='mb - 6 flex flex - wrap gap - 2 items - center'>;'
      <span className='text - zion - slate - light text - sm'>Active filters:</span>;
      {selected_skills.map (skill => (
        <ClickableBadge;
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
          key={skill}'
          className='bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2';
=======
          key={skill}
          className='bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2';',
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/talent/ActiveFilters.tsx
          on_click={() => toggle_skill (skill)}        >;
          {skill}'
          <X className='h - 3 w - 3' />;
        </ClickableBadge>))}
      {selected_availability.map (status => (
        <ClickableBadge;
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
          key={status}'
          className='bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2';
          on_click={() => toggle_availability (status)}        >;'
          {status === 'full - time';'
            ? 'Full - time';'
            : status === 'part - time';'
              ? 'Part - time';'
=======
          key={status}
          className='bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2';',
          on_click={() => toggle_availability (status)}        >;
          {status === 'full - time';
            ? 'Full - time';
            : status === 'part - time';
              ? 'Part - time';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/talent/ActiveFilters.tsx
              : 'Project - based'}'
          <X className='h - 3 w - 3' />;
        </ClickableBadge>))}
      {selected_regions.map (region => (
        <ClickableBadge;
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
          key={region}'
          className='bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2';
=======
          key={region}
          className='bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2';',
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/talent/ActiveFilters.tsx
          on_click={() => toggle_region (region)}        >;
          {region}'
          <X className='h - 3 w - 3' />;
        </ClickableBadge>))}
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
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
=======
      {(price_range[0] !== 50 || price_range[1] !== 200) && (,
        <ClickableBadge;
          className='bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2';',
          on_click={() => setPriceRange ([50, 200])}        >;,
          ${price_range[0]}-${price_range[1]}/hr;,
          <X className='h - 3 w - 3' />;
        </ClickableBadge>)},
      {(experience_range[0] !== 0 || experience_range[1] !== 15) && (,
        <ClickableBadge;
          className='bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2';',
          on_click={() => setExperienceRange ([0, 15])}        >;,
          {experience_range[0]}-{experience_range[1]} years;,
          <X className='h - 3 w - 3' />;
        </ClickableBadge>)}
      <Button;
  return (
    <div className="mb-6 flex flex-wrap gap-2 items-center">"
</div>"
      <span className="text-zion-slate-light text-sm">Active filters:</span>"
        <ClickableBadge;
          key={skill}"
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"""
import React from "react",;""
import { ClickableBadge } from "@/components/ui/clickable-badge",;""
import { Button } from "@/components/ui/button",;""
import { X } from 'lucide-react';
interface ActiveFiltersProps {;
  selectedSkills: string[],;)
  toggleSkill: (skill: string) => void,;

    <div className='mb-6 flex flex-wrap gap-2 items-center'>;
</div>
      <span className='text-zion-slate-light text-sm'>Active filters:</span>;
          key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";"
          onClick={() => toggleSkill(skill)}
"
          <X className="h-3 w-3" />"

          key={status}"
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2""
          onClick={() => toggleAvailability(status)}

          key={region}"
          onClick={() => toggleRegion(region)}

        <ClickableBadge;"
          className='bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2
          onClick={() => setPriceRange([50, 200])}        >

          onClick={() => setPriceRange([50, 200])}

          onClick={() => setExperienceRange([0, 15])}        >

          onClick={() => setExperienceRange([0, 15])}




      <Button;"
        variant='ghost
        size='sm
        onClick={clearFilters}


        Clear All;
      <Button;
        variant="ghost"""
        size="sm""
        onClick={clearFilters}"
        className="h-7 text-xs text-zion-purple hover: text-zion-purple-light hover:bg-transparent""
      >

          <X className="h-3 w-3" />;"

        ;


        variant="ghost";""
        size="sm";"
        className="h-7 text-xs text-zion-purple hover: text-zion-purple-light hover:bg-transparent";"
      >;

    </div>;"
    <div className='mb - 6 flex flex - wrap gap - 2 items - center'>;
      <span className='text - zion - slate - light text - sm'>Active filters:</span>;
          className='bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2';
          on_click={() => toggle_skill (skill)}        >;

          <X className='h - 3 w - 3' />;

        ))}
          key={status}
          on_click={() => toggle_availability (status)}        >;


          key={region}
          on_click={() => toggle_region (region)}        >;


          on_click={() => setPriceRange ([50, 200])}        >;


        )}
          on_click={() => setExperienceRange ([0, 15])}        >;


pr-12325
        variant='ghost';
        size='sm';
        on_click={clear_filters}
        className='h - 7 text - xs text - zion - purple hover:text - zion - purple - light hover:bg - transparent'      >;',
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/talent/ActiveFilters.tsx
        Clear All;
      </Button>;
    </div>);
}
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
;
;
  );
<<<<<<< HEAD:src/components/talent/ActiveFilters.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD:src_backup/components/talent/ActiveFilters.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/ActiveFilters.tsx
=======
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/ActiveFilters.tsx
=======

    </div>);
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/talent/ActiveFilters.tsx

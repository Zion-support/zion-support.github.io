import React from "react",;
import { ClickableBadge } from "@/components/ui/clickable-badge",;
import { Button } from "@/components/ui/button",;
<<<<<<< HEAD
import { X } from 'lucide-react';
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
=======

import { X } from 'lucide-react';

;
interface ActiveFiltersProps {;
  selectedSkills: string[];,;
  toggleSkill: (skill:string) => void;,;
  selectedAvailability: string[];,;
  toggleAvailability: (status:string) => void;,;
  selectedRegions: string[];,;
  toggleRegion: (region:string) => void;,;
  priceRange: [number;, number],;
  setPriceRange: (range:[number;, number]) => void,;
  experienceRange: [number;, number],;
  setExperienceRange: (range:[number;, number]) => void,;
  clearFilters:() => void;
}
>>>>>>> merged-prs-20250907-203621
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
  clearFilters;
=======
  clearFilters;)
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
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
=======
  if (!hasActiveFilters) return null,;
  return (;
    <div className="mb-6 flex flex-wrap gap-2 items-center">;"
</div>"
      <span className="text-zion-slate-light text-sm">Active filters:</span>;"
        <ClickableBadge ;

>>>>>>> merged-prs-20250907-203621
        >;
          {skill}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}
<<<<<<< HEAD
      ;
      {selectedAvailability.map(status => (;
        <ClickableBadge ;
=======

>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
      ;
      {selectedRegions.map(region => (;
        <ClickableBadge ;
          key={region}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";          onClick={() => toggleRegion(region)}
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
        >;
          {region}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
      ;
      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (;
        <ClickableBadge ;
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
          onClick={() => setPriceRange([50, 200])}
        >;
          ${priceRange[0]}-${priceRange[1]}/hr;
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
      ;
      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (;
        <ClickableBadge ;
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
          onClick={() => setExperienceRange([0, 15])}
        >;
          {experienceRange[0]}-{experienceRange[1]} years;
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
      ;
      <Button ;
        variant="ghost" ;
        size="sm" ;
        onClick={clearFilters}
        className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent";
<<<<<<< HEAD
      >;
        Clear All;
      </Button>;
    </div>;
  );}
 import {;
  {;
  {;
  X ;
}from 'lucide-react' interface ActiveFiltersProps {;
  selectedSkills: string[];
toggleSkill: (skill: string) => void;
selectedAvailability: string[];
toggleAvailability: (status: string) => void;
selectedRegions: string[];
toggleRegion: (region: string) => void;
priceRange: [number, number];
setPriceRange: (range: [number, number]) => void;
experienceRange: [number,  number];
setExperienceRange: (range: [number, number]) => void;
clearFilters: () => void ;
}selectedSkills, toggleSkill, selectedAvailability, toggleAvailability, selectedRegions, toggleRegion, priceRange, setPriceRange, experienceRange, setExperienceRange, clearFilters ;
}: ActiveFiltersProps) {;
  //Check if any filters are active const hasActiveFilters = selectedSkills.length > 0 || selectedAvailability.length > 0 || selectedRegions.length > 0 || experienceRange[0] !== 0 || experienceRange[1] !== 15 || priceRange[0] !== 50 || priceRange[1] !== 200;
if (!hasActiveFilters) return null;
{;
  selectedSkills.map (skill => (<ClickableBadge key= {;
  skill ;
}</ClickableBadge>) ) ;
}{;
  selectedAvailability.map (status => (<ClickableBadge key= {;
  status ;
}> {';
=======

      >;

    </div>;
  selectedSkills.map (skill => (<ClickableBadge key= {;
  skill ;)
}) ) ;
  selectedAvailability.map (status => (<ClickableBadge key= {;
  status ;"
}> {';
<<<<<<< HEAD
)
}<X className="h-3 w-3" /> ) ) ;"

  selectedRegions.map (region => (<ClickableBadge key= {;
=======
>>>>>>> merged-prs-20250907-203621
  status === 'full-time' ? 'Full-time' : status === 'part-time' ? 'Part-time' : 'Project-based' ;
}<X className="h-3 w-3" /> </ClickableBadge>) ) ;
}{;
  selectedRegions.map (region => (<ClickableBadge key= {;
  region ;
}</ClickableBadge>) ;
<<<<<<< HEAD
}<Button ;"}'"
=======
<<<<<<< HEAD
:temp_broken_files/talent/ActiveFilters.tsx
}<Button ;"}'"
}<Button ;
}'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/talent/ActiveFilters.tsx
=======

}<Button ;
}'"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621

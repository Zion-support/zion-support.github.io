
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx
import React from "react",;
import { ClickableBadge } from "@/components/ui/clickable-badge",;
import { Button } from "@/components/ui/button",;
import { X } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/ActiveFilters.tsx
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
  clearFilters;)
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
  if (!hasActiveFilters) return null,;
  return (;
    <div className="mb-6 flex flex-wrap gap-2 items-center">;"
</div>"
      <span className="text-zion-slate-light text-sm">Active filters:</span>;"
        <ClickableBadge ;
key={skill}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";          onClick={() => toggleSkill(skill)}
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        >;
          {skill}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}
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
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx
      ;
      {selectedRegions.map(region => (;
        <ClickableBadge ;
          key={region}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";          onClick={() => toggleRegion(region)}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/ActiveFilters.tsx
        >;
          {region}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx
      ;
      {(priceRange[0] !== 50 || priceRange[1] !== 200) && (;
        <ClickableBadge ;
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/ActiveFilters.tsx
          onClick={() => setPriceRange([50, 200])}
        >;
          ${priceRange[0]}-${priceRange[1]}/hr;
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx
      ;
      {(experienceRange[0] !== 0 || experienceRange[1] !== 15) && (;
        <ClickableBadge ;
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/ActiveFilters.tsx
          onClick={() => setExperienceRange([0, 15])}
        >;
          {experienceRange[0]}-{experienceRange[1]} years;
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/ActiveFilters.tsx
      ;
      <Button ;
        variant="ghost" ;
        size="sm" ;
        onClick={clearFilters}
        className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent";
      >;

    </div>;
  selectedSkills.map (skill => (<ClickableBadge key= {;
  skill ;)
}) ) ;
  selectedAvailability.map (status => (<ClickableBadge key= {;
  status ;"
}> {';
)
}<X className="h-3 w-3" /> ) ) ;"

  selectedRegions.map (region => (<ClickableBadge key= {;
region ;
}</ClickableBadge>) ;
:temp_broken_files/talent/ActiveFilters.tsx
}<Button ;"}'"
}<Button ;
}'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/talent/ActiveFilters.tsx
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/ActiveFilters.tsx

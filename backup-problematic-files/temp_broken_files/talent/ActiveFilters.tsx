
import React from "react",;""
import { ClickableBadge } from "@/components/ui/clickable-badge",;""
import { Button } from "@/components/ui/button",;""
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
          key={skill})"
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";          onClick={() => toggleSkill(skill)}"
"
          <X className="h-3 w-3" />;"

          key={status}"
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";"
          onClick={() => toggleAvailability(status)}

          key={region}"
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";          onClick={() => toggleRegion(region)}"

        <ClickableBadge ;"
          onClick={() => setPriceRange([50, 200])}

          onClick={() => setExperienceRange([0, 15])}

      <Button ;"
        variant="ghost" ;""
        size="sm" ;"
        onClick={clearFilters}"
        className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent";"
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
  region ;)
}) ;"
}<Button ;"}'""
}<Button ;"
}'""
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/talent/ActiveFilters.tsx;"
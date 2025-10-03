

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


  clearFilters;)


  if (!hasActiveFilters) return null,;
  return (;
    <div className="mb-6 flex flex-wrap gap-2 items-center">;"
</div>"
      <span className="text-zion-slate-light text-sm">Active filters:</span>;"
        <ClickableBadge ;




























      >;

    </div>;
  selectedSkills.map (skill => (<ClickableBadge key= {;
  skill ;)
}) ) ;
  selectedAvailability.map (status => (<ClickableBadge key= {;
  status ;"
}> {';



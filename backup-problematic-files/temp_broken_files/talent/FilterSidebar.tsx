
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/FilterSidebar.tsx
=======
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Filter } from "lucide-react",;
=======
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Filter } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/FilterSidebar.tsx
=======
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Filter } from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { SearchFilter } from "./filters/SearchFilter",;
import { SortFilter } from "./filters/SortFilter",;
import { SkillsFilter } from "./filters/SkillsFilter",;
import { AvailabilityFilter } from "./filters/AvailabilityFilter",;
import { RegionFilter } from "./filters/RegionFilter",;
import { ExperienceFilter } from "./filters/ExperienceFilter",;
import { PriceFilter } from "./filters/PriceFilter",;
import { FilterSidebarProps } from "@/types/filters",;
=======
import React from "react";""
import { Button } from "@/components/ui/button";""
import { Filter } from 'lucide-react';
import { SearchFilter } from "./filters/SearchFilter";""
import { SortFilter } from "./filters/SortFilter";""
import { SkillsFilter } from "./filters/SkillsFilter";""
import { AvailabilityFilter } from "./filters/AvailabilityFilter";""
import { RegionFilter } from "./filters/RegionFilter";""
import { ExperienceFilter } from "./filters/ExperienceFilter";""
import { PriceFilter } from "./filters/PriceFilter";""
import { FilterSidebarProps } from "@/types/filters";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
export function FilterSidebar({;
  searchTerm,;
  setSearchTerm,;
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
  expandedSections,;
  toggleSection,;
  sortOption,;
  setSortOption,;
  clearFilters,;
  isMobileFilterOpen;)
} FilterSidebarProps) {;
  return (;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/FilterSidebar.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/FilterSidebar.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <>;
      {/* Filter header */}"
      <div className="flex items-center justify-between mb-6">;"
</div>"
        <h3 className="text-lg font-semibold text-white flex items-center">;"
</h3>"
          <Filter className="h-4 w-4 mr-2 text-zion-purple" />;"

        </h3>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/FilterSidebar.tsx

=======
        <Button ;
          variant="ghost" ;
          size="sm" ;
          onClick={clearFilters}
          className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent";
=======
        <Button ;"
          variant="ghost" ;""
          size="sm" ;"
          onClick={clearFilters}"
          className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        >;

      </div>;
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />;

      <SortFilter sortOption={sortOption} setSortOption={setSortOption} />;

      <SkillsFilter ;
        selectedSkills={selectedSkills} ;
        toggleSkill={toggleSkill} ;
        expanded={expandedSections.skills} ;)"
        toggleSection={() => toggleSection('skills')}

      <AvailabilityFilter ;
        selectedAvailability={selectedAvailability} ;
        toggleAvailability={toggleAvailability} ;
        expanded={expandedSections.availability} ;
        toggleSection={() => toggleSection('availability')}

      <RegionFilter ;
        selectedRegions={selectedRegions} ;
        toggleRegion={toggleRegion} ;
        expanded={expandedSections.region} ;
        toggleSection={() => toggleSection('region')}

      <ExperienceFilter ;
        experienceRange={experienceRange} ;
        setExperienceRange={setExperienceRange} ;
        expanded={expandedSections.experience} ;
        toggleSection={() => toggleSection('experience')}

      <PriceFilter ;
        priceRange={priceRange} ;
        setPriceRange={setPriceRange} ;
        expanded={expandedSections.price} ;
        toggleSection={() => toggleSection('price')}

        <Button ;
          onClick={() => window.dispatchEvent(new CustomEvent('closeMobileFilter'))}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4";
        >;
          Apply Filters;
        </Button>;
      )}
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    </>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/talent/FilterSidebar.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  ),;}
 export function FilterSidebar ({;
  searchTerm;
setSearchTerm;
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
expandedSections;
toggleSection;
sortOption;
setSortOption;
clearFilters;
isMobileFilterOpen ;)
}: FilterSidebarProps) {;
  return (<> /* Filter header */ ;
}<div className="flex items-center justify-between mb-6" > <h3 className="text-lg font-semibold text-white flex items-center" > <Filter className="h-4 w-4 mr-2 text-zion-purple" /> Filters </h3> <Button > Clear All  </div> {;"
}<SearchFilter searchTerm= {;
  searchTerm ;
}setSearchTerm= {;
  setSearchTerm ;
}/> {;

}<SortFilter sortOption= {;
  sortOption ;
}setSortOption= {;
  setSortOption ;

}<SkillsFilter selectedSkills= {;
  selectedSkills ;
}toggleSkill= {;
  toggleSkill ;
}expanded= {;
  expandedSections.skills ;
}toggleSection= {;)"
  () => toggleSection ('skills') ;

}<AvailabilityFilter selectedAvailability= {;
  selectedAvailability ;
}toggleAvailability= {;
  toggleAvailability ;
  expandedSections.availability ;
}toggleSection= {';
  () => toggleSection ('availability') ;

}<RegionFilter selectedRegions= {;
  selectedRegions ;
}toggleRegion= {;
  toggleRegion ;
  expandedSections.region ;
  () => toggleSection ('region') ;

}<ExperienceFilter experienceRange= {;
  experienceRange ;
}setExperienceRange= {;
  setExperienceRange ;
  expandedSections.experience ;
  () => toggleSection ('experience') ;

}<PriceFilter priceRange= {;
  priceRange ;
}setPriceRange= {;
  setPriceRange ;
  expandedSections.price ;
  () => toggleSection ('price') ;
<<<<<<< HEAD
}isMobileFilterOpen= {;
  isMobileFilterOpen ;
}/> {;
:temp_broken_files/talent/FilterSidebar.tsx
  isMobileFilterOpen && (<Button onClick={';"  () => window.dispatchEvent (new CustomEvent ('closeMobileFilter') ) ";"}className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4" > Apply Filters </Button>) ;
}</>) ;"}'"
  isMobileFilterOpen && (<Button onClick={';
  () => window.dispatchEvent (new CustomEvent ('closeMobileFilter') ) ";
}className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4" > Apply Filters </Button>) ;
}</>) ;
}'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/talent/FilterSidebar.tsx
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/talent/FilterSidebar.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

  isMobileFilterOpen && (<Button onClick={';"  () => window.dispatchEvent (new CustomEvent ('closeMobileFilter') ) ";"}className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4" > Apply Filters ) ;""
}</>) ;"}'"""
  isMobileFilterOpen && (<Button onClick={';')
  () => window.dispatchEvent (new CustomEvent ('closeMobileFilter') ) ";"
"
}className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4" > Apply Filters ) ;"
}</>) ;"
}'""
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/talent/FilterSidebar.tsx;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD


import React from "react",
import { Button } from "@/components/ui/button",

import { Filter } from 'lucide-react'
=======
import React from "react",
import { Button } from "@/components/ui/button",
>>>>>>> import { Filter } from 'lucide-react'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { SearchFilter } from "./filters/SearchFilter",
import { SortFilter } from "./filters/SortFilter",
import { SkillsFilter } from "./filters/SkillsFilter",
import { AvailabilityFilter } from "./filters/AvailabilityFilter",
import { RegionFilter } from "./filters/RegionFilter",
import { ExperienceFilter } from "./filters/ExperienceFilter",
<<<<<<< HEAD

=======
import { PriceFilter } from "./filters/PriceFilter";
import { FilterSidebarProps } from "@/types/filters";
export function FilterSidebar({

  searchTerm
  setSearchTerm
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
  expandedSections
  toggleSection
  sortOption
  setSortOption
  clearFilters
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export function FilterSidebar({
  searchTerm,
  setSearchTerm,
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
  expandedSections,
  toggleSection,
  sortOption,
  setSortOption,
  clearFilters,
<<<<<<< HEAD

=======
          Filters
        </h3>
        <Button
          variant="ghost"
          size="sm"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  isMobileFilterOpen
}: FilterSidebarProps) {
  return (
    <>
      {/* Filter header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <Filter className="h-4 w-4 mr-2 text-zion-purple" />
<<<<<<< HEAD

=======
>>>>>>>           Filters
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          Filters
>>>>>>>         </h3>
        <Button 
          variant="ghost" 
          size="sm" 
<<<<<<< HEAD

=======
>>>>>>>           onClick={clearFilters}
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          onClick={clearFilters}
>>>>>>>           className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent"
        >
          Clear All
        </Button>
      </div>
<<<<<<< HEAD
=======
>>>>>>>       {/* Search */}
ursor/fix-website-loading-errors-and-merge-6662
      {/* Search */}
>>>>>>>       <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* Sorting */}
      <SortFilter sortOption={sortOption} setSortOption={setSortOption} />
          className='h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent'>;
          Clear All;
        </Button>;
      </div>;
          className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent";
          Filters;
        </h3>;
        <Button
          variant="ghost" 
          size="sm" 
          onClick={clearFilters}
          className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent">;
          Clear All;
        </Button>;
      </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

      {/* Search */}
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />;

      {/* Sorting */}
      <SortFilter sortOption={sortOption} setSortOption={setSortOption} />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Skills */}
      <SkillsFilter
        selectedSkills={selectedSkills}
        toggleSkill={toggleSkill}
        expanded={expandedSections && expandedSections.skills}
        toggleSection={() => toggleSection('skills')}

        isMobileFilterOpen={isMobileFilterOpen}      />;


      {/* Availability */}
      <AvailabilityFilter
        selectedAvailability={selectedAvailability}
        toggleAvailability={toggleAvailability}
        expanded={expandedSections && expandedSections.availability}
        toggleSection={() => toggleSection('availability')}

        isMobileFilterOpen={isMobileFilterOpen}      />;


      {/* Region */}
      <RegionFilter
        selectedRegions={selectedRegions}
        toggleRegion={toggleRegion}
        expanded={expandedSections && expandedSections.region}
        toggleSection={() => toggleSection('region')}

        isMobileFilterOpen={isMobileFilterOpen}      />;


      {/* Years of Experience */}
      <ExperienceFilter
        experienceRange={experienceRange}
        setExperienceRange={setExperienceRange}
        expanded={expandedSections && expandedSections.experience}
        toggleSection={() => toggleSection('experience')}

        isMobileFilterOpen={isMobileFilterOpen}      />;


      {/* Price Range */}
      <PriceFilter
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        expanded={expandedSections && expandedSections.price}
        toggleSection={() => toggleSection('price')}
<<<<<<< HEAD

=======
        <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        isMobileFilterOpen={isMobileFilterOpen}
      />;

      {isMobileFilterOpen && (;
        <Button;
<<<<<<< HEAD

=======
>>>>>>>           onClick={() => window.dispatchEvent(new CustomEvent('closeMobileFilter'))}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          onClick={() => window.dispatchEvent(new CustomEvent('closeMobileFilter'))}
>>>>>>>           className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4"
        >
          Apply Filters
        </Button>
      )}
<<<<<<< HEAD

    </>;
  );

=======
    </>
  )
}
    </>;
  );
};
}
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

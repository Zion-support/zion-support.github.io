<<<<<<< HEAD
<<<<<<< HEAD


import React from "react",
import { Button } from "@/components/ui/button",

=======
import React from 'react'
import { Button } from '@/components/ui/button'
<<<<<<< HEAD
=======
import { Filter } from 'lucide-react'
import { SearchFilter } from './filters/SearchFilter'
import { SortFilter } from './filters/SortFilter'
import { SkillsFilter } from './filters/SkillsFilter'
import { AvailabilityFilter } from './filters/AvailabilityFilter'
import { RegionFilter } from './filters/RegionFilter'
import { ExperienceFilter } from './filters/ExperienceFilter'
import { PriceFilter } from './filters/PriceFilter'
import { FilterSidebarProps } from '@/types/filters'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

import React from "react",
import { Button } from "@/components/ui/button",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import { PriceFilter } from "./filters/PriceFilter",
import { FilterSidebarProps } from "@/types/filters",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  isMobileFilterOpen,}: FilterSidebarProps) {

  return (
    <>
      {/* Filter header */}
      <div className='flex items-center justify-between mb-6'>
        <h3 className='text-lg font-semibold text-white flex items-center'>
          <Filter className='h-4 w-4 mr-2 text-zion-purple' />  searchTerm
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
  isMobileFilterOpen
  return (
    <>
      {/* Filter header */}
      <div className='flex items-center justify-between mb-6'>
        <h3 className='text-lg font-semibold text-white flex items-center'>
          <Filter className='h-4 w-4 mr-2 text-zion-purple' />
          Filters
        </h3>
        <Button
          variant='ghost'
          size='sm'
          onClick={clearFilters}
          className='h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent'        >
          Clear All
        </Button>
      </div>
          className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent"
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          Filters
        </h3>
        <Button
          variant="ghost"
          size="sm"
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import { PriceFilter } from "./filters/PriceFilter",
import { FilterSidebarProps } from "@/types/filters",
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
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  isMobileFilterOpen
}: FilterSidebarProps) {
  return (
    <>
      {/* Filter header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <Filter className="h-4 w-4 mr-2 text-zion-purple" />
<<<<<<< HEAD
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
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          Filters
        </h3>
        <Button 
          variant="ghost" 
          size="sm" 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          onClick={clearFilters}
>>>>>>>           className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent"
        >
          Clear All
        </Button>
      </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>>       {/* Search */}
ursor/fix-website-loading-errors-and-merge-6662
=======
      
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Filter } from 'lucide-react';
import { SearchFilter } from "./filters/SearchFilter",;
import { SortFilter } from "./filters/SortFilter",;
import { SkillsFilter } from "./filters/SkillsFilter",;
import { AvailabilityFilter } from "./filters/AvailabilityFilter",;
import { RegionFilter } from "./filters/RegionFilter",;
import { ExperienceFilter } from "./filters/ExperienceFilter",;
import { PriceFilter } from "./filters/PriceFilter",;
import { FilterSidebarProps } from "@/types/filters",;
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
  setSortOption;
  clearFilters;
  isMobileFilterOpen;
}: FilterSidebarProps) {;
  return (;
    <>;
      {/* Filter header */}
      <div className="flex items-center justify-between mb-6">;
        <h3 className="text-lg font-semibold text-white flex items-center">;
          <Filter className="h-4 w-4 mr-2 text-zion-purple" />;
          Filters;
        </h3>;
        <Button;
          variant="ghost";
          size="sm";
          onClick={clearFilters}
          className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent";
        >;
          Clear All;
        </Button>;
      </div>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Search */}
>>>>>>>       <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* Sorting */}
      <SortFilter sortOption={sortOption} setSortOption={setSortOption} />
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Skills */}
      <SkillsFilter
        selectedSkills={selectedSkills}
        toggleSkill={toggleSkill}
        expanded={expandedSections.skills}
        toggleSection={() => toggleSection('skills')}
<<<<<<< HEAD

        isMobileFilterOpen={isMobileFilterOpen}      />;


=======
        isMobileFilterOpen={isMobileFilterOpen}      />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Availability */}
      <AvailabilityFilter
        selectedAvailability={selectedAvailability}
        toggleAvailability={toggleAvailability}
        expanded={expandedSections.availability}
        toggleSection={() => toggleSection('availability')}
<<<<<<< HEAD

        isMobileFilterOpen={isMobileFilterOpen}      />;


=======
        isMobileFilterOpen={isMobileFilterOpen}      />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Region */}
      <RegionFilter
        selectedRegions={selectedRegions}
        toggleRegion={toggleRegion}
        expanded={expandedSections.region}
        toggleSection={() => toggleSection('region')}
<<<<<<< HEAD

        isMobileFilterOpen={isMobileFilterOpen}      />;


=======
        isMobileFilterOpen={isMobileFilterOpen}      />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Years of Experience */}
      <ExperienceFilter
        experienceRange={experienceRange}
        setExperienceRange={setExperienceRange}
        expanded={expandedSections.experience}
        toggleSection={() => toggleSection('experience')}
<<<<<<< HEAD

        isMobileFilterOpen={isMobileFilterOpen}      />;


=======
        isMobileFilterOpen={isMobileFilterOpen}      />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Price Range */}
      <PriceFilter
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        expanded={expandedSections.price}
        toggleSection={() => toggleSection('price')}
<<<<<<< HEAD
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
=======
        isMobileFilterOpen={isMobileFilterOpen}      />
      {isMobileFilterOpen && (
        <Button
          onClick={() =>
            window.dispatchEvent(new CustomEvent('closeMobileFilter'))
          }
          className='w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4'        >
        <Button
          onClick = {(,) => window.dispatchEvent(new CustomEvent('closeMobileFilter')),}
          className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4"
      {/* Search */}
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* Sorting */}
      <SortFilter sortOption={sortOption} setSortOption={setSortOption} />
      {/* Skills */}
      <SkillsFilter
        selectedSkills={selectedSkills}
        toggleSkill={toggleSkill}
        expanded={expandedSections.skills}
        toggleSection={() => toggleSection('skills')}
        isMobileFilterOpen={isMobileFilterOpen}
      />
      {/* Availability */}
      <AvailabilityFilter
        selectedAvailability={selectedAvailability}
        toggleAvailability={toggleAvailability}
        expanded={expandedSections.availability}
        toggleSection={() => toggleSection('availability')}
        isMobileFilterOpen={isMobileFilterOpen}
      />
      {/* Region */}
      <RegionFilter
        selectedRegions={selectedRegions}
        toggleRegion={toggleRegion}
        expanded={expandedSections.region}
        toggleSection={() => toggleSection('region')}
        isMobileFilterOpen={isMobileFilterOpen}
      />
      {/* Years of Experience */}
      <ExperienceFilter
        experienceRange={experienceRange}
        setExperienceRange={setExperienceRange}
        expanded={expandedSections.experience}
        toggleSection={() => toggleSection('experience')}
        isMobileFilterOpen={isMobileFilterOpen}
      />
      {/* Price Range */}
      <PriceFilter
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        expanded={expandedSections.price}
        toggleSection={() => toggleSection('price')}
        isMobileFilterOpen={isMobileFilterOpen}
      />
      {isMobileFilterOpen && (
<<<<<<< HEAD
        <Button
=======
        <Button 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        isMobileFilterOpen={isMobileFilterOpen}
      />;
      {isMobileFilterOpen && (;
        <Button;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          onClick={() => window.dispatchEvent(new CustomEvent('closeMobileFilter'))}
>>>>>>>           className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4"
        >
          Apply Filters
        </Button>
      )}
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
    </>
  )
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    </>;
  );
<<<<<<< HEAD
};
}
=======
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

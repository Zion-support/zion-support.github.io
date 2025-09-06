<<<<<<< HEAD
<<<<<<< HEAD
import { Filter } from 'lucide-react'
=======
import React from 'react'
import { Button } from '@/components/ui/button'
import { Filter } from 'lucide-react'
import { SearchFilter } from './filters/SearchFilter'
import { SortFilter } from './filters/SortFilter'
import { SkillsFilter } from './filters/SkillsFilter'
import { AvailabilityFilter } from './filters/AvailabilityFilter'
import { RegionFilter } from './filters/RegionFilter'
import { ExperienceFilter } from './filters/ExperienceFilter'
import { PriceFilter } from './filters/PriceFilter'
import { FilterSidebarProps } from '@/types/filters'

import React from "react",
import { Button } from "@/components/ui/button",
import { Filter } from 'lucide-react'
import React from "react",
import { Button } from "@/components/ui/button",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import { Filter } from 'lucide-react'
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { SearchFilter } from "./filters/SearchFilter",
import { SortFilter } from "./filters/SortFilter",
import { SkillsFilter } from "./filters/SkillsFilter",
import { AvailabilityFilter } from "./filters/AvailabilityFilter",
import { RegionFilter } from "./filters/RegionFilter",
import { ExperienceFilter } from "./filters/ExperienceFilter",
<<<<<<< HEAD
<<<<<<< HEAD


=======
import { PriceFilter } from "./filters/PriceFilter";
import { FilterSidebarProps } from "@/types/filters";
export function FilterSidebar({

import { PriceFilter } from "./filters/PriceFilter",
import { FilterSidebarProps } from "@/types/filters",
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from 'react';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import { SearchFilter } from './filters/SearchFilter';
import { SortFilter } from './filters/SortFilter';
import { SkillsFilter } from './filters/SkillsFilter';
import { AvailabilityFilter } from './filters/AvailabilityFilter';
import { RegionFilter } from './filters/RegionFilter';
import { ExperienceFilter } from './filters/ExperienceFilter';
import { PriceFilter } from './filters/PriceFilter';
import { FilterSidebarProps } from '@/types/filters';
export function FilterSidebar(): any ({;
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
  isMobileFilterOpen,}: FilterSidebarProps) {;
  return (
    <>
      {/* Filter header */}

      <div className='flex items-center justify-between mb-6'>;
        <h3 className='text-lg font-semibold text-white flex items-center'>;
          <Filter className='h-4 w-4 mr-2 text-zion-purple' />  searchTerm;

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
  isMobileFilterOpen,}: FilterSidebarProps) {
  isMobileFilterOpen,}: FilterSidebarProps) {

  return (
    <>;
      {/* Filter header */}
<<<<<<< HEAD
<<<<<<< HEAD

      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <Filter className="h-4 w-4 mr-2 text-zion-purple" />

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
          variant="ghost"
          size="sm"
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          Filters
        </h3>
        <Button
          variant="ghost"
          size="sm"

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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


          Filters
        </h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={clearFilters}
          className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent"
=======
          Filters
        <Button 
          variant="ghost" 
          size="sm" 
          Filters
        </h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={clearFilters}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        >
          Clear All
        </Button>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      
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


      {/* Search */}
<<<<<<< HEAD
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {/* Sorting */}
      <SortFilter sortOption={sortOption} setSortOption={setSortOption} />
      {/* Skills */}
      <SkillsFilter
        selectedSkills={selectedSkills}
        toggleSkill={toggleSkill}
        expanded={expandedSections && expandedSections.skills}
        toggleSection={() => toggleSection('skills')}
<<<<<<< HEAD
<<<<<<< HEAD

        isMobileFilterOpen={isMobileFilterOpen}      />;


=======
        isMobileFilterOpen={isMobileFilterOpen}      />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {/* Availability */}
      <AvailabilityFilter
        selectedAvailability={selectedAvailability}
        toggleAvailability={toggleAvailability}
        expanded={expandedSections && expandedSections.availability}
        toggleSection={() => toggleSection('availability')}
<<<<<<< HEAD
<<<<<<< HEAD

        isMobileFilterOpen={isMobileFilterOpen}      />;


=======
        isMobileFilterOpen={isMobileFilterOpen}      />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {/* Region */}
      <RegionFilter
        selectedRegions={selectedRegions}
        toggleRegion={toggleRegion}
        expanded={expandedSections && expandedSections.region}
        toggleSection={() => toggleSection('region')}
<<<<<<< HEAD
<<<<<<< HEAD

        isMobileFilterOpen={isMobileFilterOpen}      />;


=======
        isMobileFilterOpen={isMobileFilterOpen}      />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {/* Years of Experience */}
      <ExperienceFilter
        experienceRange={experienceRange}
        setExperienceRange={setExperienceRange}
        expanded={expandedSections && expandedSections.experience}
        toggleSection={() => toggleSection('experience')}
<<<<<<< HEAD
<<<<<<< HEAD

        isMobileFilterOpen={isMobileFilterOpen}      />;


=======
        isMobileFilterOpen={isMobileFilterOpen}      />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {/* Price Range */}
      <PriceFilter
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        expanded={expandedSections && expandedSections.price}
        toggleSection={() => toggleSection('price')}
<<<<<<< HEAD
<<<<<<< HEAD

        isMobileFilterOpen={isMobileFilterOpen}      />;

      {isMobileFilterOpen && (;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <Button
          onClick={() =>;
            window && window.dispatchEvent(new CustomEvent('closeMobileFilter'));
          }
      {/* Search */}
      <SearchFilter search_term={search_term} setSearchTerm={setSearchTerm} />;
      {/* Sorting */}
      <SortFilter sort_option={sort_option} setSortOption={setSortOption} />;
      {/* Skills */}
      <SkillsFilter;
        selected_skills={selected_skills}
        toggle_skill={toggle_skill}
        expanded={expanded_sections.skills}
        toggle_section={() => toggle_section ('skills')}
        isMobileFilterOpen={isMobileFilterOpen}
      />;
      {/* Availability */}
      <AvailabilityFilter;
        selected_availability={selected_availability}
        toggle_availability={toggle_availability}
        expanded={expanded_sections.availability}
        toggle_section={() => toggle_section ('availability')}
        isMobileFilterOpen={isMobileFilterOpen}
      />;
      {/* Region */}
      <RegionFilter;
        selected_regions={selected_regions}
        toggle_region={toggle_region}
        expanded={expanded_sections.region}
        toggle_section={() => toggle_section ('region')}
        isMobileFilterOpen={isMobileFilterOpen}
      />;

<<<<<<< HEAD
      {isMobileFilterOpen && (;
        <Button;
<<<<<<< HEAD

=======
ursor/fix-website-loading-errors-and-merge-6662
        isMobileFilterOpen={isMobileFilterOpen}      />
      {isMobileFilterOpen && (
        <Button
          onClick={() =>
            window.dispatchEvent(new CustomEvent('closeMobileFilter'))
          }
          className='w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4'        >
        <Button
          onClick = {(,) => window.dispatchEvent(new CustomEvent('closeMobileFilter')),}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


          onClick={() => window.dispatchEvent(new CustomEvent('closeMobileFilter'))}
          className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4"
<<<<<<< HEAD
=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {/* Years of Experience */}
      <ExperienceFilter
        experienceRange={experienceRange}
        setExperienceRange={setExperienceRange}
      {/* Price Range */}
      <PriceFilter
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        isMobileFilterOpen={isMobileFilterOpen}
      />;
      {isMobileFilterOpen && (;
        <Button;



          onClick={() => window.dispatchEvent(new CustomEvent('closeMobileFilter'))}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        >
          Apply Filters
        </Button>
      )}
    </>;
  );
<<<<<<< HEAD
}

  );
}
        <Button;
          on_click={() => window.dispatch_event (new CustomEvent ('closeMobileFilter'))}
          className="w - full bg - zion - purple hover:bg - zion - purple - dark text - white mt - 4";
        >;
          Apply Filters;
        </Button>)}
    </>);
}


    </>;
  );

<<<<<<< HEAD
}
;
=======
    </>
  )
}
    </>;
  );
};
}
    </>
  )
}
    </>;
  );
};
}
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

<<<<<<< HEAD
import React from 'react'
import { Button } from '@/components/ui/button'
=======
<<<<<<< HEAD
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


>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { Filter } from 'lucide-react'
import { SearchFilter } from "./filters/SearchFilter",
import { SortFilter } from "./filters/SortFilter",
import { SkillsFilter } from "./filters/SkillsFilter",
import { AvailabilityFilter } from "./filters/AvailabilityFilter",
import { RegionFilter } from "./filters/RegionFilter",
import { ExperienceFilter } from "./filters/ExperienceFilter",
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
  isMobileFilterOpen,}: FilterSidebarProps) {

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
    <>;
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
  isMobileFilterOpen;
  return (
    <>;
      {/* Filter header */}
  isMobileFilterOpen;
  isMobileFilterOpen
}: FilterSidebarProps) {
  return (
    <>;
      {/* Filter header */}
      <div className='flex items-center justify-between mb-6'>;
        <h3 className='text-lg font-semibold text-white flex items-center'>;
          <Filter className='h-4 w-4 mr-2 text-zion-purple' />;
          Filters;
        </h3>;
=======
=======
import { PriceFilter } from "./filters/PriceFilter",
import { FilterSidebarProps } from "@/types/filters",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  isMobileFilterOpen,}: FilterSidebarProps) {

  return (
    <>;
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          Filters
        </h3>
        <Button
          variant="ghost"
          size="sm"
<<<<<<< HEAD
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          Filters
        </h3>
        <Button 
          variant="ghost" 
          size="sm" 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          onClick={clearFilters}
          className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent"
        >
          Clear All
        </Button>
      </div>
<<<<<<< HEAD
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      {/* Search */}
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* Sorting */}
      <SortFilter sortOption={sortOption} setSortOption={setSortOption} />
      {/* Skills */}
      <SkillsFilter
        selectedSkills={selectedSkills}
        toggleSkill={toggleSkill}
        expanded={expandedSections && expandedSections.skills}
        toggleSection={() => toggleSection('skills')}
        isMobileFilterOpen={isMobileFilterOpen}      />
      {/* Availability */}
      <AvailabilityFilter
        selectedAvailability={selectedAvailability}
        toggleAvailability={toggleAvailability}
        expanded={expandedSections && expandedSections.availability}
        toggleSection={() => toggleSection('availability')}
        isMobileFilterOpen={isMobileFilterOpen}      />
      {/* Region */}
      <RegionFilter
        selectedRegions={selectedRegions}
        toggleRegion={toggleRegion}
        expanded={expandedSections && expandedSections.region}
        toggleSection={() => toggleSection('region')}
        isMobileFilterOpen={isMobileFilterOpen}      />
      {/* Years of Experience */}
      <ExperienceFilter
        experienceRange={experienceRange}
        setExperienceRange={setExperienceRange}
        expanded={expandedSections && expandedSections.experience}
        toggleSection={() => toggleSection('experience')}
        isMobileFilterOpen={isMobileFilterOpen}      />
      {/* Price Range */}
      <PriceFilter
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        expanded={expandedSections && expandedSections.price}
        toggleSection={() => toggleSection('price')}
        isMobileFilterOpen={isMobileFilterOpen}      />
      {isMobileFilterOpen && (
        <Button
          onClick={() =>;
            window && window.dispatchEvent(new CustomEvent('closeMobileFilter'));
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
      <ExperienceFilter;
        experience_range={experience_range}
        setExperienceRange={setExperienceRange}
        expanded={expandedSections.experience}
        toggleSection={() => toggleSection('experience')}
        isMobileFilterOpen={isMobileFilterOpen}
      />
      {/* Price Range */}
      <PriceFilter;
        price_range={price_range}
        setPriceRange={setPriceRange}
        expanded={expandedSections.price}
        toggleSection={() => toggleSection('price')}
        isMobileFilterOpen={isMobileFilterOpen}
      />
      {isMobileFilterOpen && (
        <Button
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
      {/* Years of Experience */}
      <ExperienceFilter;
        experience_range={experience_range}
        setExperienceRange={setExperienceRange}
        expanded={expanded_sections.experience}
        toggle_section={() => toggle_section ('experience')}
        isMobileFilterOpen={isMobileFilterOpen}
      />;
      {/* Price Range */}
      <PriceFilter;
        price_range={price_range}
        setPriceRange={setPriceRange}
        expanded={expanded_sections.price}
        toggle_section={() => toggle_section ('price')}
<<<<<<< HEAD
        isMobileFilterOpen={isMobileFilterOpen}
      />;
      {isMobileFilterOpen && (
        <Button 
=======
        isMobileFilterOpen={isMobileFilterOpen}      />;
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          onClick={() => window.dispatchEvent(new CustomEvent('closeMobileFilter'))}
          className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4"
        >
          Apply Filters
        </Button>
      )}
<<<<<<< HEAD
    </>
  )
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
    </>
  )
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    </>;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

=======

    </>;
  );

}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

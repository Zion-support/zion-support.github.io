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
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

<<<<<<< HEAD
=======
import React from "react";
import { Button } from "@/components/ui/button";
import { Filter } from 'lucide-react';
import { SearchFilter } from "./filters/SearchFilter";
import { SortFilter } from "./filters/SortFilter";
import { SkillsFilter } from "./filters/SkillsFilter";
import { AvailabilityFilter } from "./filters/AvailabilityFilter";
import { RegionFilter } from "./filters/RegionFilter";
import { ExperienceFilter } from "./filters/ExperienceFilter";
import { PriceFilter } from "./filters/PriceFilter";
import { FilterSidebarProps } from "@/types/filters";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
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
  return (
    <>
      {/* Filter header */}
      <div className='flex items-center justify-between mb-6'>
        <h3 className='text-lg font-semibold text-white flex items-center'>
          <Filter className='h-4 w-4 mr-2 text-zion-purple' />
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
  isMobileFilterOpen
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
}: FilterSidebarProps) {
  return (
    <>
      {/* Filter header */}
<<<<<<< HEAD
      <div className='flex items-center justify-between mb-6'>
        <h3 className='text-lg font-semibold text-white flex items-center'>
          <Filter className='h-4 w-4 mr-2 text-zion-purple' />
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          Filters
        </h3>
<<<<<<< HEAD
        <Button
          variant='ghost'
          size='sm'
          onClick={clearFilters}
          className='h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent'        >
          Clear All
        </Button>
      </div>

=======
=======
        <Button 
          variant="ghost" 
          size="sm" 
          onClick = {clearFilters,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
          className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
          Clear All
        </Button>
      </div>
<<<<<<< HEAD

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      {/* Search */}
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Sorting */}
      <SortFilter sortOption={sortOption} setSortOption={setSortOption} />

      {/* Skills */}
<<<<<<< HEAD
      <SkillsFilter
        selectedSkills={selectedSkills}
        toggleSkill={toggleSkill}
        expanded={expandedSections.skills}
        toggleSection={() => toggleSection('skills')}
        isMobileFilterOpen={isMobileFilterOpen}
=======
      <SkillsFilter 
        selectedSkills = {selectedSkills,}
        toggleSkill = {toggleSkill,}
        expanded = {expandedSections.skills,}
        toggleSection = {(,) => toggleSection('skills'),}
        isMobileFilterOpen = {isMobileFilterOpen,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
      />

      {/* Availability */}
<<<<<<< HEAD
      <AvailabilityFilter
        selectedAvailability={selectedAvailability}
        toggleAvailability={toggleAvailability}
        expanded={expandedSections.availability}
        toggleSection={() => toggleSection('availability')}
        isMobileFilterOpen={isMobileFilterOpen}
=======
      <AvailabilityFilter 
        selectedAvailability = {selectedAvailability,}
        toggleAvailability = {toggleAvailability,}
        expanded = {expandedSections.availability,}
        toggleSection = {() => toggleSection('availability'),}
        isMobileFilterOpen = {isMobileFilterOpen,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
      />

      {/* Region */}
<<<<<<< HEAD
      <RegionFilter
        selectedRegions={selectedRegions}
        toggleRegion={toggleRegion}
        expanded={expandedSections.region}
        toggleSection={() => toggleSection('region')}
        isMobileFilterOpen={isMobileFilterOpen}
=======
      <RegionFilter 
        selectedRegions = {selectedRegions,}
        toggleRegion = {toggleRegion,}
        expanded = {expandedSections.region,}
        toggleSection = {() => toggleSection('region'),}
        isMobileFilterOpen = {isMobileFilterOpen,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
      />

      {/* Years of Experience */}
<<<<<<< HEAD
      <ExperienceFilter
        experienceRange={experienceRange}
        setExperienceRange={setExperienceRange}
        expanded={expandedSections.experience}
        toggleSection={() => toggleSection('experience')}
        isMobileFilterOpen={isMobileFilterOpen}
=======
      <ExperienceFilter 
        experienceRange = {experienceRange,}
        setExperienceRange = {setExperienceRange,}
        expanded = {expandedSections.experience,}
        toggleSection = {() => toggleSection('experience'),}
        isMobileFilterOpen = {isMobileFilterOpen,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
      />

      {/* Price Range */}
<<<<<<< HEAD
      <PriceFilter
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        expanded={expandedSections.price}
        toggleSection={() => toggleSection('price')}
        isMobileFilterOpen={isMobileFilterOpen}
=======
      <PriceFilter 
        priceRange = {priceRange,}
        setPriceRange = {setPriceRange,}
        expanded = {expandedSections.price,}
        toggleSection = {() => toggleSection('price'),}
        isMobileFilterOpen = {isMobileFilterOpen,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
      />

      {isMobileFilterOpen && (
        <Button
          onClick={() =>
            window.dispatchEvent(new CustomEvent('closeMobileFilter'))
          }
          className='w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4'        >
=======
        <Button 
          onClick = {(,) => window.dispatchEvent(new CustomEvent('closeMobileFilter')),}
          className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          Apply Filters
        </Button>
      )}
    </>
  );
}
<<<<<<< HEAD
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export function FilterSidebar({
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
  isMobileFilterOpen,}: FilterSidebarProps) {
  return (
    <>
      {/* Filter header */}
      <div className='flex items-center justify-between mb-6'>
        <h3 className='text-lg font-semibold text-white flex items-center'>
          <Filter className='h-4 w-4 mr-2 text-zion-purple' />
=======
  isMobileFilterOpen,
=======

import React from "react";
import { Button } from "@/components/ui/button";
import { Filter } from 'lucide-react'
import { SearchFilter } from "./filters/SearchFilter";
import { SortFilter } from "./filters/SortFilter";
import { SkillsFilter } from "./filters/SkillsFilter";
import { AvailabilityFilter } from "./filters/AvailabilityFilter";
import { RegionFilter } from "./filters/RegionFilter";
import { ExperienceFilter } from "./filters/ExperienceFilter";
import { PriceFilter } from "./filters/PriceFilter";
import { FilterSidebarProps } from "@/types/filters";
export function FilterSidebar({
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
}: FilterSidebarProps) {
  return (
    <>
      {/* Filter header */}
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='flex items-center justify-between mb-6'>
        <h3 className='text-lg font-semibold text-white flex items-center'>
          <Filter className='h-4 w-4 mr-2 text-zion-purple' />
=======
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <Filter className="h-4 w-4 mr-2 text-zion-purple" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          Filters
        </h3>
        <Button
          variant='ghost'
          size='sm'
          onClick={clearFilters}
<<<<<<< HEAD
          className='h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent'        >
          Clear All
        </Button>
      </div>

=======
<<<<<<< HEAD
          className='h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent'
=======
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <Filter className="h-4 w-4 mr-2 text-zion-purple" />
          Filters
        </h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={clearFilters}
          className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
          Clear All
        </Button>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <Button
          onClick={() =>
            window.dispatchEvent(new CustomEvent('closeMobileFilter'))
          }
<<<<<<< HEAD
          className='w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4'        >
=======
          className='w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4'
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
        <Button 
          onClick={() => window.dispatchEvent(new CustomEvent('closeMobileFilter'))}
          className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <Button 
          onClick={() => window.dispatchEvent(new CustomEvent('closeMobileFilter'))}
          className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          Apply Filters
        </Button>
      )}
    </>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

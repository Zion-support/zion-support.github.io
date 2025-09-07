<<<<<<< HEAD

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
  searchTerm;
=======
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Filter } from 'lucide-react'
import React from "react",
import { Button } from "@/components/ui/button",
import { SearchFilter } from "./filters/SearchFilter",
import { SortFilter } from "./filters/SortFilter",
import { SkillsFilter } from "./filters/SkillsFilter",
import { AvailabilityFilter } from "./filters/AvailabilityFilter",
import { RegionFilter } from "./filters/RegionFilter",
import { ExperienceFilter } from "./filters/ExperienceFilter",
<<<<<<< HEAD
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

      <div className='flex items-center justify-between mb-6'>;
        <h3 className='text-lg font-semibold text-white flex items-center'>;
          <Filter className='h-4 w-4 mr-2 text-zion-purple' />  searchTerm;

>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
=======

  isMobileFilterOpen,}: FilterSidebarProps) {

  return (
    <>
      {/* Filter header */}
<<<<<<< HEAD
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
=======

      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <Filter className="h-4 w-4 mr-2 text-zion-purple" />

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
          Filters
        <Button 
          variant="ghost" 
          size="sm" 
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
          Filters
        </h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={clearFilters}
<<<<<<< HEAD
          className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent"
=======
>>>>>>> merged-prs-20250907-203621
        >
          Clear All
        </Button>
      </div>
<<<<<<< HEAD
      
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
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      
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

      {/* Search */}
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />;

      {/* Sorting */}
      <SortFilter sortOption={sortOption} setSortOption={setSortOption} />;

      {/* Skills */}
      <SkillsFilter
        selectedSkills={selectedSkills}
        toggleSkill={toggleSkill}
        expanded={expandedSections.skills}
        toggleSection={() => toggleSection('skills')}
<<<<<<< HEAD
        isMobileFilterOpen={isMobileFilterOpen}      />
=======

        isMobileFilterOpen={isMobileFilterOpen}      />;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Availability */}
      <AvailabilityFilter
        selectedAvailability={selectedAvailability}
        toggleAvailability={toggleAvailability}
        expanded={expandedSections.availability}
        toggleSection={() => toggleSection('availability')}
<<<<<<< HEAD
        isMobileFilterOpen={isMobileFilterOpen}      />
=======

        isMobileFilterOpen={isMobileFilterOpen}      />;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Region */}
      <RegionFilter
        selectedRegions={selectedRegions}
        toggleRegion={toggleRegion}
        expanded={expandedSections.region}
        toggleSection={() => toggleSection('region')}
<<<<<<< HEAD
        isMobileFilterOpen={isMobileFilterOpen}      />
=======

        isMobileFilterOpen={isMobileFilterOpen}      />;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Years of Experience */}
      <ExperienceFilter
        experienceRange={experienceRange}
        setExperienceRange={setExperienceRange}
        expanded={expandedSections.experience}
        toggleSection={() => toggleSection('experience')}
<<<<<<< HEAD
        isMobileFilterOpen={isMobileFilterOpen}      />
=======

        isMobileFilterOpen={isMobileFilterOpen}      />;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Price Range */}
      <PriceFilter
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        expanded={expandedSections.price}
        toggleSection={() => toggleSection('price')}
<<<<<<< HEAD
=======

        isMobileFilterOpen={isMobileFilterOpen}      />;

      {isMobileFilterOpen && (;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <Button
          onClick={() =>;
            window && window.dispatchEvent(new CustomEvent('closeMobileFilter'));
          }

import React from 'react';
import { Button } from '@/components / ui / button';
import { Filter } from 'lucide-react';
import { SearchFilter } from './filters / SearchFilter';
import { SortFilter } from './filters / SortFilter';
import { SkillsFilter } from './filters / SkillsFilter';
import { AvailabilityFilter } from './filters / AvailabilityFilter';
import { RegionFilter } from './filters / RegionFilter';
import { ExperienceFilter } from './filters / ExperienceFilter';
import { PriceFilter } from './filters / PriceFilter';
import { FilterSidebarProps } from '@/types / filters';
export /**
 * FilterSidebar - Function description
 */
function FilterSidebar() {
  return (
    <>;
      {/* Filter header */}
      <div className='flex items - center justify - between mb - 6'>;
        <h3 className='text - lg font - semibold text - white flex items - center'>;
          <Filter className='h - 4 w - 4 mr - 2 text - zion - purple' />  search_term;
  setSearchTerm;
  selected_skills;
  toggle_skill;
  selected_availability;
  toggle_availability;
  selected_regions;
  toggle_region;
  price_range;
  setPriceRange;
  experience_range;
  setExperienceRange;
  expanded_sections;
  toggle_section;
  sort_option;
  setSortOption;
  clear_filters;
  isMobileFilterOpen;
  return (
    <>;
      {/* Filter header */}
      <div className='flex items - center justify - between mb - 6'>;
        <h3 className='text - lg font - semibold text - white flex items - center'>;
          <Filter className='h - 4 w - 4 mr - 2 text - zion - purple' />;
          Filters;
        </h3>;
        <Button;
          variant='ghost';
          size='sm';
          on_click={clear_filters}
          className='h - 7 text - xs text - zion - purple hover:text - zion - purple - light hover:bg - transparent'        >;
          Clear All;
        </Button>;
      </div>;
          className="h - 7 text - xs text - zion - purple hover:text - zion - purple - light hover:bg - transparent";
          Filters;
        </h3>;
        <Button;
          variant="ghost";
          size="sm";
          on_click={clear_filters}
          className="h - 7 text - xs text - zion - purple hover:text - zion - purple - light hover:bg - transparent";
        >;
          Clear All;
        </Button>;
      </div>;
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
        isMobileFilterOpen={isMobileFilterOpen}      />;
      {/* Availability */}
      <AvailabilityFilter;
        selected_availability={selected_availability}
        toggle_availability={toggle_availability}
        expanded={expanded_sections.availability}
        toggle_section={() => toggle_section ('availability')}
        isMobileFilterOpen={isMobileFilterOpen}      />;
      {/* Region */}
      <RegionFilter;
        selected_regions={selected_regions}
        toggle_region={toggle_region}
        expanded={expanded_sections.region}
        toggle_section={() => toggle_section ('region')}
        isMobileFilterOpen={isMobileFilterOpen}      />;

      {/* Years of Experience */}
      <ExperienceFilter;
        experience_range={experience_range}
        setExperienceRange={setExperienceRange}

        expanded={expanded_sections.experience}
        toggle_section={() => toggle_section ('experience')}
        isMobileFilterOpen={isMobileFilterOpen}      />;

      {/* Price Range */}
      <PriceFilter;
        price_range={price_range}
        setPriceRange={setPriceRange}

      

        <Button 


        expanded={expanded_sections.price}
        toggle_section={() => toggle_section ('price')}
        isMobileFilterOpen={isMobileFilterOpen}      />;
      {isMobileFilterOpen && (
        <Button;
          on_click={() =>;
            window.dispatch_event (new CustomEvent ('closeMobileFilter'));
          }
          className='w - full bg - zion - purple hover:bg - zion - purple - dark text - white mt - 4'        >;
        <Button;
          on_click = {(, ) => window.dispatch_event (new CustomEvent ('closeMobileFilter')), }
          className="w - full bg - zion - purple hover:bg - zion - purple - dark text - white mt - 4";
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

      {isMobileFilterOpen && (;
        <Button;
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


<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          onClick={() => window.dispatchEvent(new CustomEvent('closeMobileFilter'))}
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
        <Button
        <Button 
        isMobileFilterOpen={isMobileFilterOpen}
      />;
      {isMobileFilterOpen && (;
        <Button;
          onClick={() => window.dispatchEvent(new CustomEvent('closeMobileFilter'))}
>>>>>>> merged-prs-20250907-203621
        >
          Apply Filters
        </Button>
      )}
<<<<<<< HEAD
    </>
  )
}
=======

          className='w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4'        >;
        <Button
          onClick = {(,) => window && window.dispatchEvent(new CustomEvent('closeMobileFilter')),}
          className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4";
      {/* Search */}
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />;

      {/* Sorting */}
      <SortFilter sortOption={sortOption} setSortOption={setSortOption} />;

      {/* Skills */}
      <SkillsFilter
        selectedSkills={selectedSkills} 
        toggleSkill={toggleSkill} 
        expanded={expandedSections && expandedSections.skills} 
        toggleSection={() => toggleSection('skills')}
        isMobileFilterOpen={isMobileFilterOpen}
      />;

      {/* Availability */}
      <AvailabilityFilter
        selectedAvailability={selectedAvailability} 
        toggleAvailability={toggleAvailability} 
        expanded={expandedSections && expandedSections.availability} 
        toggleSection={() => toggleSection('availability')}
        isMobileFilterOpen={isMobileFilterOpen}
      />;

      {/* Region */}
      <RegionFilter
        selectedRegions={selectedRegions} 
        toggleRegion={toggleRegion} 
        expanded={expandedSections && expandedSections.region} 
        toggleSection={() => toggleSection('region')}
        isMobileFilterOpen={isMobileFilterOpen}
      />;

      {/* Years of Experience */}
      <ExperienceFilter
        experienceRange={experienceRange} 
        setExperienceRange={setExperienceRange} 
        expanded={expandedSections && expandedSections.experience} 
        toggleSection={() => toggleSection('experience')}
        isMobileFilterOpen={isMobileFilterOpen}
      />;

      {/* Price Range */}
      <PriceFilter
        priceRange={priceRange} 
        setPriceRange={setPriceRange} 
        expanded={expandedSections && expandedSections.price} 
        toggleSection={() => toggleSection('price')}
        isMobileFilterOpen={isMobileFilterOpen}
      />;

      {isMobileFilterOpen && (;
        <Button
          onClick={() => window && window.dispatchEvent(new CustomEvent('closeMobileFilter'))}
          className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4";
        >;
          Apply Filters;
        </Button>;
      )}
    </>;
  );
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
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621

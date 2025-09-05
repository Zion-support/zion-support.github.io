
import React from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Filter } from 'lucide-react'
import { SearchFilter } from &quot;./filters/SearchFilter&quot;;
import { SortFilter } from &quot;./filters/SortFilter&quot;;
import { SkillsFilter } from &quot;./filters/SkillsFilter&quot;;
import { AvailabilityFilter } from &quot;./filters/AvailabilityFilter&quot;;
import { RegionFilter } from &quot;./filters/RegionFilter&quot;;
import { ExperienceFilter } from &quot;./filters/ExperienceFilter&quot;;
import { PriceFilter } from &quot;./filters/PriceFilter&quot;;
import { FilterSidebarProps } from &quot;@/types/filters&quot;;

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
  isMobileFilterOpen
}: FilterSidebarProps) {
  return (
    <>
      {/* Filter header */}
      <div className=&quot;flex items-center justify-between mb-6&quot;>
        <h3 className=&quot;text-lg font-semibold text-white flex items-center&quot;>
          <Filter className=&quot;h-4 w-4 mr-2 text-zion-purple&quot; />
          Filters
        </h3>
        <Button 
          variant=&quot;ghost&quot; 
          size=&quot;sm&quot; 
          onClick={clearFilters}
          className=&quot;h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent&quot;
        >
          Clear All
        </Button>
      </div>
      
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
          className=&quot;w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4&quot;
        >
          Apply Filters
        </Button>
      )}
    </>
  );
}

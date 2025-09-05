
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",
import { Filter } from "lucide-react",
import { SearchFilter } from "./filters/SearchFilter",
import { SortFilter } from "./filters/SortFilter",
import { SkillsFilter } from "./filters/SkillsFilter",
import { AvailabilityFilter } from "./filters/AvailabilityFilter",
import { RegionFilter } from "./filters/RegionFilter",
import { ExperienceFilter } from "./filters/ExperienceFilter",
import { PriceFilter } from "./filters/PriceFilter",
import { FilterSidebarProps } from "@/types/filters",
=======
import React from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Filter } from &quot;lucide-react&quot;;
import { SearchFilter } from &quot;./filters/SearchFilter&quot;;
import { SortFilter } from &quot;./filters/SortFilter&quot;;
import { SkillsFilter } from &quot;./filters/SkillsFilter&quot;;
import { AvailabilityFilter } from &quot;./filters/AvailabilityFilter&quot;;
import { RegionFilter } from &quot;./filters/RegionFilter&quot;;
import { ExperienceFilter } from &quot;./filters/ExperienceFilter&quot;;
import { PriceFilter } from &quot;./filters/PriceFilter&quot;;
import { FilterSidebarProps } from &quot;@/types/filters&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
=======
import React from "react";

export function FilterSidebar(_{_searchTerm, _setSearchTerm, _selectedSkills, _toggleSkill, _selectedAvailability, _toggleAvailability, _selectedRegions, _toggleRegion, _priceRange, _setPriceRange, _experienceRange, _setExperienceRange, _expandedSections, _toggleSection, _sortOption, _setSortOption, _clearFilters, _isMobileFilterOpen}: FilterSidebarProps) {_return (_<>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      {/* Filter header */}
      <div className=&quot;flex items-center justify-between mb-6&quot;>
        <h3 className=&quot;text-lg font-semibold text-white flex items-center&quot;>
          <Filter className=&quot;h-4 w-4 mr-2 text-zion-purple&quot; />
          Filters
        </h3>
        <Button 
<<<<<<< HEAD
          variant=&quot;ghost&quot; 
          size=&quot;sm&quot; 
          onClick={clearFilters}
          className=&quot;h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent&quot;
=======
          variant="ghost" 
          size="sm" 
          onClick={_clearFilters}
          className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          Clear All
        </Button>
      </div>
      
      {_/* Search */}
      <SearchFilter searchTerm={_searchTerm} setSearchTerm={_setSearchTerm} />
      
      {_/* Sorting */}
      <SortFilter sortOption={_sortOption} setSortOption={_setSortOption} />
      
      {_/* Skills */}
      <SkillsFilter 
        selectedSkills={_selectedSkills} 
        toggleSkill={_toggleSkill} 
        expanded={_expandedSections.skills} 
        toggleSection={_() => toggleSection('skills')}
        isMobileFilterOpen={_isMobileFilterOpen}
      />
      
      {_/* Availability */}
      <AvailabilityFilter 
        selectedAvailability={_selectedAvailability} 
        toggleAvailability={_toggleAvailability} 
        expanded={_expandedSections.availability} 
        toggleSection={_() => toggleSection('availability')}
        isMobileFilterOpen={_isMobileFilterOpen}
      />
      
      {_/* Region */}
      <RegionFilter 
        selectedRegions={_selectedRegions} 
        toggleRegion={_toggleRegion} 
        expanded={_expandedSections.region} 
        toggleSection={_() => toggleSection('region')}
        isMobileFilterOpen={_isMobileFilterOpen}
      />
      
      {_/* Years of Experience */}
      <ExperienceFilter 
        experienceRange={_experienceRange} 
        setExperienceRange={_setExperienceRange} 
        expanded={_expandedSections.experience} 
        toggleSection={_() => toggleSection('experience')}
        isMobileFilterOpen={_isMobileFilterOpen}
      />
      
      {_/* Price Range */}
      <PriceFilter 
        priceRange={_priceRange} 
        setPriceRange={_setPriceRange} 
        expanded={_expandedSections.price} 
        toggleSection={_() => toggleSection('price')}
        isMobileFilterOpen={_isMobileFilterOpen}
      />
      
      {_isMobileFilterOpen && (_<Button 
          onClick={() => window.dispatchEvent(new CustomEvent('closeMobileFilter'))}
          className=&quot;w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4&quot;
        >
          Apply Filters
        </Button>
      )}
    </>
  )
}


<<<<<<< HEAD
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Filter } from "lucide-react",;
import { SearchFilter } from "./filters/SearchFilter",;
import { SortFilter } from "./filters/SortFilter",;
import { SkillsFilter } from "./filters/SkillsFilter",;
import { AvailabilityFilter } from "./filters/AvailabilityFilter",;
import { RegionFilter } from "./filters/RegionFilter",;
import { ExperienceFilter } from "./filters/ExperienceFilter",;
import { PriceFilter } from "./filters/PriceFilter",;
import { FilterSidebarProps } from "@/types/filters",;
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
  isMobileFilterOpen;
} FilterSidebarProps) {;
  return (;
    <>;
      {/* Filter header */}
      <div className="flex items-center justify-between mb-6">;
        <h3 className="text-lg font-semibold text-white flex items-center">;
          <Filter className="h-4 w-4 mr-2 text-zion-purple" />;
          Filters;
        </h3>;
        <Button ;
          variant="ghost" ;
          size="sm" ;
          onClick={clearFilters}
          className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent";
        >;
          Clear All;
        </Button>;
      </div>;
      ;
      {/* Search */}
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />;
      ;
      {/* Sorting */}
      <SortFilter sortOption={sortOption} setSortOption={setSortOption} />;
      ;
      {/* Skills */}
      <SkillsFilter ;
        selectedSkills={selectedSkills} ;
        toggleSkill={toggleSkill} ;
        expanded={expandedSections.skills} ;
        toggleSection={() => toggleSection('skills')}
        isMobileFilterOpen={isMobileFilterOpen}
      />;
      ;
      {/* Availability */}
      <AvailabilityFilter ;
        selectedAvailability={selectedAvailability} ;
        toggleAvailability={toggleAvailability} ;
        expanded={expandedSections.availability} ;
        toggleSection={() => toggleSection('availability')}
        isMobileFilterOpen={isMobileFilterOpen}
      />;
      ;
      {/* Region */}
      <RegionFilter ;
        selectedRegions={selectedRegions} ;
        toggleRegion={toggleRegion} ;
        expanded={expandedSections.region} ;
        toggleSection={() => toggleSection('region')}
        isMobileFilterOpen={isMobileFilterOpen}
      />;
      ;
      {/* Years of Experience */}
      <ExperienceFilter ;
        experienceRange={experienceRange} ;
        setExperienceRange={setExperienceRange} ;
        expanded={expandedSections.experience} ;
        toggleSection={() => toggleSection('experience')}
        isMobileFilterOpen={isMobileFilterOpen}
      />;
      ;
      {/* Price Range */}
      <PriceFilter ;
        priceRange={priceRange} ;
        setPriceRange={setPriceRange} ;
        expanded={expandedSections.price} ;
        toggleSection={() => toggleSection('price')}
        isMobileFilterOpen={isMobileFilterOpen}
      />;
      ;
      {isMobileFilterOpen && (;
        <Button ;
          onClick={() => window.dispatchEvent(new CustomEvent('closeMobileFilter'))}
          className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4";
        >;
          Apply Filters;
        </Button>;
      )}
    </>;
  ),;
=======
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
import { FilterSidebarProps } from "@/types/filters",export function FilterSidebar({
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
import React from "react";

export function FilterSidebar(_{searchTerm, setSearchTerm, selectedSkills, toggleSkill, selectedAvailability, toggleAvailability, selectedRegions, toggleRegion, priceRange, setPriceRange, experienceRange, setExperienceRange, expandedSections, toggleSection, sortOption, setSortOption, clearFilters, isMobileFilterOpen}: FilterSidebarProps) {return (_<>
      {/* Filter header */}
      <div className=&quot;flex items-center justify-between mb-6&quot;>
        <h3 className=&quot;text-lg font-semibold text-white flex items-center&quot;>
          <Filter className=&quot;h-4 w-4 mr-2 text-zion-purple&quot; />
          Filters
        </h3>
        <Button,
variant=&quot;ghost&quot; 
          size=&quot;sm&quot; 
          onClick={clearFilters}
          className=&quot;h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent&quot;        >
          Clear All
        </Button>
      </div>
      
      {_/* Search */}
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      {_/* Sorting */}
      <SortFilter sortOption={sortOption} setSortOption={setSortOption} />
      
      {_/* Skills */}
      <SkillsFilter,
selectedSkills={selectedSkills} 
        toggleSkill={toggleSkill} 
        expanded={expandedSections.skills} 
        toggleSection={_() => toggleSection('skills')}
        isMobileFilterOpen={isMobileFilterOpen}
      />
      
      {_/* Availability */}
      <AvailabilityFilter,
selectedAvailability={selectedAvailability} 
        toggleAvailability={toggleAvailability} 
        expanded={expandedSections.availability} 
        toggleSection={_() => toggleSection('availability')}
        isMobileFilterOpen={isMobileFilterOpen}
      />
      
      {_/* Region */}
      <RegionFilter,
selectedRegions={selectedRegions} 
        toggleRegion={toggleRegion} 
        expanded={expandedSections.region} 
        toggleSection={_() => toggleSection('region')}
        isMobileFilterOpen={isMobileFilterOpen}
      />
      
      {_/* Years of Experience */}
      <ExperienceFilter,
experienceRange={experienceRange} 
        setExperienceRange={setExperienceRange} 
        expanded={expandedSections.experience} 
        toggleSection={_() => toggleSection('experience')}
        isMobileFilterOpen={isMobileFilterOpen}
      />
      
      {_/* Price Range */}
      <PriceFilter,
priceRange={priceRange} 
        setPriceRange={setPriceRange} 
        expanded={expandedSections.price} 
        toggleSection={_() => toggleSection('price')}
        isMobileFilterOpen={isMobileFilterOpen}
      />
      
      {isMobileFilterOpen && (_<Button,
onClick={() => window.dispatchEvent(new CustomEvent('closeMobileFilter'))}
          className=&quot;w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4&quot;
        >
          Apply Filters
        </Button>
      )}
    </>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}

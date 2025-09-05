
import React from "react";

export function FilterSidebar(_{_searchTerm, _setSearchTerm, _selectedSkills, _toggleSkill, _selectedAvailability, _toggleAvailability, _selectedRegions, _toggleRegion, _priceRange, _setPriceRange, _experienceRange, _setExperienceRange, _expandedSections, _toggleSection, _sortOption, _setSortOption, _clearFilters, _isMobileFilterOpen}: FilterSidebarProps) {_return (_<>
      {/* Filter header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <Filter className="h-4 w-4 mr-2 text-zion-purple" />
          Filters
        </h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={_clearFilters}
          className="h-7 text-xs text-zion-purple hover:text-zion-purple-light hover:bg-transparent"
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
          className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4"
        >
          Apply Filters
        </Button>
      )}
    </>
  );
}

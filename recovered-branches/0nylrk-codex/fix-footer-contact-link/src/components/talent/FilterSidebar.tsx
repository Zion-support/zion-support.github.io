
import React from "react";
import {Button} from "@/components/ui/button";
import {Filter} from "lucide-react";
import {SearchFilter} from "./filters/SearchFilter";
import {SortFilter} from "./filters/SortFilter";
import {SkillsFilter} from "./filters/SkillsFilter";
import {AvailabilityFilter} from "./filters/AvailabilityFilter";
import {RegionFilter} from "./filters/RegionFilter";
import {ExperienceFilter} from "./filters/ExperienceFilter";
import {PriceFilter} from "./filters/PriceFilter";
import {FilterSidebarProps} from "@/types/filters";


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


}<SearchFilter searchTerm= {
  searchTerm 
}setSearchTerm= {
  setSearchTerm 
}/> {
  /* Sorting */ 
}<SortFilter sortOption= {
  sortOption 
}setSortOption= {
  setSortOption 
}/> {
  /* Skills */ 
}<SkillsFilter selectedSkills= {
  selectedSkills 
}toggleSkill= {
  toggleSkill 
}expanded= {
  expandedSections.skills 
}toggleSection= {
  () => toggleSection ('skills') 
}isMobileFilterOpen= {
  isMobileFilterOpen 
}/> {
  /* Availability */ 
}<AvailabilityFilter selectedAvailability= {
  selectedAvailability 
}toggleAvailability= {
  toggleAvailability 
}expanded= {
  expandedSections.availability 
}toggleSection= {
  () => toggleSection ('availability') 
}isMobileFilterOpen= {
  isMobileFilterOpen 
}/> {
  /* Region */ 
}<RegionFilter selectedRegions= {
  selectedRegions 
}toggleRegion= {
  toggleRegion 
}expanded= {
  expandedSections.region 
}toggleSection= {
  () => toggleSection ('region') 
}isMobileFilterOpen= {
  isMobileFilterOpen 
}/> {
  /* Years of Experience */ 
}<ExperienceFilter experienceRange= {
  experienceRange 
}setExperienceRange= {
  setExperienceRange 
}expanded= {
  expandedSections.experience 
}toggleSection= {
  () => toggleSection ('experience') 
}isMobileFilterOpen= {
  isMobileFilterOpen 
}/> {
  /* Price Range */ 
}<PriceFilter priceRange= {
  priceRange 
}setPriceRange= {
  setPriceRange 
}expanded= {
  expandedSections.price 
}toggleSection= {
  () => toggleSection ('price') 
}isMobileFilterOpen= {
  isMobileFilterOpen 
}/> {
  isMobileFilterOpen && (<Button onClick= {
  () => window.dispatchEvent (new CustomEvent ('closeMobileFilter') ) 
}className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4" > Apply Filters </Button>) 
}</>) 
}
}



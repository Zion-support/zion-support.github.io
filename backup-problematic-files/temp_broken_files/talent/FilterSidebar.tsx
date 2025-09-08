<<<<<<< HEAD


=======
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Filter } from 'lucide-react';
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { SearchFilter } from "./filters/SearchFilter",;
import { SortFilter } from "./filters/SortFilter",;
import { SkillsFilter } from "./filters/SkillsFilter",;
import { AvailabilityFilter } from "./filters/AvailabilityFilter",;
import { RegionFilter } from "./filters/RegionFilter",;
import { ExperienceFilter } from "./filters/ExperienceFilter",;
import { PriceFilter } from "./filters/PriceFilter",;
import { FilterSidebarProps } from "@/types/filters",;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

  isMobileFilterOpen;)
} FilterSidebarProps) {;
  return (;

    <>;
      {/* Filter header */}"
      <div className="flex items-center justify-between mb-6">;"
</div>"
        <h3 className="text-lg font-semibold text-white flex items-center">;"
</h3>"
          <Filter className="h-4 w-4 mr-2 text-zion-purple" />;"

        </h3>;

        >;

      </div>;
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />;

      <SortFilter sortOption={sortOption} setSortOption={setSortOption} />;

      <SkillsFilter ;
        selectedSkills={selectedSkills} ;
        toggleSkill={toggleSkill} ;
        expanded={expandedSections.skills} ;)"
        toggleSection={() => toggleSection('skills')}


=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <AvailabilityFilter ;
        selectedAvailability={selectedAvailability} ;
        toggleAvailability={toggleAvailability} ;
        expanded={expandedSections.availability} ;
        toggleSection={() => toggleSection('availability')}
<<<<<<< HEAD



=======
        isMobileFilterOpen={isMobileFilterOpen}
      />;
      ;
      {/* Region */}
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <RegionFilter ;
        selectedRegions={selectedRegions} ;
        toggleRegion={toggleRegion} ;
        expanded={expandedSections.region} ;
        toggleSection={() => toggleSection('region')}
<<<<<<< HEAD



=======
        isMobileFilterOpen={isMobileFilterOpen}
      />;
      ;
      {/* Years of Experience */}
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <ExperienceFilter ;
        experienceRange={experienceRange} ;
        setExperienceRange={setExperienceRange} ;
        expanded={expandedSections.experience} ;
        toggleSection={() => toggleSection('experience')}
<<<<<<< HEAD



=======
        isMobileFilterOpen={isMobileFilterOpen}
      />;
      ;
      {/* Price Range */}
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <PriceFilter ;
        priceRange={priceRange} ;
        setPriceRange={setPriceRange} ;
        expanded={expandedSections.price} ;
        toggleSection={() => toggleSection('price')}
<<<<<<< HEAD


        <Button ;
          onClick={() => window.dispatchEvent(new CustomEvent('closeMobileFilter'))}

    </>;


=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  ),;}
 export function FilterSidebar ({;
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
<<<<<<< HEAD

isMobileFilterOpen ;)
}: FilterSidebarProps) {;
  return (<> /* Filter header */ ;
}<div className="flex items-center justify-between mb-6" > <h3 className="text-lg font-semibold text-white flex items-center" > <Filter className="h-4 w-4 mr-2 text-zion-purple" /> Filters </h3> <Button > Clear All  </div> {;"

=======
isMobileFilterOpen ;
}: FilterSidebarProps) {;
  return (<> /* Filter header */ ;
}<div className="flex items-center justify-between mb-6" > <h3 className="text-lg font-semibold text-white flex items-center" > <Filter className="h-4 w-4 mr-2 text-zion-purple" /> Filters </h3> <Button > Clear All </Button> </div> {;
  /* Search */ ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
}<SearchFilter searchTerm= {;
  searchTerm ;
}setSearchTerm= {;
  setSearchTerm ;
}/> {;
<<<<<<< HEAD



=======
  /* Sorting */ ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
}<SortFilter sortOption= {;
  sortOption ;
}setSortOption= {;
  setSortOption ;
<<<<<<< HEAD



=======
}/> {;
  /* Skills */ ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
}<SkillsFilter selectedSkills= {;
  selectedSkills ;
}toggleSkill= {;
  toggleSkill ;
}expanded= {;
  expandedSections.skills ;
<<<<<<< HEAD

}toggleSection= {;)"
  () => toggleSection ('skills') ;


=======
}toggleSection= {;
  () => toggleSection ('skills') ;
}isMobileFilterOpen= {;
  isMobileFilterOpen ;
}/> {;
  /* Availability */ ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
}<AvailabilityFilter selectedAvailability= {;
  selectedAvailability ;
}toggleAvailability= {;
  toggleAvailability ;
<<<<<<< HEAD

  expandedSections.availability ;
}toggleSection= {';
  () => toggleSection ('availability') ;


=======
}expanded= {;
  expandedSections.availability ;
}toggleSection= {';
  () => toggleSection ('availability') ;
}isMobileFilterOpen= {;
  isMobileFilterOpen ;
}/> {;
  /* Region */ ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
}<RegionFilter selectedRegions= {;
  selectedRegions ;
}toggleRegion= {;
  toggleRegion ;
<<<<<<< HEAD

  expandedSections.region ;
  () => toggleSection ('region') ;


=======
}expanded= {;
  expandedSections.region ;
}toggleSection= {';
  () => toggleSection ('region') ;
}isMobileFilterOpen= {;
  isMobileFilterOpen ;
}/> {;
  /* Years of Experience */ ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
}<ExperienceFilter experienceRange= {;
  experienceRange ;
}setExperienceRange= {;
  setExperienceRange ;
<<<<<<< HEAD

  expandedSections.experience ;
  () => toggleSection ('experience') ;


=======
}expanded= {;
  expandedSections.experience ;
}toggleSection= {';
  () => toggleSection ('experience') ;
}isMobileFilterOpen= {;
  isMobileFilterOpen ;
}/> {;
  /* Price Range */ ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
}<PriceFilter priceRange= {;
  priceRange ;
}setPriceRange= {;
  setPriceRange ;
<<<<<<< HEAD

  expandedSections.price ;


=======
}expanded= {;
  expandedSections.price ;
}toggleSection= {';
  () => toggleSection ('price') ;
}isMobileFilterOpen= {;
  isMobileFilterOpen ;
}/> {;
  isMobileFilterOpen && (<Button onClick={';"  () => window.dispatchEvent (new CustomEvent ('closeMobileFilter') ) ";"}className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white mt-4" > Apply Filters </Button>) ;
}</>) ;"}'"
>>>>>>> origin/cursor/delete-old-data-records-6bba

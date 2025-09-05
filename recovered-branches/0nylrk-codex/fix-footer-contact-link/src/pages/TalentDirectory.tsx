
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { useNavigate } from "react-router-dom",
import { AppLayout } from "@/layout/AppLayout",
import { TalentGrid } from "@/components/talent/TalentGrid",
import { FilterSidebar } from "@/components/talent/FilterSidebar",
import { TalentResults } from "@/components/talent/TalentResults",
import { useTalentDirectory } from "@/hooks/useTalentDirectory",
import { SORT_OPTIONS } from "@/data/sortOptions",
import { X } from "lucide-react",
import { Button } from "@/components/ui/button",
import { TalentProfile } from "@/types/talent",
=======
import React, { useState } from &quot;react&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;
import { AppLayout } from &quot;@/layout/AppLayout&quot;;
import { TalentGrid } from &quot;@/components/talent/TalentGrid&quot;;
import { FilterSidebar } from &quot;@/components/talent/FilterSidebar&quot;;
import { TalentResults } from &quot;@/components/talent/TalentResults&quot;;
import { useTalentDirectory } from &quot;@/hooks/useTalentDirectory&quot;;
import { SORT_OPTIONS } from &quot;@/data/sortOptions&quot;;
import { X } from &quot;lucide-react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function TalentDirectory() {
  const navigate = useNavigate(),

  // Use our custom hook to manage state
  const {
    filteredTalents,
    isLoading,
    searchTerm,
    setSearchTerm,
    selectedSkills,
    selectedAvailability,
    selectedRegions,
    priceRange,
    setPriceRange,
    experienceRange,
    setExperienceRange,
    sortOption,
    setSortOption,
    isMobileFilterOpen,
    setIsMobileFilterOpen,
    isHireModalOpen,
    setIsHireModalOpen,
    selectedTalent,
    setSelectedTalent,
    expandedSections,
    isAuthenticated,
    savedTalents,
    toggleSkill,
    toggleAvailability,
    toggleRegion,
    clearFilters,
    toggleSection,
    handleToggleSave} = useTalentDirectory(),
  
  const handleRequestHire = (talent: TalentProfile) => {
    setSelectedTalent(talent),
    setIsHireModalOpen(true)
  },
  
  const viewProfile = (id: string) => {
    // Navigate to the talent profile page
    navigate(`/talent/${id}`)
  },
  
  return (
    <AppLayout>
      <div className=&quot;container mx-auto px-4 py-8&quot;>
        <div className=&quot;flex flex-col space-y-8&quot;>
          <div>
            <h1 className=&quot;text-3xl font-bold text-white mb-2&quot;>AI & Tech Talent Directory</h1>
            <p className=&quot;text-zion-slate-light&quot;>
              Connect with expert AI developers, data scientists, ML engineers, and tech professionals for your projects.
            </p>
          </div>
          
          {/* Main content */}
          <div className=&quot;flex flex-col lg:flex-row gap-6&quot;>
            {/* Sidebar - Desktop */}
            <div className=&quot;w-full lg:w-64 shrink-0 hidden lg:block&quot;>
              <FilterSidebar
=======
import React, { useState } from "react",;
import { useNavigate } from "react-router-dom",;
import { AppLayout } from "@/layout/AppLayout",;
import { TalentGrid } from "@/components/talent/TalentGrid",;
import { FilterSidebar } from "@/components/talent/FilterSidebar",;
import { TalentResults } from "@/components/talent/TalentResults",;
import { useTalentDirectory } from "@/hooks/useTalentDirectory",;
import { SORT_OPTIONS } from "@/data/sortOptions",;
import { X } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { TalentProfile } from "@/types/talent",;
export default function TalentDirectory() {;
  const navigate = useNavigate(),;
  // Use our custom hook to manage state;
  const {;
    filteredTalents,;
    isLoading,;
    searchTerm,;
    setSearchTerm,;
    selectedSkills,;
    selectedAvailability,;
    selectedRegions,;
    priceRange,;
    setPriceRange,;
    experienceRange,;
    setExperienceRange,;
    sortOption,;
    setSortOption,;
    isMobileFilterOpen,;
    setIsMobileFilterOpen,;
    isHireModalOpen,;
    setIsHireModalOpen,;
    selectedTalent,;
    setSelectedTalent,;
    expandedSections,;
    isAuthenticated,;
    savedTalents,;
    toggleSkill,;
    toggleAvailability,;
    toggleRegion,;
    clearFilters,;
    toggleSection,;
    handleToggleSave} = useTalentDirectory(),;
  const handleRequestHire = (talent: TalentProfile) => {;
    setSelectedTalent(talent),;
    setIsHireModalOpen(true);
  },;
  const viewProfile = (id: string) => {;
    // Navigate to the talent profile page;
    navigate(`/talent/${id}`);
  },;
  return (;
    <AppLayout>;
      <div className="container mx-auto px-4 py-8">;
        <div className="flex flex-col space-y-8">;
          <div>;
            <h1 className="text-3xl font-bold text-white mb-2">AI & Tech Talent Directory</h1>;
            <p className="text-zion-slate-light">;
              Connect with expert AI developers, data scientists, ML engineers, and tech professionals for your projects.;
            </p>;
          </div>;
          {/* Main content */}
          <div className="flex flex-col lg:flex-row gap-6">;
            {/* Sidebar - Desktop */}
            <div className="w-full lg:w-64 shrink-0 hidden lg:block">;
              <FilterSidebar;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedSkills={selectedSkills}
                toggleSkill={toggleSkill}
                selectedAvailability={selectedAvailability}
                toggleAvailability={toggleAvailability}
                selectedRegions={selectedRegions}
                toggleRegion={toggleRegion}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                experienceRange={experienceRange}
                setExperienceRange={setExperienceRange}
                expandedSections={expandedSections}
                toggleSection={toggleSection}
                sortOption={sortOption}
                setSortOption={setSortOption}
                clearFilters={clearFilters}
              />;
            </div>;
            {/* Mobile filter button */}
<<<<<<< HEAD
            <div className=&quot;lg:hidden mb-4&quot;>
              <Button
                onClick={() => setIsMobileFilterOpen(true)}
                variant=&quot;outline&quot;
                className=&quot;w-full border-zion-blue-light text-zion-purple hover:bg-zion-blue-light&quot;
              >
                Filter & Sort
              </Button>
            </div>
            
=======
            <div className="lg:hidden mb-4">;
              <Button;
                onClick={() => setIsMobileFilterOpen(true)}
                variant="outline";
                className="w-full border-zion-blue-light text-zion-purple hover:bg-zion-blue-light";
              >;
                Filter & Sort;
              </Button>;
            </div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            {/* Results */}
            <TalentResults;
              filteredTalents={filteredTalents}
              isLoading={isLoading}
              viewProfile={viewProfile}
              handleRequestHire={handleRequestHire}
              savedTalents={savedTalents}
              handleToggleSave={handleToggleSave}
              isAuthenticated={isAuthenticated}
              activeFiltersProps={{;
                selectedSkills,;
                toggleSkill,;
                selectedAvailability,;
                toggleAvailability,;
                selectedRegions,;
                toggleRegion,;
                priceRange,;
                setPriceRange,;
                experienceRange;
                setExperienceRange;
                clearFilters}}
            />;
            {/* Mobile filter sidebar */}
<<<<<<< HEAD
            {isMobileFilterOpen && (
              <div className=&quot;fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex&quot;>
                <div className=&quot;w-80 h-full bg-zion-blue-dark overflow-y-auto p-4 ml-auto&quot;>
                  <div className=&quot;flex justify-between items-center mb-4&quot;>
                    <h3 className=&quot;font-bold text-white&quot;>Filter & Sort</h3>
                    <Button
                      variant=&quot;ghost&quot;
                      size=&quot;sm&quot;
                      onClick={() => setIsMobileFilterOpen(false)}
                      className=&quot;text-zion-slate-light h-8 w-8 p-0&quot;
                    >
                      <X className=&quot;h-4 w-4&quot; />
                      <span className=&quot;sr-only&quot;>Close</span>
                    </Button>
                  </div>
                  <FilterSidebar
=======
            {isMobileFilterOpen && (;
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex">;
                <div className="w-80 h-full bg-zion-blue-dark overflow-y-auto p-4 ml-auto">;
                  <div className="flex justify-between items-center mb-4">;
                    <h3 className="font-bold text-white">Filter & Sort</h3>;
                    <Button;
                      variant="ghost";
                      size="sm";
                      onClick={() => setIsMobileFilterOpen(false)}
                      className="text-zion-slate-light h-8 w-8 p-0";
                    >;
                      <X className="h-4 w-4" />;
                      <span className="sr-only">Close</span>;
                    </Button>;
                  </div>;
                  <FilterSidebar;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    selectedSkills={selectedSkills}
                    toggleSkill={toggleSkill}
                    selectedAvailability={selectedAvailability}
                    toggleAvailability={toggleAvailability}
                    selectedRegions={selectedRegions}
                    toggleRegion={toggleRegion}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    experienceRange={experienceRange}
                    setExperienceRange={setExperienceRange}
                    expandedSections={expandedSections}
                    toggleSection={toggleSection}
                    sortOption={sortOption}
                    setSortOption={setSortOption}
                    clearFilters={clearFilters}
                    isMobileFilterOpen={isMobileFilterOpen}
                  />;
                </div>;
              </div>;
            )}
          </div>;
        </div>;
      </div>;
    </AppLayout>;
  );
}
;
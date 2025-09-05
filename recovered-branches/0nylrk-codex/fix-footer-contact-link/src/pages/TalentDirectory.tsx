
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

export default function TalentDirectory() {
  const navigate = useNavigate();

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
    handleToggleSave} = useTalentDirectory();
  
  const handleRequestHire = (talent: TalentProfile) => {
    setSelectedTalent(talent);
    setIsHireModalOpen(true);
  };
  
  const viewProfile = (id: string) => {
    // Navigate to the talent profile page
    navigate(`/talent/${id}`);
  };
  
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
              />
            </div>
            
            {/* Mobile filter button */}
            <div className=&quot;lg:hidden mb-4&quot;>
              <Button
                onClick={() => setIsMobileFilterOpen(true)}
                variant=&quot;outline&quot;
                className=&quot;w-full border-zion-blue-light text-zion-purple hover:bg-zion-blue-light&quot;
              >
                Filter & Sort
              </Button>
            </div>
            
            {/* Results */}
            <TalentResults
              filteredTalents={filteredTalents}
              isLoading={isLoading}
              viewProfile={viewProfile}
              handleRequestHire={handleRequestHire}
              savedTalents={savedTalents}
              handleToggleSave={handleToggleSave}
              isAuthenticated={isAuthenticated}
              activeFiltersProps={{
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
                clearFilters}}
            />
            
            {/* Mobile filter sidebar */}
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
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

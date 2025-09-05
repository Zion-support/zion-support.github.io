
import React, {_useState} from "react";

export default function TalentDirectory() {_const _navigate = useNavigate();

  // Use our custom hook to manage state
  const {
    filteredTalents, _isLoading, _searchTerm, _setSearchTerm, _selectedSkills, _selectedAvailability, _selectedRegions, _priceRange, _setPriceRange, _experienceRange, _setExperienceRange, _sortOption, _setSortOption, _isMobileFilterOpen, _setIsMobileFilterOpen, _isHireModalOpen, _setIsHireModalOpen, _selectedTalent, _setSelectedTalent, _expandedSections, _isAuthenticated, _savedTalents, _toggleSkill, _toggleAvailability, _toggleRegion, _clearFilters, _toggleSection, _handleToggleSave} = useTalentDirectory();
  
  const _handleRequestHire = (_talent: TalentProfile) => {_setSelectedTalent(talent);
    setIsHireModalOpen(true);};
  
  const _viewProfile = (_id: string) => {_// Navigate to the talent profile page
    navigate(`/talent/${id}`);
  };
  
  return (_<AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">AI & Tech Talent Directory</h1>
            <p className="text-zion-slate-light">
              Connect with expert AI developers, _data scientists, _ML engineers, _and tech professionals for your projects.
            </p>
          </div>
          
          {_/* Main content */}
          <div className="flex flex-col lg:flex-row gap-6">
            {_/* Sidebar - Desktop */}
            <div className="w-full lg:w-64 shrink-0 hidden lg:block">
              <FilterSidebar
                searchTerm={_searchTerm}
                setSearchTerm={_setSearchTerm}
                selectedSkills={_selectedSkills}
                toggleSkill={_toggleSkill}
                selectedAvailability={_selectedAvailability}
                toggleAvailability={_toggleAvailability}
                selectedRegions={_selectedRegions}
                toggleRegion={_toggleRegion}
                priceRange={_priceRange}
                setPriceRange={_setPriceRange}
                experienceRange={_experienceRange}
                setExperienceRange={_setExperienceRange}
                expandedSections={_expandedSections}
                toggleSection={_toggleSection}
                sortOption={_sortOption}
                setSortOption={_setSortOption}
                clearFilters={_clearFilters}
              />
            </div>
            
            {_/* Mobile filter button */}
            <div className="lg:hidden mb-4">
              <Button
                onClick={_() => setIsMobileFilterOpen(true)}
                variant="outline"
                className="w-full border-zion-blue-light text-zion-purple hover:bg-zion-blue-light"
              >
                Filter & Sort
              </Button>
            </div>
            
            {_/* Results */}
            <TalentResults
              filteredTalents={_filteredTalents}
              isLoading={_isLoading}
              viewProfile={_viewProfile}
              handleRequestHire={_handleRequestHire}
              savedTalents={_savedTalents}
              handleToggleSave={_handleToggleSave}
              isAuthenticated={_isAuthenticated}
              activeFiltersProps={_{
                selectedSkills, _toggleSkill, _selectedAvailability, _toggleAvailability, _selectedRegions, _toggleRegion, _priceRange, _setPriceRange, _experienceRange, _setExperienceRange, _clearFilters}}
            />
            
            {_/* Mobile filter sidebar */}
            {_isMobileFilterOpen && (_<div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex">
                <div className="w-80 h-full bg-zion-blue-dark overflow-y-auto p-4 ml-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-white">Filter & Sort</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsMobileFilterOpen(false)}
                      className="text-zion-slate-light h-8 w-8 p-0"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </div>
                  <FilterSidebar
                    searchTerm={_searchTerm}
                    setSearchTerm={_setSearchTerm}
                    selectedSkills={_selectedSkills}
                    toggleSkill={_toggleSkill}
                    selectedAvailability={_selectedAvailability}
                    toggleAvailability={_toggleAvailability}
                    selectedRegions={_selectedRegions}
                    toggleRegion={_toggleRegion}
                    priceRange={_priceRange}
                    setPriceRange={_setPriceRange}
                    experienceRange={_experienceRange}
                    setExperienceRange={_setExperienceRange}
                    expandedSections={_expandedSections}
                    toggleSection={_toggleSection}
                    sortOption={_sortOption}
                    setSortOption={_setSortOption}
                    clearFilters={_clearFilters}
                    isMobileFilterOpen={_isMobileFilterOpen}
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

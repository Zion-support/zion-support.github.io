
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
import { TalentProfile } from "@/types/talent",export default function TalentDirectory() {
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
            
            {/* Mobile filter button */}
            <div className=&quot;lg:hidden mb-4&quot;>
              <Button
                onClick={() => setIsMobileFilterOpen(true)}
                variant=&quot;outline&quot;
                className=&quot;w-full border-zion-blue-light text-zion-purple hover:bg-zion-blue-light&quot;              >
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
            
            {/* Mobile filter sidebar */}
            {isMobileFilterOpen && (
              <div className=&quot;fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex&quot;>
                <div className=&quot;w-80 h-full bg-zion-blue-dark overflow-y-auto p-4 ml-auto&quot;>
                  <div className=&quot;flex justify-between items-center mb-4&quot;>
                    <h3 className=&quot;font-bold text-white&quot;>Filter & Sort</h3>                    <Button
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
  )
}

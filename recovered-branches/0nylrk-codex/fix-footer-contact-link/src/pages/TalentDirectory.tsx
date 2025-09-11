
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
    setSelectedTalent(talent)
    setIsHireModalOpen(true)
  },
  
  const viewProfile = (id: string) => {
    // Navigate to the talent profile page
    navigate(`/talent/${id}`)
  },
  
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">AI & Tech Talent Directory</h1>
            <p className="text-zion-slate-light">
              Connect with expert AI developers, data scientists, ML engineers, and tech professionals for your projects.
            </p>
          </div>



          {/* Main content */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar - Desktop */}
            <div className="w-full lg:w-64 shrink-0 hidden lg:block">
              <FilterSidebar
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
;
export default function TalentDirectory() {;
  const navigate = useNavigate(),;
;
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
  ;
  const handleRequestHire = (talent:TalentProfile) => {;
    setSelectedTalent(talent),;
    setIsHireModalOpen(true);
  },;
  ;
  const viewProfile = (id:string) => {;
    // Navigate to the talent profile page;
    navigate(`/talent/${id}`),;
  },;
  ;
  return (;
  const handleRequestHire = (talent: TalentProfile) => {;
    setSelectedTalent(talent),;
    setIsHireModalOpen(true);
  },;
  const viewProfile = (id: string) => {;
    // Navigate to the talent profile page;
    navigate(`/talent/${id}`);
  },;
  return (;
  const handleRequestHire = (talent: TalentProfile) => {;
    setSelectedTalent(talent),;
    setIsHireModalOpen(true);
  };

  const viewProfile = (id: string) => {;
    // Navigate to the talent profile page;
    navigate(`/talent/${id}`);
  };

  return (


    expanded_sections;
    is_authenticated;
    saved_talents;
    toggle_skill;
    toggle_availability;
    toggle_region;
    clear_filters;
    toggle_section;
    handleToggleSave} = useTalentDirectory ();
;
  const handleRequestHire = (talent: TalentProfile) =>: any {
    setSelectedTalent (talent),
    setIsHireModalOpen (true);
  }
;
  const view_profile = (id: string) =>: any {
    // Navigate to the talent profile page;
    navigate (`/talent/${id}`);
  }
;
  return (
    <AppLayout>;
      <div className="container mx - auto px - 4 py - 8">;
        <div className="flex flex - col space - y-8">;
          <div>;
            <h1 className="text - 3xl font - bold text - white mb - 2">AI & Tech Talent Directory</h1>;
            <p className="text - zion - slate - light">;
              Connect with expert AI developers, data scientists, ML engineers, and tech professionals for your projects.;
            </p>;
          </div>;
          {/* Main content */}
          <div className="flex flex - col lg:flex - row gap - 6">;
            {/* Sidebar - Desktop */}
            <div className="w - full lg:w - 64 shrink - 0 hidden lg:block">;
              <FilterSidebar;
                search_term={search_term}
                setSearchTerm={setSearchTerm}
                selected_skills={selected_skills}
                toggle_skill={toggle_skill}
                selected_availability={selected_availability}
                toggle_availability={toggle_availability}
                selected_regions={selected_regions}
                toggle_region={toggle_region}
                price_range={price_range}
                setPriceRange={setPriceRange}
                experience_range={experience_range}
                setExperienceRange={setExperienceRange}
                expanded_sections={expanded_sections}
                toggle_section={toggle_section}
                sort_option={sort_option}
                setSortOption={setSortOption}
              />;
            </div>;


            <div className="lg:hidden mb-4">;              <Button
                onClick={() => setIsMobileFilterOpen(true)}
                variant="outline"
                className="w-full border-zion-blue-light text-zion-purple hover:bg-zion-blue-light"
              >
                Filter & Sort
              </Button>
            </div>
            

            ;
            {/* Results */}
            <TalentResults;
              filteredTalents={filteredTalents}
              isLoading={isLoading}
              viewProfile={viewProfile}
              handleRequestHire={handleRequestHire}
              saved_talents={saved_talents}
              handleToggleSave={handleToggleSave}

              is_authenticated={is_authenticated}
              activeFiltersProps={{
                selected_skills;
                toggle_skill;
                selected_availability;
                toggle_availability;
                selected_regions;
                toggle_region;
                price_range;
              isAuthenticated={isAuthenticated}

            {/* Mobile filter sidebar */}
            {isMobileFilterOpen && (;
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex">;
                <div className="w-80 h-full bg-zion-blue-dark overflow-y-auto p-4 ml-auto">;
                  <div className="flex justify-between items-center mb-4">;
                    <h3 className="font-bold text-white">Filter & Sort</h3>;
                clearFilters}}
            />
            {/* Mobile filter sidebar */}
            {isMobileFilterOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex">
                <div className="w-80 h-full bg-zion-blue-dark overflow-y-auto p-4 ml-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-white">Filter & Sort</h3>
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsMobileFilterOpen(false)}
}/> <Button variant="ghost" size="sm" onClick= {
  () => setIsMobileFilterOpen (false) 
}className="text-zion-slate-light h-8 w-8 p-0" > <X className="h-4 w-4" /> <span className="sr-only" >Close</span> </Button> </div> <FilterSidebar searchTerm= {
  searchTerm 
}setSearchTerm= {
  setSearchTerm 
}selectedSkills= {
  selectedSkills 
}toggleSkill= {
  toggleSkill 
}selectedAvailability= {
  selectedAvailability 
}toggleAvailability= {
  toggleAvailability 
}selectedRegions= {
  selectedRegions 
}toggleRegion= {
  toggleRegion 
}priceRange= {
  priceRange 
}setPriceRange= {
  setPriceRange 
}experienceRange= {
  experienceRange 
}setExperienceRange= {
  setExperienceRange 
}expandedSections= {
  expandedSections 
}toggleSection= {
  toggleSection 
}sortOption= {
  sortOption 
}setSortOption= {
  setSortOption 
}clearFilters= {
  clearFilters 
}isMobileFilterOpen= {
  isMobileFilterOpen 
}/> </div> </div>) 
}</div> </div> </div> </AppLayout>) 
}
  );
}
;
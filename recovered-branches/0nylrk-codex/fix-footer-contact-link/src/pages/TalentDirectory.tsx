<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import {AppLayout} from "@/layout/AppLayout";
import {TalentGrid} from "@/components/talent/TalentGrid";
import {FilterSidebar} from "@/components/talent/FilterSidebar";
import {TalentResults} from "@/components/talent/TalentResults";
import {useTalentDirectory} from "@/hooks/useTalentDirectory";
import {SORT_OPTIONS} from "@/data/sortOptions";
import {X} from "lucide-react";
import {Button} from "@/components/ui/button";
import {TalentProfile} from "@/types/talent";
export default function TalentDirectory() {;
  const navigate = useNavigate();
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import React, { useState } from "react",
import { useNavigate } from "react-router-dom",
import { AppLayout } from "@/layout/AppLayout",
import { TalentGrid } from "@/components/talent/TalentGrid",
import { FilterSidebar } from "@/components/talent/FilterSidebar",
import { TalentResults } from "@/components/talent/TalentResults",
import { useTalentDirectory } from "@/hooks/useTalentDirectory",
import { SORT_OPTIONS } from "@/data/sortOptions",
import { X } from "lucide-react",
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

  // Use our custom hook to manage state;
  const {;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  const navigate = useNavigate();
  // Use our custom hook to manage state
  const {
    filteredTalents;
    isLoading;
    searchTerm;
import React, { useState } from './react';
import { use_navigate } from './react-router-dom';
import { AppLayout } from '@/layout / AppLayout';
import { TalentGrid } from '@/components / talent / TalentGrid';
import { FilterSidebar } from '@/components / talent / FilterSidebar';
import { TalentResults } from '@/components / talent / TalentResults';
import { useTalentDirectory } from '@/hooks / useTalentDirectory';
import { SORT_OPTIONS } from '@/data / sort_options';
import { X } from './lucide-react';
import { Button } from '@/components / ui / button';
import { TalentProfile } from '@/types / talent';
export default /**
 * TalentDirectory - Function description
 */
function TalentDirectory() {
  const navigate = use_navigate ();
;
  // Use our custom hook to manage state;
  const {
    filtered_talents;
    is_loading;
    search_term;
    setSearchTerm;
    selected_skills;
    selected_availability;
    selected_regions;
    price_range;
    setPriceRange;
    experience_range;
    setExperienceRange;
    sort_option;
    setSortOption;
    isMobileFilterOpen;
    setIsMobileFilterOpen;
    isHireModalOpen;
    setIsHireModalOpen;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
    selected_talent;
    setSelectedTalent;
<<<<<<< HEAD
=======





  const navigate = useNavigate();
  // Use our custom hook to manage state
  const {

=======
    selectedTalent;
    setSelectedTalent;
    expandedSections;
    isAuthenticated;
    savedTalents;
    toggleSkill;
    toggleAvailability;
    toggleRegion;
    clearFilters;
    toggleSection;
    handleToggleSave} = useTalentDirectory();
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
  
  },
  
  const viewProfile = (id: string) => {
    // Navigate to the talent profile page
    navigate(`/talent/${id}`)
  },
  
    selected_talent;
    setSelectedTalent;
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          {/* Main content */}
          <div className="flex flex-col lg:flex-row gap-6">;
            {/* Sidebar - Desktop */}
            <div className="w-full lg:w-64 shrink-0 hidden lg:block">;
              <FilterSidebar
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
  };
  const viewProfile = (id: string) => {;
    // Navigate to the talent profile page;
    navigate(`/talent/${id}`);
  };

  return (
    <AppLayout>;
      <div className="container mx-auto px-4 py-8">;
        <div className="flex flex-col space-y-8">;
          <div>;
            <h1 className="text-3xl font-bold text-white mb-2">AI & Tech Talent Directory</h1>;
            <p className="text-zion-slate-light">;
              Connect with expert AI developers, data scientists, ML engineers, and tech professionals for your projects.;
            </p>;
          </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
          ;
          {/* Main content */}
          <div className="flex flex-col lg:flex-row gap-6">;
            {/* Sidebar - Desktop */}
            <div className="w-full lg:w-64 shrink-0 hidden lg:block">;
              <FilterSidebar;
                searchTerm={searchTerm}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
            {/* Mobile filter button */}
            <div className="lg:hidden mb-4">
              <Button
                onClick={() => setIsMobileFilterOpen(true)}

                variant="outline";
                className="w-full border-zion-blue-light text-zion-purple hover:bg-zion-blue-light";
                clear_filters={clear_filters}
              />;
            </div>;
            {/* Mobile filter button */}
            <div className="lg:hidden mb - 4">;
              <Button;
                on_click={() => setIsMobileFilterOpen (true)}
                variant="outline";
                className="w - full border - zion - blue - light text - zion - purple hover:bg - zion - blue - light";
            {/* Mobile filter button */}
            <div className="lg:hidden mb-4">;
              <Button
                onClick={() => setIsMobileFilterOpen(true)}
              >;
                Filter & Sort;
              </Button>;
            </div>;
            {/* Results */}
            <TalentResults;
              filtered_talents={filtered_talents}
              is_loading={is_loading}
              view_profile={view_profile}
              handleRequestHire={handleRequestHire}
              saved_talents={saved_talents}
              handleToggleSave={handleToggleSave}
<<<<<<< HEAD
=======

                selected_skills;
                toggle_skill;
                selected_availability;
                toggle_availability;
                selected_regions;
                toggle_region;
                price_range;
<<<<<<< HEAD
=======
<<<<<<< HEAD

                setPriceRange;
                experience_range;
=======
              isAuthenticated={isAuthenticated}

=======
              isAuthenticated={isAuthenticated}

            
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
                selectedSkills;
                toggleSkill;
                selectedAvailability;
                toggleAvailability;
                selectedRegions;
                toggleRegion;
                priceRange;
                setPriceRange;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              activeFiltersProps={{;
                selectedSkills,;
                toggleSkill,;
                selectedAvailability,;
                toggleAvailability,;
                selectedRegions,;
                toggleRegion,;
                priceRange,;
                setPriceRange,;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                experienceRange;
                setExperienceRange;

                setPriceRange;
                experience_range;
                setExperienceRange;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                selectedSkills
                toggleSkill
                selectedAvailability
                toggleAvailability
                selectedRegions
                toggleRegion
                priceRange
                setPriceRange
                experienceRange
                setExperienceRange
                clearFilters}}
            />;
              handleRequestHire={handleRequestHire}
              saved_talents={saved_talents}
              handleToggleSave={handleToggleSave}
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
              is_authenticated={is_authenticated}
              activeFiltersProps={{
                setPriceRange;
                experience_range;
                setExperienceRange;
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            {/* Mobile filter sidebar */}
            {isMobileFilterOpen && (;
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex">;
                <div className="w-80 h-full bg-zion-blue-dark overflow-y-auto p-4 ml-auto">;
                  <div className="flex justify-between items-center mb-4">;
                    <h3 className="font-bold text-white">Filter & Sort</h3>;
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsMobileFilterOpen(false)}
                      className="text-zion-slate-light h-8 w-8 p-0";
                    >;
                      <X className="h-4 w-4" />;
                      <span className="sr-only">Close</span>;
                    </Button>;
                  </div>;
                    searchTerm={searchTerm}
                clear_filters}}
            />;
            {/* Mobile filter sidebar */}
            {isMobileFilterOpen && (
              <div className="fixed inset - 0 bg - black bg - opacity - 50 z - 50 lg:hidden flex">;
                <div className="w - 80 h - full bg - zion - blue - dark overflow - y-auto p - 4 ml - auto">;
                  <div className="flex justify - between items - center mb - 4">;
                    <h3 className="font - bold text - white">Filter & Sort</h3>;
                    <Button;
                      variant="ghost";
                      size="sm";
                      on_click={() => setIsMobileFilterOpen (false)}
                      className="text - zion - slate - light h - 8 w - 8 p - 0";
                    >;
                      <X className="h - 4 w - 4" />;
                      <span className="sr - only">Close</span>;
                    </Button>;
                  </div>;
                  <FilterSidebar;
                    search_term={search_term}
                    setSearchTerm={setSearchTerm}
                  <FilterSidebar
                    searchTerm={searchTerm}
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
                    clear_filters={clear_filters}
                    isMobileFilterOpen={isMobileFilterOpen}
          </div>;
        </div>;
      </div>;
    </AppLayout>);
}

;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              </div>;
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
          </div>;
        </div>;
      </div>;
    </AppLayout>;
  ),; export default function TalentDirectory () {
  const navigate = useNavigate ();
//Use our custom hook to manage state const {
  filteredTalents;
isLoading;
searchTerm;
setSearchTerm;
selectedSkills;
selectedAvailability;
selectedRegions;
priceRange;
setPriceRange;
experienceRange;
setExperienceRange;
sortOption;
setSortOption;
isMobileFilterOpen;
setIsMobileFilterOpen;
isHireModalOpen;
setIsHireModalOpen;
selectedTalent;
setSelectedTalent;
expandedSections;
isAuthenticated;
savedTalents;
toggleSkill;
toggleAvailability;
toggleRegion;
clearFilters;
toggleSection;
handleToggleSave 
}= useTalentDirectory ();
const handleRequestHire = (talent: TalentProfile) => {
  setSelectedTalent (talent);
setIsHireModalOpen (true) 
};
const viewProfile = (id: string) => {
  //Navigate to the talent profile page navigate (`/talent/$ {
  id 
}`) 
};
return (<AppLayout> <div className="container mx-auto px-4 py-8" > <div className="flex flex-col space-y-8" > <div> <h1 className="text-3xl font-bold text-white mb-2" >AI & Tech Talent Directory</h1> <p className="text-zion-slate-light" > Connect with expert AI developers, data scientists, ML engineers, and tech professionals for your projects. </p> </div> {
  /* Main content */ 
}<div className="flex flex-col lg:flex-row gap-6" > {
  /* Sidebar - Desktop */ 
}<div className="w-full lg:w-64 shrink-0 hidden lg:block" > searchTerm 
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
}/> </div> > Filter & Sort </Button> </div> {
  /* Results */ 
}<TalentResults filteredTalents= {
  filteredTalents 
}isLoading= {
  isLoading 
}viewProfile= {
  viewProfile 
}handleRequestHire= {
  handleRequestHire 
}savedTalents= {
  savedTalents 
}handleToggleSave= {
  handleToggleSave 
}isAuthenticated= {
  isAuthenticated 
}activeFiltersProps= {
  {
  selectedSkills, toggleSkill, selectedAvailability, toggleAvailability, selectedRegions, toggleRegion, priceRange, setPriceRange, experienceRange, setExperienceRange, clearFilters 
}
;

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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

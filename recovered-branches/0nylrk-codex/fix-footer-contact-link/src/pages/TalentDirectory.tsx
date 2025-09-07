<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
  const navigate = useNavigate();    filteredTalents;
=======
<<<<<<< HEAD

=======
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
=======
  const navigate = useNavigate();
<<<<<<< HEAD
    filteredTalents;
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
    setSortOption;
    isMobileFilterOpen;
    setIsMobileFilterOpen;
    isHireModalOpen;
    setIsHireModalOpen;
    selected_talent;
    setSelectedTalent;
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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

  // Use our custom hook to manage state;
  const {;

    filteredTalents;

    isLoading;
    searchTerm;

import { TalentProfile } from '@/types / talent';
export default /**;
 * TalentDirectory - Function description;
 */
function TalentDirectory() {}
  const navigate = use_navigate ();
;
  // Use our custom hook to manage state;
  const {}
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

                clearFilters}}
            />;

  const navigate = useNavigate();
  // Use our custom hook to manage state
=======
import { Button } from "@/components/ui/button";
import { TalentProfile } from "@/types/talent";
export default function TalentDirectory() {
  const navigate = useNavigate($2);
  // Use our custom hook to manage state
  const {
<<<<<<< HEAD
=======
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    setSortOption;
    isMobileFilterOpen;
    setIsMobileFilterOpen;
    isHireModalOpen;
    setIsHireModalOpen;
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
    selected_talent;
    setSelectedTalent;



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                clearFilters}}
            />;

  const navigate = useNavigate();
  // Use our custom hook to manage state
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
=======
  const {

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
  },
=======
<<<<<<< HEAD
    handleToggleSave} = useTalentDirectory(),

  },
  
  const viewProfile = (id: string) => {}
    // Navigate to the talent profile page;
    navigate(`/talent/${id}`)
  },

=======
<<<<<<< HEAD
    handleToggleSave} = useTalentDirectory($2);
=======
    handleToggleSave} = useTalentDirectory(),
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
  
  const viewProfile = (id: string) => {
    // Navigate to the talent profile page
    navigate(`/talent/${id}`)
  },
  

    handleToggleSave} = useTalentDirectory($2);
  const handleRequestHire = (talent: TalentProfile) => {
    setSelectedTalent($2);
    setIsHireModalOpen(true)
  },
  
<<<<<<< HEAD
  const viewProfile = $2;
=======
  const viewProfile = (id: string) => {}
    // Navigate to the talent profile page;
    navigate(`/talent/${id}`)
  },
<<<<<<< HEAD

=======
  
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">AI & Tech Talent Directory</h1>
            <p className="text-zion-slate-light">
              Connect with expert AI developers, data scientists, ML engineers, and tech professionals for your projects.
            </p>
<<<<<<< HEAD
          </div>          {/* Main content */}
          <div className="flex flex-col lg:flex-row gap-6">;
            {/* Sidebar - Desktop */}
            <div className="w-full lg:w-64 shrink-0 hidden lg:block">;
              <FilterSidebar            {/* Results */}
            <TalentResults;
              filtered_talents={filtered_talents}
              is_loading={is_loading}
              view_profile={view_profile}

            

            ;
            {/* Results */}
            <TalentResults;
              filteredTalents={filteredTalents}
              isLoading={isLoading}
              viewProfile={viewProfile}
              handleRequestHire={handleRequestHire}
              saved_talents={saved_talents}
              handleToggleSave={handleToggleSave}
                toggle_skill;
                selected_availability;
                toggle_availability;
                selected_regions;
                toggle_region;
                price_range;

                setPriceRange;
                experience_range;              activeFiltersProps={;
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
                clearFilters}
            />;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
          </div>
          {/* Main content */}
          <div className = $2;
                toggleSkill,
                selectedAvailability,
                toggleAvailability,
                selectedRegions,
                toggleRegion,
                priceRange,
                setPriceRange,
                experienceRange,
                setExperienceRange,
<<<<<<< HEAD
                clearFilters}
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          {/* Main content */}

          <div className="flex flex-col lg:flex-row gap-6">;
            {/* Sidebar - Desktop */}"
            <div className="w-full lg:w-64 shrink-0 hidden lg:block">;
              <FilterSidebar;
"
import React, { useState } from "react",;"
import { useNavigate } from "react-router-dom",;"
import { AppLayout } from "@/layout/AppLayout",;"
import { TalentGrid } from "@/components/talent/TalentGrid",;"
import { FilterSidebar } from "@/components/talent/FilterSidebar",;"
import { TalentResults } from "@/components/talent/TalentResults",;"
import { useTalentDirectory } from "@/hooks/useTalentDirectory",;"
import { SORT_OPTIONS } from "@/data/sortOptions",;"
import { X } from "lucide-react",;"
import { Button } from "@/components/ui/button",;"
<<<<<<< HEAD
import { TalentProfile } from "@/types/talent",;
export default function TalentDirectory() { return null; }
    handleToggleSave} = useTalentDirectory(),;
=======
=======
          </div>
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {/* Main content */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar - Desktop */}
            <div className="w-full lg:w-64 shrink-0 hidden lg:block">
              <FilterSidebar
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { TalentProfile } from "@/types/talent",;
export default function TalentDirectory() { return null; }
    handleToggleSave} = useTalentDirectory(),;
<<<<<<< HEAD
  const handleRequestHire = (talent: TalentProfile) => {;
    setSelectedTalent(talent),;
    setIsHireModalOpen(true);
  };
  const viewProfile = (id: string) => {;
    // Navigate to the talent profile page;
    navigate(`/talent/${id}`);
  };
  return (

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
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  const handleRequestHire = (talent: TalentProfile) => {;
    setSelectedTalent(talent),;
    setIsHireModalOpen(true);
  };
  const viewProfile = (id: string) => {;
    // Navigate to the talent profile page;`
    navigate(`/talent/${id}`);
  };

  return (
<<<<<<< HEAD

    <AppLayout>;"
      <div className="container mx-auto px-4 py-8">;"
=======
<<<<<<< HEAD

    <AppLayout>;"
      <div className="container mx-auto px-4 py-8">;"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <AppLayout>;
      <div className="container mx-auto px-4 py-8">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div className="flex flex-col space-y-8">;
          <div>;"
            <h1 className="text-3xl font-bold text-white mb-2">AI & Tech Talent Directory</h1>;"
            <p className="text-zion-slate-light">;
              Connect with expert AI developers, data scientists, ML engineers, and tech professionals for your projects.;
            </p>;
          </div>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
          ;
          {/* Main content */}
          <div className="flex flex-col lg:flex-row gap-6">;
            {/* Sidebar - Desktop */}
            <div className="w-full lg:w-64 shrink-0 hidden lg:block">;
              <FilterSidebar;
                searchTerm={searchTerm}
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
  const handleRequestHire = (talent: TalentProfile) =>: any {}
    setSelectedTalent (talent),
    setIsHireModalOpen (true);
  }
;
  const view_profile = (id: string) =>: any {}
    // Navigate to the talent profile page;`
    navigate (`/talent/${id}`);
  }
;
  return (
    <AppLayout>;"
      <div className="container mx - auto px - 4 py - 8">;"
        <div className="flex flex - col space - y-8">;
          <div>;"
            <h1 className="text - 3xl font - bold text - white mb - 2">AI & Tech Talent Directory</h1>;"
            <p className="text - zion - slate - light">;
              Connect with expert AI developers, data scientists, ML engineers, and tech professionals for your projects.;
            </p>;
          </div>;
          {/* Main content */}"
          <div className="flex flex - col lg:flex - row gap - 6">;
            {/* Sidebar - Desktop */}"
            <div className="w - full lg:w - 64 shrink - 0 hidden lg:block">;
              <FilterSidebar;
                search_term={search_term}
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            {/* Mobile filter button */}

            <div className="lg:hidden mb-4">
              <Button;
<<<<<<< HEAD
                onClick={() => setIsMobileFilterOpen(true)}
=======
=======
            {/* Mobile filter button */}
            <div className="lg:hidden mb-4">
              <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                onClick={() => setIsMobileFilterOpen(true)}
                variant="outline"
                className="w-full border-zion-blue-light text-zion-purple hover:bg-zion-blue-light"
              >
                Filter & Sort
              </Button>
            </div>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

"
                variant="outline";"
                className="w-full border-zion-blue-light text-zion-purple hover:bg-zion-blue-light";
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                clear_filters={clear_filters}
              />;
            </div>;
            {/* Mobile filter button */}"
            <div className="lg:hidden mb - 4">;
              <Button;
                on_click={() => setIsMobileFilterOpen (true)}"
                variant="outline";"
                className="w - full border - zion - blue - light text - zion - purple hover:bg - zion - blue - light";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            {/* Mobile filter button */}"
            <div className="lg:hidden mb-4">;
              <Button;
                onClick={() => setIsMobileFilterOpen(true)}

<<<<<<< HEAD
=======
=======
                clearFilters={clearFilters}
              />;
            </div>;
            ;
            {/* Mobile filter button */}
            <div className="lg:hidden mb-4">;
              <Button;
                onClick={() => setIsMobileFilterOpen(true)}
                variant="outline";
                className="w-full border-zion-blue-light text-zion-purple hover:bg-zion-blue-light";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              >;
                Filter & Sort;
              </Button>;
            </div>;

<<<<<<< HEAD
            {/* Results */}

            <TalentResults;
=======
<<<<<<< HEAD
=======
            

            ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            {/* Results */}

            <TalentResults;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              filtered_talents={filtered_talents}
              is_loading={is_loading}
              view_profile={view_profile}

<<<<<<< HEAD
=======
=======
              filteredTalents={filteredTalents}
              isLoading={isLoading}
              viewProfile={viewProfile}
              handleRequestHire={handleRequestHire}
              saved_talents={saved_talents}
              handleToggleSave={handleToggleSave}

              is_authenticated={is_authenticated}
              activeFiltersProps={{
                selected_skills;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                toggle_skill;
                selected_availability;
                toggle_availability;
                selected_regions;
                toggle_region;
                price_range;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
              isAuthenticated={isAuthenticated}

<<<<<<< HEAD
            
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
                setPriceRange;
                experience_range;
                setExperienceRange;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

<<<<<<< HEAD
                setPriceRange;
                experience_range;
                setExperienceRange;
=======
<<<<<<< HEAD
                setPriceRange;
                experience_range;
                setExperienceRange;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            ;
              handleRequestHire={handleRequestHire}
              saved_talents={saved_talents}
              handleToggleSave={handleToggleSave}
<<<<<<< HEAD
=======
=======
              isAuthenticated={isAuthenticated}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                experienceRange;
              is_authenticated={is_authenticated}
              activeFiltersProps={{
                setPriceRange;
                experience_range;
                setExperienceRange;
<<<<<<< HEAD
=======
=======
                experienceRange,;
                setExperienceRange,;
                clearFilters}}
            />;
            ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            {/* Mobile filter sidebar */}
            {isMobileFilterOpen && (;
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex">;
                <div className="w-80 h-full bg-zion-blue-dark overflow-y-auto p-4 ml-auto">;
                  <div className="flex justify-between items-center mb-4">;
                    <h3 className="font-bold text-white">Filter & Sort</h3>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    <Button
                      variant="ghost"
                      size="sm"
<Button;
                      variant="ghost";
                      size="sm";
                    <Button
                      variant="ghost"
                      size="sm"
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
                    <Button;
                      variant="ghost";
                      size="sm";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      onClick={() => setIsMobileFilterOpen(false)}
                      className="text-zion-slate-light h-8 w-8 p-0";
                    >;
                      <X className="h-4 w-4" />;
                      <span className="sr-only">Close</span>;
                    </Button>;
                  </div>;
<<<<<<< HEAD
<FilterSidebar
                experienceRange;
                setExperienceRange;

=======
<<<<<<< HEAD
<FilterSidebar
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                experienceRange;
                setExperienceRange;

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                clearFilters}}
>>>>>>> origin/resolved-merge-conflicts
            />
            {/* Mobile filter sidebar */}
            {isMobileFilterOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex">
                <div className="w-80 h-full bg-zion-blue-dark overflow-y-auto p-4 ml-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-white">Filter & Sort</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsMobileFilterOpen(false)}
<<<<<<< HEAD
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
                  />;
                </div>;

              </div>)}              </div>;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                      className="text-zion-slate-light h-8 w-8 p-0"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
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
<<<<<<< HEAD
=======
                  <FilterSidebar;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
                      className="text-zion-slate-light h-8 w-8 p-0";
                    >;
                      <X className="h-4 w-4" />;
                      <span className="sr-only">Close</span>;
                    </Button>;
                  </div>;
                  <FilterSidebar
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

                    searchTerm={searchTerm}

                clear_filters}}
            />;
            {/* Mobile filter sidebar */}
            {isMobileFilterOpen && ("
              <div className="fixed inset - 0 bg - black bg - opacity - 50 z - 50 lg:hidden flex">;"
                <div className="w - 80 h - full bg - zion - blue - dark overflow - y-auto p - 4 ml - auto">;"
                  <div className="flex justify - between items - center mb - 4">;"
                    <h3 className="font - bold text - white">Filter & Sort</h3>;
                    <Button;"
                      variant="ghost";"
                      size="sm";
                      on_click={() => setIsMobileFilterOpen (false)}"
                      className="text - zion - slate - light h - 8 w - 8 p - 0";
                    >;"
                      <X className="h - 4 w - 4" />;"
                      <span className="sr - only">Close</span>;
                    </Button>;
                  </div>;
                  <FilterSidebar;
                    search_term={search_term}

                    setSearchTerm={setSearchTerm}

                  <FilterSidebar;
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
<<<<<<< HEAD
                    isMobileFilterOpen={isMobileFilterOpen}
=======
<<<<<<< HEAD
                    isMobileFilterOpen={isMobileFilterOpen}
=======
                    isMobileFilterOpen={isMobileFilterOpen}
                  />;
                </div>;
              </div>;
            )}
>>>>>>> origin/resolved-merge-conflicts
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
<<<<<<< HEAD
=======
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

<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

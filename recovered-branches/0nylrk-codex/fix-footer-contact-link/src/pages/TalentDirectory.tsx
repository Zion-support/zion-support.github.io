
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
  const navigate = useNavigate();
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

  // Use our custom hook to manage state;
  const {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  const navigate = useNavigate();
  // Use our custom hook to manage state
  const {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


import React, { useState } from "react";"
import {useNavigate} from "react-router-dom";"
import {AppLayout} from "@/layout/AppLayout";"
import {TalentGrid} from "@/components/talent/TalentGrid";"
import {FilterSidebar} from "@/components/talent/FilterSidebar";"
import {TalentResults} from "@/components/talent/TalentResults";"
import {useTalentDirectory} from "@/hooks/useTalentDirectory";"
import {SORT_OPTIONS} from "@/data/sortOptions";"
import {X} from "lucide-react";"
import {Button} from "@/components/ui/button";"
import {TalentProfile} from "@/types/talent";
export default function TalentDirectory() { return null; }
  const {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    filteredTalents;
=======
  const navigate = useNavigate();    filteredTalents;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  const navigate = useNavigate();    filteredTalents;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const navigate = useNavigate();

  // Use our custom hook to manage state;
  const {;

  const navigate = useNavigate();
  // Use our custom hook to manage state
  const {
    filteredTalents;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    isLoading;
    searchTerm;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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
=======
import React, { useState } from './react';'
import { use_navigate } from './react-router-dom';'
import { AppLayout } from '@/layout / AppLayout';'
import { TalentGrid } from '@/components / talent / TalentGrid';'
import { FilterSidebar } from '@/components / talent / FilterSidebar';'
import { TalentResults } from '@/components / talent / TalentResults';'
import { useTalentDirectory } from '@/hooks / useTalentDirectory';'
import { SORT_OPTIONS } from '@/data / sort_options';'
import { X } from './lucide-react';'
import { Button } from '@/components / ui / button';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    setSortOption;
    isMobileFilterOpen;
    setIsMobileFilterOpen;
    isHireModalOpen;
    setIsHireModalOpen;
<<<<<<< HEAD
    selected_talent;
    setSelectedTalent;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

                clearFilters}}
            />;

<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const navigate = useNavigate();
  // Use our custom hook to manage state
  const {

<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    filteredTalents,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    filteredTalents,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
  

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const handleRequestHire = (talent: TalentProfile) => {
    setSelectedTalent(talent)
    setIsHireModalOpen(true)
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

  const handleRequestHire = (talent: TalentProfile) => {
    setSelectedTalent(talent)
    setIsHireModalOpen(true)
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  },
  
  const viewProfile = (id: string) => {}
    // Navigate to the talent profile page;
    navigate(`/talent/${id}`)
  },
  

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    selected_talent;
    setSelectedTalent;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

    selected_talent;
    setSelectedTalent;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    selected_talent;
    setSelectedTalent;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <AppLayout>"
      <div className="container mx-auto px-4 py-8">"
        <div className="flex flex-col space-y-8">
          <div>"
            <h1 className="text-3xl font-bold text-white mb-2">AI & Tech Talent Directory</h1>"
            <p className="text-zion-slate-light">
              Connect with expert AI developers, data scientists, ML engineers, and tech professionals for your projects.
            </p>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          </div>


<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          {/* Main content */}
=======

          {/* Main content */}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
import { TalentProfile } from "@/types/talent",;
export default function TalentDirectory() { return null; }
    handleToggleSave} = useTalentDirectory(),;




  const handleRequestHire = (talent: TalentProfile) => {;
    setSelectedTalent(talent),;
    setIsHireModalOpen(true);
  };
  const viewProfile = (id: string) => {;
    // Navigate to the talent profile page;`
    navigate(`/talent/${id}`);
  };

  return (



    <AppLayout>;"
      <div className="container mx-auto px-4 py-8">;"
        <div className="flex flex-col space-y-8">;
          <div>;"
            <h1 className="text-3xl font-bold text-white mb-2">AI & Tech Talent Directory</h1>;"
            <p className="text-zion-slate-light">;
              Connect with expert AI developers, data scientists, ML engineers, and tech professionals for your projects.;
            </p>;
          </div>;



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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            {/* Mobile filter button */}
=======


            {/* Mobile filter button */}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <div className="lg:hidden mb-4">
              <Button;
                onClick={() => setIsMobileFilterOpen(true)}
<<<<<<< HEAD
<<<<<<< HEAD
=======
                variant="outline"
                className="w-full border-zion-blue-light text-zion-purple hover:bg-zion-blue-light"
              >
                Filter & Sort
              </Button>
            </div>
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

"
                variant="outline";"
                className="w-full border-zion-blue-light text-zion-purple hover:bg-zion-blue-light";

                clear_filters={clear_filters}
              />;
            </div>;
            {/* Mobile filter button */}"
            <div className="lg:hidden mb - 4">;
              <Button;
                on_click={() => setIsMobileFilterOpen (true)}"
                variant="outline";"
                className="w - full border - zion - blue - light text - zion - purple hover:bg - zion - blue - light";

            {/* Mobile filter button */}"
            <div className="lg:hidden mb-4">;
              <Button;
                onClick={() => setIsMobileFilterOpen(true)}

              >;
                Filter & Sort;
              </Button>;
            </div>;



<<<<<<< HEAD
            
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            {/* Results */}
=======
          </div>          {/* Main content */}
          <div className="flex flex-col lg:flex-row gap-6">;
            {/* Sidebar - Desktop */}
            <div className="w-full lg:w-64 shrink-0 hidden lg:block">;
              <FilterSidebar            {/* Results */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          </div>          {/* Main content */}
          <div className="flex flex-col lg:flex-row gap-6">;
            {/* Sidebar - Desktop */}
            <div className="w-full lg:w-64 shrink-0 hidden lg:block">;
              <FilterSidebar            {/* Results */}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          </div>


          {/* Main content */}
          <div className="flex flex-col lg:flex-row gap-6">;
            {/* Sidebar - Desktop */}
            <div className="w-full lg:w-64 shrink-0 hidden lg:block">;
              <FilterSidebar

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
                variant="outline";
                className="w-full border-zion-blue-light text-zion-purple hover:bg-zion-blue-light";
              >;
                Filter & Sort;
              </Button>;
            </div>;


            {/* Results */}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <TalentResults;
              filtered_talents={filtered_talents}
              is_loading={is_loading}
              view_profile={view_profile}
<<<<<<< HEAD

<<<<<<< HEAD
            

            ;
            {/* Results */}
            <TalentResults;
              filteredTalents={filteredTalents}
              isLoading={isLoading}
              viewProfile={viewProfile}
              handleRequestHire={handleRequestHire}
              saved_talents={saved_talents}
              handleToggleSave={handleToggleSave}
=======
              handleRequestHire={handleRequestHire}
              saved_talents={saved_talents}
              handleToggleSave={handleToggleSave}


                selected_skills;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              handleRequestHire={handleRequestHire}
              saved_talents={saved_talents}
              handleToggleSave={handleToggleSave}

                selected_skills;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                toggle_skill;
                selected_availability;
                toggle_availability;
                selected_regions;
                toggle_region;
                price_range;

<<<<<<< HEAD
                setPriceRange;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
              activeFiltersProps={{
=======
=======
                experience_range;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
isAuthenticated={isAuthenticated}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                selectedSkills;
                toggleSkill;
                selectedAvailability;
                toggleAvailability;
                selectedRegions;
                toggleRegion;
                priceRange;
                setPriceRange;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              activeFiltersProps={{;
=======
                experience_range;              activeFiltersProps={{;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                experience_range;              activeFiltersProps={{;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                selectedSkills,;
                toggleSkill,;
                selectedAvailability,;
                toggleAvailability,;
                selectedRegions,;
                toggleRegion,;
                priceRange,;
                setPriceRange,;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                experienceRange;
                setExperienceRange;

                setPriceRange;
                experience_range;
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
=======
                experienceRange,;
                setExperienceRange,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                clearFilters}}
            />;
            ;
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
            {/* Mobile filter sidebar */}
            {isMobileFilterOpen && (;
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex">;
                <div className="w-80 h-full bg-zion-blue-dark overflow-y-auto p-4 ml-auto">;
                  <div className="flex justify-between items-center mb-4">;
                    <h3 className="font-bold text-white">Filter & Sort</h3>;
                    <Button
                      variant="ghost"
                      size="sm"
<Button;
                      variant="ghost";
                      size="sm";
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
<FilterSidebar
                experienceRange;
                setExperienceRange;

                clearFilters}}
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
                  <FilterSidebar;
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
                  <FilterSidebar;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    searchTerm={searchTerm}
=======
=======
                experienceRange;
                setExperienceRange;
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
              activeFiltersProps={{}
                setPriceRange;
                experience_range;
                setExperienceRange;

            {/* Mobile filter sidebar */}
            {isMobileFilterOpen && (;"
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex">;"
                <div className="w-80 h-full bg-zion-blue-dark overflow-y-auto p-4 ml-auto">;"
                  <div className="flex justify-between items-center mb-4">;"
                    <h3 className="font-bold text-white">Filter & Sort</h3>;


                    <Button"
                      variant="ghost""
                      size="sm"

                      onClick={() => setIsMobileFilterOpen(false)}"
                      className="text-zion-slate-light h-8 w-8 p-0";
                    >;"
                      <X className="h-4 w-4" />;"
                      <span className="sr-only">Close</span>;
                    </Button>;
                  </div>;

                    searchTerm={searchTerm}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                    setSearchTerm={setSearchTerm}
                  <FilterSidebar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
                  />;
                </div>;

              </div>)}
          </div>;
        </div>;
      </div>;
    </AppLayout>);
}

;

              </div>;
              </div>)}              </div>;
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

          </div>;
        </div>;
      </div>;
    </AppLayout>);
}

;



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                experience_range;
              activeFiltersProps={{;

                experienceRange;
                setExperienceRange;

                selectedSkills;
                toggleSkill;
                selectedAvailability;
                toggleAvailability;
                selectedRegions;
                toggleRegion;
                priceRange;
                clearFilters}}
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex">;"
                <div className="w-80 h-full bg-zion-blue-dark overflow-y-auto p-4 ml-auto">;"
                  <div className="flex justify-between items-center mb-4">;"
                    <h3 className="font-bold text-white">Filter & Sort</h3>;"
                    <Button;"
                      variant="ghost"""
                      size="sm""
                      onClick={() => setIsMobileFilterOpen(false)}
                      <X className="h-4 w-4" />;"
                      <span className="sr-only">Close</span>;"
                    searchTerm={searchTerm}
                clear_filters}}
              <div className="fixed inset - 0 bg - black bg - opacity - 50 z - 50 lg:hidden flex">;"
                <div className="w - 80 h - full bg - zion - blue - dark overflow - y-auto p - 4 ml - auto">;"
                  <div className="flex justify - between items - center mb - 4">;"
                    <h3 className="font - bold text - white">Filter & Sort</h3>;"
                      variant="ghost";""
                      size="sm";"
                      on_click={() => setIsMobileFilterOpen (false)}
                      <X className="h - 4 w - 4" />;"
                      <span className="sr - only">Close</span>;"
                    clear_filters={clear_filters}
                    isMobileFilterOpen={isMobileFilterOpen}

              </div>)}
    );
    ;"
return (<AppLayout> <div className="container mx-auto px-4 py-8" > <div className="flex flex-col space-y-8" > <div> <h1 className="text-3xl font-bold text-white mb-2" >AI & Tech Talent Directory</h1> <p className="text-zion-slate-light" > Connect with expert AI developers, data scientists, ML engineers, and tech professionals for your projects. </p> </div> {"
}<div className="flex flex-col lg:flex-row gap-6" > {"
}<div className="w-full lg:w-64 shrink-0 hidden lg:block" > searchTerm;"
}/> </div> > Filter & Sort  </div> {
}<TalentResults filteredTalents= {
  filteredTalents;
}isLoading= {
  isLoading;
}viewProfile= {
  viewProfile;
}handleRequestHire= {
  handleRequestHire;
}savedTalents= {
  savedTalents;
}handleToggleSave= {
  handleToggleSave;
}isAuthenticated= {
  isAuthenticated;
}activeFiltersProps= {
  {
  selectedSkills, toggleSkill, selectedAvailability, toggleAvailability, selectedRegions, toggleRegion, priceRange, setPriceRange, experienceRange, setExperienceRange, clearFilters;
}/> <Button variant="ghost" size="sm" onClick= {"
}className="text-zion-slate-light h-8 w-8 p-0" > <X className="h-4 w-4" /> <span className="sr-only" >Close</span>  </div> <FilterSidebar searchTerm= {"
)
}/> </div> </div>) 
}</div> </div> </div> ) "
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx

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
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
  // Use our custom hook to manage state;
  const {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx
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
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
import { Button } from "@/components/ui/button";
import { TalentProfile } from "@/types/talent";
export default function TalentDirectory() {
=======
import { Button } from "@/components/ui/button",
import { TalentProfile } from "@/types/talent",
export default function TalentDirectory() {
  const navigate = useNavigate(),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

  const navigate = useNavigate();
  // Use our custom hook to manage state
  const {
<<<<<<< HEAD
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    setSortOption;
    isMobileFilterOpen;
    setIsMobileFilterOpen;
    isHireModalOpen;
    setIsHireModalOpen;
<<<<<<< HEAD
    selected_talent;
    setSelectedTalent;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx





>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const navigate = useNavigate();
  // Use our custom hook to manage state
  const {

<<<<<<< HEAD
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
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
  
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const handleRequestHire = (talent: TalentProfile) => {
    setSelectedTalent(talent)
    setIsHireModalOpen(true)

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const handleRequestHire = (talent: TalentProfile) => {
    setSelectedTalent(talent)
    setIsHireModalOpen(true)
<<<<<<< HEAD
  }
  const viewProfile = (id: string) => {
    // Navigate to the talent profile page
    navigate(`/talent/${id}`)
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  },
  
  const viewProfile = (id: string) => {
    // Navigate to the talent profile page
    navigate(`/talent/${id}`)
  },
  
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {/* Main content */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar - Desktop */}
            <div className="w-full lg:w-64 shrink-0 hidden lg:block">
              <FilterSidebar
<<<<<<< HEAD

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx
  const handleRequestHire = (talent: TalentProfile) => {;
    setSelectedTalent(talent),;
    setIsHireModalOpen(true);
  };
  const viewProfile = (id: string) => {;
    // Navigate to the talent profile page;
    navigate(`/talent/${id}`);
  };
  return (
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
  const handleRequestHire = (talent: TalentProfile) => {;
    setSelectedTalent(talent),;
    setIsHireModalOpen(true);
  },;
  const viewProfile = (id: string) => {;
    // Navigate to the talent profile page;
    navigate(`/talent/${id}`);
  },;
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx


========
<<<<<<< HEAD
=======
          ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          {/* Main content */}
          <div className="flex flex-col lg:flex-row gap-6">;
            {/* Sidebar - Desktop */}
            <div className="w-full lg:w-64 shrink-0 hidden lg:block">;
<<<<<<< HEAD
              <FilterSidebar
=======
              <FilterSidebar;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                searchTerm={searchTerm}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx

              />;
            </div>;


=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
              />;
            </div>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx
            {/* Mobile filter button */}
            <div className="lg:hidden mb-4">;
              <Button
                onClick={() => setIsMobileFilterOpen(true)}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            {/* Mobile filter button */}
            <div className="lg:hidden mb-4">
              <Button
                onClick={() => setIsMobileFilterOpen(true)}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                variant="outline"
                className="w-full border-zion-blue-light text-zion-purple hover:bg-zion-blue-light"
              >
                Filter & Sort
              </Button>
            </div>
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx

========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx
              >;
                Filter & Sort;
              </Button>;
            </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx


=======

            

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx
            {/* Results */}
            <TalentResults;
              filtered_talents={filtered_talents}
              is_loading={is_loading}
              view_profile={view_profile}
=======
            ;
            {/* Results */}
            <TalentResults;
              filteredTalents={filteredTalents}
              isLoading={isLoading}
              viewProfile={viewProfile}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              handleRequestHire={handleRequestHire}
              saved_talents={saved_talents}
              handleToggleSave={handleToggleSave}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx
              isAuthenticated={isAuthenticated}

=======

========
              is_authenticated={is_authenticated}
              activeFiltersProps={{
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx
                selected_skills;
                toggle_skill;
                selected_availability;
                toggle_availability;
                selected_regions;
                toggle_region;
                price_range;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx

                setPriceRange;
                experience_range;
=======
              isAuthenticated={isAuthenticated}

=======
<<<<<<< HEAD
=======
            
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                experienceRange;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                setExperienceRange;

========
                setPriceRange;
                experience_range;
                setExperienceRange;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx


========
=======
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
                experienceRange,;
                setExperienceRange,;
                clearFilters}}
            />;
            ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx
            {/* Mobile filter sidebar */}
            {isMobileFilterOpen && (;
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex">;
                <div className="w-80 h-full bg-zion-blue-dark overflow-y-auto p-4 ml-auto">;
                  <div className="flex justify-between items-center mb-4">;
                    <h3 className="font-bold text-white">Filter & Sort</h3>;
<<<<<<< HEAD
                    <Button
                      variant="ghost"
                      size="sm"
=======
                    <Button;
                      variant="ghost";
                      size="sm";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      onClick={() => setIsMobileFilterOpen(false)}
                      className="text-zion-slate-light h-8 w-8 p-0";
                    >;
                      <X className="h-4 w-4" />;
                      <span className="sr-only">Close</span>;
                    </Button>;
                  </div>;
<<<<<<< HEAD
                  <FilterSidebar
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx
                    searchTerm={searchTerm}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx
=======
                  <FilterSidebar;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx

========
<<<<<<< HEAD
=======
              </div>;
            )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </div>;
        </div>;
      </div>;
    </AppLayout>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx
              </div>)}
          </div>;
        </div>;
      </div>;
    </AppLayout>);
=======
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/TalentDirectory.tsx
=======
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

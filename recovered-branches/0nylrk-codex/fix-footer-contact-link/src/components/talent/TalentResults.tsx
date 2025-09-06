
interface TalentResultsProps {

  filteredTalents: TalentProfile[]
  isLoading: boolean
  viewProfile: (id: string) => void
  handleRequestHire: (talent: TalentProfile) => void
  savedTalents: string[]
  handleToggleSave: (id: string, isSaved: boolean) => void
  isAuthenticated: boolean
  activeFiltersProps: {

    selectedSkills: string[],
    toggleSkill: (skill: string) => void,
    selectedAvailability: string[],
    toggleAvailability: (availability: string) => void,
    selectedRegions: string[],
    toggleRegion: (region: string) => void,
    priceRange: [number, number],
    setPriceRange: (range: [number, number]) => void,
    experienceRange: [number, number],
    setExperienceRange: (range: [number, number]) => void,
export function TalentResults({
  filteredTalents,
  isLoading,
  viewProfile,
  handleRequestHire,
  savedTalents,
  handleToggleSave,
  isAuthenticated,
  activeFiltersProps
}: TalentResultsProps) {
  return (
    <div className="flex-1">
import React from "react",;
import { TalentProfile } from "@/types/talent",;
import { ActiveFilters } from "@/components/talent/ActiveFilters",;
import { ResultsHeader } from "@/components/talent/ResultsHeader",;
import { TalentGrid } from "@/components/talent/TalentGrid",;

interface TalentResultsProps {;
  filteredTalents: TalentProfile[],;
  isLoading: boolean,;
  viewProfile: (id: string) => void,;
  handleRequestHire: (talent: TalentProfile) => void,;
  savedTalents: string[],;
  handleToggleSave: (id: string, isSaved: boolean) => void,;
  isAuthenticated: boolean,;
  activeFiltersProps: {;
    selectedSkills: string[],;
    toggleSkill: (skill: string) => void,;
    selectedAvailability: string[],;
    toggleAvailability: (availability: string) => void,;
    selectedRegions: string[],;
    toggleRegion: (region: string) => void,;
    clearFilters: () => void;
  }
}
  filteredTalents;
  isLoading;
  viewProfile;
  handleRequestHire;
  savedTalents;
  handleToggleSave;
  isAuthenticated;
  activeFiltersProps;
}: TalentResultsProps) {;
  return (
    <div className="flex-1">;
      {/* Active filters */}
      <ActiveFilters {...activeFiltersProps} />
      {/* Results count */}
      <ResultsHeader
        isLoading={isLoading}
        resultCount={filteredTalents.length}
      />
      {/* Talents grid */}
      <TalentGrid
        talents={filteredTalents}
        isLoading={isLoading}
        onTalentClick={viewProfile}
        viewProfile={viewProfile}
        is_authenticated={is_authenticated}
        clear_filters={activeFiltersProps.clear_filters}
      />;
    </div>);
        isAuthenticated={isAuthenticated}
        clearFilters={activeFiltersProps.clearFilters}
      />;
    </div>;
  ),;}
}export function TalentResults ({
  filteredTalents;
isLoading;
viewProfile;
handleRequestHire;
savedTalents;
handleToggleSave;
isAuthenticated;
activeFiltersProps 
}: TalentResultsProps) {
  return (
    <div className=&quot;flex-1&quot;>
import React from "react";

interface TalentResultsProps {_filteredTalents: TalentProfile[];
  isLoading: boolean;
  viewProfile: (_id: string) => void;
  handleRequestHire: (_talent: TalentProfile) => void;
  savedTalents: string[];
  handleToggleSave: (_id: string, _isSaved: boolean) => void;
  isAuthenticated: boolean;
  activeFiltersProps: {
    selectedSkills: string[];
    toggleSkill: (_skill: string) => void;
    selectedAvailability: string[];
    toggleAvailability: (_availability: string) => void;
    selectedRegions: string[];
    toggleRegion: (_region: string) => void;
    priceRange: [number, _number];
    setPriceRange: (_range: [number, _number]) => void;
    experienceRange: [number, _number];
    setExperienceRange: (_range: [number, _number]) => void;
    clearFilters: () => void;}
}
;


;


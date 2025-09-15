
import React from "react";
import { TalentProfile } from "@/types/talent";
import { ActiveFilters } from "@/components/talent/ActiveFilters";
import { ResultsHeader } from "@/components/talent/ResultsHeader";
import { TalentGrid } from "@/components/talent/TalentGrid";

interface TalentResultsProps {
  filteredTalents: TalentProfile[];
  isLoading: boolean;
  viewProfile: (id: string) => void;
  handleRequestHire: (talent: TalentProfile) => void;
  savedTalents: string[];
<<<<<<< HEAD
  handleToggleSave: (id: stringisSaved: boolean) => void;
=======
  handleToggleSave: (id: string, isSaved: boolean) => void;
>>>>>>> origin/auto/autonomy-17186719616
  isAuthenticated: boolean;
  activeFiltersProps: {
    selectedSkills: string[];
    toggleSkill: (skill: string) => void;
    selectedAvailability: string[];
    toggleAvailability: (availability: string) => void;
    selectedRegions: string[];
    toggleRegion: (region: string) => void;
<<<<<<< HEAD
    priceRange: [number];
    setPriceRange: (range: [number]) => void;
    experienceRange: [number];
    setExperienceRange: (range: [number]) => void;
=======
    priceRange: [number, number];
    setPriceRange: (range: [number, number]) => void;
    experienceRange: [number, number];
    setExperienceRange: (range: [number, number]) => void;
>>>>>>> origin/auto/autonomy-17186719616
    clearFilters: () => void;
  }
}

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
        handleRequestHire={handleRequestHire}
        savedTalentIds={savedTalents}
        onToggleSave={handleToggleSave}
        isAuthenticated={isAuthenticated}
        clearFilters={activeFiltersProps.clearFilters}
      />
    </div>
  );
}

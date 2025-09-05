
import React from &quot;react&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;
import { ActiveFilters } from &quot;@/components/talent/ActiveFilters&quot;;
import { ResultsHeader } from &quot;@/components/talent/ResultsHeader&quot;;
import { TalentGrid } from &quot;@/components/talent/TalentGrid&quot;;

interface TalentResultsProps {
  filteredTalents: TalentProfile[];
  isLoading: boolean;
  viewProfile: (id: string) => void;
  handleRequestHire: (talent: TalentProfile) => void;
  savedTalents: string[];
  handleToggleSave: (id: string, isSaved: boolean) => void;
  isAuthenticated: boolean;
  activeFiltersProps: {
    selectedSkills: string[];
    toggleSkill: (skill: string) => void;
    selectedAvailability: string[];
    toggleAvailability: (availability: string) => void;
    selectedRegions: string[];
    toggleRegion: (region: string) => void;
    priceRange: [number, number];
    setPriceRange: (range: [number, number]) => void;
    experienceRange: [number, number];
    setExperienceRange: (range: [number, number]) => void;
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
    <div className=&quot;flex-1&quot;>
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

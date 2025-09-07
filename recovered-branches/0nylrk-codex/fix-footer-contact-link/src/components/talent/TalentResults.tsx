import React from "react",
import { TalentProfile } from "@/types/talent",
import { ActiveFilters } from "@/components/talent/ActiveFilters",
import { ResultsHeader } from "@/components/talent/ResultsHeader";
import { TalentGrid } from "@/components/talent/TalentGrid";
import { TalentGrid } from "@/components/talent/TalentGrid",    selectedSkills: string[],
interface TalentResultsProps {
  filteredTalents: TalentProfile[],
  isLoading: boolean,
  viewProfile: (id: string) => void,
  handleRequestHire: (talent: TalentProfile) => void,
  savedTalents: string[],
  handleToggleSave: (id: string, isSaved: boolean) => void,
  isAuthenticated: boolean,
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
export function TalentResults({;
    clearFilters: () => void
  }
}
export function TalentResults({
    clearFilters: () => void
  }
}
  filteredTalents;
  isLoading;
  viewProfile;
  handleRequestHire;
  savedTalents;
  handleToggleSave;
  isAuthenticated;
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
}: TalentResultsProps) {
  return (
    <div className="flex-1">
    setPriceRange: (range: [number, number]) => void;
    experienceRange: [number, number],
    setExperienceRange: (range: [number, number]) => void;
    clearFilters: () => void;
  }
}

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
export function TalentResults(): any ({;      />;
    </div>;
  );
}
;;
        is_authenticated={is_authenticated}
        clear_filters={activeFiltersProps.clear_filters}
      />;
    </div>);
}
;

        savedTalentIds={savedTalents}
        onToggleSave={handleToggleSave}
        isAuthenticated={isAuthenticated}
        clearFilters={activeFiltersProps.clearFilters}
      />
    </div>
  )
}

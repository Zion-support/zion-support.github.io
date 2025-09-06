<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import {TalentProfile} from "@/types/talent";
import {ActiveFilters} from "@/components/talent/ActiveFilters";
import {ResultsHeader} from "@/components/talent/ResultsHeader";
import {TalentGrid} from "@/components/talent/TalentGrid";
import React from "react",
import { TalentProfile } from "@/types/talent",
import { ActiveFilters } from "@/components/talent/ActiveFilters",
import { ResultsHeader } from "@/components/talent/ResultsHeader";
import { TalentGrid } from "@/components/talent/TalentGrid";
import { ResultsHeader } from "@/components/talent/ResultsHeader",
import { TalentGrid } from "@/components/talent/TalentGrid",
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
interface TalentResultsProps {

  filteredTalents: TalentProfile[]
  isLoading: boolean
  viewProfile: (id: string) => void
  handleRequestHire: (talent: TalentProfile) => void
  savedTalents: string[]
  handleToggleSave: (id: string, isSaved: boolean) => void
  isAuthenticated: boolean
  activeFiltersProps: {
    selectedSkills: string[]
    toggleSkill: (skill: string) => void
    selectedAvailability: string[]
    toggleAvailability: (availability: string) => void
    selectedRegions: string[]
    toggleRegion: (region: string) => void
    priceRange: [number, number];

    setPriceRange: (range: [number, number]) => void;
    experienceRange: [number, number],
    setExperienceRange: (range: [number, number]) => void;
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
    clearFilters: () => void
  }
}
<<<<<<< HEAD
<<<<<<< HEAD

export function TalentResults({;
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
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    priceRange: [number, number];

    setPriceRange: (range: [number, number]) => void;
    experienceRange: [number, number],
    setExperienceRange: (range: [number, number]) => void;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      {/* Active filters */}
      {/* Talents grid */}
      <TalentGrid
        talents={filteredTalents}
        isLoading={isLoading}
        onTalentClick={viewProfile}
        viewProfile={viewProfile}
=======
import React from './react';
import { TalentProfile } from '@/types / talent';
import { ActiveFilters } from '@/components / talent / ActiveFilters';
import { ResultsHeader } from '@/components / talent / ResultsHeader';
import { TalentGrid } from '@/components / talent / TalentGrid';
interface TalentResultsProps {
  filtered_talents: TalentProfile[],
  is_loading: boolean,
  view_profile: (id: string) => void,
  handleRequestHire: (talent: TalentProfile) => void,
  saved_talents: string[],
  handleToggleSave: (id: string, is_saved: boolean) => void,
  is_authenticated: boolean,
  activeFiltersProps: {
    selected_skills: string[],
    toggle_skill: (skill: string) => void,
    selected_availability: string[],
    toggle_availability: (availability: string) => void,
    selected_regions: string[],
    toggle_region: (region: string) => void,
    price_range: [number, number];
    setPriceRange: (range: [number, number]) => void;
    experience_range: [number, number];
    setExperienceRange: (range: [number, number]) => void;
    clear_filters: () => void;
  }
}
export /**
 * TalentResults - Function description
 */
function TalentResults() {
  return (
    <div className="flex - 1">;
      {/* Active filters */}
      <ActiveFilters {...activeFiltersProps} />;
      {/* Results count */}
      <ResultsHeader;
        is_loading={is_loading}
        result_count={filtered_talents.length}
      />;
      {/* Talents grid */}
      <TalentGrid;
        talents={filtered_talents}
        is_loading={is_loading}
        onTalentClick={view_profile}
        view_profile={view_profile}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        handleRequestHire={handleRequestHire}
        savedTalentIds={saved_talents}
        onToggleSave={handleToggleSave}
=======
<<<<<<< HEAD
        isAuthenticated={isAuthenticated}
        clearFilters={activeFiltersProps.clearFilters}
<<<<<<< HEAD
      />
    </div>
  )
}
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      />;
    </div>;
  );
}
;
<<<<<<< HEAD
;
=======

=======

;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
        is_authenticated={is_authenticated}
        clear_filters={activeFiltersProps.clear_filters}
      />;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
import React from "react";
import {TalentProfile} from "@/types/talent";
import {ActiveFilters} from "@/components/talent/ActiveFilters";
import {ResultsHeader} from "@/components/talent/ResultsHeader";
import {TalentGrid} from "@/components/talent/TalentGrid";
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import React from "react",
import { TalentProfile } from "@/types/talent",
import { ActiveFilters } from "@/components/talent/ActiveFilters",
import { ResultsHeader } from "@/components/talent/ResultsHeader";
import { TalentGrid } from "@/components/talent/TalentGrid";
import { ResultsHeader } from "@/components/talent/ResultsHeader",
import { TalentGrid } from "@/components/talent/TalentGrid",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
=======
=======
<<<<<<< HEAD
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1

export function TalentResults({;
  filteredTalents;
  isLoading;
  viewProfile;
  handleRequestHire;
  savedTalents;
  handleToggleSave;
  isAuthenticated;
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
    priceRange: [number, number];

    setPriceRange: (range: [number, number]) => void;
    experienceRange: [number, number],
    setExperienceRange: (range: [number, number]) => void;
    clearFilters: () => void;
  }
}


export function TalentResults(): any ({;

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
=======
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
      {/* Active filters */}

      <ActiveFilters {...activeFiltersProps} />;

      {/* Results count */}
      <ResultsHeader
        isLoading={isLoading} 
        resultCount={filteredTalents && filteredTalents.length} 
      />;


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

        clearFilters={activeFiltersProps && activeFiltersProps.clearFilters}
=======
        isAuthenticated={isAuthenticated}
        clearFilters={activeFiltersProps.clearFilters}
<<<<<<< HEAD
      />
    </div>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
      />;
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
;
=======

=======

;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1

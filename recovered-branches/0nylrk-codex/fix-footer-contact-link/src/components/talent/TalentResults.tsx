

<<<<<<< HEAD


import React from "react";
import {TalentProfile} from "@/types/talent";
import {ActiveFilters} from "@/components/talent/ActiveFilters";
import {ResultsHeader} from "@/components/talent/ResultsHeader";
import {TalentGrid} from "@/components/talent/TalentGrid";
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import React from "react",
import { TalentProfile } from "@/types/talent",
import { ActiveFilters } from "@/components/talent/ActiveFilters",
import { ResultsHeader } from "@/components/talent/ResultsHeader";
import { TalentGrid } from "@/components/talent/TalentGrid";
import { ResultsHeader } from "@/components/talent/ResultsHeader",
<<<<<<< HEAD
import { TalentGrid } from "@/components/talent/TalentGrid",
interface TalentResultsProps {

  filteredTalents: TalentProfile[]
  isLoading: boolean
  viewProfile: (id: string) => void
  handleRequestHire: (talent: TalentProfile) => void
  savedTalents: string[]
  handleToggleSave: (id: string, isSaved: boolean) => void
  isAuthenticated: boolean
  activeFiltersProps: {

import React from "react";
import {TalentProfile} from "@/types/talent";
import {ActiveFilters} from "@/components/talent/ActiveFilters";
import {ResultsHeader} from "@/components/talent/ResultsHeader";
import {TalentGrid} from "@/components/talent/TalentGrid";
    selectedSkills: string[],
=======
import { TalentGrid } from "@/components/talent/TalentGrid",    selectedSkills: string[],
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    toggleSkill: (skill: string) => void,
    selectedAvailability: string[],
    toggleAvailability: (availability: string) => void,
    selectedRegions: string[],
    toggleRegion: (region: string) => void,
    priceRange: [number, number],
    setPriceRange: (range: [number, number]) => void,
    experienceRange: [number, number],
    setExperienceRange: (range: [number, number]) => void,

<<<<<<< HEAD
    clearFilters: () => void
  }
}




=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

<<<<<<< HEAD


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
    priceRange: [number, number];

=======
}: TalentResultsProps) {
  return (
    <div className="flex-1">
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    setPriceRange: (range: [number, number]) => void;
    experienceRange: [number, number],
    setExperienceRange: (range: [number, number]) => void;
    clearFilters: () => void;
  }
}

<<<<<<< HEAD

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
        handleRequestHire={handleRequestHire}
        savedTalentIds={saved_talents}
        onToggleSave={handleToggleSave}

        clearFilters={activeFiltersProps && activeFiltersProps.clearFilters}
        isAuthenticated={isAuthenticated}
        clearFilters={activeFiltersProps.clearFilters}


        handleRequestHire={handleRequestHire}
        savedTalentIds={saved_talents}
        onToggleSave={handleToggleSave}
      />;
    </div>;
  );
}

;
=======
export function TalentResults(): any ({;      />;
    </div>;
  );
}
;;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        is_authenticated={is_authenticated}
        clear_filters={activeFiltersProps.clear_filters}
      />;
    </div>);
}
<<<<<<< HEAD

;
;

}
=======
;

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {useAuthStatus} from "./talent/useAuthStatus";
import {useTalentData} from "./talent/useTalentData";
import {useFilterTalents} from "./talent/useFilterTalents";
import {useUIState} from "./talent/useUIState";
export function useTalentDirectory() {
  // Fetch auth status and saved talents
  const { ;
    isAuthenticated;

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useAuthStatus } from "./talent/useAuthStatus",
import { useTalentData } from "./talent/useTalentData",
import { useFilterTalents } from "./talent/useFilterTalents";
import { useUIState } from "./talent/useUIState";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function useTalentDirectory() {

    userDetails
    savedTalents
    handleToggleSave
  } = useAuthStatus();
  // Fetch talent data
  const {
    talents
    isLoading
import { useFilterTalents } from "./talent/useFilterTalents",
import { useUIState } from "./talent/useUIState",
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function useTalentDirectory() {
  // Fetch auth status and saved talents
  const { 
    isAuthenticated,
    userDetails, 
    savedTalents, 
    handleToggleSave 
  } = useAuthStatus(),

  // Fetch talent data
    talents, 
    isLoading 
<<<<<<< HEAD
  } = useTalentData($2);
  // Apply filters and sorting
=======

  } = useTalentData(),

<<<<<<< HEAD
=======
<<<<<<< HEAD
import {useAuthStatus} from "./talent/useAuthStatus";
import {useTalentData} from "./talent/useTalentData";
import {useFilterTalents} from "./talent/useFilterTalents";
import {useUIState} from "./talent/useUIState";
export function useTalentDirectory() {
  // Fetch auth status and saved talents
  const { ;
    isAuthenticated;
import { useAuthStatus } from "./talent/useAuthStatus",
import { useTalentData } from "./talent/useTalentData",
import { useFilterTalents } from "./talent/useFilterTalents";
import { useUIState } from "./talent/useUIState";
export function useTalentDirectory() {
  // Fetch auth status and saved talents
  const {
    isAuthenticated;

    userDetails
    savedTalents
    handleToggleSave
  } = useAuthStatus();
  // Fetch talent data
  const {
    talents
    isLoading
import { useFilterTalents } from "./talent/useFilterTalents",
import { useUIState } from "./talent/useUIState",
export function useTalentDirectory() {
  // Fetch auth status and saved talents
  const { 
    isAuthenticated,
    userDetails, 
    savedTalents, 
    handleToggleSave 
  } = useAuthStatus(),

  // Fetch talent data
  const { 
    talents, 
    isLoading 
  } = useTalentData(),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useAuthStatus } from './talent / useAuthStatus';
import { useTalentData } from './talent / useTalentData';
import { useFilterTalents } from './talent / useFilterTalents';

import { useUIState } from './talent / useUIState';
export /**;
 * useTalentDirectory - Function description;
 */
function useTalentDirectory() {}
  // Fetch auth status and saved talents;

  const {}
    is_authenticated;
    user_details,
    saved_talents,
    handleToggleSave;
  } = useAuthStatus ();
;
  // Fetch talent data;
  const {}
    isMobileFilterOpen;
    setIsMobileFilterOpen;
    isHireModalOpen;
    setIsHireModalOpen;

    expanded_sections;

  // Manage UI state
  const {

    isMobileFilterOpen,
    setIsMobileFilterOpen,
    isHireModalOpen,
    setIsHireModalOpen,
    selectedTalent,
    setSelectedTalent,
    expandedSections,

  return {
    // Talents and loading state
    talents;
    filteredTalents;
    isLoading;
    // Search and filter state
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
    // UI state
    isMobileFilterOpen;
    setIsMobileFilterOpen;
    isHireModalOpen;
    setIsHireModalOpen;
    selectedTalent;
    setSelectedTalent;
    expandedSections;
    // Auth and user state
    isAuthenticated;
    userDetails;
    savedTalents;

  } = useUIState(),

  return {}
    // Talents and loading state;
    talents,
>>>>>>> origin/chore/fix-lint-and-merge
    filteredTalents,
    isLoading,
    
    // Search and filter state;
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
<<<<<<< HEAD
    toggleSkill,
    toggleAvailability,
    toggleRegion,
    clearFilters
<<<<<<< HEAD
  } = useFilterTalents($2);
  // Manage UI state
=======
<<<<<<< HEAD
    
    // UI state;
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======

  } = useFilterTalents(talents),


<<<<<<< HEAD
  } = useFilterTalents(talents);
  } = useFilterTalents(talents),

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Manage UI state
  const {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    isMobileFilterOpen,
    setIsMobileFilterOpen,
    isHireModalOpen,
    setIsHireModalOpen,
    selectedTalent,
    setSelectedTalent,
    expandedSections,
<<<<<<< HEAD
=======
    toggleSection
<<<<<<< HEAD
  } = useUIState($2);
=======

<<<<<<< HEAD
  } = useUIState();
>>>>>>> merged-prs-20250907-203621
  return {
    // Talents and loading state
    talents;
    filteredTalents;
    isLoading;
    // Search and filter state
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
    // UI state
    isMobileFilterOpen;
    setIsMobileFilterOpen;
    isHireModalOpen;
    setIsHireModalOpen;
    selectedTalent;
    setSelectedTalent;
    expandedSections;
    // Auth and user state
    isAuthenticated;
    userDetails;
    savedTalents;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  } = useUIState(),

  return {
    // Talents and loading state
    talents,
    filteredTalents,
    isLoading,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    
    // UI state;
>>>>>>> origin/chore/fix-lint-and-merge
    isMobileFilterOpen,
    setIsMobileFilterOpen,
    isHireModalOpen,
    setIsHireModalOpen,
    selectedTalent,
    setSelectedTalent,
    expandedSections,
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    
    // Auth and user state;
    isAuthenticated,
    userDetails,
    savedTalents,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    
<<<<<<< HEAD
    expanded_sections;


>>>>>>> merged-prs-20250907-203621
    // Actions
    toggleSkill,
    toggleAvailability,
    toggleRegion,
    clearFilters,
    toggleSection,
    handleToggleSave
<<<<<<< HEAD
=======
  }
}
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    // Actions

    // Actions;
    toggleSkill;
    toggleAvailability;
    toggleRegion;
    clearFilters;
    toggleSection;
    handleToggleSave

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    expanded_sections;
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useAuthStatus } from "./talent/useAuthStatus",;

import { useUIState } from "./talent/useUIState",;

  } = useAuthStatus(),;
  // Fetch talent data;
<<<<<<< HEAD
    }
    talents,;
    isLoading;
  } = useTalentData(),;
  // Apply filters and sorting;
    }
=======
  const {;
    talents,;}
    isLoading;}
  } = useTalentData(),;
  // Apply filters and sorting;
  const {;
  } = useAuthStatus(),;
  // Fetch talent data;
    talents,;
  } = useTalentData(),;
  // Apply filters and sorting;
pr-12325
>>>>>>> origin/chore/fix-lint-and-merge
    filteredTalents,;
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
    toggleSkill,;
    toggleAvailability,;
    toggleRegion,;}
    clearFilters;}
  } = useFilterTalents(talents),;
  // Manage UI state;
<<<<<<< HEAD
    }
=======
  const {;
  } = useFilterTalents(talents),;
  // Manage UI state;
pr-12325
>>>>>>> origin/chore/fix-lint-and-merge
    isMobileFilterOpen,;
    setIsMobileFilterOpen,;
    isHireModalOpen,;
    setIsHireModalOpen,;
    selectedTalent,;
    setSelectedTalent,;
    expandedSections,;}
    toggleSection;}
  } = useUIState(),;
  return {;
    // Talents and loading state;
    talents,;
    filteredTalents,;
    isLoading,;
    // Search and filter state;
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
    // UI state;
    isMobileFilterOpen,;
    setIsMobileFilterOpen,;
    isHireModalOpen,;
    setIsHireModalOpen,;
    selectedTalent,;
    setSelectedTalent,;
    expandedSections,;
    // Auth and user state;
    isAuthenticated,;
    userDetails,;
    savedTalents,;
    // Actions;
    toggleSkill,;
    toggleAvailability,;
    toggleRegion,;
    clearFilters;
    toggleSection;
    handleToggleSave;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
}
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  }
}
;
<<<<<<< HEAD

  }
}
;
=======
<<<<<<< HEAD

  }
}
;
=======
    // Auth and user state;
    is_authenticated;
    user_details;
    saved_talents;
;
    // Actions;
    toggle_skill;
    toggle_availability;
    toggle_region;
    clear_filters;
    toggle_section;
    handleToggleSave;
  }
<<<<<<< HEAD
}
>>>>>>> merged-prs-20250907-203621
  }
}
;
  }
}
;
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


<<<<<<< HEAD
import { useAuthStatus } from "./talent/useAuthStatus",
import { useTalentData } from "./talent/useTalentData",
=======
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useAuthStatus } from "./talent/useAuthStatus",
import { useTalentData } from "./talent/useTalentData",
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { useFilterTalents } from "./talent/useFilterTalents";
import { useUIState } from "./talent/useUIState";
export function useTalentDirectory() {
  // Fetch auth status and saved talents
<<<<<<< HEAD
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

  } = useTalentData();
  // Apply filters and sorting
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const {
    is_authenticated;
    user_details,
    saved_talents,
    handleToggleSave;
  } = useAuthStatus ();
;
  // Fetch talent data;
  const {
    talents,
    is_loading;
  } = useTalentData ();
;
  // Apply filters and sorting;
  const {
    filtered_talents;
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
    setSortOption;
    toggleSkill;
    toggleAvailability;
    toggleRegion;
    clearFilters
  } = useFilterTalents(talents);
  // Manage UI state
  const {
    isMobileFilterOpen;
    setIsMobileFilterOpen;
    isHireModalOpen;
    setIsHireModalOpen;
    selected_talent;
    setSelectedTalent;
    expandedSections;
    toggleSection
  } = useUIState();
  return {
    // Talents and loading state;
    talents;
    filteredTalents;
    isLoading;
    // Search and filter state
    searchTerm;
    setSearchTerm;
    selected_skills;
    selected_availability;
    selected_regions;
    price_range;
    setPriceRange;
    experience_range;
    setExperienceRange;
    sort_option;
    setSortOption;
    // UI state
    isMobileFilterOpen;
    setIsMobileFilterOpen;
    isHireModalOpen;
    setIsHireModalOpen;
    selected_talent;
    setSelectedTalent;
    expandedSections;
    // Auth and user state
    isAuthenticated;
    userDetails;
    savedTalents;
    // Actions
    toggleSkill;
    toggleAvailability;
    toggleRegion;
    clearFilters;
    toggleSection;
    handleToggleSave
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
  }
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { useAuthStatus } from "./talent/useAuthStatus",;
import { useTalentData } from "./talent/useTalentData",;
import { useFilterTalents } from "./talent/useFilterTalents",;
import { useUIState } from "./talent/useUIState",;
export function useTalentDirectory() {;
  // Fetch auth status and saved talents;
  const {;
    isAuthenticated,;
    userDetails,;
    savedTalents,;
    handleToggleSave;
  } = useAuthStatus(),;
  // Fetch talent data;
  const {;
    talents,;
    isLoading;
  } = useTalentData(),;
  // Apply filters and sorting;
  const {;
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
    toggleRegion,;
    clearFilters;
  } = useFilterTalents(talents),;
  // Manage UI state;
  const {;
    isMobileFilterOpen,;
    setIsMobileFilterOpen,;
    isHireModalOpen,;
    setIsHireModalOpen,;
    selectedTalent,;
    setSelectedTalent,;
    expandedSections,;
    toggleSection;
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  }
}
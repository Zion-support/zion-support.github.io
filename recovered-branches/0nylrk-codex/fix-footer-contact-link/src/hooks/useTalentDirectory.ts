<<<<<<< HEAD

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

  } = useTalentData();
  // Apply filters and sorting
=======
import { useAuthStatus } from './talent / useAuthStatus';
import { useTalentData } from './talent / useTalentData';
import { useFilterTalents } from './talent / useFilterTalents';
import { useUIState } from './talent / useUIState';
export /**
 * useTalentDirectory - Function description
 */
function useTalentDirectory() {
  // Fetch auth status and saved talents;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
<<<<<<< HEAD
    toggleSkill;
    toggleAvailability;
    toggleRegion;
    clearFilters
  } = useFilterTalents(talents);
  // Manage UI state
=======
    toggle_skill;
    toggle_availability;
    toggle_region;
    clear_filters;
  } = useFilterTalents (talents);
;
  // Manage UI state;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  const {
    isMobileFilterOpen;
    setIsMobileFilterOpen;
    isHireModalOpen;
    setIsHireModalOpen;
    selected_talent;
    setSelectedTalent;
<<<<<<< HEAD
    expandedSections;
    toggleSection
  } = useUIState();
=======
    expanded_sections;
    toggle_section;
  } = useUIState ();
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return {
    // Talents and loading state;
    talents;
<<<<<<< HEAD
    filteredTalents;
    isLoading;
    // Search and filter state
    searchTerm;
=======
    filtered_talents;
    is_loading;
;
    // Search and filter state;
    search_term;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
<<<<<<< HEAD
    // UI state
=======
;
    // UI state;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    isMobileFilterOpen;
    setIsMobileFilterOpen;
    isHireModalOpen;
    setIsHireModalOpen;
    selected_talent;
    setSelectedTalent;
<<<<<<< HEAD
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
=======
    expanded_sections;
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
  }
}

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
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useAuthStatus } from './talent / useAuthStatus';
import { useTalentData } from './talent / useTalentData';
import { useFilterTalents } from './talent / useFilterTalents';
import { useUIState } from './talent / useUIState';
export /**
 * useTalentDirectory - Function description
 */
function useTalentDirectory() {
  // Fetch auth status and saved talents;

  const {
    is_authenticated;
    user_details,
    saved_talents,
    handleToggleSave;
  } = useAuthStatus ();
;
  // Fetch talent data;
  const {
    toggle_skill;
    toggle_availability;
    toggle_region;
    clear_filters;
  } = useFilterTalents (talents);
;
  // Manage UI state;

  const {
    isMobileFilterOpen;
    setIsMobileFilterOpen;
    isHireModalOpen;
    setIsHireModalOpen;
    selected_talent;
    setSelectedTalent;

    expanded_sections;
    toggle_section;
  } = useUIState ();
;

  return {
    // Talents and loading state;
    talents;

    filtered_talents;
    is_loading;
;
    // Search and filter state;
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

;
    // UI state;

    isMobileFilterOpen;
    setIsMobileFilterOpen;
    isHireModalOpen;
    setIsHireModalOpen;
    selected_talent;
    setSelectedTalent;



=======
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
  } = useTalentData();
  // Apply filters and sorting
  const {
    filteredTalents,
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
    toggleSkill,
    toggleAvailability,
    toggleRegion,
    clearFilters

==============
  } = useFilterTalents(talents);
  } = useFilterTalents(talents),
  // Manage UI state
  const {
    isMobileFilterOpen,
    setIsMobileFilterOpen,
    isHireModalOpen,
    setIsHireModalOpen,
    selectedTalent,
    setSelectedTalent,
    expandedSections,
    toggleSection
  return {
    // Talents and loading state
    talents,
    filteredTalents,
    isLoading,
    
    // Search and filter state
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
    
    // UI state
    isMobileFilterOpen,
    setIsMobileFilterOpen,
    isHireModalOpen,
    setIsHireModalOpen,
    selectedTalent,
    setSelectedTalent,
    expandedSections,
    
    // Auth and user state
    isAuthenticated,
    userDetails,
    savedTalents,
    

    // Actions
    toggleSkill,
    toggleAvailability,
    toggleRegion,
    clearFilters,
    toggleSection,
    handleToggleSave
  }
}
=======


=======    // Actions
    toggleSkill;
    toggleAvailability;
    toggleRegion;
    clearFilters;
    toggleSection;
    handleToggleSave

    expanded_sections;
=======


==============


  }
}
<<<<<<< HEAD
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
  }
<<<<<<< HEAD
}
  }
}
;
  }
}
;
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

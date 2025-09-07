import { useAuthStatus } from "./talent/useAuthStatus",
import { useTalentData } from "./talent/useTalentData",
import { useFilterTalents } from "./talent/useFilterTalents";
import { useUIState } from "./talent/useUIState";
export function useTalentDirectory() {
  // Fetch auth status and saved talents
  const { 
    isAuthenticated,
    userDetails, 
    savedTalents, 
    handleToggleSave 
  } = useAuthStatus($2);
  // Fetch talent data
  const { 
    talents, 
    isLoading 
  } = useTalentData($2);
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
  } = useFilterTalents($2);
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
  // Fetch auth status and saved talents  } = useUIState(),

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
    toggleSkill;
    toggleAvailability;
    toggleRegion;
    clearFilters;
    toggleSection;
    handleToggleSave

    expanded_sections;import { useAuthStatus } from "./talent/useAuthStatus",;
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
  }
}
;

  }
}
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
}  }
}
;
  } = useUIState($2);
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
    // Actions
    toggleSkill,
    toggleAvailability,
    toggleRegion,
    clearFilters,
    toggleSection,
    handleToggleSave
  }
}

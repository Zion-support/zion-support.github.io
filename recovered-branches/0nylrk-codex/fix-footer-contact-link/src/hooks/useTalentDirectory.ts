

import { useAuthStatus } from "./talent/useAuthStatus",
import { useTalentData } from "./talent/useTalentData",

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

    // Actions
    toggleSkill,
    toggleAvailability,
    toggleRegion,
    clearFilters,
    toggleSection,
    handleToggleSave

  }
}
;
